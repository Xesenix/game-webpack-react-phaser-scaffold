class PreloadState {
	construct() {
		this.asset = null
		this.ready = false
	}

	preload() {
		this.asset = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloader')
		this.asset.anchor.setTo(0.5, 0.5)

		this.load.onLoadComplete.addOnce(this.onLoadComplete, this)
		this.load.setPreloadSprite(this.asset)
		this.load.image('game-logo', 'assets/logo.png')
		this.load.image('button', 'assets/button.png')
		
		this.load.spritesheet('mute', 'assets/mute.png', 64, 64)
		
		this.load.audio('melody', 'assets/soundtrack.ogg')
	}
	
	create() {
		this.asset.cropEnabled = false
	}
	
	onLoadComplete() {
		this.game.state.start('intro')
	}
}

export default PreloadState