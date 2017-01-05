class CameraRigMouseControler {
	constructor(game, camera, speed) {
		this.game = game
		this.camera = camera
		this.speed = speed
		
		this.isDragging = false
		this.dragOriginPoint = null
		this.cameraDragOriginPoint = null
		
		this.prepareControls()
	}
	
	prepareControls() {
		this.game.input.activePointer.middleButton.onDown.add(this.startDrag)
		this.game.input.activePointer.middleButton.onUp.add(this.stopDrag)
	}
	
	startDrag = (button) => {
		this.isDragging = true
		
		this.dragOriginPoint = {
			x: button.parent.x,
			y: button.parent.y
		}
		
		this.cameraDragOriginPoint = {
			x: this.camera.x,
			y: this.camera.y
		}
	}
	
	stopDrag = (button) => {
		this.isDragging = false
		this.dragOriginPoint = null
	}
	
	update() {
		this.handleControls()
	}
	
	handleControls() {
		if (this.isDragging) {
			this.camera.x = this.cameraDragOriginPoint.x - (this.dragOriginPoint.x - this.game.input.x) * this.speed
			this.camera.y = this.cameraDragOriginPoint.y - (this.dragOriginPoint.y - this.game.input.y) * this.speed
		}
	}
	
	destroy() {
		this.game.input.activePointer.middleButton.onDown.remove(this.startDrag)
		this.game.input.activePointer.middleButton.onUp.remove(this.stopDrag)
	}
}

export default CameraRigMouseControler