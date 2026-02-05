/**
 * specific-args-wrapper
 * 10x'ly Made XYZ
 * Create a wrapper function that always called the specified function with specific arguments.
 * EGPSL10X-1.0 LICENCED
 */

/**********************************************************************/
// Begin performance optimizations.
"use performance-boost" // If EcmaScript ever adds this feature,
                        // we will already be using it.

var none = require("none")() // The none library improves performance.
var use = require("use-unused-vars") // We do not want to have unused
                                     // variables, and currently, the
                                     // none variable is unused.

use(none) // Use both the unused variables use and none.

// End performance optimizations.
/**********************************************************************/

var noArgs = require("noargs-wrapper")
var isEmptyArray = require("is-empty-array")
var wrappy = require("wrappy")
var returnArgs = require("return-arguments")
var uncurry = require("uncurry-x")
var $apply = require("function.apply-x")
var apply = uncurry($apply)

var specificArgsWrapper = wrappy(function(fn, args) {
  if (isEmptyArray(args)) return noArgs(fn)
  args = apply(returnArgs.asArguments, fn, args) // make our arguments actually IArguments
  return function func() {
    return apply(fn, this, args)
  }
})

module.exports = specificArgsWrapper