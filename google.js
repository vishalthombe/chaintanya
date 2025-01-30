document.getElementById("googleForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;
    const contactMethod = document.querySelector('input[name="contact"]:checked').value;
  
    // Display data in the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Feedback:", feedback);
    console.log("Preferred Contact Method:", contactMethod);
  
    // Optionally show a success message
    alert("Thank you for your feedback!");
  });
  