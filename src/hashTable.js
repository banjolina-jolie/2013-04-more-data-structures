var HashTable = function(_limit, _storage){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(twople){
  this._storage.set(getIndexBelowMaxForKey(twople[0], this._limit), twople[1]);
};

HashTable.prototype.retrieve = function(key){
  return this._storage.get(getIndexBelowMaxForKey(key, this._limit));
};

HashTable.prototype.remove = function(key){
  this._storage.set(getIndexBelowMaxForKey(key, this._limit), undefined);
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you