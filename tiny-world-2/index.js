/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

class Creature{
        constructor(name,gender) {
            this.name = name;
            this.gender = gender;
        }
}
Creature.prototype.getInfo = function () {
    let result = '';
    for(item in this){
        if(item != 'getInfo')
        result += item + ":" + this[item] + "; "
    }
    return result;
}
class Animal extends  Creature{
    constructor(name,gender){
        super(name,gender);
        this.legs = 2;
        this.hands = 2;
    }
}

class Dog extends  Animal{
        constructor(name,gender){
        super(name,gender);
        this.type = 'Dog';
        this.say = 'Woof-Woof';
        }
}
class Cat extends Animal{
    constructor(name,gender){
        super(name,gender);
        this.type = 'Cat';
        this.say = 'Meow';
    }
}
class Human extends Animal{
    constructor(name,gender){
        super(name,gender);
        this.type = 'Human';
        this.say = 'Hello KOTTANS';
    }
}

let Population = [
    new Dog('Alfred','male'),
    new Cat('Lila','female'),
    new Human('Alisa','female'),
    new Human('Gianni','male')
]

Population.forEach((elem)=> print(elem.getInfo()));










// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


