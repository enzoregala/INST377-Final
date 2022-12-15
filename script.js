const fetch = require('node-fetch');

const url = 'https://api-nba-v1.p.rapidapi.com/players?team=1&season=2021';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c85e38955msh8591f4a365a1b6bp17a39djsnc441b0b2d387',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

fetch("https://api-nba-v1.p.rapidapi.com/players?id=265", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
