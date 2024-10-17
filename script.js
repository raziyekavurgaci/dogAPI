document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://api.thedogapi.com/v1/breeds";
  const container = document.getElementById("cards-container");

  const fetchDogBreeds = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      displayCards(data)
    } catch (error) {
      console.error("Hata: ", error);
      container.innerHTML =
        "<p class='text-danger'>Veriler alınırken bir hata oluştu.</p>";
    }
  };

  const displayCards = (breeds) => {
    breeds.forEach((breed) => {
      const card = `
        <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${breed.name}</h5>
                <p class="card-text">${breed.breed_group || "Bilinmiyor"}</p>
                <a href="detail.html?id=${breed.id}" class="btn btn-secondary">Detaylı Bilgi</a>
                </div>
            </div>
        </div>
      `
      container.insertAdjacentHTML("beforeend", card)
    })
  }

  fetchDogBreeds()
});
