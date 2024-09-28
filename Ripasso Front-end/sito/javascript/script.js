// Selezione bottone
const btn = document.body.querySelector("button");
const btnReset = document.body.querySelector("button.reset");
const btnModifica = document.body.querySelector("button.modifica");

btn.addEventListener("click", function () {
  // Funzione per creare e centrare il finestra
  const width = screen.width / 5; // 20% dello schermo senza usare i pixel
  const height = screen.height / 5;
  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;
  let newWindow = document.open(
    "",
    "",
    "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top
  );

  finestra = newWindow.document;

  let styleCss = finestra.createElement("link");
  styleCss.rel = "stylesheet";
  styleCss.href = "css/style.css";

  finestra.head.appendChild(styleCss);

  let form = newWindow.document.createElement("form");
  form.classList = "container";

  let user = finestra.createElement("input"); // User name input
  user.type = "text";
  user.placeholder = "Nome utente";
  user.required = true;

  let pwd = finestra.createElement("input"); // Password Input
  pwd.type = "password";
  pwd.placeholder = "Password";
  pwd.required = true;

  let submit = finestra.createElement("input"); // Submit button
  submit.type = "submit";
  submit.value = "Invia Dati";

  finestra.body.appendChild(form); // l'elemento viene aggiunto
  form.appendChild(user);
  form.appendChild(pwd);
  form.appendChild(submit);

  let script2 = newWindow.document.createElement("script");
  script2.src = "javascript/script2.js";
  finestra.body.appendChild(script2);

  submit.addEventListener("click", function () {
    location.reload();
    newWindow.close();
  });
});

btnReset.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

btnModifica.addEventListener("click", function () {
  for (let i = 0; i < 10; i++) {
    let p = document.createElement("p");
    p.textContent = "testo generato";
    p.style.backgroundColor = "#A1F1C1";

    // Select the content div by its id and append the new paragraph to it
    let contentDiv = document.getElementById("content");
    contentDiv.appendChild(p);
  }
});

if (localStorage.getItem("username") == null) {
  localStorage.setItem("username", "username");
  localStorage.setItem("password", "pwd");
}
document.body.querySelector("p").textContent =
  "Nome: " +
  localStorage.getItem("username") +
  " --- " +
  "Password: " +
  localStorage.getItem("password");
