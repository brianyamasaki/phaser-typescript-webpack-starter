/// <reference path="../../../node_modules/phaser/typescript/phaser.d.ts"/>

import { RainbowText } from '../objects/RainbowText';

export class GameOver extends Phaser.State {

	init() {

	}

	preload() {

	}

	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		let text = new RainbowText(this.game, center.x, center.y, "Game Over");
		text.anchor.set(0.5);
	}

	update() {
		
	}

}

