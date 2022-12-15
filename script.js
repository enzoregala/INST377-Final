const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c85e38955msh8591f4a365a1b6bp17a39djsnc441b0b2d387',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

fetch('https://api-nba-v1.p.rapidapi.com/teams?code={team-input}', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));