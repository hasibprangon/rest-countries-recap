const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
console.log(countries[0]);
const allCountriesHTML = countries.map (country =>getCountryHTML(country))
// console.log(allCountriesHTML[0]);
const container = document.getElementById('countries');
container.innerHTML = allCountriesHTML.join(' ');
}

//option2
const getCountryHTML = ({name, flags, capital,region}) =>{

    return `
    <div class="country">
    <img src="${flags.png}">
    <h2>${name.common}</h2>
    <h3>${capital}</h3>
    <h4>continent: ${region}</h4>
    </div>

    `
}

//original
// const getCountryHTML = (country) =>{

//     return `
//     <div class="country">
//     <img src="${country.flags.png}">
//     <h2>${country.name.common}</h2>
//     </div>

//     `
// }

//option-1
// const getCountryHTML = country =>{
    // const {name, flags} = country;
//     return `
//     <div class="country">
//     <img src="${flags.png}">
//     <h2>${name.common}</h2>
//     </div>

//     `
// }


loadCountries()