/**
 * stylebot
 *
 * Copyright (c) 2013 Ankit Ahuja
 * Dual licensed under GPL and MIT licenses
 **/
var stylebot = {
    status: false,
    selectedElement: null,
    hoveredElement: null,
    selectionStatus: false,
    selectionBox: null,
    selectorGenerator: null,
    currentFrame:null,
    rules:null,

    options: {
        useShortcutKey: true,
        shortcutKey: 77, // 77 is keycode for 'm'
        shortcutMetaKey: 'alt',
        mode: 'Basic',
        position: 'Right',
        sync: false,
        livePreviewColorPicker: false
    },

    /**
     * Initialize stylebot
     * @param {object} options Options to initialize stylebot with
     */
    initialize: function(options) {
        //this.style.initialize();
        this.setOptions(options);
        this.currentFrame = parent.get_current_frame();
this.rules = parent.get_rules();



        this.injectCss(jQuery.parseJSON(this.rules))
        if(this.currentFrame)
            this.attachListeners();
        //this.contextmenu.initialize();
        this.selectorGenerator = new SelectorGenerator();
    },

    /**
     * Apply stylebot options
     * @param {object} options Options to apply
     */
    setOptions: function(options) {
        for (var option in options) {
            this.options[option] = options[option];
        }
    },

    /**
     * Open / close editor
     */
    toggle: function() {
        if (this.status) {
            this.close();
        } else {
            this.open();
        }
    },

    /**
     * Open stylebot editor
     */
    open: function() {

    },

    /**
     * Close stylebot editor
     */
    close: function() {

    },

    /**
     * Highlight specified element
     * @param {element} el Element to highlight
     */
    highlight: function(el) {
        if (!stylebot.selectionBox) {
            stylebot.createHighlighter();
        }

        stylebot.hoveredElement = el;
        stylebot.selectionBox.highlight(el);

    },

    /**
     * Remove highlight from previously selected element
     */
    unhighlight: function() {
        stylebot.hoveredElement = null;
        if (stylebot.selectionBox) {
            stylebot.selectionBox.hide();
        }
    },

    /**
     * Select element(s)
     * @param {element} el Element to select
     * @param {string} selector CSS selector for elements to select
     */
    select: function(el, selector) {
        stylebot.disableSelection();

        // if element is specified, it is selected
        if (el) {
            stylebot.selectedElement = el;
            selector = stylebot.selectorGenerator.generate(el);
            stylebot.highlight(el);
        }
        // else select all elements that match the specified CSS selector
        else if (selector) {
            try {
                el = jQuery(selector).get(0);
                stylebot.selectedElement = el;
                stylebot.highlight(el);
            }
            catch (e) {
                stylebot.selectedElement = null;
            }
        }
        else {
            stylebot.selectedElement = stylebot.hoveredElement;
            selector = stylebot.selectorGenerator.generate(stylebot.selectedElement);
        }



        parent.removeActive(selector);

this.disableSelection();

    },

    /**
     * Enable / disable selection of elements
     */
    toggleSelection: function() {
        if (stylebot.selectionStatus) {

            stylebot.disableSelection();


        }
        else {

            stylebot.unhighlight();
            stylebot.enableSelection();

        }
    },

    /**
     * Enable selection of elements
     */
    enableSelection: function() {
        stylebot.attachListeners();
        stylebot.selectionStatus = true;
        jQuery('#stylebot-select-icon',parent.document).removeClass('stylebot-select-icon-active');

    },

    /**
     * Disable selection of elements
     */
    disableSelection: function() {
        stylebot.detachListeners();
        stylebot.selectionStatus = false;
        jQuery('#stylebot-select-icon',parent.document).addClass('stylebot-select-icon-active');


    },

    /**
     * Create the highlighter
     */
    createHighlighter: function() {
        stylebot.selectionBox = new SelectionBox(null, null, jQuery('#stylebot-container').get(0));
    },

    /**
     * Remove the highlighter
     */
    destroyHighlighter: function() {
        if (stylebot.selectionBox) {
            stylebot.selectionBox.destroy();
            delete stylebot.selectionBox;
        }
    },

    /**
     * Add event listeners for mouse activity
     */
    attachListeners: function() {
        document.addEventListener('mousemove', this.onMouseMove, true);
        document.addEventListener('mousedown', this.onMouseDown, true);
        document.addEventListener('click', this.onMouseClick, true);
    },

    /**
     * Remove event listeners for mouse activity
     */
    detachListeners: function() {
        document.removeEventListener('mousemove', this.onMouseMove, true);
        document.removeEventListener('mousedown', this.onMouseDown, true);
    },

    /**
     * Remove event listener for mouse click
     */
    detachClickListener: function() {
        // We have to remove the click listener in a second phase because if we remove it
        // after the mousedown, we won't be able to cancel clicked links
        // thanks to firebug
        document.removeEventListener('click', this.onMouseClick, true);
    },

    /**
     * When the user moves the mouse
     */
    onMouseMove: function(e) {
        // for dropdown


        e.preventDefault();
        e.stopPropagation();
        stylebot.highlight(e.target);
    },

    /**
     * When the user has pressed the mouse button down
     */
    onMouseDown: function(e) {

            e.preventDefault();
            e.stopPropagation();
            stylebot.select();
            return false;

    },

    /**
     * When the user clicks the mouse
     */
    onMouseClick: function(e) {

            e.preventDefault();
            e.stopPropagation();
            stylebot.detachClickListener();
            return false;

    },

    /**
     * Checks if the specified element belongs to the stylebot editor
     * @param {element} el Element to check
     * @return {boolean} True if element belongs to stylebot
     */
    belongsToStylebot: function(el) {
        var $el = jQuery(el);
        var parent = $el.closest('#stylebot-container');
        var id = $el.attr('id');

        return (parent.length !== 0 ||
        (id && id.indexOf('stylebot') !== -1));
    },

    /**
     * Checks if the stylebot editor should close
     * @param {element} el Currently selected element
     * @return {boolean} Returns true if stylebot editor can close
     */
    shouldClose: function(el) {
        return !(!stylebot.status ||
        stylebot.widget.basic.isColorPickerVisible ||
        stylebot.isKeyboardHelpVisible ||
        stylebot.page.isVisible ||
        jQuery('#stylebot-dropdown').length !== 0 ||
        el.tagName === 'SELECT');
    },

    /**
     * Checks if the specified element can be selected
     * @param {element} el The element to select
     * @return {boolean} Returns true if element should be selected
     */
    shouldSelect: function(el) {
        
    },
    applyInlineCSS: function($el, property,value) {

        jQuery($el).css(property,value);

        setTimeout(function() {
            stylebot.selectionBox.highlight(stylebot.selectedElement);
        }, 0);


    },
    injectCss: function($rules) {

        CSSUtils.crunchCSS($rules, false, true, function(css) {
            if (css != '') {
                CSSUtils.injectCSS(css, 'stylebot-global-css');
            }
        });


    }
};
//stylebot.initialize(stylebot.options);


