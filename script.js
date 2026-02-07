function ustawIkoneMotywu() {
  const btn = document.querySelector(".themeBtn");
  const jasny = document.body.classList.contains("light");
  btn.innerText = jasny ? "☀️" : "🌙";
}

function toggleTheme() {
  // dodaj klasę na moment animacji
  document.body.classList.add("theme-changing");

  // przełącz motyw
  document.body.classList.toggle("light");
  const jasny = document.body.classList.contains("light");
  localStorage.setItem("theme", jasny ? "light" : "dark");
  ustawIkoneMotywu();

  // zdejmij klasę po chwili
  setTimeout(() => {
    document.body.classList.remove("theme-changing");
  }, 650);
}

// Przy starcie: wczytaj zapisany motyw
(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.add("light");
  }
  ustawIkoneMotywu();
})();

function wyslij() {
  const email = document.getElementById("email").value;
  const wiadomosc = document.getElementById("wiadomosc").value;
  const status = document.getElementById("status");

  if (email.trim() === "" || wiadomosc.trim() === "") {
    status.innerText = "Uzupełnij email i wiadomość 🙂";
  } else {
    status.innerText = "Dzięki! Wiadomość została „wysłana” (symulacja) 🚀";
  }
}
