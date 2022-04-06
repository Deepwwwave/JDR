;
let damage;

export default class Program {
  constructor(name, pv, power, strength, armor, mana) {
    (this.name = name),
      (this.pv = pv),
      (this.strength = strength),
      (this.power = power),
      (this.armor = armor),
      (this.mana = mana);
  }

  attack(cible) {
    console.log("hello");
    damage = this.strength - cible.armor;
    if (damage <= 0) {
      damage = 0;
    }
    cible.pv = cible.pv - damage;
    $(".info").text(`${this.name} à infligé ${damage} points de dégats à ${cible.name}`)
  }

  defense() {
    if (this.armor < 9) {
      this.armor += 3;
    } else {
      $(".info").text(`${this.name} ne peut pas avoir plus de 20 d'armure`);
    }
  }

  usePower(cible) {
    damage = this.power;
    if (this.mana < 0) {
      info = `${this.name} n'a pas assez de mana pour pour utiliser son pourvoir`;
    } else {
      this.mana -= 5;
    }
    $(".info").text(`${this.name} à infligé ${damage} points de dégats à ${cible.name}`);
  }
}




