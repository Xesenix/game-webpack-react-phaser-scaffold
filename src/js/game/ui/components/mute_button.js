class MuteButton extends Phaser.Button {
	constructor(game, x, y, key, soundManager) {
		
		super(game, x, y, key, () => {
			soundManager.toggleSoundtrack().then(this.updateState)
		})
		
		soundManager.musicToggleState.then(this.updateState)
	}
	
	updateState = (state) => {
		if (state) {
			this.setFrames(1, 0, 1, 0);
		} else {
			this.setFrames(0, 1, 0, 1);
		}
	}
}

module.exports = MuteButton;