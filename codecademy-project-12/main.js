class Media {
	constructor(title) {
		this._title = title;
		this._isCheckOut = false;
		this._ratings = [];
	}
	get title() {
		return this._title;
	}

	get isCheckOut() {
		return this._isCheckOut;
	}

	get ratings() {
		return this._ratings;
	}

	toogleCheckOut() {
		this.isCheckOut = !this._isCheckOut;
	}

	getAverageRating() {
		console.log(`${this._ratings}`)
		const totalRating = this._ratings.reduce((previousValue, currentValue, index, arr) => {
			let result = previousValue + currentValue
			if (index === arr.length - 1) {
				result /= arr.length;
			}
			return result;
		}, 0)
		return totalRating.toFixed(1);
	}
	addRating(value) {
		if (typeof (value) === "number" && value >= 0 && value <= 5) {
			this._ratings.push(value);
		} else {
			console.log("Make sure you give a value between 0 and 5")}
	}
}

class Book extends Media{
	constructor(author, title, pages) {
		super(title);
		this._author = author;
		this._pages = pages;
	}
	get author() {
		return this._author;
	}
	get pages() {
		return this._pages;
	}
}

class Movie extends Media {
	constructor(director, title, runTime) {
		super(title);
		this._director = director;
		this._runTime = runTime;
	}
	get director() {
		return this._director;
	}
	get runTime() {
		return this._runTime;
	}
}
let check = "check";
console.log("code run")