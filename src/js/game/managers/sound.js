class SoundManager {

	soundtrack = null
	
	soundtrackName = null
	
	constructor(game, soundtrackName) {
		this.game = game
		this.soundtrackName = soundtrackName
		
		this.onStateChange()
	}

	onStateChange() {
		if (this.soundtrackName !== null) {
			if (this.soundtrack === null) {
				this.soundtrack = this.game.add.audio(this.soundtrackName)
				this.soundtrack.loopFull()
			}

			this.musicToggleState.then((state) => {
				this.soundtrack.mute = !state
			})
		}
	}

	toggleSoundtrack() {
		return this.musicToggleState.then((state) => {
			this.musicToggleState = !state
			this.onStateChange()
			
			return !state
		})
	}

	get musicToggleState() {
		return this.game.dataStoreManager.get('musicToggleState', true)
	}

	set musicToggleState(value) {
		this.game.dataStoreManager.set('musicToggleState', value)
		
		this.onStateChange()
	}
}

export default SoundManager