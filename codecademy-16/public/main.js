// Foursquare API Info
const clientId = 'JSTRL1CHPAS1ODYBMCIREPR1QFBGZ5QFFG0PWEMGLTPQ4JBV';
const clientSecret = '41HW4SGLXAAZYX0325KD1EY22SQJ2IOFNR22TVGFYJRCXNIY';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = 'c9f3f0daf9b31f21f1c7978ef4fccd20';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20211014`;
  try {
    const response = await fetch(urlToFetch, {
      method: 'GET'
    });
    if (response.ok)
    {
      const jsonResponse = await response.json();
      const venues = jsonResponse.response.groups[0].items.map(parameter => parameter.venue);
      return venues
    }
  } catch(error) { console.log(error.message)}
}

const getForecast = async () => {
const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;
  console.log(urlToFetch);
  try{
    const response = await fetch(urlToFetch);
    if (response.ok)
    {
      jsonResponse = await response.json(response);
      return jsonResponse;
    } 
      }catch(error){console.log(error.message)}
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  const weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
};

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => renderVenues(venues))
  getForecast().then(forecast => renderForecast(forecast));
  return false;
}

$submit.click(executeSearch)