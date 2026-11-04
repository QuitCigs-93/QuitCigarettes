// CLEAR THE AIR UK
// Website interactive features

// MOBILE NAVIGATION

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    navigation.classList.toggle("is-open", !isOpen);

    menuButton.textContent = isOpen ? "☰" : "✕";

  });

}


// CAMPAIGN FEEDBACK FORM

const campaignForm =
  document.querySelector("#campaign-form");

if (campaignForm) {

  campaignForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const priority =
      document.querySelector("#priority").value;

    const message =
      document.querySelector("#form-message");

    if (!priority) {

      message.textContent =
        "Please select a campaign objective.";

      return;

    }

    message.textContent =
      "Thank you for supporting Clear the Air! " +
      "Your chosen priority is: " + priority + ".";

    campaignForm.reset();

  });

}