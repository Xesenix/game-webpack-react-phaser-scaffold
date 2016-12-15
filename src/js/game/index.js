import BootState from 'js/game/states/boot'
import PreloadState from 'js/game/states/preload'
import IntroState from 'js/game/states/intro'
import MenuState from 'js/game/states/menu'
import PlayState from 'js/game/states/play'
import FinishState from 'js/game/states/finish'

import DataStoreManager from 'js/game/managers/data_store'

const gameConstructor = (width = window.innerWidth, height = window.innerHeight, containerId = 'game') => {
	const game = new Phaser.Game(width, height, Phaser.WEBGL, containerId);
	
	game.state.add('boot', BootState);
	game.state.add('preload', PreloadState);
	game.state.add('intro', IntroState);
	game.state.add('menu', MenuState);
	game.state.add('play', PlayState);
	//game.state.add('finish', FinishState);
	
	game.dataStoreManager = new DataStoreManager(game)
	
	game.state.start('boot');
	
	return game;
}

export default gameConstructor