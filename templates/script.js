const sideBar = document.querySelector(".sidebar");
let checker = true;

function displaySidebar() {
  if (checker === true) {
    sideBar.style.width = "180px";
    sideBar.style.opacity = '1';
    checker = false;
  } else {
    sideBar.style.width = "0px";
    sideBar.style.opacity = '0';
    checker = true;
  }
}



