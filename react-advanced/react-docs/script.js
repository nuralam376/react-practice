// let number1 = 0;
// let number3 = 0;

// let number = document.querySelector("#number");
// const increment = document.querySelector("#increment");
// let number2 = document.querySelector("#number2");
// const increment2 = document.querySelector("#increment2");

// increment.addEventListener("click", () => {
//   number1++;
//   number.innerText = number1;
// });

// increment2.addEventListener("click", () => {
//   number3++;
//   number2.textContent = number3;
// });

let domContainer = document.querySelector("#root");

// console.log(React);
// console.log(ReactDOM);

// const element = "Hello World";

// const element = React.createElement("div", null, "Hello World");
const element = React.createElement(
  "div",
  null,
  React.createElement("p", null, "Hello World")
);

ReactDOM.render(element, domContainer);
