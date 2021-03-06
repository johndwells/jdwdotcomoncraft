<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(

	'*' => array(
		'environmentVariables' => array(
            'siteUrl'        => '//' . $_SERVER['HTTP_HOST'],
            'fileSystemPath' => $_SERVER['DOCUMENT_ROOT']
        )
    ),

	'.dev' => array(
		'devMode' => true,

	)
);
