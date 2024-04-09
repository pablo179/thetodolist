"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/todo/page",{

/***/ "(app-pages-browser)/./src/app/todo/page.tsx":
/*!*******************************!*\
  !*** ./src/app/todo/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ItemComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ItemComponent */ \"(app-pages-browser)/./src/components/ItemComponent.tsx\");\n/* harmony import */ var _hooks_useItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useItems */ \"(app-pages-browser)/./src/hooks/useItems.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const { items, addItem, removeItem } = (0,_hooks_useItems__WEBPACK_IMPORTED_MODULE_2__.useItems)();\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const form = e.currentTarget;\n        const input = form.elements.namedItem(\"item\");\n        const isValid = input instanceof HTMLInputElement && input.value;\n        if (isValid) {\n            addItem(input.value);\n            input.value = \"\";\n        }\n    };\n    const createHandleRemoveItem = (id)=>()=>{\n            removeItem(id);\n        };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-row items-center m-auto w-1/2 my-3 border rounded-md border-slate-400 relative\",\n                onSubmit: handleSubmit,\n                \"aria-label\": \"add elements\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-full p-1 pl-3 font-light text-slate-800 rounded-md h-full text-sm outline-none\",\n                        name: \"item\",\n                        required: true,\n                        type: \"text\",\n                        placeholder: \"New todo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/app/todo/page.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-12 h-full rounded-r-md text-slate-600 hover:text-cyan-600 scale-90 hover:scale-110 transition-transform \",\n                        type: \"submit\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"material-symbols-outlined w-full h-full mt-1 font-thin\",\n                            children: \"add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/app/todo/page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/app/todo/page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/app/todo/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-col items-center w-full min-h-80 gap-2 border border-t-1\",\n                children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ItemComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        handleClick: createHandleRemoveItem(item.id),\n                        ...item\n                    }, item.id, false, {\n                        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/app/todo/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/app/todo/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/app/todo/page.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"XaCs4ZbhnNJWaWSrE3oeInjA3p4=\", false, function() {\n    return [\n        _hooks_useItems__WEBPACK_IMPORTED_MODULE_2__.useItems\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdG9kby9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFa0Q7QUFDRjtBQU1qQyxTQUFTRTs7SUFDdEIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFLEdBQUdKLHlEQUFRQTtJQUMvQyxNQUFNSyxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLE9BQU9GLEVBQUVHLGFBQWE7UUFDNUIsTUFBTUMsUUFBUUYsS0FBS0csUUFBUSxDQUFDQyxTQUFTLENBQUM7UUFDdEMsTUFBTUMsVUFBVUgsaUJBQWlCSSxvQkFBb0JKLE1BQU1LLEtBQUs7UUFDaEUsSUFBSUYsU0FBUztZQUNYVixRQUFRTyxNQUFNSyxLQUFLO1lBQ25CTCxNQUFNSyxLQUFLLEdBQUc7UUFDaEI7SUFDRjtJQUNBLE1BQU1DLHlCQUF5QixDQUFDQyxLQUFlO1lBQzdDYixXQUFXYTtRQUNiO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ1Y7Z0JBQ0NXLFdBQVU7Z0JBQ1ZDLFVBQVVmO2dCQUNWZ0IsY0FBVzs7a0NBRVgsOERBQUNYO3dCQUNDUyxXQUFVO3dCQUNWRyxNQUFLO3dCQUNMQyxRQUFRO3dCQUNSQyxNQUFLO3dCQUNMQyxhQUFZOzs7Ozs7a0NBRWQsOERBQUNDO3dCQUNDUCxXQUFVO3dCQUVWSyxNQUFLO2tDQUVMLDRFQUFDRzs0QkFBS1IsV0FBVTtzQ0FBeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUs3RSw4REFBQ1M7Z0JBQUdULFdBQVU7MEJBQ1hqQixNQUFNMkIsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDL0IsaUVBQUlBO3dCQUVIZ0MsYUFBYWYsdUJBQXVCYyxLQUFLYixFQUFFO3dCQUMxQyxHQUFHYSxJQUFJO3VCQUZIQSxLQUFLYixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBUXhCO0dBbkR3QmhCOztRQUNpQkQscURBQVFBOzs7S0FEekJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdG9kby9wYWdlLnRzeD83ZGU3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9JdGVtQ29tcG9uZW50XCI7XG5pbXBvcnQgeyB1c2VJdGVtcyB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VJdGVtc1wiO1xuZXhwb3J0IGludGVyZmFjZSBJdGVtIHtcbiAgaWQ6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGl0ZW1zLCBhZGRJdGVtLCByZW1vdmVJdGVtIH0gPSB1c2VJdGVtcygpO1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBjb25zdCBpbnB1dCA9IGZvcm0uZWxlbWVudHMubmFtZWRJdGVtKFwiaXRlbVwiKTtcbiAgICBjb25zdCBpc1ZhbGlkID0gaW5wdXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGlucHV0LnZhbHVlO1xuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICBhZGRJdGVtKGlucHV0LnZhbHVlKTtcbiAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNyZWF0ZUhhbmRsZVJlbW92ZUl0ZW0gPSAoaWQ6IHN0cmluZykgPT4gKCkgPT4ge1xuICAgIHJlbW92ZUl0ZW0oaWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIG0tYXV0byB3LTEvMiBteS0zIGJvcmRlciByb3VuZGVkLW1kIGJvcmRlci1zbGF0ZS00MDAgcmVsYXRpdmVcIlxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICBhcmlhLWxhYmVsPVwiYWRkIGVsZW1lbnRzXCJcbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMSBwbC0zIGZvbnQtbGlnaHQgdGV4dC1zbGF0ZS04MDAgcm91bmRlZC1tZCBoLWZ1bGwgdGV4dC1zbSBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgIG5hbWU9XCJpdGVtXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5ldyB0b2RvXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMTIgaC1mdWxsIHJvdW5kZWQtci1tZCB0ZXh0LXNsYXRlLTYwMCBob3Zlcjp0ZXh0LWN5YW4tNjAwIHNjYWxlLTkwIGhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybVxuICAgICAgICBcIlxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB3LWZ1bGwgaC1mdWxsIG10LTEgZm9udC10aGluXCI+XG4gICAgICAgICAgICBhZGRcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHctZnVsbCBtaW4taC04MCBnYXAtMiBib3JkZXIgYm9yZGVyLXQtMVwiPlxuICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXtjcmVhdGVIYW5kbGVSZW1vdmVJdGVtKGl0ZW0uaWQpfVxuICAgICAgICAgICAgey4uLml0ZW19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkl0ZW0iLCJ1c2VJdGVtcyIsIkhvbWUiLCJpdGVtcyIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImN1cnJlbnRUYXJnZXQiLCJpbnB1dCIsImVsZW1lbnRzIiwibmFtZWRJdGVtIiwiaXNWYWxpZCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJ2YWx1ZSIsImNyZWF0ZUhhbmRsZVJlbW92ZUl0ZW0iLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiYXJpYS1sYWJlbCIsIm5hbWUiLCJyZXF1aXJlZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInNwYW4iLCJ1bCIsIm1hcCIsIml0ZW0iLCJoYW5kbGVDbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/todo/page.tsx\n"));

/***/ })

});