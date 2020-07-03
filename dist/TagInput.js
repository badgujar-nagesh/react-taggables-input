"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Tag = function Tag(props) {
  return /*#__PURE__*/_react.default.createElement("span", _extends({
    className: "tag"
  }, props));
};

var Remove = function Remove(props) {
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    className: "remove"
  }, props));
};

var TagInput = /*#__PURE__*/function (_Component) {
  _inherits(TagInput, _Component);

  var _super = _createSuper(TagInput);

  function TagInput(props) {
    var _this;

    _classCallCheck(this, TagInput);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      var value = e.target.value;

      if (e.keyCode === 13 && value !== '') {
        e.preventDefault();

        if (_this.onEnter(value)) {
          var inputTag = _this.state.inputTag.trim();

          var tags = _this.state.tags;
          tags.push(inputTag);

          _this.setState({
            inputTag: '',
            tags: tags
          });

          _this.props.onChange(tags);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEnter", function (tag) {
      var onEnter = _this.props.onEnter;

      if (typeof onEnter === 'function') {
        return onEnter(tag);
      }

      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "handleRemoveTag", function (e, index) {
      var tags = _this.state.tags;
      tags.splice(index, 1);

      _this.setState({
        inputTag: '',
        tags: tags
      });

      _this.props.onChange(tags);
    });

    _this.state = {
      inputTag: '',
      tags: []
    };
    return _this;
  }

  _createClass(TagInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        tags: this.props.value
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.value.toString() !== this.props.value.toString()) {
        this.setState({
          tags: this.props.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          tags = _this$state.tags,
          inputTag = _this$state.inputTag;
      var placeholder = this.props.placeholder;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "tags-input"
      }, tags && tags.map(function (tag, index) {
        return /*#__PURE__*/_react.default.createElement(Tag, {
          key: index
        }, tag, /*#__PURE__*/_react.default.createElement(Remove, {
          onClick: function onClick(e) {
            return _this2.handleRemoveTag(e, index);
          }
        }));
      }), /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        placeholder: placeholder,
        value: inputTag,
        onChange: function onChange(e) {
          return _this2.setState({
            inputTag: e.target.value
          });
        },
        onKeyDown: this.handleKeyDown
      }));
    }
  }]);

  return TagInput;
}(_react.Component);

TagInput.defaultProps = {
  placeholder: 'Enter Tags',
  value: []
};
TagInput.propTypes = {
  placeholder: _propTypes.default.string,
  value: _propTypes.default.array,
  onChange: _propTypes.default.func.isRequired,
  onEnter: _propTypes.default.func
};
var _default = TagInput;
exports.default = _default;