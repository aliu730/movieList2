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
      //search box
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
      //add text box
      this.setState({
        queryAdd: event.target.value
      });
    }
  }, {
    key: "onClickAdd",
    value: function onClickAdd() {
      //add button for adding movies
      var title = { title: this.state.queryAdd, watched: "Not Watched" };
      var addList = this.state.list;
      addList.push(title);
      this.setState({
        tempList: addList
      });
      this.state.list = addList;
    }
  }, {
    key: "watchedList",
    value: function watchedList() {
      var tempList = this.state.list;
      var watchedList = [];
      for (var i = 0; i < tempList.length; i++) {
        if (tempList[i].watched === "Watched") {
          watchedList.push(tempList[i]);
        }
      }
      this.setState({
        tempList: watchedList
      });
      this.state.tempList = this.state.list;
      console.log(this.state.tempList);
    }
  }, {
    key: "notWatchedList",
    value: function notWatchedList() {
      var tempList = this.state.list;
      var notWatchedList = [];
      for (var i = 0; i < tempList.length; i++) {
        if (tempList[i].watched === "Not Watched") {
          notWatchedList.push(tempList[i]);
        }
      }
      this.setState({
        tempList: notWatchedList
      });
      this.state.tempList = this.state.list;
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
        React.createElement(
          "div",
          null,
          React.createElement(
            "button",
            { onClick: this.watchedList.bind(this), className: "Watched" },
            "Watched"
          ),
          React.createElement(
            "button",
            { onClick: this.notWatchedList.bind(this), className: "NotWatched" },
            "NotWatched"
          )
        ),
        React.createElement(MovieList, { movies: this.state.tempList })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImxpc3QiLCJtb3ZpZXMiLCJ0ZW1wTGlzdCIsInF1ZXJ5QWRkIiwiZXZlbnQiLCJuZXdMaXN0IiwiaSIsImxlbmd0aCIsInRpdGxlIiwiaW5jbHVkZXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInB1c2giLCJzZXRTdGF0ZSIsIndhdGNoZWQiLCJhZGRMaXN0Iiwid2F0Y2hlZExpc3QiLCJjb25zb2xlIiwibG9nIiwibm90V2F0Y2hlZExpc3QiLCJvblRleHRDaGFuZ2UiLCJiaW5kIiwib25DbGlja0FkZCIsIm9uVGV4dENoYW5nZUFkZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUE4QjtBQUNsQyxlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNQyxNQURLO0FBRVhDLGdCQUFVRCxNQUZDO0FBR1hFLGdCQUFVO0FBSEMsS0FBYjtBQUZpQjtBQU9sQjs7OztpQ0FDYUMsSyxFQUFPO0FBQUU7QUFDckIsVUFBSUMsVUFBVSxFQUFkO0FBQ0EsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS1AsS0FBTCxDQUFXQyxJQUFYLENBQWdCTyxNQUFwQyxFQUE0Q0QsR0FBNUMsRUFBaUQ7QUFDL0MsWUFBSSxLQUFLUCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JNLENBQWhCLEVBQW1CRSxLQUFuQixDQUF5QkMsUUFBekIsQ0FBa0NMLE1BQU1NLE1BQU4sQ0FBYUMsS0FBL0MsQ0FBSixFQUEyRDtBQUN6RE4sa0JBQVFPLElBQVIsQ0FBYSxLQUFLYixLQUFMLENBQVdDLElBQVgsQ0FBZ0JNLENBQWhCLENBQWI7QUFDRDtBQUNGO0FBQ0QsV0FB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IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IC8vIHJlbmRlcnMgZXZlcnl0aGluZy5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3Q6IG1vdmllcyxcbiAgICAgIHRlbXBMaXN0OiBtb3ZpZXMsXG4gICAgICBxdWVyeUFkZDogXCJcIixcbiAgICB9O1xuICB9XG4gIG9uVGV4dENoYW5nZSAoZXZlbnQpIHsgLy9zZWFyY2ggYm94XG4gICAgdmFyIG5ld0xpc3QgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUubGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUubGlzdFtpXS50aXRsZS5pbmNsdWRlcyhldmVudC50YXJnZXQudmFsdWUpKSB7XG4gICAgICAgIG5ld0xpc3QucHVzaCh0aGlzLnN0YXRlLmxpc3RbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRlbXBMaXN0OiBuZXdMaXN0LFxuICAgIH0pO1xuICB9XG4gIG9uVGV4dENoYW5nZUFkZCAoZXZlbnQpIHsgLy9hZGQgdGV4dCBib3hcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHF1ZXJ5QWRkOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cbiAgb25DbGlja0FkZCAoKSB7IC8vYWRkIGJ1dHRvbiBmb3IgYWRkaW5nIG1vdmllc1xuICAgIHZhciB0aXRsZSA9IHt0aXRsZTogdGhpcy5zdGF0ZS5xdWVyeUFkZCwgd2F0Y2hlZDogXCJOb3QgV2F0Y2hlZFwifTtcbiAgICB2YXIgYWRkTGlzdCA9IHRoaXMuc3RhdGUubGlzdDtcbiAgICBhZGRMaXN0LnB1c2godGl0bGUpOyBcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRlbXBMaXN0OiBhZGRMaXN0LFxuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUubGlzdCA9IGFkZExpc3Q7XG4gIH1cbiAgd2F0Y2hlZExpc3QgKCkge1xuICAgIHZhciB0ZW1wTGlzdCA9IHRoaXMuc3RhdGUubGlzdDtcbiAgICB2YXIgd2F0Y2hlZExpc3QgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGVtcExpc3RbaV0ud2F0Y2hlZCA9PT0gXCJXYXRjaGVkXCIpIHtcbiAgICAgICAgd2F0Y2hlZExpc3QucHVzaCh0ZW1wTGlzdFtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGVtcExpc3Q6IHdhdGNoZWRMaXN0LFxuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUudGVtcExpc3QgPSB0aGlzLnN0YXRlLmxpc3Q7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50ZW1wTGlzdCk7XG4gIH1cbiAgbm90V2F0Y2hlZExpc3QoKSB7XG4gICAgdmFyIHRlbXBMaXN0ID0gdGhpcy5zdGF0ZS5saXN0O1xuICAgIHZhciBub3RXYXRjaGVkTGlzdCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0ZW1wTGlzdFtpXS53YXRjaGVkID09PSBcIk5vdCBXYXRjaGVkXCIpIHtcbiAgICAgICAgbm90V2F0Y2hlZExpc3QucHVzaCh0ZW1wTGlzdFtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGVtcExpc3Q6IG5vdFdhdGNoZWRMaXN0LFxuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUudGVtcExpc3QgPSB0aGlzLnN0YXRlLmxpc3Q7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoIFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPk1vdmllTGlzdDJzPC9oMT5cbiAgICAgICAgPFNlYXJjaEJhciB0ZXh0Q2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZS5iaW5kKHRoaXMpfS8+IFxuICAgICAgICA8QWRkQmFyIGNsaWNrZXI9e3RoaXMub25DbGlja0FkZC5iaW5kKHRoaXMpfSB0ZXh0Q2hhbmdlQWRkPXt0aGlzLm9uVGV4dENoYW5nZUFkZC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy53YXRjaGVkTGlzdC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJXYXRjaGVkXCIgPldhdGNoZWQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMubm90V2F0Y2hlZExpc3QuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiTm90V2F0Y2hlZFwiPk5vdFdhdGNoZWQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLnRlbXBMaXN0fSAvPlxuICAgICAgPC9kaXY+IFxuICAgIClcbiAgfSBcbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19