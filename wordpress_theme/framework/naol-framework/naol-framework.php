<?php
/**
* Plugin Name: Naol FrameWork
* Description: A WordPress Framework
* Author: Rimes Gold
* Version: 2.0
* Text Domain: naol-framework
* Domain Path: /languages/
*/
// Plugin Version
if ( ! defined( 'NL_VERSION' ) ) {
	define( 'NL_VERSION', 1.1 );
}
// Current Directory
if ( !defined( 'NL_PLUGIN_FILE' ) ) {
	define( 'NL_PLUGIN_FILE', __FILE__ );
}
// Plugin Folder Path
if ( !defined( 'NL_PLUGIN_DIR' ) ) {
	define( 'NL_PLUGIN_DIR', plugin_dir_path( NL_PLUGIN_FILE ) );
}
// Plugin Folder URL
if ( !defined( 'NL_PLUGIN_URL' ) ) {
	define( 'NL_PLUGIN_URL', plugin_dir_url( NL_PLUGIN_FILE ) );
}
//Load the shortcode class
if ( ! class_exists( 'NaolFramework', false ) ) {
  include_once NL_PLUGIN_DIR . 'classes/class-naol-framework.php';
}


// Instantiate Class
new NaolFramework();