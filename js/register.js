"use strict";

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const senha = document.getElementById("senha");

function HideShow() {
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
    }
  }



