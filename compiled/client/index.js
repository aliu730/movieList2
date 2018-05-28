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
      queryAdd: ""
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
    key: "onTextChangeAdd",
    value: function onTextChangeAdd(event) {
      this.setState({
        queryAdd: event.target.value
      });
    }
  }, {
    key: "onClickAdd",
    value: function onClickAdd() {
      var title = { title: this.state.queryAdd };
      var addList = this.state.list;
      addList.push(title);
      this.setState({
        tempList: addList
      });
      // console.log(this.state.tempList);
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
        React.createElement(AddBar, { clicker: this.onClickAdd.bind(this), textChangeAdd: this.onTextChangeAdd.bind(this) }),
        React.createElement(MovieList, { movies: this.state.tempList })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImxpc3QiLCJtb3ZpZXMiLCJ0ZW1wTGlzdCIsInF1ZXJ5QWRkIiwiZXZlbnQiLCJuZXdMaXN0IiwiaSIsImxlbmd0aCIsInRpdGxlIiwiaW5jbHVkZXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1c2giLCJzZXRTdGF0ZSIsImFkZExpc3QiLCJvblRleHRDaGFuZ2UiLCJiaW5kIiwib25DbGlja0FkZCIsIm9uVGV4dENoYW5nZUFkZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUE4QjtBQUNsQyxlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNQyxNQURLO0FBRVhDLGdCQUFVRCxNQUZDO0FBR1hFLGdCQUFVO0FBSEMsS0FBYjtBQUZpQjtBQU9sQjs7OztpQ0FDYUMsSyxFQUFPO0FBQ25CLFVBQUlDLFVBQVUsRUFBZDtBQUNBLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtQLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQk8sTUFBcEMsRUFBNENELEdBQTVDLEVBQWlEO0FBQy9DLFlBQUksS0FBS1AsS0FBTCxDQUFXQyxJQUFYLENBQWdCTSxDQUFoQixFQUFtQkUsS0FBbkIsQ0FBeUJDLFFBQXpCLENBQWtDTCxNQUFNTSxNQUFOLENBQWFDLEtBQS9DLENBQUosRUFBMkQ7QUFDekROLGtCQUFRTyxJQUFSLENBQWEsS0FBS2IsS0FBTCxDQUFXQyxJQUFYLENBQWdCTSxDQUFoQixDQUFiO0FBQ0Q7QUFDRjtBQUNELFdBQUtPLFFBQUwsQ0FBYztBQUNaWCxrQkFBVUc7QUFERSxPQUFkO0FBR0Q7OztvQ0FDZ0JELEssRUFBTztBQUN0QixXQUFLUyxRQUFMLENBQWM7QUFDWlYsa0JBQVVDLE1BQU1NLE1BQU4sQ0FBYUM7QUFEWCxPQUFkO0FBR0Q7OztpQ0FDYTtBQUNaLFVBQUlILFFBQVEsRUFBQ0EsT0FBTyxLQUFLVCxLQUFMLENBQVdJLFFBQW5CLEVBQVo7QUFDQSxVQUFJVyxVQUFVLEtBQUtmLEtBQUwsQ0FBV0MsSUFBekI7QUFDQWMsY0FBUUYsSUFBUixDQUFhSixLQUFiO0FBQ0EsV0FBS0ssUUFBTCxDQUFjO0FBQ1pYLGtCQUFVWTtBQURFLE9BQWQ7QUFHSTtBQUNMOzs7NkJBQ1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLDRCQUFDLFNBQUQsSUFBVyxZQUFZLEtBQUtDLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXZCLEdBRkY7QUFHRSw0QkFBQyxNQUFELElBQVEsU0FBUyxLQUFLQyxVQUFMLENBQWdCRCxJQUFoQixDQUFxQixJQUFyQixDQUFqQixFQUE2QyxlQUFlLEtBQUtFLGVBQUwsQ0FBcUJGLElBQXJCLENBQTBCLElBQTFCLENBQTVELEdBSEY7QUFJRSw0QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLakIsS0FBTCxDQUFXRyxRQUE5QjtBQUpGLE9BREY7QUFRRDs7OztFQTNDZWlCLE1BQU1DLFM7O0FBOEN4QkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgLy8gcmVuZGVycyBldmVyeXRoaW5nLlxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdDogbW92aWVzLFxuICAgICAgdGVtcExpc3Q6IG1vdmllcyxcbiAgICAgIHF1ZXJ5QWRkOiBcIlwiLFxuICAgIH07XG4gIH1cbiAgb25UZXh0Q2hhbmdlIChldmVudCkge1xuICAgIHZhciBuZXdMaXN0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmxpc3RbaV0udGl0bGUuaW5jbHVkZXMoZXZlbnQudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICBuZXdMaXN0LnB1c2godGhpcy5zdGF0ZS5saXN0W2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0ZW1wTGlzdDogbmV3TGlzdCxcbiAgICB9KTtcbiAgfVxuICBvblRleHRDaGFuZ2VBZGQgKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxdWVyeUFkZDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uQ2xpY2tBZGQgKCkge1xuICAgIHZhciB0aXRsZSA9IHt0aXRsZTogdGhpcy5zdGF0ZS5xdWVyeUFkZH07XG4gICAgdmFyIGFkZExpc3QgPSB0aGlzLnN0YXRlLmxpc3Q7XG4gICAgYWRkTGlzdC5wdXNoKHRpdGxlKTsgXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0ZW1wTGlzdDogYWRkTGlzdCxcbiAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS50ZW1wTGlzdCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoIFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPk1vdmllTGlzdDJzPC9oMT5cbiAgICAgICAgPFNlYXJjaEJhciB0ZXh0Q2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZS5iaW5kKHRoaXMpfS8+IFxuICAgICAgICA8QWRkQmFyIGNsaWNrZXI9e3RoaXMub25DbGlja0FkZC5iaW5kKHRoaXMpfSB0ZXh0Q2hhbmdlQWRkPXt0aGlzLm9uVGV4dENoYW5nZUFkZC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS50ZW1wTGlzdH0gLz5cbiAgICAgIDwvZGl2PiBcbiAgICApXG4gIH0gXG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==