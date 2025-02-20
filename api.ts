const API_URL = "http://localhost:3000/games";

export async function fetchGames() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function addGame(game: { title: string; img: string; description: string }) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(game),
  });
  return response.json();
}

export async function deleteGame(id: string) {
  if (!id) {
    console.error("Error: No ID provided for delete request.");
    return;
  }

  console.log(`DELETE request for: http://localhost:3000/games/${id}`); // Debugging

  const response = await fetch(`http://localhost:3000/games/${id}`, { method: "DELETE" });

  if (response.status === 404) {
    console.error(`Game with ID ${id} not found.`);
    return;
  }

  if (response.ok) {
    console.log(`Game with ID ${id} deleted successfully.`);
  } else {
    console.error(`Failed to delete game with ID ${id}. Status: ${response.status}`);
  }
}
