<?php
$settings = siteorigin_panels_setting();
$builder_supports = apply_filters( 'siteorigin_panels_builder_supports', array(), $post, $panels_data );
?>

<div class="wrap" id="panels-home-page">
	<form
		action="<?php echo add_query_arg('page', 'so_panels_home_page') ?>"
		class="hide-if-no-js siteorigin-panels-builder-form"
		method="post"
		id="panels-home-page-form"
		data-type="custom_home_page"
		data-post-id="<?php echo get_the_ID() ?>"
		data-preview-url="<?php echo add_query_arg( 'siteorigin_panels_live_editor', 'true', set_url_scheme( get_permalink() ) ) ?>"
		data-builder-supports="<?php echo esc_attr( json_encode( $builder_supports ) ) ?>"
		>




		<div class="siteorigin-panels-builder-container so-panels-loading">

		</div>

		<script type="text/javascript">
			( function( builderId, panelsData ){
				// Create the panels_data input
				document.write( '<input name="panels_data" type="hidden" class="siteorigin-panels-data-field" id="panels-data-field-' + builderId + '" />' );
				document.getElementById( 'panels-data-field-' + builderId ).value = JSON.stringify( panelsData );
			} )( "home-page", <?php echo json_encode( $panels_data ); ?> );
		</script>

		<input type="hidden" id="post_content" name="post_content"/>
		<?php wp_nonce_field('save', '_sopanels_home_nonce') ?>
	</form>
	<noscript><p><?php _e('This interface requires Javascript', 'siteorigin-panels') ?></p></noscript>
</div>
