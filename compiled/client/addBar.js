"use strict";

var AddBar = function AddBar(props) {
  return React.createElement(
    "span",
    null,
    React.createElement("input", { onChange: props.textChangeAdd, type: "text", placeholder: "Add To List" }),
    React.createElement(
      "button",
      { onClick: props.clicker, type: "submit" },
      "Add"
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hZGRCYXIuanN4Il0sIm5hbWVzIjpbIkFkZEJhciIsInByb3BzIiwidGV4dENoYW5nZUFkZCIsImNsaWNrZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUN0QixTQUNFO0FBQUE7QUFBQTtBQUNFLG1DQUFPLFVBQVVBLE1BQU1DLGFBQXZCLEVBQXNDLE1BQUssTUFBM0MsRUFBa0QsYUFBWSxhQUE5RCxHQURGO0FBRUU7QUFBQTtBQUFBLFFBQVEsU0FBU0QsTUFBTUUsT0FBdkIsRUFBZ0MsTUFBSyxRQUFyQztBQUFBO0FBQUE7QUFGRixHQURGO0FBTUQsQ0FQRCIsImZpbGUiOiJhZGRCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWRkQmFyID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoIFxuICAgIDxzcGFuPlxuICAgICAgPGlucHV0IG9uQ2hhbmdlPXtwcm9wcy50ZXh0Q2hhbmdlQWRkfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkIFRvIExpc3RcIiAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5jbGlja2VyfSB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+XG4gICAgPC9zcGFuPlxuICApXG59Il19