let modal = {};

modal.createModal = ()=>{

  // let container     = document.querySelector(".container");
  let panel         = document.querySelector('.panel');
  let edit          = document.querySelector("#edit");
  let modal         = document.querySelector(".modal");
  let closeButton   = document.querySelector("#close");

  edit.addEventListener("click", (e) => {
    panel.style.opacity = "0.6";
    panel.style.zIndex = "-1";
    modal.style.display = "flex";
    document.body.appendChild(modal);
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    panel.style.opacity = "1";
    panel.style.zIndex = "1";
  });
};

module.exports = modal;
