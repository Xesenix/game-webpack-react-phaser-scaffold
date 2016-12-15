class DataStoreManager {
	constructor(game) {
		this.game = game
	}
	
	set(key, value) {
		localStorage.setItem(key, JSON.stringify(value))
	}
	
	get(key, defaultValue) {
		return new Promise((resolve, reject) => {
			const value = localStorage.getItem(key)
			
			if (value !== null) {
				resolve(JSON.parse(value))
			} else {
				resolve(defaultValue)
			}
		})
	}
}

export default DataStoreManager