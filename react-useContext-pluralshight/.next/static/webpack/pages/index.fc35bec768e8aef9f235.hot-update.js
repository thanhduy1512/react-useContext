/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder */ \"./node_modules/react-placeholder/lib/index.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ \"./src/contexts/SpeakerFilterContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/dexter633/Desktop/pluralsight/react/lesson1/src/components/SpeakersList.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction SpeakersList() {\n  _s();\n\n  var _useRequestDelay = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default)(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_5__.data),\n      speakersData = _useRequestDelay.data,\n      requestStatus = _useRequestDelay.requestStatus,\n      error = _useRequestDelay.error,\n      updateRecord = _useRequestDelay.updateRecord,\n      insertRecord = _useRequestDelay.insertRecord,\n      deleteRecord = _useRequestDelay.deleteRecord;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_6__.SpeakerFilterContext),\n      searchQuery = _useContext.searchQuery,\n      eventYear = _useContext.eventYear;\n\n  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILURE) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"text-danger\",\n      children: [\"Error: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: [\"Loading Speaker Data Failed \", error]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 20\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 16\n    }, this);\n  } //if (isLoading === true) return <div>Loading...</div>\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container speakers-list\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_3__.default, {\n      type: \"media\",\n      rows: 15,\n      className: \"speakerslist-placeHolder\",\n      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.SUCCESS,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: speakersData.filter(function (speaker) {\n          return speaker.first.toLowerCase().includes(searchQuery) || speaker.last.toLowerCase().includes(searchQuery);\n        }).filter(function (speaker) {\n          return speaker.sessions.find(function (session) {\n            return session.eventYear === eventYear;\n          });\n        }).map(function (speaker) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__.default, {\n            speaker: speaker,\n            updateRecord: updateRecord,\n            insertRecord: insertRecord,\n            deleteRecord: deleteRecord\n          }, speaker.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 33\n          }, this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, this);\n}\n\n_s(SpeakersList, \"Tzbc4U0vt2e0OfjXWCFIAH/4BMc=\", false, function () {\n  return [_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default];\n});\n\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\n\nvar _c;\n\n$RefreshReg$(_c, \"SpeakersList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzP2NhNTAiXSwibmFtZXMiOlsiU3BlYWtlcnNMaXN0IiwidXNlUmVxdWVzdERlbGF5IiwiZGF0YSIsInNwZWFrZXJzRGF0YSIsInJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInVwZGF0ZVJlY29yZCIsImluc2VydFJlY29yZCIsImRlbGV0ZVJlY29yZCIsInVzZUNvbnRleHQiLCJTcGVha2VyRmlsdGVyQ29udGV4dCIsInNlYXJjaFF1ZXJ5IiwiZXZlbnRZZWFyIiwiUkVRVUVTVF9TVEFUVVMiLCJmaWx0ZXIiLCJzcGVha2VyIiwiZmlyc3QiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibGFzdCIsInNlc3Npb25zIiwiZmluZCIsInNlc3Npb24iLCJtYXAiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUEseUJBU2hCQywrREFBZSxDQUFDLElBQUQsRUFBT0MsOENBQVAsQ0FUQztBQUFBLE1BR1ZDLFlBSFUsb0JBR2hCRCxJQUhnQjtBQUFBLE1BSWhCRSxhQUpnQixvQkFJaEJBLGFBSmdCO0FBQUEsTUFLaEJDLEtBTGdCLG9CQUtoQkEsS0FMZ0I7QUFBQSxNQU1oQkMsWUFOZ0Isb0JBTWhCQSxZQU5nQjtBQUFBLE1BT2hCQyxZQVBnQixvQkFPaEJBLFlBUGdCO0FBQUEsTUFRaEJDLFlBUmdCLG9CQVFoQkEsWUFSZ0I7O0FBQUEsb0JBV2VDLGlEQUFVLENBQUNDLGdGQUFELENBWHpCO0FBQUEsTUFXWkMsV0FYWSxlQVdaQSxXQVhZO0FBQUEsTUFXQ0MsU0FYRCxlQVdDQSxTQVhEOztBQWFwQixNQUFJUixhQUFhLEtBQUtTLDBFQUF0QixFQUE4QztBQUMxQyx3QkFBTztBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEseUNBQ0k7QUFBQSxtREFBZ0NSLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBR0gsR0FqQm1CLENBbUJwQjs7O0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDSSw4REFBQyxzREFBRDtBQUNJLFVBQUksRUFBQyxPQURUO0FBRUksVUFBSSxFQUFFLEVBRlY7QUFHSSxlQUFTLEVBQUMsMEJBSGQ7QUFJSSxXQUFLLEVBQUVELGFBQWEsS0FBS1MsMEVBSjdCO0FBQUEsNkJBS0k7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxrQkFDS1YsWUFBWSxDQUNSVyxNQURKLENBQ1csVUFBVUMsT0FBVixFQUFtQjtBQUN2QixpQkFDSUEsT0FBTyxDQUFDQyxLQUFSLENBQWNDLFdBQWQsR0FBNEJDLFFBQTVCLENBQXFDUCxXQUFyQyxLQUNBSSxPQUFPLENBQUNJLElBQVIsQ0FBYUYsV0FBYixHQUEyQkMsUUFBM0IsQ0FBb0NQLFdBQXBDLENBRko7QUFJSCxTQU5KLEVBT0lHLE1BUEosQ0FPVyxVQUFVQyxPQUFWLEVBQW1CO0FBQ3ZCLGlCQUFPQSxPQUFPLENBQUNLLFFBQVIsQ0FBaUJDLElBQWpCLENBQXNCLFVBQUNDLE9BQUQsRUFBYTtBQUN0QyxtQkFBT0EsT0FBTyxDQUFDVixTQUFSLEtBQXNCQSxTQUE3QjtBQUNILFdBRk0sQ0FBUDtBQUdILFNBWEosRUFZSVcsR0FaSixDQVlRLFVBQVVSLE9BQVYsRUFBbUI7QUFDcEIsOEJBQ0ksOERBQUMsNkNBQUQ7QUFDSSxtQkFBTyxFQUFFQSxPQURiO0FBRUksd0JBQVksRUFBRVQsWUFGbEI7QUFHSSx3QkFBWSxFQUFFQyxZQUhsQjtBQUlJLHdCQUFZLEVBQUVDO0FBSmxCLGFBQWNPLE9BQU8sQ0FBQ1MsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQVFILFNBckJKO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQ0g7O0dBdkRReEIsWTtVQVNEQywyRDs7O0tBVENELFk7QUF5RFQsK0RBQWVBLFlBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNwZWFrZXIgZnJvbSAnLi9TcGVha2VyJztcbmltcG9ydCBSZWFjdFBsYWNlSG9sZGVyIGZyb20gJ3JlYWN0LXBsYWNlaG9sZGVyJztcbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXksIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tICcuLi9ob29rcy91c2VSZXF1ZXN0RGVsYXknO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4uLy4uL1NwZWFrZXJEYXRhJztcbmltcG9ydCB7IFNwZWFrZXJGaWx0ZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHQnO1xuXG5mdW5jdGlvbiBTcGVha2Vyc0xpc3QoKSB7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIGRhdGE6IHNwZWFrZXJzRGF0YSxcbiAgICAgICAgcmVxdWVzdFN0YXR1cyxcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIHVwZGF0ZVJlY29yZCxcbiAgICAgICAgaW5zZXJ0UmVjb3JkLFxuICAgICAgICBkZWxldGVSZWNvcmQsXG4gICAgfSA9IHVzZVJlcXVlc3REZWxheSgyMDAwLCBkYXRhKTtcblxuICAgIGNvbnN0IHsgc2VhcmNoUXVlcnksIGV2ZW50WWVhciB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XG5cbiAgICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgRXJyb3I6IDxiPkxvYWRpbmcgU3BlYWtlciBEYXRhIEZhaWxlZCB7ZXJyb3J9PC9iPlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG5cbiAgICAvL2lmIChpc0xvYWRpbmcgPT09IHRydWUpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cbiAgICAgICAgICAgIDxSZWFjdFBsYWNlSG9sZGVyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm1lZGlhXCJcbiAgICAgICAgICAgICAgICByb3dzPXsxNX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGVha2Vyc2xpc3QtcGxhY2VIb2xkZXJcIlxuICAgICAgICAgICAgICAgIHJlYWR5PXtyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICB7c3BlYWtlcnNEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzcGVha2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlci5maXJzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyLmxhc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNwZWFrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3BlYWtlci5zZXNzaW9ucy5maW5kKChzZXNzaW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXNzaW9uLmV2ZW50WWVhciA9PT0gZXZlbnRZZWFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlciBrZXk9e3NwZWFrZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVJlY29yZD17ZGVsZXRlUmVjb3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdFBsYWNlSG9sZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n");

/***/ })

});