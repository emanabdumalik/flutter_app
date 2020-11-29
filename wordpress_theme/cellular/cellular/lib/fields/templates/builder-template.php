<?php
$builder_supports = apply_filters( 'siteorigin_panels_builder_supports', array('addRow'=>false) );
//ot_type_theme_options_ui();
?>
<div class="siteorigin-page-builder-widget " id="siteorigin-page-builder-widget-<?php echo $field_id ?>" data-builder-id="<?php echo esc_attr( $field_id ) ?>"
     data-type="layout-widget">


	<input type="hidden" data-panels-filter="json_parse" value="" class="panels-data" name="<?php echo $field_name ?>" id="<?php echo $field_id ?>" />

	<script type="text/javascript">
		( function( panelsData ){
			// Create the panels_data input
			document.getElementById('<?php echo $field_id ?>').value = JSON.stringify( panelsData );
		} )( <?php echo stripslashes($field_value); ?> );
	</script>

	<input type="hidden" value="<?php echo esc_attr( $field_id ) ?>"  />
</div>
<script type="text/javascript">
	if( typeof jQuery.fn.soPanelsSetupBuilderWidget != 'undefined' && !jQuery('body').hasClass('wp-customizer') ) {
		jQuery( "#siteorigin-page-builder-widget-<?php echo esc_attr( $field_id ) ?>").soPanelsSetupBuilderWidget();
	}
</script>
