// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({11:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var listCard = exports.listCard = [{
  name: "Коробка для медицинских центров",
  price: 3000
}, {
  name: "Коробка для банков",
  price: 3500
}, {
  name: "Коробка для лидогенерации и коллцентров",
  price: 3900
}, {
  name: "Коробка для салонов красоты",
  price: 1800
}, {
  name: "Коробка для интернет-магазинов",
  price: 2500
}, {
  name: "Коробка для фитнес центров",
  price: 2500
}, {
  name: "Коробка для ЖКХ и УК",
  price: 1500
}, {
  name: "Коробка для автобизнеса",
  price: 2600
}, {
  name: "Коробка для логистики(доставка)",
  price: 2600
}, {
  name: "Пакет-фильтр базы",
  price: 1800
}, {
  name: "Коробка для EVENT-агентств",
  price: 2700
}, {
  name: "Коробка для онлайн-школ",
  price: 2700
}];

var basket = exports.basket = [{
  name: "Коробка для медицинских центров",
  num: 0
}, {
  name: "Коробка для банков",
  num: 0
}, {
  name: "Коробка для лидогенерации и коллцентров",
  num: 0
}, {
  name: "Коробка для салонов красоты",
  num: 0
}, {
  name: "Коробка для интернет-магазинов",
  num: 0
}, {
  name: "Коробка для фитнес центров",
  num: 0
}, {
  name: "Коробка для ЖКХ и УК",
  num: 0
}, {
  name: "Коробка для автобизнеса",
  num: 0
}, {
  name: "Коробка для логистики(доставка)",
  num: 0
}, {
  name: "Пакет-фильтр базы",
  num: 0
}, {
  name: "Коробка для EVENT-агентств",
  num: 0
}, {
  name: "Коробка для онлайн-школ",
  num: 0
}];
},{}],6:[function(require,module,exports) {
"use strict";

var _array = require("./array");

var mainBox = document.querySelector(".mainBox");
var count = 1;

var _loop = function _loop(card) {
  var imageBox = document.createElement("img");
  if (count === 1) {
    imageBox.src = "https://www.anncom.ru/wp-content/uploads/elementor/thumbs/box-001-ortiizib2wmf6w5qnsgd9m4qig8wyqvs09yom4k2co.png";
    count++;
  } else if (count === 2) {
    imageBox.src = "https://www.anncom.ru/wp-content/uploads/elementor/thumbs/box-002-ortikcdwyahbym6qqdkyv9spehk0309tizvxkijld4.png";
    count++;
  } else if (count === 3) {
    imageBox.src = "https://www.anncom.ru/wp-content/uploads/elementor/thumbs/box-003-ortiky07bhaxdnbc84xdymcb2clg01nn9yw3lvnje0.png";
    count = 1;
  }

  var div = document.createElement("div");
  var pName = document.createElement("p");
  var pPrice = document.createElement("p");
  var button = document.createElement("button");

  div.className = "card";
  pName.textContent = card.name;
  pPrice.textContent = "Стоимость ежемесячного платежа от " + card.price + "₽";
  button.textContent = "Добавить";
  button.addEventListener("click", function () {
    button.remove();
    var counter = document.createElement("div");
    var buttonPlus = document.createElement("button");
    var pCount = document.createElement("p");
    var buttonMinus = document.createElement("button");

    var buttonCheckout = document.createElement("button");
    buttonCheckout.className = "checkout";
    buttonCheckout.textContent = "Оформить заказ";

    buttonPlus.addEventListener("click", function () {
      _array.basket.map(function (elem) {
        if (elem.name === card.name) {
          elem.num += 1;
          pCount.textContent = elem.num;
        }
      });
    });
    buttonMinus.addEventListener("click", function () {
      _array.basket.map(function (elem) {
        if (elem.name === card.name) {
          elem.num -= 1;
          if (elem.num !== 0) {
            pCount.textContent = elem.num;
          } else {
            counter.remove();
            div.append(button);
            if (elem.num > 0) {
              elem.num -= 1;
              pCount.textContent = elem.num;
            }
          }
        }
      });
    });

    buttonPlus.textContent = "+";
    buttonMinus.textContent = "-";
    _array.basket.map(function (elem) {
      if (elem.name === card.name) {
        elem.num += 1;
        pCount.textContent = elem.num;
      }
    });
    counter.className = "counter";
    counter.append(buttonMinus, pCount, buttonPlus);
    div.append(counter);
    mainBox.append(buttonCheckout);
  });

  div.append(imageBox, pName, pPrice, button);
  mainBox.append(div);
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = _array.listCard[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var card = _step.value;

    _loop(card);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
},{"./array":11}],14:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '62781' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
      // Clear the console after HMR
      console.clear();
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[14,6], null)
//# sourceMappingURL=/botScript.f789d9da.map