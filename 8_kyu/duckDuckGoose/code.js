function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name
}

function duckDuckRecursion(players, goose) {
  if(goose - 1 >= players.length) {
    goose -= players.length;
    duckDuckGoose(players, goose)
  } else {
    answer = goose;
  }
  return players[answer - 1].name;
}