import { fetchGames, deleteGame } from "./api";

const cardContainer = document.getElementById("content") as HTMLElement | null;

export async function displayGames() {
  if (!cardContainer) return;
  cardContainer.innerHTML = "";

  const games = await fetchGames();
  games.forEach((game: { id: string; title: string; img: string; description: string }) => {
    const card = document.createElement("div");
    card.classList.add("card", "bg-secondary", "text-white", "m-2");
    card.style.width = "18rem";
    card.innerHTML = `
      <img src="${game.img || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${game.title}">
      <div class="card-body">
        <h5 class="card-title">${game.title}</h5>
        <p class="card-text">${game.description}</p>
        <button class="btn btn-danger" data-id="${game.id}">Delete</button>
      </div>
    `;

    const deleteButton = card.querySelector(".btn-danger") as HTMLButtonElement;
    deleteButton.addEventListener("click", async () => {
      await deleteGame(game.id);
      displayGames();
    });

    cardContainer.appendChild(card);
  });
}
