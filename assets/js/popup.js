// Get the button and dropdown content elements
    const button = document.querySelector("#menu");
    const options = document.querySelectorAll(".dropdown-content a");
    options.forEach((option) => {
    option.addEventListener("click", (event) => {
    event.preventDefault();

    if (option.id === "before") {
        button.textContent = "Currently Selected Mode: 'before'";
    } else if (option.id === "after") {
        button.textContent = "Currently Selected Mode: 'after'";
    } else if (option.id === "replace") {
        button.textContent = "Currently Selected Mode: 'replace'";
    }
  });
});