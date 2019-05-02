/* API CALLS */
//TODO: Líklegast betra encapsulation að færa API köllin í sér file eins og hjá mér
//veit ekki hvort er betra að kalla á öll og snyrta listann eða kalla bara á continent
class CountryApi {

     static getAllCountries(){
         console.log("Got to get all countries");
        return fetch('https://restcountries.eu/rest/v2/all')
            .then(this.processResponse)
            .catch(this.handleError)
     }

     static getCountriesByContinent(continentFilter){
        return fetch('https://restcountries.eu/rest/v2/region' + continentFilter)
            .then(this.processResponse)
            .catch(this.handleError)
     }


     static processResponse(response) {
         // console.log("got to process response");
        if (response.ok) {
            // console.log("Response is ");
            // console.log(response);
            return response.json()
        }
        throw response;
    };


     static handleError (error) {
         // console.log("got to error handling");

         if (error.json) {
            error.json().then(error => {
                console.error('getAllDishes() API Error:', error.message || error)
            })
        } else {
            console.error('getAllDishes() API Error:', error.message || error)
        }
    }
}


export default CountryApi


