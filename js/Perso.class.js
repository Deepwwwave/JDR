


import Program from "./Program.class.js";

// Class hero herite de la classe programme
class Hero extends Program {
  constructor(name, pv, power, strength, armor, mana) {
    super(name, pv, power, strength, armor, mana);
     //gestionnaire d'événements (...)
        // es6 -> fat-arrow
        // $('#attaquer').on('click', (e) => this.onClickAttack(e));
        // $('#defendre').on('click', (e) => this.onClickDefense(e));
        // $('#sort').on('click', (e) => this.onClickSpell(e));
  }

  // onClickAttack(e){
  //   console.log('this',this);
  //   e.preventDefault()

  
    
  updateStatHero() {
    $("#pv_hero").text(`${this.pv}`);
    $("#power_hero").text(`${this.power}`);
    $("#strength_hero").text(`${this.strength}`);
    $("#armor_hero").text(` ${this.armor}`);
    $("#mana_hero").text(`${this.mana}`) ;
  }
}

// Class Monster herite de la classe programme
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
