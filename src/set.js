var Set = function(){
  var set = Object.create(Set.prototype);
  set._storage = {};
  return set;
};

Set.prototype.add = function(string){
	this._storage[string] = true;
};

Set.prototype.contains = function(string){
	return !!this._storage[string];
};

Set.prototype.remove = function(string){
	delete this._storage[string];
};