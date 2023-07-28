import { createElement, Fragment } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* Popup style */\n.popup-box {\n    position: fixed;\n    background: #00000050;\n    width: 100%;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);\n}\n\n.box {\n    position: relative;\n    width: 70%;\n    margin: 0 auto;\n    height: auto;\n    max-height: 70vh;\n    margin-top: calc(100vh - 85vh - 20px);\n    background: #fff;\n    border-radius: 4px;\n    padding: 20px;\n    border: 1px solid #999;\n    overflow: auto;\n    animation-duration: 0.5s;\n    /* animation-fill-mode: both; */\n}\n\n.close-icon {\n    content: '\\2715';\n    cursor: pointer;\n    position: fixed;\n    right: calc(15% - 30px);\n    top: calc(100vh - 85vh - 33px);\n    background: #ededed;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    line-height: 20px;\n    text-align: center;\n    border: 1px solid #999;\n    font-size: 20px;\n}\n\n@keyframes blowup {\n    from {\n        transform: scale(0);\n    }\n\n    to {\n        transform: scale(1);\n    }\n}\n\n.blowup {\n    animation-name: blowup;\n}";
styleInject(css_248z);

var PopupModal = function PopupModal(_ref) {
  var children = _ref.children,
    handleClose = _ref.handleClose;
  return createElement(Fragment, null, createElement("div", {
    className: "popup-box "
  }, createElement("div", {
    className: "box blowup"
  }, createElement("span", {
    className: "close-icon",
    onClick: handleClose
  }, "x"), children)));
};

export { PopupModal };
//# sourceMappingURL=popup-modal.esm.js.map
