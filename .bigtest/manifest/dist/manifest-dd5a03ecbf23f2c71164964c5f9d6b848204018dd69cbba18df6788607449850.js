(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.__bigtestManifest = factory());
}(this, (function () { 'use strict';

    (function() {
        const env = {"NODE_ENV":"production"};
        try {
            if (process) {
                process.env = Object.assign({}, process.env);
                Object.assign(process.env, env);
                return;
            }
        } catch (e) {} // avoid ReferenceError: process is not defined
        globalThis.process = { env:env };
    })();

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, basedir, module) {
    	return module = {
    	  path: basedir,
    	  exports: {},
    	  require: function (path, base) {
          return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
        }
    	}, fn(module, module.exports), module.exports;
    }

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    var _typeof_1 = createCommonjsModule(function (module) {
      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          module.exports = _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          module.exports = _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      module.exports = _typeof;
    });

    var runtime_1 = createCommonjsModule(function (module) {
      /**
       * Copyright (c) 2014-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var runtime = function (exports) {

        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined$1; // More compressible than void 0.

        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

        function define(obj, key, value) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return obj[key];
        }

        try {
          // IE 8 has a broken Object.defineProperty that only works on DOM objects.
          define({}, "");
        } catch (err) {
          define = function define(obj, key, value) {
            return obj[key] = value;
          };
        }

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.

          generator._invoke = makeInvokeMethod(innerFn, self, context);
          return generator;
        }

        exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.

        function tryCatch(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn.call(obj, arg)
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err
            };
          }
        }

        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.

        var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.

        function Generator() {}

        function GeneratorFunction() {}

        function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.


        var IteratorPrototype = {};

        IteratorPrototype[iteratorSymbol] = function () {
          return this;
        };

        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype;
        }

        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.

        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }

        exports.isGeneratorFunction = function (genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };

        exports.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
          }

          genFun.prototype = Object.create(Gp);
          return genFun;
        }; // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.


        exports.awrap = function (arg) {
          return {
            __await: arg
          };
        };

        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);

            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;

              if (value && _typeof_1(value) === "object" && hasOwn.call(value, "__await")) {
                return PromiseImpl.resolve(value.__await).then(function (value) {
                  invoke("next", value, resolve, reject);
                }, function (err) {
                  invoke("throw", err, resolve, reject);
                });
              }

              return PromiseImpl.resolve(value).then(function (unwrapped) {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration.
                result.value = unwrapped;
                resolve(result);
              }, function (error) {
                // If a rejected Promise was yielded, throw the rejection back
                // into the async generator function so it can be handled there.
                return invoke("throw", error, resolve, reject);
              });
            }
          }

          var previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }

            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          } // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).


          this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);

        AsyncIterator.prototype[asyncIteratorSymbol] = function () {
          return this;
        };

        exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.

        exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
          if (PromiseImpl === void 0) PromiseImpl = Promise;
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
          return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
          : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
        };

        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }

            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              } // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


              return doneResult();
            }

            context.method = method;
            context.arg = arg;

            while (true) {
              var delegate = context.delegate;

              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);

                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if (context.method === "next") {
                // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }

                context.dispatchException(context.arg);
              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }

              state = GenStateExecuting;
              var record = tryCatch(innerFn, self, context);

              if (record.type === "normal") {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                if (record.arg === ContinueSentinel) {
                  continue;
                }

                return {
                  value: record.arg,
                  done: context.done
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted; // Dispatch the exception by looping back around to the
                // context.dispatchException(context.arg) call above.

                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        } // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.


        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];

          if (method === undefined$1) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;

            if (context.method === "throw") {
              // Note: ["return"] must be used for ES3 parsing compatibility.
              if (delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined$1;
                maybeInvokeDelegate(delegate, context);

                if (context.method === "throw") {
                  // If maybeInvokeDelegate(context) changed context.method from
                  // "return" to "throw", let that override the TypeError below.
                  return ContinueSentinel;
                }
              }

              context.method = "throw";
              context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }

            return ContinueSentinel;
          }

          var record = tryCatch(method, delegate.iterator, context.arg);

          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }

          var info = record.arg;

          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }

          if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

            context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.

            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined$1;
            }
          } else {
            // Re-yield the result returned by the delegate method.
            return info;
          } // The delegate iterator is finished, so forget it and continue with
          // the outer generator.


          context.delegate = null;
          return ContinueSentinel;
        } // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.


        defineIteratorMethods(Gp);
        define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.

        Gp[iteratorSymbol] = function () {
          return this;
        };

        Gp.toString = function () {
          return "[object Generator]";
        };

        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0]
          };

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{
            tryLoc: "root"
          }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        exports.keys = function (object) {
          var keys = [];

          for (var key in object) {
            keys.push(key);
          }

          keys.reverse(); // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.

          return function next() {
            while (keys.length) {
              var key = keys.pop();

              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            } // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.


            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];

            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === "function") {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              var i = -1,
                  next = function next() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next.value = iterable[i];
                    next.done = false;
                    return next;
                  }
                }

                next.value = undefined$1;
                next.done = true;
                return next;
              };

              return next.next = next;
            }
          } // Return an iterator with no values.


          return {
            next: doneResult
          };
        }

        exports.values = values;

        function doneResult() {
          return {
            value: undefined$1,
            done: true
          };
        }

        Context.prototype = {
          constructor: Context,
          reset: function reset(skipTempReset) {
            this.prev = 0;
            this.next = 0; // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.

            this.sent = this._sent = undefined$1;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined$1;
            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (var name in this) {
                // Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                  this[name] = undefined$1;
                }
              }
            }
          },
          stop: function stop() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;

            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }

            return this.rval;
          },
          dispatchException: function dispatchException(exception) {
            if (this.done) {
              throw exception;
            }

            var context = this;

            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;

              if (caught) {
                // If the dispatched exception was caught by a catch block,
                // then let that catch block handle the exception normally.
                context.method = "next";
                context.arg = undefined$1;
              }

              return !!caught;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === "root") {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
              }

              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },
          abrupt: function abrupt(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }

            return this.complete(record);
          },
          complete: function complete(record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }

            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }

            return ContinueSentinel;
          },
          finish: function finish(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          "catch": function _catch(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;

                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }

                return thrown;
              }
            } // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.


            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            };

            if (this.method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              this.arg = undefined$1;
            }

            return ContinueSentinel;
          }
        }; // Regardless of whether this script is executing as a CommonJS module
        // or not, return the runtime object so that we can declare the variable
        // regeneratorRuntime in the outer scope, which allows this module to be
        // injected easily by `bin/regenerator --include-runtime script.js`.

        return exports;
      }( // If this script is executing as a CommonJS module, use module.exports
      // as the regeneratorRuntime namespace. Otherwise create a new empty
      // object. Either way, the resulting object will be used to initialize
      // the regeneratorRuntime variable at the top of this file.
       module.exports );

      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        // This module should not be running in strict mode, so the above
        // assignment should always work unless something is misconfigured. Just
        // in case runtime.js accidentally runs in strict mode, we can escape
        // strict mode using a global Function call. This could conceivably fail
        // if a Content Security Policy forbids using Function, but in that case
        // the proper solution is to fix the accidental strict mode problem. If
        // you've misconfigured your bundler to force strict mode and applied a
        // CSP to forbid Function, and you're not willing to fix either of those
        // problems, please detail your unique predicament in a GitHub issue.
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    });

    var regenerator = runtime_1;

    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }

      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }

    function _asyncToGenerator(fn) {
      return function () {
        var self = this,
            args = arguments;
        return new Promise(function (resolve, reject) {
          var gen = fn.apply(self, args);

          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }

          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }

          _next(undefined);
        });
      };
    }

    var asyncToGenerator = _asyncToGenerator;

    var interfaces = createCommonjsModule(function (module, exports) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    });

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    var defineProperty = _defineProperty;

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var classCallCheck = _classCallCheck;

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    var createClass = _createClass;

    function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
    var dsl = createCommonjsModule(function (module, exports) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TestBuilder = exports.test = void 0;

      function test(description) {
        return new TestBuilder({
          description: description,
          steps: [],
          assertions: [],
          children: []
        });
      }

      exports.test = test;

      var TestBuilder = /*#__PURE__*/function () {
        function TestBuilder(test) {
          classCallCheck(this, TestBuilder);

          this.description = test.description;
          this.steps = test.steps;
          this.assertions = test.assertions;
          this.children = test.children;
        }

        createClass(TestBuilder, [{
          key: "step",
          value: function step(description, action) {
            return new TestBuilder(_objectSpread(_objectSpread({}, this), {}, {
              steps: this.steps.concat({
                description: description,
                action: action
              })
            }));
          }
        }, {
          key: "assertion",
          value: function assertion(description, check) {
            return new TestBuilder(_objectSpread(_objectSpread({}, this), {}, {
              assertions: this.assertions.concat({
                description: description,
                check: check
              })
            }));
          }
        }, {
          key: "child",
          value: function child(description, childFn) {
            var child = childFn(test(description));
            return new TestBuilder(_objectSpread(_objectSpread({}, this), {}, {
              children: this.children.concat(child)
            }));
          }
        }]);

        return TestBuilder;
      }();

      exports.TestBuilder = TestBuilder;
    });

    var dist = createCommonjsModule(function (module, exports) {

      var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __exportStar(interfaces, exports);

      Object.defineProperty(exports, "test", {
        enumerable: true,
        get: function get() {
          return dsl.test;
        }
      });
      Object.defineProperty(exports, "TestBuilder", {
        enumerable: true,
        get: function get() {
          return dsl.TestBuilder;
        }
      });
    });
    var index = /*@__PURE__*/unwrapExports(dist);

    var dist$1 = createCommonjsModule(function (module, exports) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bigtestGlobals = void 0;
      var defaultManifest = {
        description: 'Empty',
        steps: [],
        assertions: [],
        children: []
      };

      function options() {
        if (!globalThis.__bigtest) {
          globalThis.__bigtest = {};
        }

        return globalThis.__bigtest;
      }

      exports.bigtestGlobals = {
        manifestProperty: '__bigtestManifest',

        get manifest() {
          return globalThis.__bigtestManifest || defaultManifest;
        },

        set manifest(value) {
          globalThis.__bigtestManifest = value;
        },

        get document() {
          var testFrame = options().testFrame;
          var doc = options().document || testFrame && testFrame.contentDocument || globalThis.document;

          if (!doc) {
            throw new Error('no document found');
          }
          return doc;
        },

        set document(value) {
          options().document = value;
        },

        get defaultInteractorTimeout() {
          return options().defaultInteractorTimeout || 1900;
        },

        set defaultInteractorTimeout(value) {
          options().defaultInteractorTimeout = value;
        },

        get testFrame() {
          return options().testFrame;
        },

        set testFrame(value) {
          options().testFrame = value;
        },

        get appUrl() {
          return options().appUrl;
        },

        set appUrl(value) {
          options().appUrl = value;
        },

        reset: function reset() {
          delete globalThis.__bigtest;
          delete globalThis.__bigtestManifest;
        }
      };
    });
    var index$1 = /*@__PURE__*/unwrapExports(dist$1);

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }

    var arrayLikeToArray = _arrayLikeToArray;

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return arrayLikeToArray(arr);
    }

    var arrayWithoutHoles = _arrayWithoutHoles;

    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
    }

    var iterableToArray = _iterableToArray;

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
    }

    var unsupportedIterableToArray = _unsupportedIterableToArray;

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var nonIterableSpread = _nonIterableSpread;

    function _toConsumableArray(arr) {
      return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
    }

    var toConsumableArray = _toConsumableArray;

    var performance = globalThis.performance;

    function wait(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }

    function converge(_x) {
      return _converge.apply(this, arguments);
    }

    function _converge() {
      _converge = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(fn) {
        var startTime, diff;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                startTime = performance.now();

              case 1:

                _context.prev = 2;
                return _context.abrupt("return", fn());

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](2);
                diff = performance.now() - startTime;

                if (!(diff > index$1.bigtestGlobals.defaultInteractorTimeout)) {
                  _context.next = 13;
                  break;
                }

                throw _context.t0;

              case 13:
                _context.next = 15;
                return wait(1);

              case 15:
                _context.next = 1;
                break;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 6]]);
      }));
      return _converge.apply(this, arguments);
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    var arrayWithHoles = _arrayWithHoles;

    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    var iterableToArrayLimit = _iterableToArrayLimit;

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var nonIterableRest = _nonIterableRest;

    function _slicedToArray(arr, i) {
      return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
    }

    var slicedToArray = _slicedToArray;

    var Filter = /*#__PURE__*/function () {
      function Filter(specification, filters) {
        classCallCheck(this, Filter);

        this.specification = specification;
        this.filters = filters;
      }

      createClass(Filter, [{
        key: "matches",
        value: function matches(element) {
          var _this = this;

          return Object.entries(this.specification.filters || {}).every(function (_ref) {
            var _ref2 = slicedToArray(_ref, 2),
                key = _ref2[0],
                definition = _ref2[1];

            var value;

            if (key in _this.filters) {
              value = _this.filters[key]; // eslint-disable-line @typescript-eslint/no-explicit-any
            } else if (typeof definition !== 'function' && 'default' in definition) {
              value = definition["default"];
            } else {
              return true;
            }

            if (typeof definition === 'function') {
              return definition(element) === value;
            } else {
              return definition.apply(element) === value;
            }
          });
        }
      }, {
        key: "description",
        get: function get() {
          var entries = Object.entries(this.filters);

          if (entries.length === 0) {
            return '';
          } else {
            return entries.map(function (_ref3) {
              var _ref4 = slicedToArray(_ref3, 2),
                  key = _ref4[0],
                  value = _ref4[1];

              if (typeof value === 'boolean') {
                if (value) {
                  return "which is ".concat(key);
                } else {
                  return "which is not ".concat(key);
                }
              } else {
                return "with ".concat(key, " ").concat(JSON.stringify(value));
              }
            }).join(' and ');
          }
        }
      }]);

      return Filter;
    }();

    var setPrototypeOf = createCommonjsModule(function (module) {
      function _setPrototypeOf(o, p) {
        module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }

      module.exports = _setPrototypeOf;
    });

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) setPrototypeOf(subClass, superClass);
    }

    var inherits = _inherits;

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    var assertThisInitialized = _assertThisInitialized;

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
        return call;
      }

      return assertThisInitialized(self);
    }

    var possibleConstructorReturn = _possibleConstructorReturn;

    var getPrototypeOf = createCommonjsModule(function (module) {
      function _getPrototypeOf(o) {
        module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      module.exports = _getPrototypeOf;
    });

    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }

    var isNativeFunction = _isNativeFunction;

    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;

      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }

    var isNativeReflectConstruct = _isNativeReflectConstruct;

    var construct = createCommonjsModule(function (module) {
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          module.exports = _construct = Reflect.construct;
        } else {
          module.exports = _construct = function _construct(Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) setPrototypeOf(instance, Class.prototype);
            return instance;
          };
        }

        return _construct.apply(null, arguments);
      }

      module.exports = _construct;
    });

    var wrapNativeSuper = createCommonjsModule(function (module) {
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : undefined;

        module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
          if (Class === null || !isNativeFunction(Class)) return Class;

          if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }

          if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);

            _cache.set(Class, Wrapper);
          }

          function Wrapper() {
            return construct(Class, arguments, getPrototypeOf(this).constructor);
          }

          Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return setPrototypeOf(Wrapper, Class);
        };

        return _wrapNativeSuper(Class);
      }

      module.exports = _wrapNativeSuper;
    });

    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

    function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

    var NoSuchElementError = /*#__PURE__*/function (_Error) {
      inherits(NoSuchElementError, _Error);

      var _super = _createSuper(NoSuchElementError);

      function NoSuchElementError() {
        classCallCheck(this, NoSuchElementError);

        return _super.apply(this, arguments);
      }

      createClass(NoSuchElementError, [{
        key: "name",
        get: function get() {
          return "NoSuchElementError";
        }
      }]);

      return NoSuchElementError;
    }( /*#__PURE__*/wrapNativeSuper(Error));
    var AmbiguousElementError = /*#__PURE__*/function (_Error2) {
      inherits(AmbiguousElementError, _Error2);

      var _super2 = _createSuper(AmbiguousElementError);

      function AmbiguousElementError() {
        classCallCheck(this, AmbiguousElementError);

        return _super2.apply(this, arguments);
      }

      createClass(AmbiguousElementError, [{
        key: "name",
        get: function get() {
          return "AmbiguousElementError";
        }
      }]);

      return AmbiguousElementError;
    }( /*#__PURE__*/wrapNativeSuper(Error));
    var NotAbsentError = /*#__PURE__*/function (_Error3) {
      inherits(NotAbsentError, _Error3);

      var _super3 = _createSuper(NotAbsentError);

      function NotAbsentError() {
        classCallCheck(this, NotAbsentError);

        return _super3.apply(this, arguments);
      }

      createClass(NotAbsentError, [{
        key: "name",
        get: function get() {
          return "NotAbsentError";
        }
      }]);

      return NotAbsentError;
    }( /*#__PURE__*/wrapNativeSuper(Error));
    var FilterNotMatchingError = /*#__PURE__*/function (_Error4) {
      inherits(FilterNotMatchingError, _Error4);

      var _super4 = _createSuper(FilterNotMatchingError);

      function FilterNotMatchingError() {
        classCallCheck(this, FilterNotMatchingError);

        return _super4.apply(this, arguments);
      }

      createClass(FilterNotMatchingError, [{
        key: "name",
        get: function get() {
          return "FilterNotMatchingError";
        }
      }]);

      return FilterNotMatchingError;
    }( /*#__PURE__*/wrapNativeSuper(Error));

    function interaction(description, fn) {
      var _ref;

      var promise;
      return _ref = {
        description: description
      }, defineProperty(_ref, Symbol.toStringTag, "[interaction ".concat(description, "]")), defineProperty(_ref, "then", function then(onFulfill, onReject) {
        if (!promise) {
          promise = fn();
        }

        return promise.then(onFulfill, onReject);
      }), defineProperty(_ref, "catch", function _catch(onReject) {
        if (!promise) {
          promise = fn();
        }

        return promise["catch"](onReject);
      }), defineProperty(_ref, "finally", function _finally(handler) {
        if (!promise) {
          promise = fn();
        }

        return promise["finally"](handler);
      }), _ref;
    }

    var defaultSelector = 'div';
    var Interactor = /*#__PURE__*/function () {
      function Interactor(name, specification, locator, filter) {
        classCallCheck(this, Interactor);

        this.name = name;
        this.specification = specification;
        this.locator = locator;
        this.filter = filter; // eslint-disable-next-line @typescript-eslint/no-explicit-any

        this.ancestors = [];
      } // eslint-disable-next-line @typescript-eslint/no-explicit-any


      createClass(Interactor, [{
        key: "find",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        value: function find(interactor) {
          return Object.create(interactor, {
            ancestors: {
              value: [].concat(toConsumableArray(this.ancestors), [this], toConsumableArray(interactor.ancestors))
            }
          });
        }
      }, {
        key: "unsafeSyncResolve",
        value: function unsafeSyncResolve() {
          return this.ancestorsAndSelf.reduce(function (parentElement, interactor) {
            var elements = Array.from(parentElement.querySelectorAll(interactor.specification.selector || defaultSelector));
            var locatedElements = elements.filter(function (element) {
              return interactor.locator.matches(element);
            });
            var filteredElements = locatedElements.filter(function (element) {
              return interactor.filter.matches(element);
            });

            if (filteredElements.length === 1) {
              return filteredElements[0];
            } else if (filteredElements.length === 0) {
              throw new NoSuchElementError("".concat(interactor.description, " does not exist"));
            } else {
              throw new AmbiguousElementError("".concat(interactor.description, " is ambiguous"));
            }
          }, index$1.bigtestGlobals.document.documentElement);
        }
      }, {
        key: "resolve",
        value: function resolve() {
          var _this = this;

          return interaction("".concat(this.description, " resolves"), function () {
            return converge(_this.unsafeSyncResolve.bind(_this));
          });
        }
      }, {
        key: "exists",
        value: function exists() {
          var _this2 = this;

          return interaction("".concat(this.description, " exists"), function () {
            return converge(function () {
              _this2.unsafeSyncResolve();
            });
          });
        }
      }, {
        key: "absent",
        value: function absent() {
          var _this3 = this;

          return interaction("".concat(this.description, " does not exist"), function () {
            return converge(function () {
              try {
                _this3.unsafeSyncResolve();
              } catch (e) {
                if (e.name === 'NoSuchElementError') {
                  return;
                }
              }

              throw new NotAbsentError("".concat(_this3.description, " exists but should not"));
            });
          });
        }
      }, {
        key: "is",
        value: function is(filters) {
          var _this4 = this;

          var filter = new Filter(this.specification, filters);
          return interaction("".concat(this.description, " matches filters: ").concat(filter.description), function () {
            return converge(function () {
              var element = _this4.unsafeSyncResolve();

              if (filter.matches(element)) {
                return;
              } else {
                throw new FilterNotMatchingError("".concat(_this4.description, " does not match filters: ").concat(filter.description));
              }
            });
          });
        }
      }, {
        key: "has",
        value: function has(filters) {
          return this.is(filters);
        }
      }, {
        key: "ancestorsAndSelf",
        get: function get() {
          return [].concat(toConsumableArray(this.ancestors), [this]);
        }
      }, {
        key: "description",
        get: function get() {
          return this.ancestorsAndSelf.reverse().map(function (interactor) {
            return "".concat(interactor.name, " ").concat(interactor.locator.description, " ").concat(interactor.filter.description).trim();
          }).join(' within ');
        }
      }]);

      return Interactor;
    }();

    var Locator = /*#__PURE__*/function () {
      function Locator(locatorFn, value, name) {
        classCallCheck(this, Locator);

        this.locatorFn = locatorFn;
        this.value = value;
        this.name = name;
      }

      createClass(Locator, [{
        key: "matches",
        value: function matches(element) {
          return this.locatorFn(element) === this.value;
        }
      }, {
        key: "description",
        get: function get() {
          if (this.name) {
            var name = this.name.toString().replace(/^by/, '');
            name = name.charAt(0).toLowerCase() + name.slice(1);
            return "with ".concat(name, " ").concat(JSON.stringify(this.value));
          } else {
            return "".concat(JSON.stringify(this.value));
          }
        }
      }]);

      return Locator;
    }();

    function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

    function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

    var defaultLocator = function defaultLocator(element) {
      return element.textContent || "";
    };

    function createInteractor(interactorName) {
      return function (specification) {
        var InteractorClass = /*#__PURE__*/function (_Interactor) {
          inherits(InteractorClass, _Interactor);

          var _super = _createSuper$1(InteractorClass);

          function InteractorClass() {
            classCallCheck(this, InteractorClass);

            return _super.apply(this, arguments);
          }

          return InteractorClass;
        }(Interactor);

        var _loop = function _loop() {
          var _Object$entries$_i = slicedToArray(_Object$entries[_i], 2),
              actionName = _Object$entries$_i[0],
              action = _Object$entries$_i[1];

          Object.defineProperty(InteractorClass.prototype, actionName, {
            value: function value() {
              var _this = this;

              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              var actionDescription = actionName;

              if (args.length) {
                actionDescription += " with " + args.map(function (a) {
                  return JSON.stringify(a);
                }).join(', ');
              }

              return interaction("".concat(actionDescription, " on ").concat(this.description), function () {
                return converge(function () {
                  var element = _this.unsafeSyncResolve();

                  return action.apply(void 0, [element].concat(args));
                });
              });
            },
            configurable: true,
            writable: true,
            enumerable: false
          });
        };

        for (var _i = 0, _Object$entries = Object.entries(specification.actions || {}); _i < _Object$entries.length; _i++) {
          _loop();
        }

        var result = function result(value, filters) {
          var locator = new Locator(specification.defaultLocator || defaultLocator, value);
          var filter = new Filter(specification, filters || {});
          var interactor = new InteractorClass(interactorName, specification, locator, filter);
          return interactor;
        };

        var _loop2 = function _loop2() {
          var _Object$entries2$_i = slicedToArray(_Object$entries2[_i2], 2),
              locatorName = _Object$entries2$_i[0],
              locatorFn = _Object$entries2$_i[1];

          Object.defineProperty(result, locatorName, {
            value: function value(_value, filters) {
              var locator = new Locator(locatorFn, _value, locatorName);
              var filter = new Filter(specification, filters || {});
              var interactor = new InteractorClass(interactorName, specification, locator, filter);
              return interactor;
            },
            configurable: true,
            writable: true,
            enumerable: false
          });
        };

        for (var _i2 = 0, _Object$entries2 = Object.entries(specification.locators || {}); _i2 < _Object$entries2.length; _i2++) {
          _loop2();
        }

        return result;
      };
    }

    var App = {
      visit: function visit() {
        var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
        return interaction("visiting ".concat(JSON.stringify(path)), /*#__PURE__*/asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
          var appUrl, testFrame, url;
          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  appUrl = index$1.bigtestGlobals.appUrl;

                  if (appUrl) {
                    _context.next = 3;
                    break;
                  }

                  throw new Error('no app url defined');

                case 3:
                  testFrame = index$1.bigtestGlobals.testFrame;

                  if (testFrame) {
                    _context.next = 6;
                    break;
                  }

                  throw new Error('no test frame defined');

                case 6:
                  url = new URL(appUrl);
                  url.pathname = path;
                  testFrame.src = url.toString();

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));
      }
    };

    var Input = createInteractor('Input')({
      selector: 'input',
      defaultLocator: function defaultLocator(elem) {
        return elem.name;
      },
      actions: {
        type: function type(elem, val) {
          return elem.value = val;
        },
        focus: function focus(elem) {
          return elem.focus();
        }
      }
    });
    var Button = createInteractor('Button')({
      selector: 'button',
      defaultLocator: function defaultLocator(elem) {
        return elem.innerText.trim();
      },
      filters: {
        enabled: {
          apply: function apply(element) {
            return !element.disabled;
          },
          "default": true
        },
        value: function value(element) {
          return element.value;
        }
      },
      actions: {
        click: function click(elem) {
          return elem.click();
        },
        focus: function focus(elem) {
          return elem.focus();
        }
      }
    });
    var Heading = createInteractor('Heading')({
      selector: 'h1, h2, h3, h4, h5, h6',
      defaultLocator: function defaultLocator(elem) {
        return elem.innerText.trim();
      },
      actions: {
        click: function click(elem) {
          return elem.click();
        }
      }
    });

    var require$$0 = index.test('Basic Test').step('increase timeout', /*#__PURE__*/asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              index$1.bigtestGlobals.defaultInteractorTimeout = 10000;

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))).step('visit /', function () {
      return App.visit('/');
    }).child('Logging in', function (test) {
      return test.step('enter username', function () {
        return Input('username').type('diku_admin');
      }).step('enter password', function () {
        return Input('password').type('admin');
      }).step('submit the form', function () {
        return Button('Log in').click();
      }).assertion('Welcome message visible', /*#__PURE__*/asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Heading('Welcome, the Future Of Libraries Is OPEN!').exists();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));
    });

    var load = function load(res) {
      return res["default"] || res;
    };

    var children = [Object.assign({}, load(require$$0), {
      path: "test/basic.test.js"
    })];
    var manifest = {
      description: "All tests",
      steps: [],
      assertions: [],
      children: children
    };

    return manifest;

})));
//# sourceMappingURL=manifest-dd5a03ecbf23f2c71164964c5f9d6b848204018dd69cbba18df6788607449850.js.map