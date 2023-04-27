// Make the menu for moblie

// Select the burger-icon
let burgerIcon = document.querySelector(".burger-icon");

let repeat = false;

let links = document.querySelectorAll(".list .nav .links li");

let menuCon = document.createElement("div");
menuCon.className = "menu";
menuCon.style.position = "absolute";
menuCon.style.width = "100%";
menuCon.style.backgroundColor = "#f6f6f6";
menuCon.style.textAlign = "center";
menuCon.style.top = "60px";
menuCon.style.left = "0";
menuCon.style.zIndex = "1000";
menuCon.style.opacity = ".9";
menuCon.style.color = "var(--text-color)";
menuCon.style.fontWeight = "600";

burgerIcon.onclick = (e) => {
  e.stopPropagation();

  if (repeat != true) {
    links.forEach((li) => {
      if (li.classList.contains("logo")) {
        return 0;
      }
      let div = document.createElement("div");
      let divText = document.createTextNode(li.textContent);
      div.style.transition = "all .3s";
      div.style.cursor = "pointer";
      div.style.width = "fit-content";
      div.style.margin = "15px auto";
      div.appendChild(divText);

      menuCon.appendChild(div);
    });
    repeat = true;
  }
  document.body.appendChild(menuCon);
  menuCon.classList.toggle("active");

  // Select all the divs in menu
  let arrOfDivs = document.querySelectorAll(".menu div");

  // Trigger function make hover
  makeHover(arrOfDivs);

  if (menuCon.classList.contains("active")) {
    menuCon.style.display = "block";
  } else {
    menuCon.style.display = "none";
  }
};
// Stop propagation on menu con
menuCon.onclick = (e) => {
  e.stopPropagation();
};

// Go out of the element when click (Not click on icon or inside the menu)
document.onclick = (e) => {
  if (menuCon.classList.contains("active")) {
    if (e.target != burgerIcon && !e.target.classList.contains("menu")) {
      menuCon.classList.remove("active");
    }
    if (!menuCon.classList.contains("active")) {
      menuCon.style.display = "none";
    }
  }
};

// Check statement when resize if true hide the menu
addEventListener("resize", (e) => {
  let windowWidth = this.innerWidth;
  if (windowWidth > 767) {
    menuCon.style.display = "none";
  }
});

window.resizeBy = function () {};

// Make hover function
function makeHover(arr) {
  arr.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.color = "var(--main-color)";
    });
    el.addEventListener("mouseleave", () => {
      el.style.color = "var(--text-color)";
    });
  });
}

// ------------------

// Show more collection

// Select the button
let showBtn = document.querySelector(".collection .container button");

showBtn.onclick = showMoreBoxes;

// Select the boxes container
let boxesCon = document.querySelector(".collection .container .boxes");

// Select the container
let containerColl = document.querySelector(".collection .container ");

let j = 1;
let i = 1;
let k = 9; // to give class number for box
let x = 2; // to show how many boxes when click show more button

function showMoreBoxes() {
  let resOfDark;

  let body = document.body;
  bodyBackground = getComputedStyle(body).backgroundColor;

  if (bodyBackground == "rgb(255, 255, 255)") {
    resOfDark = "false";
  } else {
    resOfDark = "true";
  }
  console.log(resOfDark);

  for (let z = 0; z < x; z++) {
    console.log("i=>" + i);
    console.log("j=>" + j);

    let div = document.createElement("div");

    div.className = "box";
    div.classList.add(k++);

    let imgCon = document.createElement("div");

    imgCon.className = "img";

    let img = document.createElement("img");

    img.src = `./Imgs/extra/Image${i}/${j}.jpg`;

    imgCon.appendChild(img);

    let h3 = document.createElement("h3");
    if (resOfDark == "true") {
      h3.classList.add("active");
    } else {
      h3.classList.remove("active");
    }

    h3.appendChild(document.createTextNode("Paris Jacket"));

    let h5 = document.createElement("h5");
    h5.appendChild(document.createTextNode("$89.99"));

    div.appendChild(imgCon);
    div.appendChild(h3);
    div.appendChild(h5);

    div.onclick = () => {
      window.open("../ItemPage.html");
      console.log();
    };

    boxesCon.appendChild(div);
    i++;
    if (i == 10) {
      showBtn.remove();

      let div = document.createElement("div");
      div.className = "end";
      div.appendChild(document.createTextNode("The End Of List"));

      containerColl.appendChild(div);
    }
  }
}

// -------------------------

// Start choose langauge and flag function

let navBar = document.querySelector(".nav-bar");
let language = document.querySelector(".nav-bar .left .language");
let currecny = document.querySelector(".nav-bar .left .currency");
let languageMenu = document.querySelector(".nav-bar .left .lang-menu");
let currencyMenu = document.querySelector(".nav-bar .left .currency-menu");
let langMenuDivs = document.querySelectorAll(".lang-menu div");
let currMenuDivs = document.querySelectorAll(".currency-menu div");
let imgLang = document.querySelector(".nav-bar .left .language img");
let textLang = document.querySelector(".nav-bar .left .language span");
let currencyText = document.querySelector(".nav-bar .left .currency span");

if (localStorage.getItem("lang") != null) {
  textLang.innerHTML = localStorage.getItem("lang");
}
if (localStorage.getItem("img") != null) {
  imgLang.src = localStorage.getItem("img");
}
if (localStorage.getItem("currecny") != null) {
  currencyText.innerHTML = localStorage.getItem("currecny");
}

langMenuDivs.forEach((div) => {
  div.addEventListener("click", (e) => {
    imgLang.src = `../Flags/${div.textContent.trim()}.svg`;
    textLang.innerHTML = div.textContent.trim();
    localStorage.setItem("lang", div.textContent.trim());
    localStorage.setItem("img", `../Flags/${div.textContent.trim()}.svg`);
  });
});
currMenuDivs.forEach((div) => {
  div.addEventListener("click", (e) => {
    currencyText.innerHTML = div.textContent;
    localStorage.setItem("currecny", div.textContent.trim());
  });
});

language.onclick = (e) => {
  language.classList.toggle("active");
};

currecny.onclick = (e) => {
  currecny.classList.toggle("active");
};

languageMenu.onclick = (e) => {
  e.stopPropagation();
};
currencyMenu.onclick = (e) => {
  e.stopPropagation();
};

document.addEventListener("click", (e) => {
  if (
    language.classList.contains("active") &&
    e.target.parentElement != language
  ) {
    language.classList.remove("active");
  }
  if (
    currecny.classList.contains("active") &&
    e.target.parentElement != currecny
  ) {
    currecny.classList.remove("active");
  }
});

// -------------------------

// Make an item page when click on box in collection

// Select all the boxes
let boxesColl = document.querySelectorAll(".collection .container .boxes .box");

let numberImg = 1;

boxesColl.forEach((box) => {
  box.onclick = getNumberOfBoxes;
});

function getNumberOfBoxes(e) {
  numberImg = e.target.parentElement.classList[1];

  console.log(numberImg);

  // Go to item page

  window.open("../ItemPage.html");

  return numberImg;
}

// -------------------------

// Start night mode function
let indicator = document.querySelector(".info .container .indicator");

// Sections select to apply on it night mode
let list = document.querySelector(".list");
let listLogo = document.querySelector(".list .nav .links li.logo");
let container = document.querySelector(".container");
let introText = document.querySelector(".intro-text");
let introTextLeft = document.querySelector(".intro-text .left p");
let popularStates = document.querySelector(".popular .container .states");
let popularH3 = document.querySelectorAll(".popular .container .boxes .box h3");
let winter = document.querySelector(".winter");
let winterP = document.querySelector(".winter .container p");
let winterH4 = document.querySelector(".winter .container h4");
let winterH3 = document.querySelectorAll(".winter .container .box h3");
let subscribe = document.querySelector(".subscribe");
let subscribeForm = document.querySelector(".subscribe form");
let collP = document.querySelector(".collection .inf-typ p");
let collList = document.querySelector(".collection .inf-typ .type");
let collH3 = document.querySelectorAll(".collection .container .boxes h3");
let storyRight = document.querySelector(".story .right");
let storyRightH3 = document.querySelector(".story .right h3");
let storyRightP = document.querySelector(".story .right p");
let storyLeft = document.querySelector(".story .left");

// Dark mode by time (if the time less than 6 in the )
let time = new Date();
// 6pm -> 6am
console.log(time.getHours());
if (time.getHours() <= 6 || time.getHours() >= 18) {
  DarkMode();
}

indicator.onclick = DarkMode;

function DarkMode() {
  let collH3 = document.querySelectorAll(".collection .container .boxes h3");
  collH3.forEach((h3) => {
    h3.classList.toggle("active");
  });

  document.body.classList.toggle("active");
  indicator.classList.toggle("active");
  list.classList.toggle("active");
  listLogo.classList.toggle("active");
  container.classList.toggle("active");
  introText.classList.toggle("active");
  introTextLeft.classList.toggle("active");
  popularStates.classList.toggle("active");

  popularH3.forEach((h3) => {
    h3.classList.toggle("active");
  });

  winter.classList.toggle("active");
  winterP.classList.toggle("active");
  winterH4.classList.toggle("active");

  winterH3.forEach((h3) => {
    h3.classList.toggle("active");
  });

  subscribe.classList.toggle("active");
  subscribeForm.classList.toggle("active");
  collP.classList.toggle("active");
  collList.classList.toggle("active");

  // collH3.forEach((h3) => {
  //   h3.classList.toggle("active");
  // });

  storyRight.classList.toggle("active");
  storyLeft.classList.toggle("active");
  storyRightH3.classList.toggle("active");
  storyRightP.classList.toggle("active");
}

// -------------------------

// Make the popular divs and winter divs is opening itempage
let popularDivs = document.querySelectorAll(".popular .container .boxes .box");

let winterDivs  = document.querySelectorAll(".winter .container .boxes .box");

const open = () => {
  window.open("../ItemPage.html");
};

popularDivs.forEach((div) => {
  div.addEventListener("click", open)
});

winterDivs.forEach((div) => {
  div.addEventListener("click", open)
});


