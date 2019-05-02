const gameModel1 = function () {

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
        // console.log("answer:", answer);

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
        // console.log(time);
        let minutes = Math.floor(time / 60);
        let seconds = time - minutes * 60;
        return minutes.toString().padStart(2, "0") + ":" + Math.round(seconds).toString().padStart(2, "0");
    }

};

export const modelInstance1 = new gameModel1();

