const cardContainer = document.getElementById("team-info");

async function getUserData() {
  try {
    // Assuming your server endpoint is '/api/get-info' i just created in app.js
    const response = await fetch("/users");
    const data = await response.json();

    data.forEach((user) => {
      // Create a div element for the team member card
      const card = document.createElement("div");
      card.classList.add("team-member");

      // Iterate over user properties and create labeled entries
      for (const key in user) {
        const label = document.createElement("p");
        label.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}:`;
        label.classList.add("label");

        const value = document.createElement("p");
        value.textContent = user[key];
        value.classList.add("value");

        card.appendChild(label);
        card.appendChild(value);
      }

      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

getUserData();
