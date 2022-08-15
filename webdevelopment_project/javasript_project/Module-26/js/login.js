document.getElementById("btn-submit").addEventListener("click", function () {
  console.log("hi");

  // email
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  console.log(email);
  // password
  const passwordField = document.getElementById("user-password");
  password = passwordField.value;
  console.log(password);
  // varified email and password
  if (email === "kibria@gmail.com" && password === "5052") {
    window.location.href = "bank.html";
  } else {
    alert("please valid pass and email");
  }
});
