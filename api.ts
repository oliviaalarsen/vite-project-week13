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
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
