<?php

namespace MostlySerious\BlockAudit\Controllers;

use craft\helpers\Db;
use craft\web\Controller;
use craft\elements\Entry;
use craft\elements\MatrixBlock;
use benf\neo\elements\Block as NeoBlock;

class RunController extends Controller
{
    public function actionIndex()
    {
        $res = [];
        $entry_query = Entry::find()->status(null);

        foreach (Db::each($entry_query) as $entry) {
            $blocks = [];
            $neo_query = NeoBlock::find()->ownerId($entry->id)->level(1);
            $matrix_query = MatrixBlock::find()->ownerId($entry->id);

            foreach (Db::each($neo_query) as $block) {
                $blocks[$block->id] = $this->hashBlock($block);
            }

            foreach (Db::each($matrix_query) as $block) {
                $blocks[$block->id] = $this->hashBlock($block);
            }

            if (count($blocks) !== count(array_unique($blocks))) {
                $res[] = [
                    'elementId' => $entry->id,
                    'title' => $entry->title,
                    'enabled' => $entry->enabled,
                    'status' => $entry->status,
                    'cpEditUrl' => $entry->cpEditUrl
                ];
            }
        }

        return $this->asJson($res);
    }

    protected function hashBlock($block)
    {
        $hashes = [
            'type' => $block->type->handle
        ];

        if ($block instanceof MatrixBlock) {
            $block = MatrixBlock::find()->id($block->id)->one();
        }

        foreach ($block->serializedFieldValues as $key => $value) {
            if (is_array($value) || is_object($value)) {
                $hashes[$key] = hash('sha512', json_encode($value));
            } else {
                $hashes[$key] = $value ? hash('sha512', $value) : null;
            }
        }

        $hashes['children'] = array_map(function ($child) {
            return $this->hashBlock($child);
        }, $block->children->all());

        return json_encode($hashes);
    }
}
