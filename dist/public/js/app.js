(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Animal = function (_Dynamic) {
	_inherits(Animal, _Dynamic);

	function Animal(name) {
		_classCallCheck(this, Animal);

		console.log('in Animal');

		return _possibleConstructorReturn(this, (Animal.__proto__ || Object.getPrototypeOf(Animal)).call(this, name));
	} // end of contructor


	return Animal;
}(_Dynamic3.default); // end of class


exports.default = Animal;

},{"./Dynamic.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Static2 = require('./Static.js');

var _Static3 = _interopRequireDefault(_Static2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cage = function (_Static) {
	_inherits(Cage, _Static);

	function Cage(name) {
		_classCallCheck(this, Cage);

		console.log('in Cage');

		return _possibleConstructorReturn(this, (Cage.__proto__ || Object.getPrototypeOf(Cage)).call(this, name));
	} // end of contructor


	return Cage;
}(_Static3.default); // end of class


exports.default = Cage;

},{"./Static.js":12}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dynamic = function (_GameObj) {
	_inherits(Dynamic, _GameObj);

	function Dynamic(name) {
		_classCallCheck(this, Dynamic);

		console.log('in Dynamic');

		return _possibleConstructorReturn(this, (Dynamic.__proto__ || Object.getPrototypeOf(Dynamic)).call(this, name));
	} // end of contructor


	return Dynamic;
}(_GameObj3.default); // end of class


exports.default = Dynamic;

},{"./GameObj.js":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EndScreen = function (_Screen) {
	_inherits(EndScreen, _Screen);

	function EndScreen(name) {
		_classCallCheck(this, EndScreen);

		console.log('in EndScreen');

		return _possibleConstructorReturn(this, (EndScreen.__proto__ || Object.getPrototypeOf(EndScreen)).call(this, name));
	}

	return EndScreen;
}(_Screen3.default);

exports.default = EndScreen;

},{"./Screen.js":10}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObj = function () {

	//inherit from generic javascript object;

	function GameObj(name) {
		_classCallCheck(this, GameObj);

		console.log('in GameObj');

		this.name = name;

		this.id = this.setId();
	} // end of constructor

	/**
 *get the unique ID value for an object
 *@returns {string} the unique id, in uuid format.
 */

	_createClass(GameObj, [{
		key: 'getId',
		value: function getId() {

			return this.id;
		}

		/**
  *get the name assigned to this object.
  *@returns {string} the name.
  */

	}, {
		key: 'getName',
		value: function getName() {

			return this.name;
		}

		/**
  *set the object's name to a new value
  *
  */

	}, {
		key: 'setName',
		value: function setName(newName) {

			this.name = newName;
		}

		/** 
      * Generate a unique ID for every game object.
      * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
      */

	}, {
		key: 'setId',
		value: function setId() {
			var d = new Date().getTime();
			if (window.performance && typeof window.performance.now === "function") {
				d += performance.now(); //use high-precision timer if available
			}
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = (d + Math.random() * 16) % 16 | 0;
				d = Math.floor(d / 16);
				return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
			});
			return uuid;
		} // end of setId


	}]);

	return GameObj;
}(); //end of class


exports.default = GameObj;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameScreen = function (_Screen) {
	_inherits(GameScreen, _Screen);

	function GameScreen(name) {
		_classCallCheck(this, GameScreen);

		console.log('in GameScreen');

		return _possibleConstructorReturn(this, (GameScreen.__proto__ || Object.getPrototypeOf(GameScreen)).call(this, name));
	}

	return GameScreen;
}(_Screen3.default);

exports.default = GameScreen;

},{"./Screen.js":10}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HUD = function (_GameObj) {
	_inherits(HUD, _GameObj);

	function HUD(name) {
		_classCallCheck(this, HUD);

		console.log('in HUD');

		return _possibleConstructorReturn(this, (HUD.__proto__ || Object.getPrototypeOf(HUD)).call(this, name));
	} // end of contructor


	return HUD;
}(_GameObj3.default); //end of class


exports.default = HUD;

},{"./GameObj.js":5}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Dynamic) {
	_inherits(Player, _Dynamic);

	function Player(name) {
		_classCallCheck(this, Player);

		console.log('in Player');

		return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, name));
	} // end of contructor


	return Player;
}(_Dynamic3.default); // end of class


exports.default = Player;

},{"./Dynamic.js":3}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _HUD2 = require('./HUD.js');

var _HUD3 = _interopRequireDefault(_HUD2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Score = function (_HUD) {
	_inherits(Score, _HUD);

	function Score(name) {
		_classCallCheck(this, Score);

		console.log('in Score');

		return _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this, name));
	} // end of contructor


	return Score;
}(_HUD3.default); //end of class


exports.default = Score;

},{"./HUD.js":7}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Screen = function (_GameObj) {
	_inherits(Screen, _GameObj);

	function Screen(name) {
		_classCallCheck(this, Screen);

		console.log('in screen');

		return _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).call(this, name));
	} // end of contructor


	return Screen;
}(_GameObj3.default); // end of class


exports.default = Screen;

},{"./GameObj.js":5}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartScreen = function (_Screen) {
	_inherits(StartScreen, _Screen);

	function StartScreen(name) {
		_classCallCheck(this, StartScreen);

		console.log('in StartScreen');

		return _possibleConstructorReturn(this, (StartScreen.__proto__ || Object.getPrototypeOf(StartScreen)).call(this, name));
	}

	return StartScreen;
}(_Screen3.default);

exports.default = StartScreen;

},{"./Screen.js":10}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Static = function (_GameObj) {
	_inherits(Static, _GameObj);

	function Static(name) {
		_classCallCheck(this, Static);

		console.log('in Static');

		return _possibleConstructorReturn(this, (Static.__proto__ || Object.getPrototypeOf(Static)).call(this, name));
	} // end of contructor


	return Static;
}(_GameObj3.default); // end of class


exports.default = Static;

},{"./GameObj.js":5}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trump = function (_Dynamic) {
	_inherits(Trump, _Dynamic);

	function Trump(name) {
		_classCallCheck(this, Trump);

		console.log('in Trump');

		return _possibleConstructorReturn(this, (Trump.__proto__ || Object.getPrototypeOf(Trump)).call(this, name));
	} // end of contructor


	return Trump;
}(_Dynamic3.default); // end of class


exports.default = Trump;

},{"./Dynamic.js":3}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Static2 = require('./Static.js');

var _Static3 = _interopRequireDefault(_Static2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Zoo = function (_Static) {
	_inherits(Zoo, _Static);

	function Zoo(name) {
		_classCallCheck(this, Zoo);

		console.log('in Zoo');

		return _possibleConstructorReturn(this, (Zoo.__proto__ || Object.getPrototypeOf(Zoo)).call(this, name));
	} // end of contructor


	return Zoo;
}(_Static3.default); // end of class


exports.default = Zoo;

},{"./Static.js":12}],15:[function(require,module,exports){
'use strict';

var _GameObj = require('./GameObj.js');

var _GameObj2 = _interopRequireDefault(_GameObj);

var _Screen = require('./Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('./StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('./GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _EndScreen = require('./EndScreen.js');

var _EndScreen2 = _interopRequireDefault(_EndScreen);

var _HUD = require('./HUD.js');

var _HUD2 = _interopRequireDefault(_HUD);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _Static = require('./Static.js');

var _Static2 = _interopRequireDefault(_Static);

var _Zoo = require('./Zoo.js');

var _Zoo2 = _interopRequireDefault(_Zoo);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _Dynamic = require('./Dynamic.js');

var _Dynamic2 = _interopRequireDefault(_Dynamic);

var _Animal = require('./Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Dynamic objects
// master object
console.log('loading game.');

//Static objects


// HUD objects


// Screen objects


window.startscreen = new _StartScreen2.default('ZooKill Start');
window.gameScreen = new _GameScreen2.default('Zookill Game');
window.endScreen = new _EndScreen2.default('Zookill End');
window.score = new _Score2.default('game score object');
window.static = new _Static2.default('Static');
window.dynamic = new _Dynamic2.default('dynamic');
window.zoo = new _Zoo2.default('zoo');
window.cage = new _Cage2.default('cage');
window.Animal = new _Animal2.default('Animal');
window.Trump = new _Trump2.default('Trump');
window.Player = new _Player2.default('Player');

// Create a generic GameObj

//window.obj1 = new GameObj('donald trump');

//window.obj2 = new Screen('start screen');

//window.obj3 = new HUD('game score');

},{"./Animal.js":1,"./Cage.js":2,"./Dynamic.js":3,"./EndScreen.js":4,"./GameObj.js":5,"./GameScreen.js":6,"./HUD.js":7,"./Player.js":8,"./Score.js":9,"./Screen.js":10,"./StartScreen.js":11,"./Static.js":12,"./Trump.js":13,"./Zoo.js":14}]},{},[15])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvRHluYW1pYy5qcyIsIm1vZHVsZXMvanMvRW5kU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9HYW1lT2JqLmpzIiwibW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9IVUQuanMiLCJtb2R1bGVzL2pzL1BsYXllci5qcyIsIm1vZHVsZXMvanMvU2NvcmUuanMiLCJtb2R1bGVzL2pzL1NjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhcnRTY3JlZW4uanMiLCJtb2R1bGVzL2pzL1N0YXRpYy5qcyIsIm1vZHVsZXMvanMvVHJ1bXAuanMiLCJtb2R1bGVzL2pzL1pvby5qcyIsIm1vZHVsZXMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0lBQ3FCLE07OztBQUVwQixpQkFBYSxJQUFiLEVBQW9CO0FBQUE7O0FBRW5CLFVBQVEsR0FBUixDQUFZLFdBQVo7O0FBRm1CLHlHQUlaLElBSlk7QUFRbkIsRSxDQUFDOzs7O3NCQVdEOzs7a0JBckJtQixNOzs7Ozs7Ozs7QUNEckI7Ozs7Ozs7Ozs7OztJQUNxQixJOzs7QUFFcEIsZUFBYSxJQUFiLEVBQW9CO0FBQUE7O0FBRW5CLFVBQVEsR0FBUixDQUFZLFNBQVo7O0FBRm1CLHFHQUlaLElBSlk7QUFRbkIsRSxDQUFDOzs7O3FCQVdEOzs7a0JBckJtQixJOzs7Ozs7Ozs7QUNEckI7Ozs7Ozs7Ozs7OztJQUNxQixPOzs7QUFFcEIsa0JBQWEsSUFBYixFQUFvQjtBQUFBOztBQUVuQixVQUFRLEdBQVIsQ0FBWSxZQUFaOztBQUZtQiwyR0FJWixJQUpZO0FBUW5CLEUsQ0FBQzs7OztzQkFXRDs7O2tCQXJCbUIsTzs7Ozs7Ozs7O0FDRHJCOzs7Ozs7Ozs7Ozs7SUFDcUIsUzs7O0FB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TyxNQUFQLEdBQWdCLHFCQUFXLFFBQVgsQ0FBaEI7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IER5bmFtaWMgZnJvbSAnLi9EeW5hbWljLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hbCBleHRlbmRzIER5bmFtaWMge1xuXG5cdGNvbnN0cnVjdG9yKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIEFuaW1hbCcpO1xuXG5cdFx0c3VwZXIoIG5hbWUgKTtcblxuXHRcdFxuXG5cdH0gLy8gZW5kIG9mIGNvbnRydWN0b3JcbiBcdFxuXG5cblxuXG5cblxuXG5cblxufSAvLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgU3RhdGljIGZyb20gJy4vU3RhdGljLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhZ2UgZXh0ZW5kcyBTdGF0aWMge1xuXG5cdGNvbnN0cnVjdG9yKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIENhZ2UnKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHRcblxuXHR9IC8vIGVuZCBvZiBjb250cnVjdG9yXG4gXHRcblxuXG5cblxuXG5cblxuXG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IEdhbWVPYmogZnJvbSAnLi9HYW1lT2JqLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWMgZXh0ZW5kcyBHYW1lT2JqIHtcblxuXHRjb25zdHJ1Y3RvciggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBEeW5hbWljJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0XG5cblx0fSAvLyBlbmQgb2YgY29udHJ1Y3RvclxuIFx0XG5cblxuXG5cblxuXG5cblxuXG59IC8vIGVuZCBvZiBjbGFzcyIsImltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nICgnaW4gRW5kU2NyZWVuJyk7XG5cblx0c3VwZXIoIG5hbWUgKTtcblxuXHR9XG5cblxuXG5cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU9iaiB7XG5cblx0Ly9pbmhlcml0IGZyb20gZ2VuZXJpYyBqYXZhc2NyaXB0IG9iamVjdDtcblxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gR2FtZU9iaicpO1xuXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblxuXHRcdHRoaXMuaWQgPSB0aGlzLnNldElkKCk7XG5cblx0fSAgLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0LyoqXG5cdCpnZXQgdGhlIHVuaXF1ZSBJRCB2YWx1ZSBmb3IgYW4gb2JqZWN0XG5cdCpAcmV0dXJucyB7c3RyaW5nfSB0aGUgdW5pcXVlIGlkLCBpbiB1dWlkIGZvcm1hdC5cblx0Ki9cblxuXHRnZXRJZCgpIHtcblxuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0LyoqXG5cdCpnZXQgdGhlIG5hbWUgYXNzaWduZWQgdG8gdGhpcyBvYmplY3QuXG5cdCpAcmV0dXJucyB7c3RyaW5nfSB0aGUgbmFtZS5cblx0Ki9cblxuXHRnZXROYW1lKCkge1xuXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblxuXHR9XG5cblx0LyoqXG5cdCpzZXQgdGhlIG9iamVjdCdzIG5hbWUgdG8gYSBuZXcgdmFsdWVcblx0KlxuXHQqL1xuXG5cdHNldE5hbWUoIG5ld05hbWUgKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBuZXdOYW1lO1xuXG5cdH1cblxuXHQvKiogXG4gICAgICogR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGV2ZXJ5IGdhbWUgb2JqZWN0LlxuICAgICAqIEBsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxuICAgICAqL1xuICAgIHNldElkICgpIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjE2KSUxNiB8IDA7XG4gICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkLzE2KTtcbiAgICAgICAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXVpZDtcblxuXG4gICAgfSAvLyBlbmQgb2Ygc2V0SWRcblxuXG5cbn0gIC8vZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBHYW1lU2NyZWVuJyk7XG5cblx0c3VwZXIoIG5hbWUgKTtcblxuXHR9XG5cblxuXG5cblxuXG59IiwiaW1wb3J0IEdhbWVPYmogZnJvbSAnLi9HYW1lT2JqLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhVRCBleHRlbmRzIEdhbWVPYmoge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBIVUQnKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHRcblxuXHR9Ly8gZW5kIG9mIGNvbnRydWN0b3Jcblx0XG5cblxuXG5cbn0vL2VuZCBvZiBjbGFzcyIsImltcG9ydCBEeW5hbWljIGZyb20gJy4vRHluYW1pYy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBEeW5hbWljIHtcblxuXHRjb25zdHJ1Y3RvciggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBQbGF5ZXInKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHRcblxuXHR9IC8vIGVuZCBvZiBjb250cnVjdG9yXG4gXHRcblxuXG5cblxuXG5cblxuXG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IEhVRCBmcm9tICcuL0hVRC5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIEhVRCB7XG5cblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFNjb3JlJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0XG5cblx0fS8vIGVuZCBvZiBjb250cnVjdG9yXG5cdFxuXG5cblxuXG59Ly9lbmQgb2YgY2xhc3MiLCJpbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuIGV4dGVuZHMgR2FtZU9iaiB7XG5cblx0Y29uc3RydWN0b3IoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gc2NyZWVuJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0XG5cblx0fSAvLyBlbmQgb2YgY29udHJ1Y3RvclxuXG5cbiBcdFxuXG5cblxuXG5cblxuXG5cblxufSAvLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0U2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nICgnaW4gU3RhcnRTY3JlZW4nKTtcblxuXHRzdXBlciggbmFtZSApO1xuXG5cdH1cblxuXG5cblxuXG5cbn0iLCJpbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljIGV4dGVuZHMgR2FtZU9iaiB7XG5cblx0Y29uc3RydWN0b3IoIG5hbWUgKSB7XG5cblx0XHRjb25zb2xlLmxvZygnaW4gU3RhdGljJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0XG5cblx0fSAvLyBlbmQgb2YgY29udHJ1Y3RvclxuIFx0XG5cblxuXG5cblxuXG5cblxuXG59IC8vIGVuZCBvZiBjbGFzcyIsImltcG9ydCBEeW5hbWljIGZyb20gJy4vRHluYW1pYy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcnVtcCBleHRlbmRzIER5bmFtaWMge1xuXG5cdGNvbnN0cnVjdG9yKCBuYW1lICkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2luIFRydW1wJyk7XG5cblx0XHRzdXBlciggbmFtZSApO1xuXG5cdFx0XG5cblx0fSAvLyBlbmQgb2YgY29udHJ1Y3RvclxuIFx0XG5cblxuXG5cblxuXG5cblxuXG59IC8vIGVuZCBvZiBjbGFzcyIsImltcG9ydCBTdGF0aWMgZnJvbSAnLi9TdGF0aWMuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vIGV4dGVuZHMgU3RhdGljIHtcblxuXHRjb25zdHJ1Y3RvciggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBab28nKTtcblxuXHRcdHN1cGVyKCBuYW1lICk7XG5cblx0XHRcblxuXHR9IC8vIGVuZCBvZiBjb250cnVjdG9yXG4gXHRcblxuXG5cblxuXG5cblxuXG5cbn0gLy8gZW5kIG9mIGNsYXNzIiwiLy8gbWFzdGVyIG9iamVjdFxuaW1wb3J0IEdhbWVPYmogZnJvbSAnLi9HYW1lT2JqLmpzJztcblxuLy8gU2NyZWVuIG9iamVjdHNcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4vU3RhcnRTY3JlZW4uanMnO1xuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi9HYW1lU2NyZWVuLmpzJztcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSAnLi9FbmRTY3JlZW4uanMnO1xuXG4vLyBIVUQgb2JqZWN0c1xuaW1wb3J0IEhVRCBmcm9tICcuL0hVRC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5cbi8vU3RhdGljIG9iamVjdHNcbmltcG9ydCBTdGF0aWMgZnJvbSAnLi9TdGF0aWMuanMnO1xuaW1wb3J0IFpvbyBmcm9tICcuL1pvby5qcyc7XG5pbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnXG5cbi8vRHluYW1pYyBvYmplY3RzXG5pbXBvcnQgRHluYW1pYyBmcm9tICcuL0R5bmFtaWMuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi9UcnVtcC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcblxuY29uc29sZS5sb2coJ2xvYWRpbmcgZ2FtZS4nKTtcblxud2luZG93LnN0YXJ0c2NyZWVuID0gbmV3IFN0YXJ0U2NyZWVuKCdab29LaWxsIFN0YXJ0Jyk7XG53aW5kb3cuZ2FtZVNjcmVlbiA9IG5ldyBHYW1lU2NyZWVuICgnWm9va2lsbCBHYW1lJyk7XG53aW5kb3cuZW5kU2NyZWVuID0gbmV3IEVuZFNjcmVlbignWm9va2lsbCBFbmQnKTtcbndpbmRvdy5zY29yZSA9IG5ldyBTY29yZSgnZ2FtZSBzY29yZSBvYmplY3QnKTtcbndpbmRvdy5zdGF0aWMgPSBuZXcgU3RhdGljKCdTdGF0aWMnKTtcbndpbmRvdy5keW5hbWljID0gbmV3IER5bmFtaWMoJ2R5bmFtaWMnKTtcbndpbmRvdy56b28gPSBuZXcgWm9vKCd6b28nKTtcbndpbmRvdy5jYWdlID0gbmV3IENhZ2UoJ2NhZ2UnKTtcbndpbmRvdy5BbmltYWwgPSBuZXcgQW5pbWFsKCdBbmltYWwnKTtcbndpbmRvdy5UcnVtcCA9IG5ldyBUcnVtcCgnVHJ1bXAnKTtcbndpbmRvdy5QbGF5ZXIgPSBuZXcgUGxheWVyKCdQbGF5ZXInKTtcblxuXG4vLyBDcmVhdGUgYSBnZW5lcmljIEdhbWVPYmpcblxuLy93aW5kb3cub2JqMSA9IG5ldyBHYW1lT2JqKCdkb25hbGQgdHJ1bXAnKTtcblxuLy93aW5kb3cub2JqMiA9IG5ldyBTY3JlZW4oJ3N0YXJ0IHNjcmVlbicpO1xuXG4vL3dpbmRvdy5vYmozID0gbmV3IEhVRCgnZ2FtZSBzY29yZScpOyJdfQ==
