function dog(){
    this.name = "kiki";
    this.stomach=[];
    this.speak="go go";
}
dog.prototype.eat = function(cat){
    this.stomach.push(cat);
}
module.exports = dog;