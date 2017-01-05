class LocalDataStoreManager {
	constructor(game) {
		this.game = game
		this.observers = {}
	}
	
	set(key, value) {
		localStorage.setItem(key, JSON.stringify(value))
		
		if (typeof this.observers[key] !== 'undefined') {
			this.observers[key].dispatch(value)
		}
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
	
	watcher(key) {
		if (typeof this.observers[key] === 'undefined') {
			this.observers[key] = new Phaser.Signal();
		}
		
		return this.observers[key]
	}
}

export default LocalDataStoreManager