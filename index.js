const API_URL = "https://try.blinkofai.io/api/chat/query_email";

function changeItem() {
  const radios = document.querySelectorAll('input[name="slider"]');
  let currentIndex = Array.from(radios).findIndex((radio) => radio.checked);

  // Uncheck current item
  radios[currentIndex].checked = false;

  // Increment index or loop back to the first item if at the end
  currentIndex = (currentIndex + 1) % radios.length;

  // Check next item
  radios[currentIndex].checked = true;
}

// Periodically change the checked item every 1 second
setInterval(changeItem, 3000);

const sendMail = (param) => {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("content").value;

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      alert("Your message has been sent successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while sending your message!");
    });

  // const subject = `A query from ${name}`;
  // const body = `Phone Number: ${message}\n\nMessage: ${content}`;

  // window.open(`mailto:info@blinkofai.io?subject=${subject}&body=${body}`);
};
