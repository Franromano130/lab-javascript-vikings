// Soldier
class Soldier {
    constructor (health, strength){
       this.health = health;
       this.strength = strength

    }

 attack()  {
    return ` el soldado ha golpeado ${this.strength}`
 }
 receiveDamage( ) {
thedamage = this.receiveDamage (-this.health)

 }
 }



// Viking
class Viking extends Soldier{
   constructor (name, health, strength){
      super(health, strength,)
      this.name = name
   }
}

// Saxon
class Saxon {}

// War
class War {}

let soldier1 = new Soldier ("100", 25);
let viking1 = new Viking ( "Ragnar", "200", 60);
