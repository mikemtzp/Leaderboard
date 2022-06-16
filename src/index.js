import './style.css';
import refreshScores from './modules/refresh-list.js';
import { submitScore } from './modules/submit.js';
// import createGame from "./modules/game.js";

const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = 'cKeZeqp8lY4SrD7bSs3w';
const refreshBtn = document.getElementById('refresh');

// Use to generate a new gameId
// createGame(api)

refreshScores(api, gameId);
submitScore(api, gameId);

refreshBtn.addEventListener('click', () => {
  refreshScores(api, gameId);
});
