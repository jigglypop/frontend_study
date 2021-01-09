const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const json = await res.json();
  const user = json.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  data.push(newUser);
  updateDOM();
}

const updateDOM = (providedData = data) => {
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";
  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
};
// 머니 포맷팅
const formatMoney = (number) => {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

// 더블
const doubleMoney = () => {
  data = data.map((user) => ({ ...user, money: user.money * 2 }));
  updateDOM();
};
// 소팅
const sortByRichest = () => {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
};
// 필터
const showMillionaires = () => {
  data = data.filter((user) => user.money > 1000000);
  updateDOM();
};
// 리듀스
const calculateWealth = () => {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);
  const element = document.createElement("div");
  element.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(element);
};

addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionairesBtn.addEventListener("click", showMillionaires);
calculateWealthBtn.addEventListener("click", calculateWealth);
