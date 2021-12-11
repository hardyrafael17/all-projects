// Returns a random DNA base
const returnRandBase = (base) => {
	
	const dnaBases = ['A', 'T', 'C', 'G'];
	if (base) {
		const spliceIndex = dnaBases.indexOf(base)
		dnaBases.splice(spliceIndex, 1)
	}
	return dnaBases[Math.floor(Math.random() * dnaBases.length)];
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
	const newStrand = []
	for (let i = 0; i < 15; i++) {
	  newStrand.push(returnRandBase())
	}
	return newStrand
  }
  
const pAequorFactory = (specimenNum, dna) => {
	return {
		//properties
		_specimenNum: specimenNum,
		_dna: dna,
		//getters and setters
		get dna() {
			return this._dna
		},
		get specimenNum() {
			return this._specimenNum
		},
		//methods
		mutate () {
			//select base randomly from 0 to 15
			const base = Math.floor(Math.random() * 15);
			//assign a randomly generated strand to the selected base (Modifying mockUpstrand to take a parameter to generate a single base that's differnt than the one provided)
			this._dna[base] = returnRandBase(this._dna[base]);
			return this._dna;
		},
		compareDNA(pAequorObject) {
			let equal = 0;
			let nonEqual = 0;
			this._dna.forEach((strand, index) => {
				if (strand === pAequorObject.dna[index]) {
					equal++;
				} else { nonEqual++ }
			})
			//calculate percentage and return string// specimen #1 and specimen #2 have 25% DNA in common
			const percentage = (equal / (equal + nonEqual)) * 100;
			console.log(`Specimen #${this.specimenNum} and specimen #${pAequorObject.specimenNum} have ${Math.round(percentage)}% DNA in common`);

		},
		willLikelySurvive() {
			let survive = 0;
			let notSurvivie = 0;
			this._dna.forEach((strand) => {
				if (strand === 'C' || strand === 'G') {
					survive++
				} else {notSurvivie++}
			})
			const survivalPercentage = (survive / (survive + notSurvivie)) * 100;
			if (survivalPercentage >= 60) { return true } else { return false };
		}
	}
}

const test = pAequorFactory(15, mockUpStrand());
const comparedObject = pAequorFactory(16, mockUpStrand());
test.mutate();
//test.compareDNA(comparedObject);

//Make 30 new pAequorArr
const pAequorArr = [];
let i = 0;
while (i < 30) {
	let specimen = pAequorFactory(i, mockUpStrand());
	if (specimen.willLikelySurvive()) {
		pAequorArr.push(specimen);
		i++
	}
}
//Test results
console.log(pAequorArr);