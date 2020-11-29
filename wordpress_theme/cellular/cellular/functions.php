<?php



include get_template_directory().'/lib/core.php';


add_theme_support('menus');
add_theme_support( 'title-tag' );

/*
 * Enable support for Post Thumbnails on posts and pages.
 *
 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
 */
add_theme_support( 'post-thumbnails' );

add_action( 'wp_enqueue_scripts', 'harif_scripts' );



add_action('admin_enqueue_scripts','add_admin_scripts');
function add_admin_scripts() {
	wp_enqueue_script( 'harif-custom-script', get_template_directory_uri() . '/assets/admin/js/fields.js' );
	wp_enqueue_style('harif-custom-style',get_template_directory_uri().'/assets/admin/css/ot-admin-eyer.css');

}

register_nav_menus( array(
	'primary' => __( 'Primary Menu',      'twentyfifteen' ),
	'social'  => __( 'Social Links Menu', 'twentyfifteen' ),
	'top'  => __( 'Top Menu', 'twentyfifteen' ),
) );

add_action( 'admin_print_scripts-nav-menus.php', 'ot_admin_scripts', 11 );
add_action( 'admin_print_styles-nav-menus.php', 'ot_admin_styles', 11 );

//require( trailingslashit( get_template_directory() ) . 'option-tree/ot-loader.php' );

//add_filter( 'ot_theme_mode', '__return_true' );
add_filter('wp_nav_menu_args', 'walker_front');
function walker_front($args) {

	if ( $args['walker'] == 'Bunyad_Menu_Walker' ) {

		include_once 'lib/menu-walker.php';

		$args['walker'] = new Bunyad_Menu_Walker;
	}

	return $args;

}
	$x = new Bunyad_Menu_Walker;

add_filter('bunyad_mega_menu_end_lvl','attach_mega_menu');
 function attach_mega_menu($args)
{

	extract($args);
	/**
	 * @todo when not using a cache plugin, wrap in functions or cache the menu
	 */

	// category mega menu

		$template = 'lib/blocks/mega-menu.php';



	if ($template) {
		ob_start();
		include $template;
		$output = ob_get_clean();

		return $output;
	}


}

function twentyfifteen_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Widget Area', 'twentyfifteen' ),
		'id'            => 'sidebar-1',
		'description'   => __( 'Add widgets here to appear in your sidebar.', 'twentyfifteen' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	));

		register_sidebar(
		array(
			'name'          => __( 'Footer Area', 'twentyfifteen' ),
			'id'            => 'footer-main',
			'description'   => __( 'Add widgets here to appear in your sidebar.', 'twentyfifteen' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);

		register_sidebar(
		array(
			'name'          => __( 'Copyright Area', 'twentyfifteen' ),
			'id'            => 'footer-copyright',
			'description'   => __( 'Add widgets here to appear in your sidebar.', 'twentyfifteen' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		));
}
add_action( 'widgets_init', 'twentyfifteen_widgets_init' );





