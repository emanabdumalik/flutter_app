<?php $widget_icon_families;
if( empty( $widget_icon_families ) ) $widget_icon_families = apply_filters('harif_icon_families', array() );

list( $value_family, $null ) = !empty($field_value) ? explode('-', $field_value, 2) : array('fontawesome', '');


$wrapper_attributes = array(
'class' => array(
'siteorigin-widget-field',
'siteorigin-widget-field-type-' . $type,
'siteorigin-widget-field-' . $field_id
)
);

$wrapper_attributes['class'] = implode(' ', array_map('sanitize_html_class', $wrapper_attributes['class']) );







?><div class="harif-icon-field"><div <?php foreach( $wrapper_attributes as $attr => $attr_val ) echo $attr.'="' . esc_attr( $attr_val ) . '" ' ?>>

<div class="siteorigin-widget-icon-selector-current">
	<div class="siteorigin-widget-icon"><span></span></div>
	<label><?php _e('Choose Icon', 'so-widgets-bundle') ?></label>
</div>

<div class="siteorigin-widget-icon-selector siteorigin-widget-field-subcontainer">
	<select class="siteorigin-widget-icon-family" >
		<?php foreach( $widget_icon_families as $family_id => $family_info ) : ?>
			<option value="<?php echo esc_attr( $family_id ) ?>"
				<?php selected( $value_family, $family_id ) ?>><?php echo esc_html( $family_info['name'] ) ?> (<?php echo count( $family_info['icons'] ) ?>)</option>
		<?php endforeach; ?>
	</select>

	<input type="hidden" id="<?php echo esc_attr( $field_id ) ?>" name="<?php echo esc_attr( $field_name ) ?>" value="<?php echo esc_attr( $field_value ) ?>"
	       class="siteorigin-widget-icon-icon siteorigin-widget-input" />

	<div class="siteorigin-widget-icon-icons"></div>
</div>
</div>
	</div>
<script>jQuery(function(){
		function harif_icons(){
			jQuery('.harif-icon-field').find('.siteorigin-widget-field-type-widget, .siteorigin-widget-field-type-section').find('> label').click(function(){
				var $$ = $(this);
				$(this).toggleClass( 'siteorigin-widget-section-visible' );
				$(this).siblings('.siteorigin-widget-section').slideToggle(function(){
					$(window).resize();
					$(this).find('> .siteorigin-widget-field-container-state').val($(this).is(':visible') ? 'open' : 'closed');
				});
			});
			jQuery('.harif-icon-field').find('.siteorigin-widget-field-type-icon-list').each(function () {

				var $$ = jQuery(this),
					$is = $$.find('.siteorigin-widget-icon-selector'),
					$v = $is.find('.siteorigin-widget-icon-icon'),
					$b = $$.find('.siteorigin-widget-icon-selector-current');

				// Clicking on the button should display the icon selector
				$b.click(function () {

					$is.slideToggle();


				});

				var rerenderIcons = function () {
					var family = $is.find('select.siteorigin-widget-icon-family').val();
					var container = $is.find('.siteorigin-widget-icon-icons');

					if (typeof iconWidgetCache[family] === 'undefined') {
						return;
					}

					container.empty();

					if (jQuery('#' + 'siteorigin-widget-font-' + family).length === 0) {

						jQuery("<link rel='stylesheet' type='text/css'>")
							.attr('id', 'siteorigin-widget-font-' + family)
							.attr('href', iconWidgetCache[family].style_uri)
							.appendTo('head');
					}


					for (var i in iconWidgetCache[family].icons) {

						var icon = jQuery('<div data-sow-icon="' + iconWidgetCache[family].icons[i] + '"/>')
							.attr('data-value', family + '-' + i)
							.addClass('sow-icon-' + family)
							.addClass('siteorigin-widget-icon-icons-icon')
							.click(function () {
								var $$ = jQuery(this);
								if ($$.hasClass('siteorigin-widget-active')) {
									// This is being unselected
									$$.removeClass('siteorigin-widget-active');
									$v.val('');

									// Hide the button icon
									$b.find('span').hide();
								}
								else {
									// This is being selected
									container.find('.siteorigin-widget-icon-icons-icon').removeClass('siteorigin-widget-active');
									$$.addClass('siteorigin-widget-active');
									$v.val($$.data('value'));

									// Also add this to the button
									$b.find('span')
										.show()
										.attr('data-sow-icon', $$.attr('data-sow-icon'))
										.attr('class', '')
										.addClass('sow-icon-' + family);
								}
								$v.trigger('change');

								// Hide the icon selector
								$is.slideUp();
							});

						container.append(icon);

						if ($v.val() === family + '-' + i) {
							// Add selected icon to the button.
							$b.find('span')
								.show()
								.attr('data-sow-icon', icon.attr('data-sow-icon'))
								.attr('class', '')
								.addClass('sow-icon-' + family);
							icon.addClass('siteorigin-widget-active');
						}
					}

					// Move a selcted item to the first position
					container.prepend(container.find('.siteorigin-widget-active'));
				};

				// Create the function for changing the icon family and call it once
				var changeIconFamily = function () {
					// Fetch the family icons from the server
					var family = $is.find('select.siteorigin-widget-icon-family').val();
					if (typeof family === 'undefined' || family === '') {
						return;
					}

					if (typeof iconWidgetCache[family] === 'undefined') {
						jQuery.getJSON(
							panelsOptions.ajaxurl,
							{
								'action': 'siteorigin_widgets_get_icons',
								'family': $is.find('select.siteorigin-widget-icon-family').val()
							},
							function (data) {
								iconWidgetCache[family] = data;
								rerenderIcons();
							}
						);
					}
					else {
						rerenderIcons();
					}
				};

				changeIconFamily();

				$is.find('select.siteorigin-widget-icon-family').change(function () {
					$is.find('.siteorigin-widget-icon-icons').empty();
					changeIconFamily();
				});
			});

		}
		jQuery(document).ready(function(){
			setTimeout(function(){
				harif_icons();
			},1000)

		})
	})</script>
