require('chalk')
function dog(){
    this.name = "kiki";
    this.stomach=[];
    this.speak="go go";
}
dog.prototype.eat = function(cat){
    this.stomach.push(cat);
}
dog.prototype.sayHi =function(){
    console.log(1)
}
dog.prototype.sayGoodbye =function(){
    console.log(1)
}
module.exports = dog;