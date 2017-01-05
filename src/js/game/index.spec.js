import PreloadState from 'js/game/states/preload'
import BootState from 'js/game/states/boot'
import IntroState from 'js/game/states/intro'
import MenuState from 'js/game/states/menu'
import PlayState from 'js/game/states/play'

import gameConstructor from 'js/game/index'

describe('Game Constructor', () => {
	const element = document.createElement('div')
	let game
	
	beforeEach(() => {
		// for testing only Phaser.WEBGL works and yes i know about Phaser.HEADLESS
		game = gameConstructor(640, 480, Phaser.WEBGL, element)
		// dont wait for event
		game.boot()
	})
	
	afterEach(() => {
		game.destroy()
	})
	
	it('should contain preload state', () => {
		expect(game.state.states.preload).to.be.instanceOf(PreloadState)
	})
	
	it('should contain boot state', () => {
		expect(game.state.states.boot).to.be.instanceOf(BootState)
	})
	
	it('should contain intro state', () => {
		expect(game.state.states.intro).to.be.instanceOf(IntroState)
	})
	
	it('should contain menu state', () => {
		expect(game.state.states.menu).to.be.instanceOf(MenuState)
	})
	
	it('should contain play state', () => {
		expect(game.state.states.play).to.be.instanceOf(PlayState)
	})
	
	it('should be of constructed size', () => {
		expect(game.width).to.be.equal(640)
		expect(game.height).to.be.equal(480)
	})
	
	it('should be initialized in choosen dom element', () => {
		expect(game.parent).to.be.equal(element)
	})
})