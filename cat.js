function Cat(){
this.stomach =[];
}
Cat.protype.eat = function(mount){
	this.stomach.push(mount);
}
module.exports = Cat;