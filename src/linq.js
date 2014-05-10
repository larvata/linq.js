// Generated by CoffeeScript 1.6.3
(function() {
  var Enumerable;
  this.linq = function(obj) {
    if (obj instanceof Enumerable) {
      return obj;
    }
    if (!(this instanceof Enumerable)) {
      return new Enumerable(obj);
    }
  };
  String.prototype.same = function(target) {
    return this.toLowerCase() === target.toLowerCase();
  };
  return Enumerable = (function() {
    function Enumerable(data) {
      this.data = data;
      if (this.data instanceof Document) {
        this.data = document.getElementsByTagName("*");
      }
    }

    Enumerable.prototype.where = function(func) {
      var i, ret, _i, _ref;
      ret = [];
      for (i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (func(this.data[i], i)) {
          ret.push(this.data[i]);
        }
      }
      this.data = ret;
      return this;
    };

    Enumerable.prototype.select = function(func) {
      var i, ret, _i, _ref;
      ret = [];
      for (i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        ret.push(func(this.data[i], i));
      }
      this.data = ret;
      return this;
    };

    Enumerable.prototype.selectMany = function(func) {};

    Enumerable.prototype.take = function(count) {
      this.data.splice(0, count);
      return this;
    };

    Enumerable.prototype.takeWhile = function(func) {
      var i, _i, _ref;
      i = 0;
      for (i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (!func(this.data[i], i)) {
          break;
        }
      }
      this.data.splice(0, i);
      return this;
    };

    Enumerable.prototype.skip = function(count) {
      this.data.splice(count);
      return this;
    };

    Enumerable.prototype.skipWhile = function(func) {
      var i, _i, _ref;
      i = 0;
      for (i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (func(this.data[i], i)) {
          break;
        }
      }
      this.data.splice(i);
      return this;
    };

    Enumerable.prototype.join = function() {};

    Enumerable.prototype.groupJoin = function() {};

    Enumerable.prototype.orderBy = function(func) {
      this.data.sort(function(a, b) {
        return func(a) - func(b);
      });
      return this;
    };

    Enumerable.prototype.orderByDescending = function(func) {
      this.data.sort(function(a, b) {
        return func(b) - func(a);
      });
      return this;
    };

    Enumerable.prototype.groupBy = function() {};

    Enumerable.prototype.concat = function(second) {
      var i, _i, _ref;
      for (i = _i = 0, _ref = second.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        this.data.push(second[i]);
      }
      return this;
    };

    Enumerable.prototype.distinct = function(func) {};

    Enumerable.prototype.union = function(func) {};

    Enumerable.prototype.intersect = function(second, comparer) {
      var i, ret, _i, _ref;
      ret = [];
      for (i = _i = 0, _ref = second.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (this.contains(second[i])) {
          ret.push(second[i]);
        }
      }
      return ret;
    };

    Enumerable.prototype.except = function(second, comparer) {
      var i, ret, _i, _ref;
      ret = [];
      for (i = _i = 0, _ref = second.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (!this.contains(second[i])) {
          ret.push(second[i]);
        }
      }
      return ret;
    };

    Enumerable.prototype.reverse = function() {
      var i, ret, _i, _ref;
      ret = [];
      for (i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        ret.push(this.data.splice(-1));
      }
      this.data = ret;
      return this;
    };

    Enumerable.prototype.sequenceEqual = function() {};

    Enumerable.prototype.toArray = function() {
      return this.data;
    };

    Enumerable.prototype.defaultIfEmpty = function(source) {
      if (this.data.length === 0) {
        this.data = source;
      }
      return this;
    };

    Enumerable.prototype.cast = function() {};

    Enumerable.prototype.first = function(func) {
      if (func != null) {
        this.data = this.where(func).data;
      }
      return this.data[0];
    };

    Enumerable.prototype.firstOrDefault = function(func) {
      if (func != null) {
        this.data = this.where(func).data;
      }
      if (this.data.length === 0) {
        return null;
      }
      return this.data[0];
    };

    Enumerable.prototype.last = function(func) {
      if (func != null) {
        this.data = this.where(func).data;
      }
      return this.data.slice(-1)[0];
    };

    Enumerable.prototype.lastOrDefault = function(func) {
      if (func != null) {
        this.data = this.where(func).data;
      }
      if (this.data.length === 0) {
        return null;
      }
      return this.data.slice(-1)[0];
    };

    Enumerable.prototype.single = function(func) {
      return this.first(func);
    };

    Enumerable.prototype.singleOrDefault = function(func) {
      return this.firstOrDefault(func);
    };

    Enumerable.prototype.elementAt = function(index) {
      return this.data[index];
    };

    Enumerable.prototype.elementAtOrDefault = function(index) {
      if (this.data[index] != null) {
        return this.data[index];
      }
      return null;
    };

    Enumerable.prototype.range = function(start, count) {
      this.data = this.data.slice(start, start + count);
      return this;
    };

    Enumerable.prototype.any = function(func) {
      var current, i, _i, _ref;
      current = false;
      for (i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (func != null) {
          current = func(this.data[i]);
        } else {
          current = !!this.data[i];
        }
        if (current) {
          return true;
        }
      }
      return false;
    };

    Enumerable.prototype.all = function(func) {
      var current, i, _i, _ref;
      current = false;
      for (i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (func != null) {
          current = func(this.data[i]);
        } else {
          current = !!this.data[i];
        }
        if (!current) {
          return false;
        }
      }
      return true;
    };

    Enumerable.prototype.count = function(func) {
      if (func != null) {
        this.data = this.where(func).data;
      }
      return this.data.length;
    };

    Enumerable.prototype.contains = function(value, comparer) {
      return this.any(function(d) {
        if (typeof func === "undefined" || func === null) {
          return d === value;
        }
      });
    };

    Enumerable.prototype.aggregate = function(op1, op2) {
      var func, i, pointer, ret, _i, _ref;
      if (op2 != null) {
        ret = op1;
        pointer = 0;
        func = op2;
      } else {
        ret = this.data[0];
        pointer = 1;
        func = op1;
      }
      for (i = _i = pointer, _ref = this.data.length; pointer <= _ref ? _i < _ref : _i > _ref; i = pointer <= _ref ? ++_i : --_i) {
        ret = func(ret, this.data[i]);
      }
      return ret;
    };

    Enumerable.prototype.sum = function(func) {
      var i, ret, _i, _ref;
      ret = 0;
      for (i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (func == null) {
          ret += this.data[i];
        }
        if (func != null) {
          ret += func(this.data[i]);
        }
      }
      return ret;
    };

    Enumerable.prototype.min = function(func) {
      var i, minId, _i, _ref;
      minId = 0;
      for (i = _i = 1, _ref = this.data.length; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        if ((func == null) && this.data[i] < this.data[minId]) {
          minId = i;
        }
        if ((func != null) && func(this.data[i]) < func(this.data[minId])) {
          minId = i;
        }
      }
      return this.data[minId];
    };

    Enumerable.prototype.max = function(func) {
      var i, maxId, _i, _ref;
      maxId = 0;
      for (i = _i = 1, _ref = this.data.length; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        if ((func == null) && this.data[i] > this.data[maxId]) {
          maxId = i;
        }
        if ((func != null) && func(this.data[i]) > func(this.data[maxId])) {
          maxId = i;
        }
      }
      return this.data[maxId];
    };

    Enumerable.prototype.average = function(func) {
      return this.sum(func) / this.data.length;
    };

    return Enumerable;

  })();
})();
