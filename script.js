/* 1 */
const fruitObj = {
    apple:10,
    orange:8,
    pear: 7,
}

for (const key in fruitObj) {
    console.log(key + " : " + fruitObj[key]);
}

console.log(" ");

/* 2 */





/* 3 */

const bookInfo = {
    name: "три товарища",
    writer: "Remark",
    year: "1992"
}

for (const key in bookInfo) {
    console.log(key + " - " + bookInfo[key]);
}

console.log(" ");

/* 4 */


const countryInfo = {
    country: "Ukraine",
    ploshcha: "603,628 km²"
}


console.log(countryInfo.country, " - " , countryInfo.ploshcha);

/* for (const key in countryInfo) {
    console.log(countryInfo.country, " - " ,countryInfo.ploshcha);
} */


console.log(" ");

/* 5 */


const films = {
    fightClub: 1999,
    jsFilm: 2006,
    verstkaFilm: 2009,
    toduduFilm: 2010,
    bibipFilm:2002
}

for (const key in films) {
    if (films[key] >= 2005 && films[key] <= 2010) {
        console.log(key, "-", films[key]);
    }
}

console.log(" ");


/* 6 */


const countries = {
    ukraine: "lviv",
    mexica: "mexico",
    georgia: "batumi",
    poland:"krakov",
    usa:"los-angeles"
}

for (const key in countries) {
    console.log(key, " - ", countries[key]);
}

console.log(" ");

/* 7 */

const animals = {
    man:"ssavec",
    cotik:"cats",
    sobachka:"dogs",
    gorobchik: "birds"
}

for (const key in animals) {
    console.log(key, " - ", animals[key]);
}

console.log(" ");

/* 8 */

const actors = {
    dicaprio: 1997,
    robbie: 1990,
    garfield:1989 , 
    jonson:1992
}

for (const key in actors) {
    console.log(key, " - ", actors[key]);
}

console.log(" ");

 /* 9 */


 const rockBands = {
    wezeer: 1996,
    dzhizus: 2017,
    grajdanskayaOborona: 1983,
    radiohead: 1991
 }

for (const key in rockBands) {
    console.log(key, " - ", rockBands[key]);
}


console.log(" ");

/* 10 */

const objArr = {
    ujastic: ["molchanie jagniat'", "13 istoriy", "afgan"],
    cool: ["salo'", "chelovecheskaya mnogonoshka", "devochka Ueyni"]
}

for (const key in objArr) {
    console.log(key, objArr[key]);
}