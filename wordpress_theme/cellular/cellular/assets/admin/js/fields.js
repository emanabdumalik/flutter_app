var rules = {};
var currentFrame = 0;
var selector = '';
var $frame ='';
var crnt_builder = '';
var crnt_widget = '';
var crnt_dialog = '';

    //alert('hi')
    var iconWidgetCache = {};

    function tabber_horizontal(el) {
        !function ($) {
            $('#' + el+' .inside' ).each( function() {
            if( $('#' + el).hasClass('tabbed')){
                return false;
            }
                // Only if there is a tab option
                if ( $(this).find('.type-tab').not('.widget-element-widget-wrap').length ) {

                    // Add .ot-theme-option-panels
                    $(this).find('.type-tab').parents('.inside').wrapInner('<div class="ot-theme-option-panels" />')

                    // Wrap with .ot-theme-option-tabs & add .ot-theme-option-nav before .ot-theme-option-panels
                    $(this).find('.ot-theme-option-panels').wrap('<div class="ot-theme-option-tabs" />').before('<ul class="ot-theme-option-nav" />')

                    // Loop over settings and build the tabs nav
                    $(this).find('.format-settings').not('.widget').not('.widget-element-widget-wrap').each( function(index) {

                        if ( $(this).find('.type-tab').length > 0 ) {
                            var title = $(this).find('.type-tab').prev().find('.label').text()
                                , id = $(this).attr('id')

                            // Add a class, hide & append nav item
                            $(this).addClass('is-panel').hide()
                            $(this).parents('.ot-theme-option-panels').prev('.ot-theme-option-nav').append('<li><a href="#' + id + '">' + title + '</a></li>')

                        } else {

                        }

                    })

                    // Loop over the panels and wrap and ID them.
                    $(this).find('.is-panel').each( function() {
                        var id = $(this).attr('id')

                        $(this).add( $(this).nextUntil('.is-panel') ).wrapAll('<div id="' + id + '" class="tab-content" />')

                    })

                    // Create the tabs
                    $(this).find('.ot-theme-option-tabs').tabs({
                        activate: function( event, ui ) {
                            OT_UI.load_editors();
                        }
                    })

                    // Move the orphaned settings to the top
                    $(this).find('.ot-theme-option-panels > .format-settings').not('.widget-element-widget-wrap').prependTo($(this).find('.ot-theme-option-tabs'))

                }

            })


            $('#' + el).addClass('tabbed');

        }(window.jQuery);
    }
    function tabber_vertical(el) {
        !function ($) {
            $('#' + el).each(function () {

                // Only if there is a tab option
                if ($(this).find('.type-tab').length) {

                    // Add .ot-metabox-panels
                    $(this).find('.type-tab').parents('#' + el).wrapInner('<div class="ot-metabox-panels" />')

                    // Wrapp with .ot-metabox-tabs & add .ot-metabox-nav before .ot-metabox-panels
                    $(this).find('.ot-metabox-panels').wrap('<div class="ot-metabox-tabs" />').before('<ul class="ot-metabox-nav" />')

                    // Loop over settings and build the tabs nav
                    $(this).find('.format-settings').each(function () {

                        if ($(this).find('.type-tab').length > 0) {
                            var title = $(this).find('.type-tab').prev().find('label').text()
                                , id = $(this).attr('id')

                            // Add a class, hide & append nav item
                            $(this).addClass('is-panel').hide()
                            $(this).parents('.ot-metabox-panels').prev('.ot-metabox-nav').append('<li><a href="#' + id + '">' + title + '</a></li>')

                        }

                    })

                    // Loop over the panels and wrap and ID them.
                    $(this).find('.is-panel').each(function () {
                        var id = $(this).attr('id')

                        $(this).add($(this).nextUntil('.is-panel')).wrapAll('<div id="' + id + '" class="tab-content" />')

                    })

                    // Create the tabs
                    $(this).find('.ot-metabox-tabs').tabs({
                        activate: function (event, ui) {
                            var parent = $(this).outerHeight(),
                                child = $(this).find('.ot-metabox-panels').outerHeight() + 8,
                                minHeight = parent - 34
                            if ($(this).find('.ot-metabox-panels').css('padding') == '12px' && child < parent) {
                                $(this).find('.ot-metabox-panels').css({minHeight: minHeight})
                            }
                            OT_UI.load_editors();
                        }
                    })

                    // Move the orphaned settings to the top
                    $(this).find('.ot-metabox-panels > .format-settings').prependTo($(this))

                    // Remove a bunch of classes to stop style conflicts.
                    $(this).find('.ot-metabox-tabs').removeClass('ui-widget ui-widget-content ui-corner-all')
                    $(this).find('.ot-metabox-nav').removeClass('ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all')
                    $(this).find('.ot-metabox-nav li').removeClass('ui-state-default ui-corner-top ui-tabs-active ui-tabs-active')
                    $(this).find('.ot-metabox-nav li').on('mouseenter mouseleave', function () {
                        $(this).removeClass('ui-state-hover')
                    })

                }

            })


        }(window.jQuery);
    }







