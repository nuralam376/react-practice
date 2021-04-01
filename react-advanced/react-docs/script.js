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
// const element = React.createElement(
//   "div",
//   null,
//   React.createElement("p", null, "Hello World")
// );

const Increment = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h1 id="display">Counter - {counter}</h1>
      <button id="button" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
    </div>
  );
};

ReactDOM.render(
  <div>
    <Increment />
    <Increment />
    <Increment />
  </div>,
  domContainer
);
