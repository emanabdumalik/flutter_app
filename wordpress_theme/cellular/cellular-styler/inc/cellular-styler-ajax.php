<?php
add_action('wp_ajax_get_page_style','cs_get_page_style');
add_action('wp_ajax_nonpriv_get_page_style','cs_get_page_style');


function cs_get_page_style(){
	$request = array_map('stripslashes_deep', $_REQUEST);
$pid = $request['data'];
	echo get_post_meta($pid,'page_custom_css',true);
wp_die();
}
add_action('wp_ajax_update_page_style','cs_update_page_style');
add_action('wp_ajax_nonpriv_update_page_style','cs_get_page_style');


function cs_update_page_style(){
	$request = array_map('stripslashes_deep', $_REQUEST);
	$pid = $request['pid'];
	$data = $request['data'];

	 update_post_meta($pid,'page_custom_css',$data);
	echo true;
	wp_die();

}
add_action('wp_ajax_get_goole_fonts','cs_get_google_fonts');

add_action('wp_ajax_nonpriv_get_goole_fonts','cs_get_google_fonts');


function cs_get_google_fonts(){
	$family =  json_encode(get_font_family());
	echo $family;
	wp_die();
}