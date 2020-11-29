/**
 * Background Page
 */
var cache = {
  styles: {},

  options: {
    useShortcutKey: true,
    shortcutKey: 77, // keydown code for 'm'
    shortcutMetaKey: 'alt',
    mode: 'Basic',
    sync: false,
    contextMenu: true,
    livePreviewColorPicker: true,
    livePreviewPage: true,
    accordions: [0, 1, 2, 3]
  },

  importRules: {},

  // Temporary cached map of tabId to rules to prevent recalculating rules
  // for iframes. Cleared when a tab is closed.
  loadingTabs: []
};

/**
 * Initialize the background page cache
 */
function initCache(callback) {

  cache.options =  {};
  cache.styles = {};
var x;

  $.ajax({
    aync:false,
    type: 'POST',
    url: cellularStylerOptions.ajaxurl,

    data:{action:'get_page_style',data: cellularStylerOptions.postId},
    success: function (result) {


      if(result == '') {


        cache.styles = new Styles({});
        applyCSS();
      }
      else {
        cache.styles = new Styles($.parseJSON(result));
        applyCSS();

      }

    }
  })





//cache.styles = new Styles({});

  //we initialize the style
  /*chrome.storage.local.get(['options', 'styles'], function(items) {
    if (items['options']) {
      cache.options = items['options'];
    }

    if (items['styles']) {
      cache.styles = new Styles(items['styles']);
    } else {
      cache.styles = new Styles({});
    }

    if (callback) {
      callback();
    }
  });
  */
  if (callback) {
    //callback();
  }
}



updateVersion(function() {
  initCache(function() {
    ContextMenu.init();
  });
});
