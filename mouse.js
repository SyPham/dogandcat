function mouse(){
this.name="mouse";
this.dead = false;
}
mouse.prototype.die = function(){
    this.dead=true;
}
module.exports = mouse; 