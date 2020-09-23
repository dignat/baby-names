class BabyNames {
    constructor(gender,character) {
        this.gender = gender;
        this.character = character;
    }
}
const firstCharacterToLower = (name) => {
    return name.toLowerCase().charAt(0);
}
const allNames = [
    new BabyNames("female","Eliz"),
    new BabyNames("male","Ashy"),
    new BabyNames("female","Nesy"),
    new BabyNames("female","Lili"),
    new BabyNames("female","Diva"),
    new BabyNames("female","Mila"),
    new BabyNames("female","Ela"),
    new BabyNames("female","Bela"),
    new BabyNames("male","Belcho"),
]

module.exports.generateName = (gender, character, length) => {
    let genderMatch = [];
    for (const babyGender of allNames) {
        if(babyGender.gender === gender && (character.length > 0
            && firstCharacterToLower(babyGender.character) === character.toLowerCase())
            && length === babyGender.character.length) {
            genderMatch.push(babyGender);
        }
    }
    return genderMatch[Math.floor(Math.random()*genderMatch.length)];
}

module.exports.allNames = allNames;