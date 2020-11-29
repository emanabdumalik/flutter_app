<?php
$builderId = uniqid();
$settings = siteorigin_panels_setting();
$builder_supports = apply_filters( 'siteorigin_panels_builder_supports', array('history'=>false), $post, $panels_data );
?>

<div class="wrap" id="panels-home-page-<?php echo $builderId;?>">
	<form
		class="hide-if-no-js siteorigin-panels-builder-form"
		method="post"

		id="panels-builder-inside-<?php echo $builderId;?>"
		data-type="secondary-level-builder"
		data-builder-supports="<?php echo esc_attr( json_encode( $builder_supports ) ) ?>"
		>



		<div class="siteorigin-panels-builder-container so-panels-loading">

		</div>

		<input type="hidden" data-panels-filter="json_parse" value="" class="panels-data-inside" name="<?php echo $this->get_field_name('panels_data') ?>" id="<?php echo $this->get_field_id('panels_data') ?>" />

		<script type="text/javascript">
			( function( panelsData ){
				// Create the panels_data input
				document.getElementById('<?php echo $this->get_field_id('panels_data') ?>').value = JSON.stringify( panelsData );
			} )( <?php echo $instance['panels_data']; ?> );

			jQuery(function(){
				setTimeout(function(){
					var $$ = jQuery( '#panels-builder-inside-<?php echo $builderId;?>' );

					container = $$.find( '.siteorigin-panels-builder-container' );
					field = $$.find( '> input.panels-data-inside' );
					form = $$;

					builderConfig = {
						editorType: 'standalone2',
						builderType: $$.data( 'type' ),
						builderSupports: $$.data( 'builder-supports' ),
						loadLiveEditor: false,
						liveEditorPreview: $$.data( 'preview-url' )
					};


					// If we have a container, then set up the main builder
					var panels = window.siteoriginPanels;

					// Create the main builder model
					var builderModel = new panels.model.builder();

					// Now for the view to display the builder
					var builderView = new panels.view.builder( {
						model: builderModel,
						config: builderConfig
					} );

					// Set up the builder view
					builderView
						.render()
						.attach( {
							container: container
						} )
						.setDataField( field )
						.attachToEditor();

					// When the form is submitted, update the panels data
					form.submit( function () {
						// Refresh the data
						builderModel.refreshPanelsData();
					} );

					container.removeClass( 'so-panels-loading' );

					// Trigger a global jQuery event after we've setup the builder view. Everything is accessible form there
					jQuery( document ).trigger( 'panels_setup', builderView, window.panels );
				},0)
			})
		</script>
		</form>

</div>
