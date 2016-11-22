// master object
import GameObj from './GameObj.js';

// Screen objects
import Screen from './Screen.js';
import StartScreen from './StartScreen.js';
import GameScreen from './GameScreen.js';
import EndScreen from './EndScreen.js';

// HUD objects
import HUD from './HUD.js';
import Score from './Score.js';

//Static objects
import Static from './Static.js';
import Zoo from './Zoo.js';
import Cage from './Cage.js'

//Dynamic objects
import Dynamic from './Dynamic.js';
import Animal from './Animal.js';
import Trump from './Trump.js';
import Player from './Player.js';

console.log('loading game.');

window.startscreen = new StartScreen('ZooKill Start');
window.gameScreen = new GameScreen ('Zookill Game');
window.endScreen = new EndScreen('Zookill End');
window.score = new Score('game score object');
window.static = new Static('Static');
window.dynamic = new Dynamic('dynamic');
window.zoo = new Zoo('zoo');
window.cage = new Cage('cage');
window.Animal = new Animal('Animal');
window.Trump = new Trump('Trump');
window.Player = new Player('Player');


// Create a generic GameObj

//window.obj1 = new GameObj('donald trump');

//window.obj2 = new Screen('start screen');

//window.obj3 = new HUD('game score');