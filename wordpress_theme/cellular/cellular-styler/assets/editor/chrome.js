/**
 * Send / receive messages to/from elsewhere
 */
stylebot.chrome = {
  /**
   * Send the appropriate request to the background page
   *   to update the browser action
   * @param {boolean} Stylebot editor status i.e. open or closed
   */
  setBrowserAction: function(status) {
    if (status) {
     sendRequest({ name: 'activateBrowserAction' }, function() {});
    } else if (!$.isEmptyObject(stylebot.style.rules) || !$.isEmptyObject(stylebot.style.global)) {
     sendRequest({ name: 'highlightBrowserAction' }, function() {});
    } else {
     sendRequest({ name: 'unhighlightBrowserAction' }, function() {});
    }
  },

  /**
   * Send a request to the background page to copy text to clipboard
   * @param {string} text Text to copy
   */
  copyToClipboard: function(text) {
   sendRequest({ name: 'copyToClipboard', text: text }, function() {});
  },

  /**
   * Send a request to background page to save the rules for a URL
   * @param {string} url URL for which to save rules
   * @param {object} rules The style rules
   * @param {data} Any additional data to send as 'data' property
   */
  save: function(url, rules, data) {

    //console.log(JSON.stringify(rules));
      onRequest({ name: 'save',
      rules: rules,
      url: url,
      data: data
    }, function() {});
  },

  /**
   * Send a request to background page to check if a style exists for a URL
   * @param {string} url URL for which to check
   * @param {function} callback Method called with the response from background page
   */
  doesStyleExist: function(url, callback) {
   sendRequest({
      name: 'doesStyleExist',
      url: url
    }, callback);
  },

  /**
   * Send the installation request for a style from Stylebot Social
   *   to background page
   * @param {string} url URL for which to install new styles
   * @param {object} rules The styles
   * @param {number} id ID of the style on Stylebot Social
   */
  install: function(url, rules, id) {
   sendRequest({
      name: 'install',
      rules: rules,
      url: url,
      id: id
    }, function() {});
  },

  /**
   * Transfer all rules from a source URL to a destination URL
   * @param {string} src Source URL
   * @param {string} dest Destination URL
   */
  transfer: function(src, dest) {
   sendRequest({
      name: 'transfer',
      source: src,
      destination: dest
    }, function() {});
  },

  /**
   * Send request to fetch options from background page datastore
   */
  fetchOptions: function() {
   sendRequest({
      name: 'fetchOptions'
    }, function(response) {
      initialize(response);
    });
  },

  /**
   * Send request to save accordion state
   * @param {array} accordions Indices of open accordions
   */
  saveAccordionState: function(accordions) {
   sendRequest({
      name: 'saveAccordionState',
      accordions: accordions
    }, function() {});
  },

  /**
   * Send request to background page to save an option
   * @param {string} name Option name
   * @param {object} value Option value
   */
  saveOption: function(name, value) {
   sendRequest({
      name: 'saveOption',
      option: {
        name: name,
        value: value
      }
    }, function() {});
  },

  /**
   * Send request to background page to get an option's value
   * @param {string} name Option name
   * @param {function} callback Method to be called with the option value
   */
  getOption: function(name, callback) {
   sendRequest({
      name: 'getOption',
      optionName: name
    }, callback);
  },

  /**
   * Open the options page for stylebot
   */
  showOptions: function() {
   sendRequest({
      name: 'showOptions'
    });
  }
};

/**
 * Listeners for requests sent from elsewhere
 */
  function sendRequest(request, sender, sendResponse) {
    if (window !== window.top) {
      return;
    }

    if (request.name === 'status') {
      sendResponse({
        status: stylebot.status,
        rules: $.isEmptyObject(stylebot.style.rules) ? null : stylebot.style.rules,
        global: $.isEmptyObject(stylebot.style.global) ? null : stylebot.style.global
      });
    }

    else if (request.name === 'toggle') {
      stylebot.toggle();
      sendResponse({
        status: stylebot.status
      });
    }

    else if (request.name === 'setOptions') {
      stylebot.setOptions(request.options);
    }

    else if (request.name === 'openWidget') {
      stylebot.contextmenu.openWidget();
    }

    else if (request.name === 'searchSocial') {
      stylebot.contextmenu.searchSocial();
    }

    else if (request.name === 'postToSocial') {
      PostToSocial.post();
    }

    else if (request.name === 'toggleStyle') {
      stylebot.style.toggle();

      sendResponse({
        status: stylebot.style.status
      });
    }

    else if (request.name === 'styleStatus') {
      sendResponse({
        status: stylebot.style.status
      });
    }

    else if (request.name === 'getURLAndSocialData') {
      sendResponse({
        url: document.domain ? document.domain : location.href,
        social: stylebot.style.social
      });
    }

    else if (request.name === 'preview') {
      stylebot.style.preview(request.title,
        request.description,
        request.author,
        request.timeAgo,
        request.favCount,
        request.css);
    }

    else if (request.name === 'previewReset') {
      stylebot.style.previewReset();
    }

    else if (request.name === 'resetPreview') {
      stylebot.style.resetPreview();
    }

    else if (request.name === 'install') {
      stylebot.style.install(
        request.id,
        request.title,
        request.url,
        request.css,
        request.timestamp);

      stylebot.chrome.setBrowserAction(false);
    }

    else if (request.name === 'reset') {
      stylebot.style.resetAllCSS(true);
      stylebot.chrome.setBrowserAction(false);
    }
  }

