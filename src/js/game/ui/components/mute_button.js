class MuteButton extends Phaser.Button {
	constructor(game, x, y, key) {
		super(game, x, y, key, () => {
			game.dataStore.get('audioMute').then((state) => {
				state = !state
				game.dataStore.set('audioMute', state)
			})
		})
		
		this.game.dataStore.watcher('audioMute').add(this.updateState)
		this.game.dataStore.get('audioMute').then(this.updateState)
	}
	
	updateState = (state) => {
		if (state) {
			this.setFrames(0, 1, 0, 1)
		} else {
			this.setFrames(1, 0, 1, 0)
		}
		
		this.game.sound.mute = state
	}
	
	destroy() {
		this.game.dataStore.watcher('audioMute').remove(this.updateState)
		super.destroy()
	}
}

module.exports = MuteButton;