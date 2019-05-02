
import CountryApi from '../apis';
import {modelInstance1} from "./gameModel1";


const gameModel = function () {
    let allCountries = [];
    let incorrectOptions = [];
    let correctOptions = [];
    let score = 5;
    let round = 0;
    let gameOver = false;
    let observers = [];


    const printstuff = function(){
        console.log("PRINT");
    };

    this.getScore = function(){
        return score;
    };

    const incrementScore = function () {
        score++;
    };

    const increementRound = function () {
        round++;
    };

    //generate freakar 4 m0guleika
    this.getCorrectOptions = function(){
        for(var i = 0; i < 5; i++){
            console.log(correctOptions[i]);
        }
        console.log(correctOptions);
        return correctOptions;
        // return [
        //     {
        //         name: "Ukraine",
        //         flag: "https://restcountries.eu/data/ukr.sv0g"
        //     },
        //     {
        //         name: "iceland",
        //         flag: "https://restcountries.eu/data/ukr.sv0g"
        //     }
        // ];

    };

    this.getIncorrectOptions = function () {
        return incorrectOptions
    };

    this.setGameIsOver = function () {
        gameOver = true;
    };

    this.isGameOver = function(){
        return gameOver;
    };

     const shuffle = function(a) {
        // console.log("SHUFFLE")
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        // console.log(a);
        return a;
     };

     //TODO: change name to initialise game?
     this.getCountries = function(continentFilter){
        let countries = [];
        let tempCorrect = [];
        let correctCountries = [];
        let inCorrectCountries = [];

        Promise.all([
            CountryApi.getAllCountries()
            //TODO CHANGE THE FUNCTION to handle different cases
            //dæmi líka  um promise í hinu sem er ekki aææ
            //(continentFilter === 'world') ? CountryApi.getAllCountries() : CountryApi.getCountriesByContinent(continentFilter)
        ]).then(data => {
            let list = [];
            for (let country of data[0]){
                list.push([country.name, country.flag])
            }

            return list;
            // console.log(data[0].name);
            // for (let country of data[0]){
            //     // console.log(country.name);
            //     // countries.push([country.name, country.flag])
            //     countries.push({
            //         name: country.name,
            //         flag: country.flag
            //     })
            // }
            //
            // shuffle(countries);
            // console.log(countries);
            //
            // tempCorrect = [...countries.splice(0,10)];
            //
            // // correctOptions = [...allCountries.slice(0,10)];
            // // incorrectOptions = [...allCountries.splice(10)];
            // // allCountries = [...countries];
            // // correctOptions = [...countries.slice(0,10)];
            // // incorrectOptions = [...countries.splice(5)];
            // // for (let i = 0; i < 10; i++){
            // //     // correctOptions.push("hallo");
            // //     // correctOptions.push(countries[i]);
            // //     correctOptions.push({
            // //         name:countries[i].name,
            // //         flag:countries[i].flag
            // //     })
            // // }
            // for (let i = 10; i < countries.length; i++){
            //     // console.log(country.name);
            //     incorrectOptions.push(countries[i]);
            // }
            //
            // correctOptions = Object.assign({}, tempCorrect);
            // console.log(tempCorrect);
            // console.log(correctOptions);
            // return countries;
        }).then(countries => {
            // allCountries = [...countries];
            // correctOptions = [...allCountries.slice(0,10)];
            // incorrectOptions = [...allCountries.splice(5)];

            let all = [...countries];

            //ÞETTA VIRKAR í upprunalega dótinu
            modelInstance1.shuffle(all);
            // correctCountries = [...all].slice(0,10);
            // inCorrectCountries = [...all].splice(10);
            correctOptions = [...all].slice(0,10);
            incorrectOptions = [...all].splice(10);
            console.log("CORRECT AFTER SLICE");
            console.log(correctOptions);
            console.log("INCORRECT AFTER SPLICE");
            console.log(inCorrectCountries);
            //TODO: dont' know what to put here
            //Kannski er það hérna sem ég ætti að búa til fylkið?

            // console.log(error);
        });
        console.log(countries);

        // console.log(allCountries);
        console.log("country length í hinum " + countries.length)

        // console.log(correctOptions);
        // console.log(incorrectOptions);


         return [correctCountries, inCorrectCountries];
    };

    //   this.initialiseGame = function(continentFilter){
    //     console.log("Got to intitialise");
    //     // const countries = () => getCountries(continentFilter);
    //     // countries();
    //       //
    //       //
    //      let countries = [];
    //      countries = getCountries();
    //
    //     // var shuffledCountries = ['a', 'b', 'c', 'd', 'e', 'f'];
    //
    //     // let shuffledCountries = shuffle(countries);
    //
    //     // shuffle(shuffledCountries);
    //     // shuffle(countries);
    //     console.log(countries);
    //     let correct = countries.slice(0,10);
    //     let tempIncorrect = countries.splice(10);
    //     console.log(correct);
    //     console.log(tempIncorrect);
    //     //shuffle array
    //
    //     //take 10 first as answers
    //
    //     //rest is incorrect
    // };



// Observer pattern


    this.addObserver = function (observer) {
        observers.push(observer);
    };

    this.removeObserver = function (observer) {
        observers = observers.filter(o => o !== observer);
    };

    const notifyObservers = function (code) {
        observers.forEach(o => o.update(code));
    };
};




export const modelInstance = new gameModel();

//helper function for shuffling array
// function shuffle(a) {
//     for (let i = a.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [a[i], a[j]] = [a[j], a[i]];
//     }
//     console.log(a);
//     return a;
// }

// function shuffle(array) {
//     console.log("HERE");
//     var currentIndex = array.length, temporaryValue, randomIndex;
//
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//
//         // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//
//         // And swap it with the current element.
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }
//
//     console.log(array);
//
//     return array;
// }


//processa litstann hér og hreinsa?
//Ætli þetta þurfi allt að vera promises? Frá fyrsta kalli
//ætti að koma tilbaka processed sem json
// function getCountries(continentFilter){
//     let countries = [];
//     Promise.all([
//         CountryApi.getAllCountries()
//         //TODO CHANGE THE FUNCTION to handle different cases
//         //(continentFilter === 'world') ? CountryApi.getAllCountries() : CountryApi.getCountriesByContinent(continentFilter)
//     ]).then(data => {
//         // console.log(data[0].name);
//         for (let country of data[0]){
//             // console.log(country.name);
//             countries.push([country.name, country.flag])
//         }
//         shuffle(countries);
//
//         return countries;
//     }).catch(() => {
//         //TODO: dont' know what to put here
//     });
//     return countries;
// }


// export function initialiseGame(continentFilter){
//     // console.log("Got to intitialise");
//     // const countries = () => getCountries(continentFilter);
//     // countries();
//     let countries = getCountries(continentFilter);
//
//     // var shuffledCountries = ['a', 'b', 'c', 'd', 'e', 'f'];
//
//     // let shuffledCountries = shuffle(countries);
//
//     // shuffle(shuffledCountries);
//     // shuffle(countries);
//     console.log(countries);
//     let correct = countries.slice(0,10);
//     let tempIncorrect = countries.splice(10);
//     console.log(correct);
//     console.log(tempIncorrect);
//     //shuffle array
//
//     //take 10 first as answers
//
//     //rest is incorrect
// }

