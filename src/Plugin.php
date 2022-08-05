<?php

namespace MostlySerious\BlockAudit;

use Craft;
use yii\base\Event;
use craft\services\Utilities;
use craft\base\Plugin as BasePlugin;
use craft\events\RegisterComponentTypesEvent;
use MostlySerious\BlockAudit\Utilities\BlocksAudit;

class Plugin extends BasePlugin
{
    public function init()
    {
        parent::init();

        if (!Craft::$app->getRequest()->getIsConsoleRequest()) {
            $this->controllerNamespace = 'MostlySerious\\BlockAudit\\Controllers';
        }

        Event::on(
            Utilities::class,
            Utilities::EVENT_REGISTER_UTILITY_TYPES,
            function (RegisterComponentTypesEvent $event) {
                $event->types[] = BlocksAudit::class;
            }
        );
    }
}
