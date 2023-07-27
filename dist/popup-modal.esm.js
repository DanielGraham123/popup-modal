import { createElement, Fragment } from 'react';

var PopupModal = function PopupModal(_ref) {
  var children = _ref.children,
    handleClose = _ref.handleClose;
  return createElement(Fragment, null, createElement("div", {
    className: "popup-box"
  }, createElement("div", {
    className: "box"
  }, createElement("span", {
    className: "close-icon",
    onClick: handleClose
  }, "x"), children)));
};

export { PopupModal };
//# sourceMappingURL=popup-modal.esm.js.map
