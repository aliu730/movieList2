"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieListEntry = function (_React$Component) {
  _inherits(MovieListEntry, _React$Component);

  function MovieListEntry(props) {
    _classCallCheck(this, MovieListEntry);

    var _this = _possibleConstructorReturn(this, (MovieListEntry.__proto__ || Object.getPrototypeOf(MovieListEntry)).call(this, props));

    _this.state = {
      watched: "Not Watched"
    };
    return _this;
  }

  _createClass(MovieListEntry, [{
    key: "changeWatched",
    value: function changeWatched() {
      console.log(this.state);
      if (this.state.watched === "Not Watched") {
        this.setState({
          watched: "Watched"
        });
        this.props.movie.watched = "Watched";
      } else {
        this.setState({
          watched: "Not Watched"
        });
        this.props.movie.watched = "Not Watched";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.movie.title,
        React.createElement("input", { onClick: this.changeWatched.bind(this), type: "submit", value: this.props.movie.watched })
      );
    }
  }]);

  return MovieListEntry;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9tb3ZpZUxpc3RFbnRyeS5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0RW50cnkiLCJwcm9wcyIsInN0YXRlIiwid2F0Y2hlZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm1vdmllIiwidGl0bGUiLCJjaGFuZ2VXYXRjaGVkIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGM7OztBQUNKLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTO0FBREUsS0FBYjtBQUZpQjtBQUtsQjs7OztvQ0FDZ0I7QUFDZkMsY0FBUUMsR0FBUixDQUFZLEtBQUtILEtBQWpCO0FBQ0EsVUFBSSxLQUFLQSxLQUFMLENBQVdDLE9BQVgsS0FBdUIsYUFBM0IsRUFBMEM7QUFDeEMsYUFBS0csUUFBTCxDQUFjO0FBQ1pILG1CQUFTO0FBREcsU0FBZDtBQUdBLGFBQUtGLEtBQUwsQ0FBV00sS0FBWCxDQUFpQkosT0FBakIsR0FBMkIsU0FBM0I7QUFDRCxPQUxELE1BS087QUFDTCxhQUFLRyxRQUFMLENBQWM7QUFDWkgsbUJBQVM7QUFERyxTQUFkO0FBR0EsYUFBS0YsS0FBTCxDQUFXTSxLQUFYLENBQWlCSixPQUFqQixHQUEyQixhQUEzQjtBQUNEO0FBQ0Y7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQU0sYUFBS0YsS0FBTCxDQUFXTSxLQUFYLENBQWlCQyxLQUF2QjtBQUNFLHVDQUFPLFNBQVMsS0FBS0MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBaEIsRUFBK0MsTUFBSyxRQUFwRCxFQUE2RCxPQUFPLEtBQUtULEtBQUwsQ0FBV00sS0FBWCxDQUFpQkosT0FBckY7QUFERixPQURGO0FBS0Q7Ozs7RUEzQjBCUSxNQUFNQyxTIiwiZmlsZSI6Im1vdmllTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWVMaXN0RW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd2F0Y2hlZDogXCJOb3QgV2F0Y2hlZFwiLFxuICAgIH1cbiAgfVxuICBjaGFuZ2VXYXRjaGVkICgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICBpZiAodGhpcy5zdGF0ZS53YXRjaGVkID09PSBcIk5vdCBXYXRjaGVkXCIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3YXRjaGVkOiBcIldhdGNoZWRcIixcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5tb3ZpZS53YXRjaGVkID0gXCJXYXRjaGVkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3YXRjaGVkOiBcIk5vdCBXYXRjaGVkXCIsXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMubW92aWUud2F0Y2hlZCA9IFwiTm90IFdhdGNoZWRcIjtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2Pnt0aGlzLnByb3BzLm1vdmllLnRpdGxlfVxuICAgICAgICA8aW5wdXQgb25DbGljaz17dGhpcy5jaGFuZ2VXYXRjaGVkLmJpbmQodGhpcyl9IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT17dGhpcy5wcm9wcy5tb3ZpZS53YXRjaGVkfSAvPiBcbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ==