class BootState {
	preload() {
		this.stage.disableVisibilityChange = true // so that on first state application will progress regardless if there was player interaction or not
		this.game.time.advancedTiming = true // for fps counter
		this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL //SHOW_ALL, NO_SCALE, EXACT_FIT
		this.game.clearBeforeRender = false // if your game contains full background
		
		this.loaded = 1
		
		// turn on additional plugins:
		//this.game.add.plugin(Fabrique.Plugins.Spine)
		
		// setup fonts and interface apperance (google fonts used here should be loaded via link tag in page layout header)
		this.game.theme = {
			font: 'VT323'
			//font: 'Bungee'
			//font: 'Russo One'
			//font: 'Fruktur'
			//font: 'Press Start 2P'
		}
		
		document.querySelector('canvas').oncontextmenu = (e) => {
			e.preventDefault();
			return false;
		}
		
		this.load.onLoadComplete.addOnce(this.onLoadComplete, this)
		this.load.image('preloader', 'assets/preloader.png')
		
		// if you dont want to use link tag in layout for fonts you can use this part but it isnt 100% reliable
		/*
		this.loaded = 2
		window.WebFontConfig = {
			active: () => { 
				this.game.time.events.add(Phaser.Timer.SECOND, this.onLoadComplete)
			},
			google: {
				families: [ this.game.theme.font ]
			}
		}
		
		this.load.script("webfont", "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js")
		*/
	}
	
	onLoadComplete = () => {
		if (--this.loaded === 0) {
			this.game.state.start('preload')
		}
	}
}

export default BootState