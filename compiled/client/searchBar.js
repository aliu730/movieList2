"use strict";

var SearchBar = function SearchBar(props) {
  return React.createElement(
    "div",
    { className: "searchBar" },
    React.createElement("input", { type: "text", onChange: props.textChange, placeholder: "search" })
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zZWFyY2hCYXIuanN4Il0sIm5hbWVzIjpbIlNlYXJjaEJhciIsInByb3BzIiwidGV4dENoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmO0FBQ0UsbUNBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVVBLE1BQU1DLFVBQW5DLEVBQStDLGFBQVksUUFBM0Q7QUFERixHQURGO0FBS0QsQ0FORCIsImZpbGUiOiJzZWFyY2hCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2VhcmNoQmFyID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hCYXJcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtwcm9wcy50ZXh0Q2hhbmdlfSBwbGFjZWhvbGRlcj1cInNlYXJjaFwiLz5cbiAgICA8L2Rpdj5cbiAgKVxufSJdfQ==