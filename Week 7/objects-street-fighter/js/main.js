//Create a street fighter character class that makes fighting game
// characters with 4 properties and 3 methods


class Fighter{
  constructor(whatHeight, whatStrength, whatDefense, whatLives){
    this.height = whatHeight
    this.strength = whatStrength
    this.defense = whatDefense
    this.lives = whatLives
  }

    punch(){
      alert('throw fist')
    }
    kick(){
      alert('do left kick')
    }
    block(){
      alert('cant touch this')
    }

}

let doug = new Fighter ('8ft', 10, 10, 5)
 console.log(doug.punch())
