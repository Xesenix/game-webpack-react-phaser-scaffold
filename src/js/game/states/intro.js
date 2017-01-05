import LabelButton from 'js/game/ui/components/label_button'
import MuteButton from 'js/game/ui/components/mute_button'

class IntroState {
	create() {
		this.game.dataStore.get('audioMute').then((state) => {
			this.game.menuSoundtrack = this.game.sound.play('melody', 1, true)
			this.game.menuSoundtrack.mute = state
		})
		
		this.createUi()
		this.animateUi()
	}
	
	createUi() {
		this.logo = this.game.add.sprite(this.game.world.centerX, 120, 'game-logo')
		this.logo.fixedToCamera = true
		this.logo.anchor.setTo(0.5, 0)

		this.titleText = this.game.add.text(this.game.world.centerX, 360, 'Game Title', { font: '64px ' + this.game.theme.font, fill: '#ffffff', align: 'center'})
		this.titleText.fixedToCamera = true
		this.titleText.anchor.setTo(0.5, 0)

		this.authorText = this.game.add.text(this.game.world.centerX, 440, 'game by Xesenix', { font: '32px ' + this.game.theme.font, fill: '#ffffff', align: 'center'})
		this.authorText.fixedToCamera = true
		this.authorText.anchor.setTo(0.5, 0)

		this.continueButton = new LabelButton(this.game, this.game.world.centerX, 520, 'button', 'continue', () => { this.game.state.start('menu') })
		this.continueButton.fixedToCamera = true
		this.continueButton.label.setStyle({ font: '24px ' + this.game.theme.font, fill: '#000000', align: 'center' }, true)
		this.continueButton.anchor.setTo(0.5, 0.5)
		this.continueButton.width = 256
		this.continueButton.height = 64
		this.world.add(this.continueButton)
		
		this.muteButton = new MuteButton(this.game, this.game.world.width - 10, 10, 'mute')
		this.muteButton.fixedToCamera = true
		this.muteButton.anchor.setTo(1, 0)
		this.muteButton.width = 32
		this.muteButton.height = 32
		this.world.add(this.muteButton)
	}
	
	animateUi() {
		this.game.add.tween(this.logo).from({ y: -20 }, 500, Phaser.Easing.Linear.NONE, true, 0, 0, false)
		this.game.add.tween(this.titleText).from({ y: this.game.world.height }, 500, Phaser.Easing.Linear.NONE, true, 500, 0, false)
		this.game.add.tween(this.authorText).from({ y: this.game.world.height }, 500, Phaser.Easing.Linear.NONE, true, 700, 0, false)
		this.game.add.tween(this.continueButton).from({ alpha: 0.0 }, 500, Phaser.Easing.Linear.NONE, true, 1250, 0, false)
	}
}

export default IntroState