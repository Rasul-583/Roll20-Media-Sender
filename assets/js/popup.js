    // Get the button and dropdown content elements
    const button = document.querySelector("menu");
    const options = document.querySelectorAll(".dropdown-content a");
options.forEach((option) => {
  option.addEventListener("click", (event) => {
    event.preventDefault();
    
    if (option.id === "before") {
        button.textContent = event.target.textContent;
    } else if (option.id === "after") {
      // do something if "After" is clicked
    } else if (option.id === "replace") {
      // do something if "Replace" is clicked
    }
  });
});