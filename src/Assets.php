<?php

namespace MostlySerious\BlockAudit;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;
use MostlySerious\BlockAudit\Vitepack;

class Assets extends AssetBundle
{
    public function init()
    {
        $this->sourcePath = '@MostlySerious/BlockAudit/resources/dist';
        $this->depends = [ CpAsset::class ];
        $this->js = Vitepack::entry();

        parent::init();
    }
}
