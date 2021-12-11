const prompt = require('prompt-sync')({sigint: true});

class Field {
	constructor(bidimentionalArr) {
		this._gameState = {
			field: bidimentionalArr,
			currentPosition: { x: 0, y: 0 },
			continueGame: true
		}
		bidimentionalArr.map((el, index) => {
			if (el.includes('^')) {
				const y = index;
				const x = el.indexOf('^');
				this._gameState.hatPosition = { x, y };
			}
			const y = el.indexOf('^');
		})
	}
	print() {
		let joined = [];
		this._gameState.field.forEach(element => joined.push(element.join("")));
		return joined.join("\n");
	}
	move(direction) {
		if (direction === "d" || direction === "l" || direction === "r" || direction === "u") {
			switch (direction) {
				case "d":
					this._gameState.currentPosition.y++;
					break;
				case "u":
					this._gameState.currentPosition.y--;
					break;
				case "l":
					this._gameState.currentPosition.x--;
					break;
				case "r":
					this._gameState.currentPosition.x++;
					break;
				default:
					console.log("Hacking not allowed, stopping game!");
					this._gameState.continueGame = false;
					break;
			}
			try {
				let { x, y } = this._gameState.currentPosition;
				console.log(`${x} and ${y}`);
				if (this._gameState.field[y][x] === "░") {
					console.log("hit on error");
					this._gameState.field[y][x] = "*";
				}
				else if (this._gameState.field[y][x] === "^") {
					console.log("You won the game, congratulations!")
					this._gameState.continueGame = false;
				}

				else if (this._gameState.field[y][x] === "O") {
					console.log(`You lost, fell in the Hole :(`);
				}
				else if (this._gameState.field[y][x] === "*") {
					console.log(`You lost, Eating yourself, or just had back luck and the game has no solution :(`);
					this._gameState.continueGame = false;
				}
				else if (!this._gameState.field[y][x]) {
					console.log(`You lost, out of bound....`);
					this._gameState.continueGame = false;
				}
			} catch (e) {
				console.log("You lost, out of bound!");
				this._gameState.continueGame = false;
			}
		} else {
			console.log(`Wrong movement, pleas try "u" for Up, "d" for Down, "l" for Left and "r" for Right`)
		}
	}
	static generateField(width, height, holePercentage) {
		let newField = []
		if (width < 2 || height < 2) {
			console.log("Both x and y must be grater than 1");
			return;
		}
		for (let i = 0; i < width; i++) {
			newField.push([]);
		}
		for (let i = 0; i < height; i++){
			newField.forEach(element => element.push("░"))
		}
		holePercentage = Math.floor(((width * height)/100)*holePercentage);
		console.log(holePercentage);
		while (holePercentage > 0) {
			let randomX = 0;
			let randomY = 0;
			while (randomY + randomY === 0) {
				randomX = Math.floor(Math.random() * width);
				randomY = Math.floor(Math.random() * height);
			}
			if (newField[randomX][randomY] === "░") {
				newField[randomX][randomY] = "O";
				holePercentage--;
			}
			if (holePercentage === 1) {
				newField[0][0] = "*";
				newField[randomX][randomY] = "^";
			}
		}
		console.log(newField);
		return newField;
	}
}

newArry = Field.generateField(50, 50, 30)
const hardy = new Field(newArry);

while (hardy._gameState.continueGame) {
	console.clear();
	console.log(`\n   "Find your hat"\nrepresented by "^",\nwithout going back \non your path repre\nsented by "*" and not\nfalling into holes "O"\n\n${hardy.print()}`);
	move = prompt('\nWhich direction whould you like to move?');
	hardy.move(move);
}
