let floor = document.getElementsByClassName("floor");
let btn = document.getElementsByTagName("button");
let elevator = document.getElementsByClassName("elevator");
let door = document.getElementsByClassName("door");

// btn[0].addEventListener("click", () => {
//   door[0].style.transition = "3s";
//   door[0].style.marginRight = "144px";
// });

elevator[0].style.transition = "3s";

btn[0].addEventListener("click", e => {
  elevator[0].style.marginTop = "0px";
  if (elevator[0].style.marginTop == "0px") {
    let x = setInterval(() => {
      for (let i of floor) {
        i.id = "";
      }
      floor[6].id = "yellow";
      floor[0].id = "yellow";

      door[0].style.transition = "3s";
      door[0].style.marginRight = "144px";

      let a = setTimeout(() => {
        door[0].style.transition = "3s";
        door[0].style.marginRight = "0px";
      }, 5000);

      clearInterval(x);
    }, 2000);
  }
});

btn[1].addEventListener("click", e => {
  elevator[0].style.marginTop = "120px";
  if (elevator[0].style.marginTop == "120px") {
    let x = setInterval(() => {
      for (let i of floor) {
        i.id = "";
      }
      floor[1].id = "yellow";
      floor[7].id = "yellow";

      door[0].style.transition = "3s";
      door[0].style.marginRight = "144px";

      let a = setTimeout(() => {
        door[0].style.transition = "3s";
        door[0].style.marginRight = "0px";
      }, 5000);

      clearInterval(x);
    }, 2000);
  }
});

btn[2].addEventListener("click", e => {
  elevator[0].style.marginTop = "260px";
  if (elevator[0].style.marginTop == "260px") {
    let x = setInterval(() => {
      for (let i of floor) {
        i.id = "";
      }
      floor[2].id = "yellow";
      floor[8].id = "yellow";

      door[0].style.transition = "3s";
      door[0].style.marginRight = "144px";

      let a = setTimeout(() => {
        door[0].style.transition = "3s";
        door[0].style.marginRight = "0px";
      }, 4500);

      clearInterval(x);
    }, 2000);
  }
});

btn[3].addEventListener("click", e => {
  elevator[0].style.marginTop = "405px";
  if (elevator[0].style.marginTop == "405px") {
    let x = setInterval(() => {
      for (let i of floor) {
        i.id = "";
      }
      floor[3].id = "yellow";
      floor[9].id = "yellow";

      door[0].style.transition = "3s";
      door[0].style.marginRight = "144px";

      let a = setTimeout(() => {
        door[0].style.transition = "3s";
        door[0].style.marginRight = "0px";
      }, 4000);

      clearInterval(x);
    }, 2000);
  }
});
btn[4].addEventListener("click", e => {
  elevator[0].style.marginTop = "550px";
  if (elevator[0].style.marginTop == "550px") {
    let x = setInterval(() => {
      for (let i of floor) {
        i.id = "";
      }
      floor[4].id = "yellow";
      floor[10].id = "yellow";

      door[0].style.transition = "3s";
      door[0].style.marginRight = "144px";

      let a = setTimeout(() => {
        door[0].style.transition = "3s";
        door[0].style.marginRight = "0px";
      }, 4000);

      clearInterval(x);
    }, 2000);
  }
});

btn[5].addEventListener("click", e => {
  elevator[0].style.marginTop = "695px";
  if (elevator[0].style.marginTop == "695px") {
    let x = setInterval(() => {
      for (let i of floor) {
        i.id = "";
      }
      floor[5].id = "yellow";
      floor[11].id = "yellow";

      door[0].style.transition = "3s";
      door[0].style.marginRight = "144px";

      let a = setTimeout(() => {
        door[0].style.transition = "3s";
        door[0].style.marginRight = "0px";
      }, 4000);

      clearInterval(x);
    }, 2000);
  }
});
