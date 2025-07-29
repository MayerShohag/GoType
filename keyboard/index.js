const buttons = document.querySelectorAll(".btn");
const KeyA = document.querySelector("#KeyA")


document.addEventListener("keydown", (event) => {
     let key = event.key;
     buttons.forEach((element) => {
          if (element.innerHTML === key) {
               KeyA.classList.add = "key-color";
          } else {
               console.log(`incorrect`);
          }
     });
});
