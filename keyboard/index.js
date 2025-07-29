const buttons = document.querySelectorAll(".btn");
const CapsLock = document.querySelector("#CapsLock");
const ControlLeft = document.querySelector("#ControlLeft");
const ControlRight = document.querySelector("#ControlRight");
const MetaLeft = document.querySelector("#MetaLeft");
const ContextMenu = document.querySelector("#ContextMenu");
const Space = document.querySelector("#Space");
const ArrowLeft = document.querySelector("#ArrowLeft");
const ArrowRight = document.querySelector("#ArrowRight");
const ArrowDown = document.querySelector("#ArrowDown");
const ArrowUp = document.querySelector("#ArrowUp");

document.addEventListener("keydown", (event) => {
     let key = event.keyCode;
     switch (key) {
          case 20:
               if (event.getModifierState("CapsLock")) {
                    CapsLock.classList.add("key-color");
                    alert("Caps Lock is ON");
               } else {
                    CapsLock.classList.remove("key-color");
                    alert("Caps Lock is OFF");
               }
               break;
          case 37:
               ArrowLeft.classList.add("key-color");
               setTimeout(() => {
                    ArrowLeft.classList.remove("key-color");
               }, 100);
               break;
          case 38:
               ArrowUp.classList.add("key-color");
               para.scrollTop -= 45;
               setTimeout(() => {
                    ArrowUp.classList.remove("key-color");
               }, 100);
               break;
          case 39:
               ArrowRight.classList.add("key-color");
               setTimeout(() => {
                    ArrowRight.classList.remove("key-color");
               }, 100);
               break;
          case 40:
               ArrowDown.classList.add("key-color");
               para.scrollTop += 45;
               setTimeout(() => {
                    ArrowDown.classList.remove("key-color");
               }, 100);
               break;
          case 32:
               Space.classList.add("key-color");
               setTimeout(() => {
                    Space.classList.remove("key-color");
               }, 100);
               break;
          case 93:
               ContextMenu.classList.add("key-color");
               setTimeout(() => {
                    ContextMenu.classList.remove("key-color");
               }, 100);
               break;
          case 17:
               ControlLeft.classList.add("key-color");
               ControlRight.classList.add("key-color");
               setTimeout(() => {
                    ControlLeft.classList.remove("key-color");
                    ControlRight.classList.remove("key-color");
               }, 100);
               break;
          case 91:
               MetaLeft.classList.add("key-color");
               setTimeout(() => {
                    MetaLeft.classList.remove("key-color");
               }, 100);
          default:
               break;
     }
});

document.addEventListener("keydown", (event) => {
     let key = event.key;
     buttons.forEach((element) => {
          if (element.innerHTML === key.toLowerCase()) {
               element.classList.add("key-color");
               setTimeout(() => {
                    element.classList.remove("key-color");
               }, 100);
          }
     });
});
