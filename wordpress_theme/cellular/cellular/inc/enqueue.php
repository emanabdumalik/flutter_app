<?php


function harif_scripts(){
	$color2;
	if ( function_exists( 'ot_get_option' ) ) {
		$color2 = "/assets/front/css/colors.php?color=".str_replace('#','',ot_get_option( 'theme_color' ));
	}
	wp_register_style('cellular-dark',get_template_directory_uri().'/assets/front/css/bootstrap.css');

	wp_register_style('cellular-dark-boot',get_template_directory_uri().'/assets/front/css/dark.css');
	wp_register_style('cellular-style',get_stylesheet_uri());

	wp_register_style('cellular-font',get_template_directory_uri().'/assets/front/css/font-icons.css');
	wp_register_style('cellular-animate',get_template_directory_uri().'/assets/front/css/animate.css');
	wp_register_style('cellular-popup',get_template_directory_uri().'/assets/front/css/magnific-popup.css');
	wp_register_style('cellular-responsive',get_template_directory_uri().'/assets/front/css/responsive.css');
	wp_register_style('cellular-colors',get_template_directory_uri().$color2);
	wp_register_script('cellular-jquery',get_template_directory_uri().'/assets/front/js/jquery.js',array(),false,true);

	wp_register_script('cellular-plugins',get_template_directory_uri().'/assets/front/js/plugins.js',array(),false,true);
	wp_register_script('cellular-functions',get_template_directory_uri().'/assets/front/js/functions.js',array(),false,true);




	wp_enqueue_style('cellular-style');
	wp_enqueue_style('cellular-dark');
	wp_enqueue_style('cellular-font');
	wp_enqueue_style('cellular-animate');
	wp_enqueue_style('cellular-popup');
	wp_enqueue_style('cellular-responsive');
	wp_enqueue_style('cellular-colors');

	wp_enqueue_script('jquery');
	wp_enqueue_script('cellular-plugins');
	wp_enqueue_script('cellular-functions');











}