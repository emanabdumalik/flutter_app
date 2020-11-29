<?php
$output = '<div class="siteorigin-page-builder-widget" id="siteorigin-page-builder-widget-'.$field_name.'" data-builder-id="'.esc_attr( $field_id ).'" data-type="layout_widget">';


$output .= '<input type="hidden" data-panels-filter="json_parse" value="" class="panels-data" name="'.$field_name.'" id="'.$field_id.'" />';

$output .= '<script type="text/javascript">';
$output .= '( function( panelsData ){';

$output .= 'document.getElementById("'.$field_id.'").value = JSON.stringify( panelsData )';
$output .= '} )( '.$field_value.' )';
$output .= '</script>';

$output .= '<input type="hidden" value="'. esc_attr( $field_id ).'"  />';
$output .= '</div>';
              $output .= '<script type="text/javascript">';
	$output .= 'if( typeof jQuery.fn.soPanelsSetupBuilderWidget != "undefined" && !jQuery("body").hasClass("wp-customizer") ) {';
	$output .= 'jQuery( "#siteorigin-page-builder-widget-'.esc_attr( $field_name ).'").soPanelsSetupBuilderWidget()';
	$output .= '}';
$output .= '</script>';

?>