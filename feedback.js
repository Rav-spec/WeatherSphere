gsap.from("header", { opacity: 0, duration: 1, delay: 0.5, y: -50 });
gsap.from(".form-container", { opacity: 0, duration: 1, delay: 1, y: 50 });
gsap.from("footer", { opacity: 0, duration: 1, delay: 1.5, y: 50 });

document.getElementById("submitButton").addEventListener("click", function(event) {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all required fields.");
    event.preventDefault();
  }
})
