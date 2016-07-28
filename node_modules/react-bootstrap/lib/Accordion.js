'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PanelGroup = require('./PanelGroup');

var _PanelGroup2 = _interopRequireDefault(_PanelGroup);

var Accordion = (function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion() {
    _classCallCheck(this, Accordion);

    _React$Component.apply(this, arguments);
  }

  Accordion.prototype.render = function render() {
    return _react2['default'].createElement(
      _PanelGroup2['default'],
      _extends({}, this.props, { accordion: true }),
      this.props.children
    );
  };

  return Accordion;
})(_react2['default'].Component);

exports['default'] = Accordion;
module.exports = exports['default'];