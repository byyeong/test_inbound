<?php

/*
    checks local setting and load if exists.
    - by bsko
*/

$setting_name = basename($setting_name);
if (file_exists(__DIR__ . '/local/' . $setting_name)) {
    include(__DIR__ . '/local/' . $setting_name);
}
    

