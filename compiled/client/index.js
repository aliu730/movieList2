"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  // renders everything.
  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      list: movies,
      tempList: movies,
      query: ""
    };
    return _this;
  }

  _createClass(App, [{
    key: "onTextChange",
    value: function onTextChange(event) {
      var newList = [];
      for (var i = 0; i < this.state.list.length; i++) {
        if (this.state.list[i].title.includes(event.target.value)) {
          newList.push(this.state.list[i]);
        }
      }
      this.setState({
        tempList: newList
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "MovieList2s"
        ),
        React.createElement(SearchBar, { textChange: this.onTextChange.bind(this) }),
        React.createElement(MovieList, { movies: this.state.tempList })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImxpc3QiLCJtb3ZpZXMiLCJ0ZW1wTGlzdCIsInF1ZXJ5IiwiZXZlbnQiLCJuZXdMaXN0IiwiaSIsImxlbmd0aCIsInRpdGxlIiwiaW5jbHVkZXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1c2giLCJzZXRTdGF0ZSIsIm9uVGV4dENoYW5nZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFBOEI7QUFDbEMsZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTUMsTUFESztBQUVYQyxnQkFBVUQsTUFGQztBQUdYRSxhQUFPO0FBSEksS0FBYjtBQUZpQjtBQU9sQjs7OztpQ0FDYUMsSyxFQUFPO0FBQ25CLFVBQUlDLFVBQVUsRUFBZDtBQUNBLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtQLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQk8sTUFBcEMsRUFBNENELEdBQTVDLEVBQWlEO0FBQy9DLFlBQUksS0FBS1AsS0FBTCxDQUFXQyxJQUFYLENBQWdCTSxDQUFoQixFQUFtQkUsS0FBbkIsQ0FBeUJDLFFBQXpCLENBQWtDTCxNQUFNTSxNQUFOLENBQWFDLEtBQS9DLENBQUosRUFBMkQ7QUFDekROLGtCQUFRTyxJQUFSLENBQWEsS0FBS2IsS0FBTCxDQUFXQyxJQUFYLENBQWdCTSxDQUFoQixDQUFiO0FBQ0Q7QUFDRjtBQUNELFdBQUtPLFFBQUwsQ0FBYztBQUNaWCxrQkFBVUc7QUFERSxPQUFkO0FBR0Q7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUUsNEJBQUMsU0FBRCxJQUFXLFlBQVksS0FBS1MsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBdkIsR0FGRjtBQUdFLDRCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtoQixLQUFMLENBQVdHLFFBQTlCO0FBSEYsT0FERjtBQVFEOzs7O0VBN0JlYyxNQUFNQyxTOztBQWdDeEJDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IC8vIHJlbmRlcnMgZXZlcnl0aGluZy5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3Q6IG1vdmllcyxcbiAgICAgIHRlbXBMaXN0OiBtb3ZpZXMsXG4gICAgICBxdWVyeTogXCJcIixcbiAgICB9O1xuICB9XG4gIG9uVGV4dENoYW5nZSAoZXZlbnQpIHtcbiAgICB2YXIgbmV3TGlzdCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5saXN0W2ldLnRpdGxlLmluY2x1ZGVzKGV2ZW50LnRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgbmV3TGlzdC5wdXNoKHRoaXMuc3RhdGUubGlzdFtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGVtcExpc3Q6IG5ld0xpc3QsXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoIFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPk1vdmllTGlzdDJzPC9oMT5cbiAgICAgICAgPFNlYXJjaEJhciB0ZXh0Q2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZS5iaW5kKHRoaXMpfS8+IFxuICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS50ZW1wTGlzdH0vPlxuICAgICAgICBcbiAgICAgIDwvZGl2PiBcbiAgICApXG4gIH0gXG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==