class LabelButton extends Phaser.Button {
	constructor(game, x, y, key, text, callback, callbackContext, overFrame, outFrame, downFrame, upFrame) {
		super(game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
		this.label = new Phaser.Text(game, 0, 0, text, { align: 'center', boundsAlignH: 'center', boundsAlignV: 'middle' });
		this.label.anchor.setTo(0.5, 0.5);
		this.addChild(this.label);
	}
	
	get height() {
		return this.scale.x * this.texture.frame.height;
	}
	
	set height(value) {
        this.scale.y = value / this.texture.frame.height;
        this._height = value;
		this.label.scale.y = this.texture.frame.height / value;
		this.label.y = this.label.scale.y * value * (0.5 - this.anchor.y);
    }
	
	get width() {
        return this.scale.x * this.texture.frame.width;
    }
	
	set width(value) {
        this.scale.x = value / this.texture.frame.width;
        this._width = value;
		this.label.scale.x = this.texture.frame.width / value;
		this.label.x = this.label.scale.x * value * (0.5 - this.anchor.x);
    }
}

export default LabelButton