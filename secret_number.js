let min = 1;
let max = 100;

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let Comp1 = {
    secretNum : getRandomArbitrary(min, max),
    checkNum(num) {
        if (num === this.secretNum) {
            console.log("Компьютер 1: Угадал!")
            return 0
        }
        if (num < this.secretNum) {
            console.log("Компьютер 1: Больше.")
            return -1
        }
        console.log("Компьютер 1: Меньше.")
        return 1
    }
}

let Comp2 = {
    left: min,
    right: max,
    tryNum: Math.floor((min + max) / 2),
    setParam(rez) {
        if (rez === 1) {
            this.right = this.tryNum - 1;
        } else {
            this.left = this.tryNum + 1;
        }
        this.tryNum = Math.floor((this.left + this.right) / 2);
    },
    gettryNum() { 
        console.log(`Компьютер 2: Пробую число ${this.tryNum}.`)
        return this.tryNum; 
    }
}

console.log(`Компьютер 1 загадал число: ${Comp1.secretNum}\n`)

while (rez = Comp1.checkNum(Comp2.gettryNum())) {
    Comp2.setParam(rez);
}
