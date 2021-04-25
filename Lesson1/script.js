const navItems = [
  {
    name: "Item 1",
  },
  {
    name: "Item 2",
  },
  {
    name: "Item 3",
  },
  {
    name: "Item 4",
  },
  {
    name: "Item 5",
  },
];

const navItem = [
  {
    name: "Item 1",
    children: ["Item 1.1", "Item 1.2", "Item 1.3"],
  },
  {
    name: "Item 2",
    children: [
      "Item 1.1",
      "Item 1.2",
      "Item 1.3",
      "Item 1.1",
      "Item 1.2",
      "Item 1.3",
    ],
  },
  {
    name: "Item 3",
  },
  {
    name: "Item 4",
  },
  {
    name: "Item 5",
  },
];

let navItemString = "";

navItem.map((item) => {
  if (!!item.children) {
    let childMenu = `<div class="child-menu">`;
    item.children.map((el) => {
      childMenu += `<div>${el}</div>`;
    });

    childMenu += `</div>`;
    navItemString += `<span>${item.name}${childMenu}</span>`;
  } else {
    navItemString += `<span>${item.name}</span>`;
  }
});

window.onload = function () {
  document.getElementById("menu").innerHTML = navItemString;
  /* Add your logic here */
};
