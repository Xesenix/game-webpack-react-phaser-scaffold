class BootState {
	preload() {
		this.stage.disableVisibilityChange = true;
	
		this.loaded = 0
		
		//this.game.add.plugin(Fabrique.Plugins.Spine)
		
		// setup fonts and interface apperance
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
		
		window.WebFontConfig = {
			active: () => { 
				this.game.time.events.add(Phaser.Timer.SECOND, this.onLoadComplete)
			},
			google: {
				families: [ this.game.theme.font ]
			}
		}
		
		this.load.onLoadComplete.addOnce(this.onLoadComplete, this)
		this.load.image('preloader', 'assets/preloader.png')
		this.load.script("webfont", "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js")
	}
	
	onLoadComplete = () => {
		if (++this.loaded === 2) {
			this.game.state.start('preload');
		}
	}
}

export default BootState