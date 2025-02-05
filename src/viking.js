// Soldier
class Soldier {
   constructor(health, strength){
    this.health = health;
    this.strength = strength; 
   }

   attack() {
       return this.strength;        
   }

   receiveDamage(damage) {
       this.health -= damage;
   }
}

// Viking
class Viking extends Soldier{
   constructor(name, health, strength) {
       super (health, strength);
       this.name = name;
   }

   receiveDamage(damage) {
       this.health -= damage;
       if (this.health > 0) {
           return `${this.name} has received ${damage} points of damage`
       }
       return `${this.name} has died in act of combat`
   }     
   
   battleCry() {
       return `Odin Owns You All!`
   }
   
}

// Saxon
class Saxon extends Soldier{
   receiveDamage(damage){
       this.health -= damage;
       if (this.health > 0) {
           return `A Saxon has received ${damage} points of damage`
       }
       return `A Saxon has died in combat`
   }
}

// War
class War {
   constructor() {
       this.vikingArmy = [];
       this.saxonArmy = [];
   }

   addViking(Viking){
       this.vikingArmy.push(Viking);
   }

   addSaxon(Saxon){
       this.saxonArmy.push(Saxon);
   }

// Bonus - Iteration 5
   generic(attacker){
       let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
       let randomSaxon = this.saxonArmy[randomIndexSaxon];
       let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
       let randomViking = this.vikingArmy[randomIndexViking];
       let result = "";
       switch (attacker){
           case "viking":
           result = randomSaxon.receiveDamage(randomViking.strength);    
           if (randomSaxon.health <= 0) {
                   this.saxonArmy.splice(randomSaxon);
               }
           case "saxon":
               result = randomViking.receiveDamage(randomSaxon.strength);
               if (randomViking.health <= 0) {
                   this.vikingArmy.splice(randomViking);
               }
           }
           return result;
   }

   vikingAttack(){
       this.generic ("viking");
   }

   saxonAttack(){
       this.generic ("saxon");
   }

   vikingAttack(){
       let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
       let randomSaxon = this.saxonArmy[randomIndexSaxon];
       let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
       let randomViking = this.vikingArmy[randomIndexViking];
       let result = randomSaxon.receiveDamage(randomViking.strength);
       if (randomSaxon.health <= 0) {
           this.saxonArmy.splice(randomSaxon);
       }
       return result;
   }

   saxonAttack(){
       let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
       let randomSaxon = this.saxonArmy[randomIndexSaxon];
       let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
       let randomViking = this.vikingArmy[randomIndexViking];
       let result = randomViking.receiveDamage(randomSaxon.strength);
       if (randomViking.health <= 0) {
           this.vikingArmy.splice(randomViking);
       }
       return result;
   }

   showStatus(){
       if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
           return "Vikings and Saxons are still in the thick of battle."
       } else if (this.saxonArmy.length === 0){ 
           return "Vikings have won the war of the century!"
       } else if (this.vikingArmy.length === 0) {
           return "Saxons have fought for their lives and survived another day..."
       }
   }
}
