const root = document.querySelector("#root");

let number = " ";
let i = 0;
while (i <= 10000) {
  number = number + i + " ";
  i++;
  root.innerHTML = number;
}

// root.appendChild(number);
