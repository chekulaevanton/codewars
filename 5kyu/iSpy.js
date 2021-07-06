function spyOn (func) {
  let callCount = 0;
  let allArgs = new Set();
  let returns = new Set();

  let spy = function(...args) {
    callCount++;
    args.forEach(value => allArgs.add(value));
    let returnedValue = func.apply(this, args);
    returns.add(returnedValue);
    return returnedValue;
  }
  
  spy.callCount = function() { return callCount; };
  spy.wasCalledWith = function(val) { return allArgs.has(val); };
  spy.returned = function(val) { return returns.has(val); };
  return spy;
}