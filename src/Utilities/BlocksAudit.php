<?php

namespace MostlySerious\BlockAudit\Utilities;

use Craft;
use craft\base\Utility;
use MostlySerious\BlockAudit\Assets;
use MostlySerious\BlockAudit\Vitepack;

class BlocksAudit extends Utility
{
    /**
     * @inheritdoc
     */
    public static function displayName(): string
    {
        return 'Blocks Audit';
    }

    /**
     * @inheritdoc
     */
    public static function id(): string
    {
        return 'block-audit';
    }

    /**
     * @inheritdoc
     */
    public static function iconPath(): ?string
    {
        return Craft::getAlias(
            sprintf(
                '@MostlySerious/BlockAudit/resources/dist/%s',
                Vitepack::asset('resources/src/img/clone.svg')
            )
        );
    }

    /**
     * @inheritdoc
     */
    public static function contentHtml(): string
    {
        $view = Craft::$app->getView();
        $view->registerAssetBundle(Assets::class);

        return $view->renderTemplate('block-audit/_utility');
    }
}
