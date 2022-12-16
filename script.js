const API_URL = "https://api-nba-v1.p.rapidapi.com/"
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c85e38955msh8591f4a365a1b6bp17a39djsnc441b0b2d387',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

const buttonElement = document.getElementById("search-button")
const loadAnimation = document.querySelector('.lds-ellipsis');

buttonElement.addEventListener('click', getTeam)

async function getTeam() {
	const teamName = document.getElementById("team-input").value
	const team = await getTeamIDByName(teamName)
	const url = `https://api-nba-v1.p.rapidapi.com/players?team=${team.id}&season=2021`;

	fetch(url, options)	
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			const players = data.response
			console.log(players)
			showResult(players, teamName)
		});



	}

async function getTeamIDByName(teamName) {
	const url = `https://api-nba-v1.p.rapidapi.com/teams?search=${teamName}`;
	const response = await fetch(url, options)
	const responseJSON = await response.json()
	return responseJSON.response[0]
}

function showResult(players, teamName) {
	const resultDiv = document.getElementById("right-section")

	const h4 = document.createElement("h4")
	h4.append(teamName)
	h4.append()

	resultDiv.append(h4)

	players.forEach(function (player) {
		const ol = document.createElement("ol")
		ol.append(`${player.firstname} ${player.lastname} Height: ${player.height.feets}' ${player.height.inches} Weight: ${player.weight.pounds}`)
		resultDiv.append(ol)
	})
}