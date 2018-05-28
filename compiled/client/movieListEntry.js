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
      if (this.state.watched === "Not Watched") {
        this.setState({
          watched: "Watched"
        });
      } else {
        this.setState({
          watched: "Not Watched"
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.movie.title,
        React.createElement("input", { onClick: this.changeWatched.bind(this), type: "submit", value: this.state.watched })
      );
    }
  }]);

  return MovieListEntry;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9tb3ZpZUxpc3RFbnRyeS5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0RW50cnkiLCJwcm9wcyIsInN0YXRlIiwid2F0Y2hlZCIsInNldFN0YXRlIiwibW92aWUiLCJ0aXRsZSIsImNoYW5nZVdhdGNoZWQiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsYzs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVM7QUFERSxLQUFiO0FBRmlCO0FBS2xCOzs7O29DQUNnQjtBQUNmLFVBQUksS0FBS0QsS0FBTCxDQUFXQyxPQUFYLEtBQXVCLGFBQTNCLEVBQTBDO0FBQ3hDLGFBQUtDLFFBQUwsQ0FBYztBQUNaRCxtQkFBUztBQURHLFNBQWQ7QUFHRCxPQUpELE1BSU87QUFDTCxhQUFLQyxRQUFMLENBQWM7QUFDWkQsbUJBQVM7QUFERyxTQUFkO0FBR0Q7QUFDRjs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBTSxhQUFLRixLQUFMLENBQVdJLEtBQVgsQ0FBaUJDLEtBQXZCO0FBQ0UsdUNBQU8sU0FBUyxLQUFLQyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUFoQixFQUErQyxNQUFLLFFBQXBELEVBQTZELE9BQU8sS0FBS04sS0FBTCxDQUFXQyxPQUEvRTtBQURGLE9BREY7QUFLRDs7OztFQXhCMEJNLE1BQU1DLFMiLCJmaWxlIjoibW92aWVMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZpZUxpc3RFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB3YXRjaGVkOiBcIk5vdCBXYXRjaGVkXCIsXG4gICAgfVxuICB9XG4gIGNoYW5nZVdhdGNoZWQgKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLndhdGNoZWQgPT09IFwiTm90IFdhdGNoZWRcIikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdhdGNoZWQ6IFwiV2F0Y2hlZFwiLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3YXRjaGVkOiBcIk5vdCBXYXRjaGVkXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2Pnt0aGlzLnByb3BzLm1vdmllLnRpdGxlfVxuICAgICAgICA8aW5wdXQgb25DbGljaz17dGhpcy5jaGFuZ2VXYXRjaGVkLmJpbmQodGhpcyl9IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT17dGhpcy5zdGF0ZS53YXRjaGVkfSAvPiBcbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ==