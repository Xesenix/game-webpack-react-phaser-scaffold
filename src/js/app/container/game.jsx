import React from 'react'
import gameConstructor from 'js/game'

export default class Game extends React.Component {
	componentDidMount() {
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