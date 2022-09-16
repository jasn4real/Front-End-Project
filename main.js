fetch("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table", {
  headers: {
    "X-RapidAPI-Key": "c89ba9735fmsha3985b562b83910p192e47jsn20f3201fe926",
    "X-RapidAPI-Host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.log(error);
  });