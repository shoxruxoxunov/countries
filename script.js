const countriesContainer = document.querySelector("section");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((conuntry) => {
      const countryCard = document.createElement("a");
      countryCard.classList.add("country__card");
      countryCard.href = `http://127.0.0.1:5500/country.html? name =${conuntry.name.common}`;

      countryCard.innerHTML = `<img src="${conuntry.flags.svg}" alt="Flag" />
        <div class="card__text">
          <h3 class="">${conuntry.name.common}</h3>
          <p><b>Population: </b>${conuntry.population.toLocaleString(
            "en-In"
          )}</p>
          <p><b>Region: </b>${conuntry.continents}</p>
          <p><b>Capital: </b>${conuntry.capital}</p>
        </div>`;
      countriesContainer.append(countryCard);
    });
  });
