import { addGame } from "./api";
import { displayGames } from "./gameList";

const addGameForm = document.getElementById("addGameForm") as HTMLFormElement | null;

export function setupGameForm() {
  if (!addGameForm) return;

  addGameForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const titleInput = document.getElementById("addGameTitle") as HTMLInputElement;
    const imgInput = document.getElementById("addGameImg") as HTMLInputElement;
    const descriptionInput = document.getElementById("addGameDescription") as HTMLInputElement;

    const newGame = {
      title: titleInput.value,
      img: imgInput.value,
      description: descriptionInput.value,
    };

    await addGame(newGame);
    addGameForm.reset();
    displayGames();
  });
}
