const countryName = new URLSearchParams(location.search).get("name");

const nativeName = document.querySelector(".native__name span");
const countryNameElement = document.querySelector(".country__detalils h1");
const population = document.querySelector(".population ");

const flagImg = document.querySelector(".country__details img");
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then((country) => {
    flagImg.scr = country[0].flags.svg;
    countryNameH1.innerText = country.name.common;
    population.innerText = country.population.toLocaleString("en-In");

    if (
      (country.name.nativeNmae.innerText = Object.values(
        country.name.nativeName
      ))
    ) {
    } else {
      nativeName.innerHTML = country.name.common;
    }
    console.log(flagImg);
  });
