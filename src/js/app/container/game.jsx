import React from 'react'
import { render } from 'react-dom'
import gameConstructor from 'js/game'

export default class Game extends React.Component {
	componentDidMount() {
		console.log("Pew Pew ready", this.gameContainer)
		gameConstructor(980, 600)
	}
	
	storeContainer = (container) => { this.gameContainer = container }
	
	render() {
		return (
			<div id="game" ref={this.storeContainer}>
			</div>
		)
	}
}