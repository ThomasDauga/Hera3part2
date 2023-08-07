class Arena {
  constructor(size, monsters, hero) {
    this.monsters = monsters;
    this.hero = hero;
    this.size = size;
  }

  getDistance(hero, monster) {
    return Math.hypot(hero.x - monster.x, hero.y - monster.y).toFixed(2);
  }

  isTouchable(attacker, defender) {
    if (attacker.getRange() >= this.getDistance(attacker, defender)) {
      return true;
    } else {
      return false;
    }
  }
}
