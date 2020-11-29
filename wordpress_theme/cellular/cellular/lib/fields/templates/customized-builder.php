<?php
global $post;
$builder_id = uniqid();
$builder_type = apply_filters( 'siteorigin_panels_post_builder_type', 'editor_attached', $post, $panels_data );
$builder_supports = apply_filters( 'siteorigin_panels_builder_supports', array('addRow'=>false), $post, $panels_data );
?>

<div id="siteorigin-panels-metabox"
     data-builder-type="<?php echo esc_attr( $builder_type ) ?>"
     data-preview-url="<?php echo siteorigin_panels_live_editor_preview_url() ?>"
     data-builder-supports="<?php echo esc_attr( json_encode( $builder_supports ) ) ?>"
	<?php if( !empty( $_GET['so_live_editor'] ) ) echo 'data-live-editor="1"' ?>
	>
	<?php do_action('siteorigin_panels_before_interface') ?>
	<?php wp_nonce_field('save', '_sopanels_nonce') ?>

	<input  name="<?php echo $field_name;?>" type="hidden" class="siteorigin-panels-data-field" id="panels-data-field-<?php echo $field_id ?>" />


	<script type="text/javascript">

		( function( builderId, panelsData ){
			// Create the panels_data input

			jQuery( '#panels-data-field-<?php echo $field_id ?>' ).val(JSON.stringify( panelsData ));
		} )( "custom-builder", <?php echo json_encode($field_value); ?> );
	</script>

	<?php do_action('siteorigin_panels_metabox_end'); ?>
</div>



