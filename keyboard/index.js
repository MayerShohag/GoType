const buttons = document.querySelectorAll(".btn");
const KeyA = document.querySelector("#KeyA")


document.addEventListener("keydown", (event) => {
     let key = event.key;
     console.log("key "+key);
     buttons.forEach((element) => {
          if (element.innerHTML === key) {
               console.log(`innerHTML `+element.innerHTML);
               KeyA.classList.add = "key-color";
          } else {
               console.log(`incorrect`);
          }
     });
});
