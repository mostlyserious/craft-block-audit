<?php

namespace MostlySerious\BlockAudit;

class Vitepack
{
    public static function entry($target = null, $manifest_dir = 'resources/dist')
    {
        static $all;

        $results = [];
        $manifest_path = static::joinPath(__DIR__, $manifest_dir, 'manifest.dev.json');

        if (!is_file($manifest_path)) {
            $manifest_path = static::joinPath(__DIR__, $manifest_dir, 'manifest.json');
        }

        if (!is_file($manifest_path)) {
            return '';
        }

        $all = $all ?: json_decode(file_get_contents($manifest_path), true);

        if (isset($all['url'])) {
            foreach ($all['inputs'] as $input) {
                if (!$target || $input === $target) {
                    static::input($input, $all['url'], $results);
                }
            }
        }

        $entries = array_filter($all, function ($entry) use ($target) {
            if (!isset($entry['src'])) {
                return;
            }

            $ext = pathinfo($entry['src'], PATHINFO_EXTENSION);

            return in_array($ext, ['css', 'js'])
                && isset($entry['isEntry'])
                && $entry['isEntry']
                && (!$target || $entry['src'] === $target);
        });

        foreach ($entries as $entry) {
            $input = $entry['file'];

            if (isset($entry['imports']) && count($entry['imports'])) {
                foreach ($entry['imports'] as $import) {
                    static::input(str_ireplace('_', 'assets/', $import), '', $results);
                }
            }

            if (isset($entry['css']) && count($entry['css'])) {
                foreach ($entry['css'] as $import) {
                    static::input($import, '', $results);
                }
            }

            static::input($input, '', $results);
        }

        return $results;
    }

    public static function input($input, $base, &$results)
    {
        static $loaded = [];

        if (isset($loaded[$input]) and $loaded[$input]) {
            return;
        }

        $results[] = trim(static::joinPath($base, $input), '/');

        $loaded[$input] = true;
    }

    public static function asset($input, $manifest_dir = 'resources/dist')
    {
        static $all;

        $manifest_path = static::joinPath(__DIR__, $manifest_dir, 'manifest.dev.json');

        if (!is_file($manifest_path)) {
            $manifest_path = static::joinPath(__DIR__, $manifest_dir, 'manifest.json');
        }

        if (!is_file($manifest_path)) {
            return '';
        }

        $all = $all ?: json_decode(file_get_contents($manifest_path), true);

        $input = static::joinPath('src', $input);

        if (isset($all['url'], $all['inputs'][$input])) {
            return $all['inputs'][$input];
        }

        if (isset($all[$input], $all[$input]['assets']) && count($all[$input]['assets'])) {
            return $all[$input]['assets'][0];
        }

        if (isset($all['url'])) {
            return static::joinPath($all['url'], $input);
        }

        return '';
    }

    public static function joinPath(...$paths)
    {
        return preg_replace_callback('/([^:])\/+/', function ($matches) {
            return $matches[1] . '/';
        }, implode('/', (array) $paths));
    }
}
