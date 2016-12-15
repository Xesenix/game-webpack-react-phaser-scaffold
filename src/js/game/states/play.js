class GameState {
	create() {
		this.game.time.advancedTiming = true
		
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
			w: Phaser.Keyboard.W,
			space: Phaser.Keyboard.SPACEBAR,
			restart: Phaser.KeyCode.R,
			esc: Phaser.KeyCode.ESC
		})
		
		this.controls.restart.onDown.add(() => {
			this.this.game.state.start('play', true, false)
		}, this);
		
		this.controls.esc.onDown.add(() => {
			this.game.state.start('menu')
		}, this);
		
		this.game.input.keyboard.addKeyCapture([ 
			Phaser.Keyboard.LEFT, 
			Phaser.Keyboard.RIGHT, 
			Phaser.Keyboard.UP, 
			Phaser.Keyboard.DOWN,
			Phaser.Keyboard.SPACEBAR,
			Phaser.KeyCode.ESC
		])
	}
	
	update() {
		const up = this.controls.up.isDown || this.controls.w.isDown || this.controls.space.isDown
		const left = this.controls.left.isDown || this.controls.a.isDown
		const right = this.controls.right.isDown || this.controls.d.isDown
		const down = this.controls.down.isDown || this.controls.s.isDown
	}
	
	render() {
		this.game.debug.text('FPS: ' + (this.game.time.fps || '--'), 10, 15, "#ffffff")
	}
}

export default GameState