const form = document.getElementById("contactForm");
const responseDiv = document.getElementById("response");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  try {
    const res = await fetch("http://localhost:2007/contact-us", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    responseDiv.innerText = result.message;
    form.reset();
  } catch (error) {
    console.error(error);
    responseDiv.innerText = "Error sending form!";
  }
});
