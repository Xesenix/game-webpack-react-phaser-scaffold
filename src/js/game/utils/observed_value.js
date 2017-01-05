import isEqual from 'lodash/isEqual'

class ObservedValue extends Phaser.Signal {
	constructor(value) {
		super()
		this.value = value
	}

	check(newValue) {
		if (!isEqual(this.value, newValue)) {
			this.dispatch(newValue, this.value)
			this.value = newValue
		}
	}
}

export default ObservedValue