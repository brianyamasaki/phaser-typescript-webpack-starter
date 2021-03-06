/// <reference path="../../../node_modules/phaser/typescript/phaser.d.ts"/>

import { RainbowText } from '../objects/RainbowText';

export class GameStart extends Phaser.State {
	rainbowText:RainbowText;
	text:Phaser.Text;

	init() {

	}

	preload() {

	}

	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		let style = { font: "bold 14px Arial", fill: "#fff", align: 'center'};
		this.rainbowText = new RainbowText(this.game, center.x, center.y, "Phaser TypeScript");
		this.rainbowText.anchor.set(0.5);		
		this.text = this.game.add.text(center.x - 60, center.y + 50, 'Click to Continue', style);
	}

	cleanup() {
		this.rainbowText.kill();
		this.text.kill();
	}

	update() {
		if (this.game.input.mousePointer.isDown) {
			this.cleanup();
			this.game.state.start('GameOver');
		}
	}

}

