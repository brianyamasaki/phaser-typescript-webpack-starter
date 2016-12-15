/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts"/>

import { GameStart } from './states/GameStart';
import { GameOver } from './states/gameOver';

class Game extends Phaser.Game {

	constructor() {
		super(500, 500, Phaser.AUTO, 'content', null);
		this.state.add('GameStart', GameStart, false);
		this.state.add('GameOver', GameOver, false);
		this.state.start('GameStart');
	}

}

new Game();
