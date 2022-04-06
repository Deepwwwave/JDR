import Program from "./Program.class.js";

class Hero extends Program {
  constructor(name, pv, power, strength, armor, mana) {
    super(name, pv, power, strength, armor, mana);
    ;
  }
  
  updateStatHero() {
    $("#pv_hero").text(`${this.pv}`);
    $("#power_hero").text(`${this.power}`);
    $("#strength_hero").text(`${this.strength}`);
    $("#armor_hero").text(` ${this.armor}`);
    $("#mana_hero").text(`${this.mana}`) ;
  }
}

class Monster extends Program {
  constructor(name, pv, power, strength, armor, mana) {
    super(name, pv, power, strength, armor, mana);
  }

  updateStatMonster() {
    $("#pv_monster").text(`${this.pv}`);
    $("#power_monster").text(`${this.power}`);
    $("#strength_monster").text(`${this.strength}`);
    $("#armor_monster").text(`${this.armor}`);
    $("#mana_monster").text(`${this.mana}`);
  }
}


export let Phara = new Hero("Phara", 100, 15, 15, 0, 15);
export let Cornog = new Monster("Cornog", 100, 15, 15, 0, 15);
