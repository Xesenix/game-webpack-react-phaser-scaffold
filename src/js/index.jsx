import React from 'react'
import { render } from 'react-dom'
import App from './app/container/app'

window.onload = () => {
	window.PhaserGlobal = {
		disableWebAudio: true// that bit is important for ram consumption
	}
	
	render(<App/>, document.getElementById('app'))
}