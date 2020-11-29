(function() {
    tinymce.PluginManager.add( 'custom_class', function( editor, url ) {
        // Add Button to Visual Editor Toolbar
        editor.addButton('custom_class', {
            title: 'Insert CSS Class',
            cmd: 'custom_class',
            icon: 'icon dashicons-wordpress',
        });
 
        // Add Command when Button Clicked
        editor.addCommand('custom_class', function() {
            // Check we have selected some text selected
            var text = editor.selection.getContent({
                'format': 'html'
            });

            var result = '';
            // Ask the user to enter a CSS class
            crnt_builder.dialogs.widgets.openDialog();
            crnt_builder.dialogs.widgets.$('.widget-type').on('click',function(e){

        setTimeout(function(){
            crnt_widget.trigger('user_edit');




        },1000);
                setTimeout(function(){
                crnt_dialog.$('.so-close').on('click',function(){
                    setTimeout(function(){
                    result = crnt_dialog.model.get('values');
                    editor.execCommand('mceReplaceContent', false,"["+crnt_dialog.model.get('class') +" data='"+ JSON.stringify(result)+"']" );

                    },1000);
    })

                },1000);

            })






            // Insert selected text back into editor, wrapping it in an anchor tag
        });

        // Enable/disable the button on the node change event
        editor.onNodeChange.add(function( editor ) {
            // Get selected text, and assume we'll disable our button
            var selection = editor.selection.getContent();
            var disable = false;

            // If we have some text selected, don't disable the button
            if ( selection ) {
                disable = false;
            }

            // Define whether our button should be enabled or disabled
            editor.controlManager.setDisabled( 'custom_class', disable );
        });
    });
})();