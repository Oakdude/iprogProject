import * as firebase from 'firebase';

const gameModel = function () {
    let finalScore = 0;
    let finalTime = 0;
    let finalContinent = "";



    // Getter methods
    this.getFinalScore = function(){
        return finalScore;
    };

    this.getFinalTime = function(){
        return finalTime;
    };

    this.getFinalContinent = function(){
        return finalContinent;
    };

    this.getAllCountries = function(continent){
        console.log("Got to get all countries");
        var url = "";
        if(continent === "world"){
             url = "https://restcountries.eu/rest/v2/all"
        } else {
             url = "https://restcountries.eu/rest/v2/region/" + continent;
        }
            return fetch(url)
            .then(this.processResponse)
            .catch(this.handleError)
    };

    // API Helper methods
    this.processResponse = function (response) {
        if (response.ok) {
            return response.json()
        }
        throw response;
    };

    this.handleError  = function (error){
        // console.log("got to error handling");

        if (error.json) {
            error.json().then(error => {
                console.error('getAllDishes() API Error:', error.message || error)
            })
        } else {
            console.error('getAllDishes() API Error:', error.message || error)
        }
    };

    this.shuffle = function (array){
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    this.getRandomArrayElement = function (arr){
        //Minimum value is set to 0 because array indexes start at 0.
        var min = 0;
        //Get the maximum value my getting the size of the
        //array and subtracting by 1.
        var max = (arr.length - 1);
        //Get a random integer between the min and max value.
        var randIndex = Math.floor(Math.random() * (max - min)) + min;
        //Return random value.
        return [arr[randIndex], randIndex];
    };

    //refresh game state
    this.setGame = function(answer, countries){

        let answerName = answer[0];
        let answerFlag = answer[1];
        let options= [];
        while (options.length < 3){
            let a = this.getRandomArrayElement(countries);
            a = a[0][0];
            if(options.includes(a)){
                continue;
            } else {
                options.push(a)
            }
        }
        options.push(answerName);
        options = this.shuffle(options);
        return [answerName, answerFlag, options];
    };

    this.getTime = function(startTime) {
        let end = Date.now();
        let time = -(startTime-end)/1000;
        let minutes = Math.floor(time / 60);
        let seconds = time - minutes * 60;
        return minutes.toString().padStart(2, "0") + ":" + Math.round(seconds).toString().padStart(2, "0");
    };


    this.endGame = function(startTime, stateContinent, newScore, results, props){
        sessionStorage.setItem("results", JSON.stringify(results));
        finalTime = this.getTime(startTime);
        finalScore = newScore;
        finalContinent = stateContinent;
        props.history.push('/EndScreen');
    };


    //Test of db methods
    this.writeUserData = function(game, region, name, score, time) {
        const database = firebase.database();
        let ref = database.ref().child(game).child(region);
        ref.push().set({
            name: name,
            score: score,
            time: time
        });
    };

    this.getScoresFromDatabase = function(game, region) {
        const database = firebase.database();
        let regionRef = database.ref().child(game).child(region).orderByChild('time').limitToFirst(10);
        let scores = [];
        regionRef.on('child_added', function(snapshot) {
            console.log("ye");
            scores.push(snapshot.val());
        });

        // console.log("SCORES " + scores);
        return scores;
    };


};

export const modelInstance = new gameModel();

