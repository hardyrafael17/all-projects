class School {
	constructor(name, level, numberOfStudents) {
		this._name = name;
		this._level = level;
		this._numberOfStudents = numberOfStudents;
	}
	get name() { return this._name }
	get level() { return this._level }
	get numberOfStudents() { return this._numberOfStudents }
	set setNumberOfStudents(number) {
		if (typeof (number) === number && number >= 0)
		{
			this._numberOfStudents = number
		} else {
			console.log(`Invalid argument fo rnumber of students, must be a number greater than 0 or 0, received was ${number}`)
		}
	}
	quickFacts() {
		console.log(`${this._name} educates ${this.numberOfStudents} at the ${this._level} school level`)
	}
	static pickSubstituteTeacher(substituteTeachers) {
		const ranNumber = Math.floor(Math.random() * substituteTeachers.length);
		return substituteTeachers[ranNumber]
	}
}
class PrimarySchool extends School {
	constructor(name, numberOfStudents, pickUpPolicy) {
		super(name, "primary", numberOfStudents);
		this._pickUpPolicy = pickUpPolicy;
	}
	get pickUpPolicy () {return this._pickUpPolicy}

}

class MiddleSchool extends School {
	constructor(name, numberOfStudents){
		super(name, "middle school", numberOfStudents)
	}
}

class HighSchool extends School {
	constructor(name, numberOfStudents, sportsTeams) {
		super(name, "high school", numberOfStudents);
		this._sportsTeams = sportsTeams;
	}
	get sportsTeams() {return this._sportsTeams}
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();
const substituteTeachersArr = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];

console.log(School.pickSubstituteTeacher(substituteTeachersArr));

const alSmith = new HighSchool("Al E. Smith", 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(`${ alSmith.sportsTeams }`);
