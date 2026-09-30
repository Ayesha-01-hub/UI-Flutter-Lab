const learnMoreButton = document.getElementById("learnMore");

learnMoreButton.addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});

