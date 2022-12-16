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
			showResult(players, teamName)
		});



	}

	function showResult(players, teamName) {
		const resultDiv = document.getElementById("right-section")

		const h4 = document.createElemetnbyId("right-section")
		h4.append(teamName)

		resultDiv.append(h4)

		players.forEach(function (player) {
			const ol = document.createElement("ol")
			ol.append(`${player.firstname} ${player.lastname}`)
		})
	}

