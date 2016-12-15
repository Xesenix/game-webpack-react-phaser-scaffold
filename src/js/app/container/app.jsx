import React from 'react'
import { render } from 'react-dom'

import Game from './game'

class App extends React.Component {
	render() {
		return (
			<div>
				<Game/>
			</div>
		)
	}
}

render(<App/>, document.getElementById('app'));