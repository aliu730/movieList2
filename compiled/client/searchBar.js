"use strict";

var SearchBar = function SearchBar(props) {
  return React.createElement(
    "div",
    { className: "searchBar" },
    React.createElement("input", { type: "text", onChange: props.textChange }),
    React.createElement(
      "button",
      { type: "submit" },
      "Add"
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zZWFyY2hCYXIuanN4Il0sIm5hbWVzIjpbIlNlYXJjaEJhciIsInByb3BzIiwidGV4dENoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmO0FBQ0UsbUNBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVVBLE1BQU1DLFVBQW5DLEdBREY7QUFFRTtBQUFBO0FBQUEsUUFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBRkYsR0FERjtBQU1ELENBUEQiLCJmaWxlIjoic2VhcmNoQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNlYXJjaEJhciA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoQmFyXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17cHJvcHMudGV4dENoYW5nZX0gLz5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59Il19