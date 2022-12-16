const buttonElement = document.getElementById("search-button")

buttonElement.addEventListener('click', getPlayer)

async function getPlayer() {
	const teamName = document.getElementById("team-input")
	const url = `https://api-nba-v1.p.rapidapi.com/players?team=20&season=2021`;

	fetch(url, options)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			const players = data.response
			console.log(players)
			showResult(players,teamName)
		});



	}

	async function getTeamIDByName(teamName) {

	}