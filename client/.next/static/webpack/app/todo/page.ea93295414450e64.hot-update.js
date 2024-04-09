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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ItemComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ItemComponent */ \"(app-pages-browser)/./src/components/ItemComponent.tsx\");\n/* harmony import */ var _hooks_useItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useItems */ \"(app-pages-browser)/./src/hooks/useItems.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const { items, addItem, removeItem } = (0,_hooks_useItems__WEBPACK_IMPORTED_MODULE_2__.useItems)();\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const form = e.currentTarget;\n        const input = form.elements.namedItem(\"item\");\n        const isValid = input instanceof HTMLInputElement && input.value;\n        if (isValid) {\n            addItem(input.value);\n            input.value = \"\";\n        }\n    };\n    const createHandleRemoveItem = (id)=>()=>{\n            removeItem(id);\n        };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full flex flex-col justify-start items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-row items-center w-1/2 min-w-72 my-3 border rounded-md border-slate-400 relative\",\n                onSubmit: handleSubmit,\n                \"aria-label\": \"add elements\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-full p-1 pl-3 font-light text-slate-800 rounded-md h-full text-sm outline-none\",\n                        name: \"item\",\n                        required: true,\n                        type: \"text\",\n                        placeholder: \"New todo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/app/todo/page.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-12 h-full rounded-r-md text-slate-600 hover:text-cyan-600 scale-90 hover:scale-110 transition-transform \",\n                        type: \"submit\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"material-symbols-outlined w-full h-full mt-1 font-thin\",\n                            children: \"add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/app/todo/page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/app/todo/page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/app/todo/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-col items-center w-full min-h-80 gap-2 border border-t-1\",\n                children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ItemComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        handleClick: createHandleRemoveItem(item.id),\n                        ...item\n                    }, item.id, false, {\n                        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/app/todo/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/app/todo/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/app/todo/page.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"XaCs4ZbhnNJWaWSrE3oeInjA3p4=\", false, function() {\n    return [\n        _hooks_useItems__WEBPACK_IMPORTED_MODULE_2__.useItems\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdG9kby9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFa0Q7QUFDRjtBQU1qQyxTQUFTRTs7SUFDdEIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFLEdBQUdKLHlEQUFRQTtJQUMvQyxNQUFNSyxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLE9BQU9GLEVBQUVHLGFBQWE7UUFDNUIsTUFBTUMsUUFBUUYsS0FBS0csUUFBUSxDQUFDQyxTQUFTLENBQUM7UUFDdEMsTUFBTUMsVUFBVUgsaUJBQWlCSSxvQkFBb0JKLE1BQU1LLEtBQUs7UUFDaEUsSUFBSUYsU0FBUztZQUNYVixRQUFRTyxNQUFNSyxLQUFLO1lBQ25CTCxNQUFNSyxLQUFLLEdBQUc7UUFDaEI7SUFDRjtJQUNBLE1BQU1DLHlCQUF5QixDQUFDQyxLQUFlO1lBQzdDYixXQUFXYTtRQUNiO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDWDtnQkFDQ1csV0FBVTtnQkFDVkMsVUFBVWY7Z0JBQ1ZnQixjQUFXOztrQ0FFWCw4REFBQ1g7d0JBQ0NTLFdBQVU7d0JBQ1ZHLE1BQUs7d0JBQ0xDLFFBQVE7d0JBQ1JDLE1BQUs7d0JBQ0xDLGFBQVk7Ozs7OztrQ0FFZCw4REFBQ0M7d0JBQ0NQLFdBQVU7d0JBRVZLLE1BQUs7a0NBRUwsNEVBQUNHOzRCQUFLUixXQUFVO3NDQUF5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzdFLDhEQUFDUztnQkFBR1QsV0FBVTswQkFDWGpCLE1BQU0yQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUMvQixpRUFBSUE7d0JBRUhnQyxhQUFhZix1QkFBdUJjLEtBQUtiLEVBQUU7d0JBQzFDLEdBQUdhLElBQUk7dUJBRkhBLEtBQUtiLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFReEI7R0FuRHdCaEI7O1FBQ2lCRCxxREFBUUE7OztLQUR6QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90b2RvL3BhZ2UudHN4PzdkZTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBJdGVtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0l0ZW1Db21wb25lbnRcIjtcbmltcG9ydCB7IHVzZUl0ZW1zIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUl0ZW1zXCI7XG5leHBvcnQgaW50ZXJmYWNlIEl0ZW0ge1xuICBpZDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgaXRlbXMsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0gfSA9IHVzZUl0ZW1zKCk7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IGlucHV0ID0gZm9ybS5lbGVtZW50cy5uYW1lZEl0ZW0oXCJpdGVtXCIpO1xuICAgIGNvbnN0IGlzVmFsaWQgPSBpbnB1dCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgaW5wdXQudmFsdWU7XG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgIGFkZEl0ZW0oaW5wdXQudmFsdWUpO1xuICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY3JlYXRlSGFuZGxlUmVtb3ZlSXRlbSA9IChpZDogc3RyaW5nKSA9PiAoKSA9PiB7XG4gICAgcmVtb3ZlSXRlbShpZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiID5cbiAgICAgIDxmb3JtXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHctMS8yIG1pbi13LTcyIG15LTMgYm9yZGVyIHJvdW5kZWQtbWQgYm9yZGVyLXNsYXRlLTQwMCByZWxhdGl2ZVwiXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIGFyaWEtbGFiZWw9XCJhZGQgZWxlbWVudHNcIlxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0xIHBsLTMgZm9udC1saWdodCB0ZXh0LXNsYXRlLTgwMCByb3VuZGVkLW1kIGgtZnVsbCB0ZXh0LXNtIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgbmFtZT1cIml0ZW1cIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmV3IHRvZG9cIlxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0xMiBoLWZ1bGwgcm91bmRlZC1yLW1kIHRleHQtc2xhdGUtNjAwIGhvdmVyOnRleHQtY3lhbi02MDAgc2NhbGUtOTAgaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tdHJhbnNmb3JtXG4gICAgICAgIFwiXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHctZnVsbCBoLWZ1bGwgbXQtMSBmb250LXRoaW5cIj5cbiAgICAgICAgICAgIGFkZFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdy1mdWxsIG1pbi1oLTgwIGdhcC0yIGJvcmRlciBib3JkZXItdC0xXCI+XG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e2NyZWF0ZUhhbmRsZVJlbW92ZUl0ZW0oaXRlbS5pZCl9XG4gICAgICAgICAgICB7Li4uaXRlbX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSXRlbSIsInVzZUl0ZW1zIiwiSG9tZSIsIml0ZW1zIiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiY3VycmVudFRhcmdldCIsImlucHV0IiwiZWxlbWVudHMiLCJuYW1lZEl0ZW0iLCJpc1ZhbGlkIiwiSFRNTElucHV0RWxlbWVudCIsInZhbHVlIiwiY3JlYXRlSGFuZGxlUmVtb3ZlSXRlbSIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJhcmlhLWxhYmVsIiwibmFtZSIsInJlcXVpcmVkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwic3BhbiIsInVsIiwibWFwIiwiaXRlbSIsImhhbmRsZUNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/todo/page.tsx\n"));

/***/ })

});