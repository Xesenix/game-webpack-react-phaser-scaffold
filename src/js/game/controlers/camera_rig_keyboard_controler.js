class CameraRigKeyboardControler {
	constructor(game, camera, speed) {
		this.game = game
		this.camera = camera
		this.speed = speed
		
		this.prepareControls()
	}
	
	prepareControls() {
		this.controls = this.game.input.keyboard.addKeys({
			left: Phaser.Keyboard.LEFT, 
			right: Phaser.Keyboard.RIGHT, 
			up: Phaser.Keyboard.UP, 
			down: Phaser.Keyboard.DOWN, 
			a: Phaser.Keyboard.A, 
			s: Phaser.Keyboard.S, 
			d: Phaser.Keyboard.D, 
			w: Phaser.Keyboard.W
		})
		
		this.game.input.keyboard.addKeyCapture([ 
			Phaser.Keyboard.LEFT, 
			Phaser.Keyboard.RIGHT, 
			Phaser.Keyboard.UP, 
			Phaser.Keyboard.DOWN
		])
	}
	
	update() {
		this.handleControls()
	}
	
	handleControls() {
		const up = this.controls.up.isDown || this.controls.w.isDown
		const left = this.controls.left.isDown || this.controls.a.isDown
		const right = this.controls.right.isDown || this.controls.d.isDown
		const down = this.controls.down.isDown || this.controls.s.isDown
		const delta = this.game.time.elapsed
		
		if (up) {
			this.camera.y = this.camera.y - this.speed * delta
		} else if (down) {
			this.camera.y = this.camera.y + this.speed * delta
		}
		
		if (left) {
			this.camera.x = this.camera.x - this.speed * delta
		} else if (right) {
			this.camera.x = this.camera.x + this.speed * delta
		}
	}
}

export default CameraRigKeyboardControler