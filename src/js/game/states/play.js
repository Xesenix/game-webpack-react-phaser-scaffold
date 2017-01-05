import CameraRigKeyboardControler from 'js/game/controlers/camera_rig_keyboard_controler'
import CameraRigMouseControler from 'js/game/controlers/camera_rig_mouse_controler'

import ObservedValue from 'js/game/utils/observed_value'

class GameState {
	create() {
		this.game.time.advancedTiming = true
		
		this.prepareWorld()
		this.prepareCamera()
		this.prepareControls()
	}
	
	prepareWorld() {
		this.game.world.setBounds(0, 0, 4000, 4000)
		
		this.game.add.sprite(300, 100, 'game-logo')
		
		this.infoText = this.game.add.text(20, 20, 'Drag with centre mouse button or use arrows a/s/d/w.\nEsc to go back to menu R to restart.', { font: '32px ' + this.game.theme.font, fill: '#666666', align: 'left'})
		this.infoText.anchor.setTo(0, 0)
	}
	
	prepareCamera() {
		this.cameraKeyboardControler = new CameraRigKeyboardControler(this.game, this.game.camera, 1)
		this.cameraMouseControler = new CameraRigMouseControler(this.game, this.game.camera, 8)
		
		const { x , y } = this.game.camera.view
		
		this.cameraPositionObserver = new ObservedValue({x, y})
		this.onViewChanged = this.cameraPositionObserver
	}
	
	prepareControls() {
		this.controls = this.game.input.keyboard.addKeys({
			restart: Phaser.KeyCode.R,
			esc: Phaser.KeyCode.ESC
		})
		
		this.controls.restart.onDown.add(() => {
			this.game.state.start('play', true, false)
		})
		
		this.controls.esc.onDown.add(() => {
			this.game.state.start('menu')
		})
		
		this.game.input.keyboard.addKeyCapture([ 
			Phaser.KeyCode.ESC
		])
	}
	
	update() {
		this.cameraKeyboardControler.update()
		this.cameraMouseControler.update()
	}
	
	render() {
		this.game.debug.text('FPS: ' + (this.game.time.fps || '--'), 10, 15, "#ffffff")
	}
}

export default GameState