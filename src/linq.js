// Generated by CoffeeScript 1.6.3
(function() {
  var Enumerable;
  Object.prototype.linq = function() {
    return new Enumerable(this);
  };
  return Enumerable = (function() {
    function Enumerable(data) {
      this.data = data;
    }

    Enumerable.prototype.where = function(func) {
      var i, ret, _i, _ref;
      ret = [];
      for (i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (func(this.data[i], i)) {
          ret.push(this.data[i]);
        }
      }
      return ret;
    };

    Enumerable.prototype.select = function(func) {
      var i, ret, _i, _ref;
      ret = [];
      for (i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        ret.push(func(this.data[i], i));
      }
      return ret;
    };

    Enumerable.prototype.selectMany = function(func) {};

    return Enumerable;

  })();
})();
