"use strict";

// var a = 1;
// {
//   var a = 2
// }
// {
//   let a = 3
//   console.log(a)
// }

// let [a,b,c] = [0,1,2]
// console.log(a)

// [4]
// function michael(...arg){
//   console.log(arg[0])
//   console.log(arg[1])
//   console.log(arg[2])
//   console.log(arg[3])
// }
// michael(1,2,3)
// let arr1 = ['www','michael','com']
// // let arr2 = arr1
// let arr2 = [...arr1]

// console.log(arr2)

// arr2.push('Michael')
// console.log(arr2)
// console.log(arr1)

function a(first) {
  for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arg[_key - 1] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var val = _step.value;

      console.log(val);
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
}
a(0, 1, 2, 3, 4, 5, 6, 7);
