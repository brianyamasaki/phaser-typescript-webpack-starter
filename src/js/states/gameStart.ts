/// <reference path="../../../node_modules/phaser/typescript/phaser.d.ts"/>

import { RainbowText } from '../objects/RainbowText';

export class GameStart extends Phaser.State {
	text:RainbowText;

	init() {

	}

	preload() {

	}

	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		this.text = new RainbowText(this.game, center.x, center.y, "Phaser TypeScript\n Click to continue");
		this.text.anchor.set(0.5);		
	}

	exitState() {
		this.text.kill();
		this.game.state.start('GameOver');
	}

	update() {
		if (this.game.input.mousePointer.isDown) {
			this.exitState();
		}
	}

}

