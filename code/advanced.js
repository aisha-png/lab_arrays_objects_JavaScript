/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */


unitedKingdom = [
    {
        name: "Scotland",
        capital: "Edinburgh",
        population: 5454000,
        touristAttractions: [
            "Stirling Castle",
            "Loch Ness"
        ]
    },
    {
        name: "England",
        capital: "London",
        population: 55980000
    },
    {
        name: "Wales",
        capital: "Swansea",
        population: 3163000,
        touristAttractions: [
            "Snowdonia"
        ]
    },
    {
        name: "Northern Ireland",
        capital: "Belfast",
        population: 1885000,
        touristAttractions: [
            "Titanic Museum",
            "Giant's Causeway"
        ]
    }
]


/**
 * Q1. Add some tourist attractions to England
 */

let england = unitedKingdom[1];
england.touristAttractions = ["London Eye", "Big Ben", "Buckingham Palace"];
console.log(england);



/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

let wales = unitedKingdom[2];
wales.capital = "Cardiff";

console.log(wales);



/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */


let northerIreland = unitedKingdom[3];
northernIrelandKeys = Object.keys(northerIreland);
console.log(northernIrelandKeys);



/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, 
 * smallest or somewhere in the middle.
 */

// very long method:

scotland = unitedKingdom[0];
england = unitedKingdom[1];
wales = unitedKingdom[2];
northernIreland = unitedKingdom[3];
scotlandAndEnglandPopulationDifference = scotland.population - england.population;
scotlandAndWalesPopulationDifference = scotland.population - wales.population;
scotlandAndNorthernIrelandPopulationDifference = scotland.population - northerIreland.population;

if (england.population > scotland.population){
    console.log("England has a larger population by " + scotlandAndEnglandPopulationDifference);
}
else {
    console.log("Scotland has a larger population by " + scotlandAndEnglandPopulationDifference);
}

if (wales.population > scotland.population){
    console.log("Wales has a larger population by " + scotlandAndWalesPopulationDifference);
}
else {
    console.log("Scotland has a larger population by " +  scotlandAndWalesPopulationDifference);
}

if (northerIreland.population > scotland.population){
    console.log("Northern Ireland has a larger population by " + scotlandAndNorthernIrelandPopulationDifference);
}
else {
    console.log("Scotland has a larger population by " + scotlandAndNorthernIrelandPopulationDifference);
}

// shorter method:

if (scotland.population > england.population && wales.population && northerIreland.population){
    console.log("Scotland has the largest population of " + scotland.population);
}
else if(scotland.population < england.population && wales.population && northerIreland.population){
    console.log("Scotland has the lowest population");
}
else {
    console.log("Scotland is larger than some cities and smaller than others");
}