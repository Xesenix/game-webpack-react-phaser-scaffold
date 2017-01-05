import LabelButton from 'js/game/ui/components/label_button'
import MuteButton from 'js/game/ui/components/mute_button'

class MenuState {
	init() {
		this.menuItems = []
	}
	
	create() {
		// remember to restore size when getting back from play state
		this.game.world.setBounds(0, 0, this.game.width, this.game.height)
		
		if (this.game.menuSoundtrack === null) {
			this.game.menuSoundtrack = this.game.sound.play('melody', 1, true)
		} else {
			this.game.menuSoundtrack.resume()
		}
		
		this.createBackground()
		this.createUi()
	}
	
	createBackground() {
		this.game.stage.backgroundColor = '#000000'
		
		this.sprite = this.game.add.sprite(this.game.world.centerX / 2, 220, 'game-logo')
		this.sprite.fixedToCamera = true
		this.sprite.anchor.setTo(0.5, 0.5)

		this.sprite.angle = -5
		this.game.add.tween(this.sprite).to({angle: 5}, 1000, Phaser.Easing.Linear.NONE, true, 0, 1000, true)
	}
	
	createUi() {
		this.createMenuItem('start', this.onStartClick)
		this.createMenuItem('full screen', this.onToggleFullScreen)
		
		this.muteButton = new MuteButton(this.game, this.game.world.width - 10, 10, 'mute', this.game.soundManager)
		this.muteButton.fixedToCamera = true
		this.muteButton.anchor.setTo(1, 0)
		this.muteButton.width = 32
		this.muteButton.height = 32
		this.world.add(this.muteButton)
	}
	
	onStartClick = () => {
		this.game.state.start('play')
	}
	
	onToggleFullScreen = () => {
		if (this.game.scale.isFullScreen) {
			this.game.scale.stopFullScreen()
		} else {
			this.game.scale.startFullScreen(false)
		}
	}
	
	createMenuItem(label, callback) {
		const menuItem = new LabelButton(this.game, 1.5 * this.game.world.centerX, this.menuItems.length * 64 + 120, 'button', label, callback)
		menuItem.fixedToCamera = true
		menuItem.label.setStyle({ font: '24px ' + this.game.theme.font, fill: '#000000', align: 'center' }, true)
		menuItem.width = 256
		menuItem.height = 60
		
		this.world.add(menuItem)
		this.menuItems.push(menuItem)
	}
}

export default MenuState