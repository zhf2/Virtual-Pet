function clamp(value, min, max) {
    return Math.min(Math.max(value, min));
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// The main pet

class Pet {
    #age = 0;
    #lifeStage = 0; // 0 = baby, 1 = child, 2 = adult
    #maxHappiness = 10;
    #happiness = Math.floor(this.#maxHappiness / 2);
    #maxHunger = 3;
    #hunger = Math.floor(this.#maxHunger / 2);
    #discipline = 0;
    #health = 10;
    #isIll = false;
    #bladder = 0;

    // Setters
    changeHappiness(value) {
        this.#happiness = clamp(this.#happiness + value, 0, this.#maxHappiness);
    }

    changeHunger(value) {
        this.#hunger = clamp(this.#hunger + value, 0, this.#maxHunger);
    }

    changeDiscipline(value) {
        this.#discipline = clamp(this.#discipline + value, 0, 10);
    }

    changeHealth(value) {
        this.#health = clamp(this.#health + value, 0, 10);
        if (health == 0) {
            // die
            return;
        }

        // Random chance of getting ill when health is imperfect
        if (getRandomInt(0, 9) > this.#health) {
            this.#isIll = true;
            this.changeHappiness(-2);
        }
    }

    changeBladder(value) {
        this.#bladder += value;
        if (bladder >= 10) {
            // excrete
            bladder -= 10;
        }
    }

    feed(food) {
        // If hunger is too high, decrease discipline
        if (this.#hunger >= this.#maxHunger * 0.8) {
            // get angry
            this.changeDiscipline(-1);
            return;
        }
        if (food == "meal") {
            this.changeHunger(-3);
        } else {
            this.changeHunger(-1);
            this.changeHappiness(1);
            this.changeHealth(-1);
        }
        this.changeBladder(2);
    }
}