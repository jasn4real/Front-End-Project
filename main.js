
let clubData = []

fetch("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table", {
  headers: {
    "X-RapidAPI-Key": "c89ba9735fmsha3985b562b83910p192e47jsn20f3201fe926",
    "X-RapidAPI-Host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
  },
})
  .then((response) => response.json())
  .then((json) => {
    clubData = json
    loadTableData(clubData);
    console.log(json);
  })
  .catch((error) => {
    console.log(error);
  });


  

//   window.onload = () => {
//     loadTableData(clubData)
//   };

  function loadTableData(clubData) {
    const tableBody = document.getElementById('tableData');
    let dataHTML = '';

    console.log(clubData)
    for(let club of clubData.records) {
        dataHTML += `<tr><td><a href="team.html">${club.team}</a></td><td>${club.played}</td><td>${club.win}</td><td>${club.draw}</td><td>${club.loss}</td><td>${club.goalsFor}</td><td>${club.goalsAgainst}</td><td>${club.points}</td></tr>`
        console.log(club)
    }
    console.log(dataHTML)

    tableBody.innerHTML = dataHTML;
  }

  