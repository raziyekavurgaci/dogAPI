document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://api.thedogapi.com/v1/breeds";
  const container = document.getElementById("detail-container");
  const getBreedIdFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  };

  const fetchBreedDetail = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`);
      const data = await response.json();
      console.log(data);
      displayBreed(data)
    } catch (error) {
      console.error("Hata: ", error);
      container.innerHTML =
        "<p class='text-danger'>Veriler çekilirken bir hata oluştu</p>";
    }
  };

  const displayBreed = (breed) => {
    const detailHTML = `
      <div class="col-md-6">
        <h2>${breed.name}</h2>
        <p>Köpek Grubu: ${breed.breed_group}</p>
        <p><strong>Temel Özellikler:</strong></p>
        <ul>
          <li>Boy: ${breed.height.metric} cm</li>
          <li>Ağırlık: ${breed.weight.metric} kg</li>
          <li>Yaşam Süresi: ${breed.life_span}</li>
        </ul>
        <p>Açıklama: ${breed.temperament}</p>
      </div>
    `
    container.innerHTML = detailHTML
  }

  const breedID = getBreedIdFromURL()
  if (breedID) {
    fetchBreedDetail(breedID)
  } else {
    container.innerHTML = "<p class='text-danger'>Geçersiz ID.</p>"
  }
});
