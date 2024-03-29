var HashTable = function(_limit, _storage){
  this._limit = 6;
  this.counter = 0;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.rehashBigger = function() {
  var tempArray = [];
  for(var i = 0; i < this._limit; i++) {
    if(this._storage.get(i)) {
      tempArray.push(this._storage.get(i));
    }
  }
  this._limit = (this._limit * 2);
  this._storage = makeLimitedArray(this._limit);

  for(var j = 0; j < tempArray.length; j++) {
    for (var k = 0; k < tempArray[j].length; k++) {
      this.insert(tempArray[j][k]);
      this.counter--;
    }
  }
};

HashTable.prototype.rehashSmaller = function() {
  var tempArray = [];
  for(var i = 0; i < this._limit; i++) {
    if(this._storage.get(i)) {
      tempArray.push(this._storage.get(i));
    }
  }
  this._limit = (this._limit / 2);
  this._storage = makeLimitedArray(this._limit);

  for(var j = 0; j < tempArray.length; j++) {
    for (var k = 0; k < tempArray[j].length; k++) {
      this.insert(tempArray[j][k]);
      this.counter--;
    }
  }
};

HashTable.prototype.insert = function(tuple){
  if(!tuple) {
    return;
  }
  this.counter++;
  if(this.counter >= (0.75 * this._limit)) {
    this.rehashBigger();
  }
  var index = getIndexBelowMaxForKey(tuple[0], this._limit);
  arrayAtIndex = this._storage.get(index);
  if(arrayAtIndex === undefined) {
    this._storage.set(index, [tuple]);
  } else {
    arrayAtIndex.push(tuple);
  }
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  arrayAtIndex = this._storage.get(index);
  if(arrayAtIndex){
    for (var i = 0; i < arrayAtIndex.length; i++) {
      if (arrayAtIndex[i] && arrayAtIndex[i][0] === key) {
        return arrayAtIndex[i][1];
      }
    }
  }
  return;
};

HashTable.prototype.remove = function(key){
  this.counter--;
  if(this.counter <= (0.25 * this._limit)) {
    this.rehashSmaller();
  }
  var index = getIndexBelowMaxForKey(key, this._limit);
  arrayAtIndex = this._storage.get(index);
  for (var i = 0; i < arrayAtIndex.length; i++) {
    if (arrayAtIndex[i] && arrayAtIndex[i][0] === key) {
      delete arrayAtIndex[i];
    }
  }
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you