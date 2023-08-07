class Arena {
  constructor(size, monsters, hero) {
    this.monsters = monsters;
    this.hero = hero;
    this.size = size;
  }

  getDistance(hero, monster) {
    return Math.sqrt(
      Math.pow(monster.x - hero.x, 2) - Math.pow(monster.y - hero.y, 2)
    ).toFixed(2);
  }

  isTouchable(attacker, defender) {
    if (attacker.getRange() >= this.getDistance(attacker, defender)) {
      return true;
    } else {
      return false;
    }
  }
}
