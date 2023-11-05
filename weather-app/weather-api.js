

// Define a constant BASE_URL

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const APP_ID = "0c0e4757a5927e6384059db6513e48sphba";
const UNITS = "metric"

// Define a constant API_ID

// Define a constant for UNITS

class WeatherAPI {

  constructURL(userInput) {

    this.apiURL = new URL(API_BASE_URL);

    this.apiURL.searchParams.append("q", userInput);
    this.apiURL.searchParams.append("appid", APP_ID);
    this.apiURL.searchParams.append("units", UNITS);

    console.log(this.apiURL.toString());
  }


  async invokeURL() {

    const responseObj = await fetch(this.apiURL.toString());

    const responseJSON = await responseObj.json();

    return responseJSON;

    // responseObj = await  fetch(url) // 1s / 10s
    // responseJSON = await responseObj.json()

    // return 
    // print (json-response)
  }

}

export { WeatherAPI }
