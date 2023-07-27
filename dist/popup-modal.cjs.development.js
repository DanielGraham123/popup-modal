'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var PopupModal = function PopupModal(_ref) {
  var children = _ref.children,
    handleClose = _ref.handleClose;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "popup-box"
  }, React.createElement("div", {
    className: "box"
  }, React.createElement("span", {
    className: "close-icon",
    onClick: handleClose
  }, "x"), children)));
};

exports.PopupModal = PopupModal;
//# sourceMappingURL=popup-modal.cjs.development.js.map
