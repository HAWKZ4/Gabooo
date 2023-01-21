// Select the burger-icon
let burgerIcon = document.querySelector(".burger-icon");
let allLinks = document.querySelectorAll(".intro .nav .links li");

let repeat = false;

let links = document.querySelectorAll(".intro .nav .links li");

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

// To change the image as the box clicked

// Select the left big box to make image
let bigImageCon = document.querySelector(".item-show .container .left .big");

// Create Img
let bigImg = document.createElement("img");

// Start night mode function
let indicator = document.querySelector(".info .container .indicator");

// Sections select to apply on it night mode

let list = document.querySelector(".list");
let listLogo = document.querySelector(".list .nav .links li.logo");
let container = document.querySelector(".container");
let itemShowTitle = document.querySelector(
  ".item-show .container .right .title"
);
let itemShowCount = document.querySelector(
  ".item-show .container .right .information .count"
);
let itemShowColor = document.querySelector(
  ".item-show .container .right .color "
);
let winter = document.querySelector(".winter");
let winterH4 = document.querySelector(".winter .container h4");
let winterH3 = document.querySelectorAll(".winter .container .box h3");
let listsDiv = document.querySelectorAll(
  ".item-show .container .right .dropdown-menu div"
);

// Dark mode by time (if the time less than 6 in the ) and function
let time = new Date();
let darkMode;
// 6pm -> 6am
console.log(time.getHours());
if (time.getHours() < 6 || time.getHours() > 18) {
  DarkMode();
  darkMode = "on";
}
// if (time.getHours > 6 && time.getMinutes() <= 30) {
//   DarkMode();
//   darkMode = "on";
// }

indicator.onclick = DarkMode;

function DarkMode() {
  document.body.classList.toggle("active");
  indicator.classList.toggle("active");
  list.classList.toggle("active");
  listLogo.classList.toggle("active");
  container.classList.toggle("active");
  itemShowTitle.classList.toggle("active");
  itemShowCount.classList.toggle("active");
  itemShowColor.classList.toggle("active");

  winter.classList.toggle("active");

  winterH3.forEach((h3) => {
    h3.classList.toggle("active");
  });
  listsDiv.forEach((listDiv) => {
    listDiv.classList.toggle("dark");
  });
}

// -------------------------

// Start when click on image create an overlay and focus on clicked image

let images = document.querySelectorAll(".item-show .container .left img");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    let overlay = document.createElement("div");
    overlay.className = "overlay";

    let con = document.createElement("div");
    con.className = "con";

    let image = document.createElement("img");
    image.src = `${e.target.src}`;

    let exitBtn = document.createElement("button");
    exitBtn.innerHTML = "X";

    overlay.style.width = "100%";
    overlay.style.height = "100vh";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.backgroundColor = "rgba(1,1,1,.5)";

    exitBtn.style.width = "50px";
    exitBtn.style.height = "50px";
    exitBtn.style.borderRadius = "50%";
    exitBtn.style.border = "none";
    exitBtn.style.color = "var(--text-color)";
    exitBtn.style.fontSize = "30px";
    exitBtn.style.fontWeight = "bold";
    exitBtn.style.position = "absolute";
    exitBtn.style.right = "-23px";
    exitBtn.style.top = "-15px";
    exitBtn.style.cursor = "pointer";

    con.style.position = "relative";

    image.style.height = "70vh";
    image.style.borderRadius = "8px";

    con.appendChild(image);
    con.appendChild(exitBtn);
    overlay.appendChild(con);
    document.body.appendChild(overlay);

    document.addEventListener("click", (e) => {
      if (e.target == exitBtn) {
        removeFromDom(overlay);
      } else if (
        (e.target != image && e.target.parentElement == overlay) ||
        e.target == overlay
      ) {
        removeFromDom(overlay);
      }
    });
  });
});

function removeFromDom(arg) {
  arg.remove();
}
// -----------------------

// Start info section when click expand
let lists = document.querySelectorAll(
  ".item-show .container .right .dropdown-menu div"
);

lists.forEach((list) => {
  list.addEventListener("click", (e) => {
    list.classList.toggle("active");
  });
});

// -------------------
