function clamp(value, min, max) {
    return Math.min(Math.max(value, min));
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

    changeBladder(value) {
        this.#bladder += value;
        if (bladder >= 10) {
            // excrete
            bladder -= 10;
        }
    }

    feed(food) {
        // If hunger is too high, 
        if (this.#hunger >= this.#maxHunger * 0.8) {
            this.changeDiscipline(-1);
        }
    }
}