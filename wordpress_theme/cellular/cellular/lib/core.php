<?php

require_once get_template_directory() . '/lib/misc-functions.php';
//require_once get_template_directory() . '/lib/custom-post-types-creator.php';
//require_once get_template_directory() . '/lib/custom-taxonomy-create.php';
//require_once get_template_directory() . '/lib/meta-boxes.php';
//require_once get_template_directory() . '/lib/custom-fields-create.php';




//require_once get_template_directory() . '/lib/styler.php';
//require_once get_template_directory() . '/lib/custom-user-metas.php';
//require_once get_template_directory() . '/lib/dynamic-widgets.php';
require_once get_template_directory() . '/lib/menu-walker.php';
require_once get_template_directory() . '/lib/menu-metas.php';


//require_once get_template_directory() . '/lib/taxonomy-metas.php';

require_once get_template_directory() . '/inc/enqueue.php';
//require_once get_template_directory() . '/lib/tinymce-custom-class.php';
//require_once get_template_directory() . '/lib/posts-selector/post-selector.php';
//require_once get_template_directory() . '/lib/options-class.php';
//require_once get_template_directory() . '/dynamic.php';








class Harif_Theme {

	public function __construct()
	{
		add_action('after_setup_theme', array($this, 'theme_init'), 12);
	}

	public function theme_init(){

		do_action('harif_theme_init');

		add_theme_support('automatic-feed-links');
		add_theme_support('html5');
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * See: https://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
		 */
		add_theme_support( 'post-thumbnails' );
		set_post_thumbnail_size( 825, 510, true );

		add_theme_support( 'html5', array(
			'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
		) );

		/*
		 * Enable support for Post Formats.
		 *
		 * See: https://codex.wordpress.org/Post_Formats
		 */
		add_theme_support( 'post-formats', array(
			'aside', 'image', 'video', 'quote', 'link', 'gallery', 'status', 'audio', 'chat'
		) );

		add_theme_support( 'customize-selective-refresh-widgets' );

	}
	public function register_menu(){



	}

	public function register_sidebar(){



	}
	private function init_admin($options)
	{
		add_action('admin_enqueue_scripts', array($this, '_admin_assets'));


	}

	// callback function for assets
	public function _admin_assets()
	{

	}

	public function custom_post_types(){

	}

	public function custom_taxonomies(){

	}

	public function post_metas(){

	}




}

