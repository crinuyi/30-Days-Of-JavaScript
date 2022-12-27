import countries from './countries.js';
import webTechs from './web_techs.js';

let country = 'Ethiopia'
if(countries.includes(country))
    console.log(country.toUpperCase())
else countries.push(country)
console.log(countries)

let webTech = 'Sass'
if(webTechs.includes(webTech))
    console.log('Sass is a CSS preprocess')
else webTechs.push(webTech)
console.log(webTechs)