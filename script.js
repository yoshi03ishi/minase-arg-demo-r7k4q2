(function () {
  var form = document.querySelector("[data-terminal-form]");
  if (!form) {
    return;
  }

  var input = form.querySelector("[data-code-input]");
  var message = document.querySelector("[data-terminal-message]");
  var correctCode = "MI4040-21704-ARCHIVE";

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var value = (input.value || "").trim().toUpperCase();

    if (value === correctCode) {
      window.location.href = "../archive/index.html";
      return;
    }

    message.textContent = "照合できません。資料を再確認してください。";
  });
})();
