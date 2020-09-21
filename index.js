class BabyNames {
    constructor(name) {
        this.name = name;
    }
}

const allNames = [
    new BabyNames("Eliz"),
    new BabyNames("Ashy"),
    new BabyNames("Nesy"),
    new BabyNames("Lili"),
    new BabyNames("Diva"),
    new BabyNames("Mila"),
    new BabyNames("Ela"),
    new BabyNames("Bela"),
]

exports.getRandomName = () => {
    return allNames[Math.floor(Math.random() * allNames.length)];
}

exports.allNames = allNames;