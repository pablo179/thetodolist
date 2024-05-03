"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signup/page",{

/***/ "(app-pages-browser)/./src/components/SignUpForm.tsx":
/*!***************************************!*\
  !*** ./src/components/SignUpForm.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUpForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/validator */ \"(app-pages-browser)/./src/utils/validator.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction SignUpForm() {\n    _s();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\",\n        username: \"\",\n        confirmPassword: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.currentTarget;\n        setError(\"\");\n        setForm((prevState)=>({\n                ...prevState,\n                [name]: value\n            }));\n    };\n    const isFormValid = ()=>{\n        const { email, password, username, confirmPassword } = form;\n        if (!email || !password || !username || !confirmPassword) {\n            setError(\"Please fill all fields\");\n            return false;\n        }\n        if (!(0,_utils_validator__WEBPACK_IMPORTED_MODULE_2__.validateEmail)(email)) {\n            setError(\"Invalid email\");\n            return false;\n        }\n        if (password !== confirmPassword) {\n            setError(\"Passwords do not match\");\n            return false;\n        }\n        if (!(0,_utils_validator__WEBPACK_IMPORTED_MODULE_2__.validatePassword)(password)) {\n            setError(\"Password must contain at least 6 characters, one uppercase letter and one number\");\n            return false;\n        }\n        return true;\n    };\n    const handleSignUp = async (e)=>{\n        e.preventDefault();\n        const { email, password, username } = form;\n        if (!isFormValid()) return;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSignUp,\n        className: \"mt-4 flex flex-col gap-4 justify-center items-center w-4/5 p-2 text-xs text-slate-600 max-w-72\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"email\",\n                children: [\n                    \"Email\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"email\",\n                        id: \"email\",\n                        placeholder: \"jhon_doe@todolist.com\",\n                        required: true,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"username\",\n                children: [\n                    \"Username\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"username\",\n                        id: \"username\",\n                        placeholder: \"jhon_doe\",\n                        required: true,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"password\",\n                children: [\n                    \"Password\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        name: \"password\",\n                        id: \"password\",\n                        placeholder: \"safe pasword\",\n                        required: true,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"confirmPassword\",\n                children: [\n                    \"Confirm Password\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        name: \"confirmPassword\",\n                        id: \"confirmPassword\",\n                        placeholder: \"safe pasword\",\n                        required: true,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500 text-xs text-left w-full\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                lineNumber: 95,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Sign Up\",\n                className: \"w-full h-8 mt-2 py-1 px-2 rounded-lg bg-slate-500 text-white cursor-pointer\"\n            }, void 0, false, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(SignUpForm, \"ATaDF9D9bof43T1OZm9BxoHr8uY=\");\n_c = SignUpForm;\nvar _c;\n$RefreshReg$(_c, \"SignUpForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpZ25VcEZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNEM7QUFDd0I7QUFFckQsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7UUFDL0JRLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLGlCQUFpQjtJQUNuQjtJQUNBLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxhQUFhO1FBQ3ZDWCxTQUFTO1FBQ1RFLFFBQVEsQ0FBQ1UsWUFBZTtnQkFBRSxHQUFHQSxTQUFTO2dCQUFFLENBQUNILEtBQUssRUFBRUM7WUFBTTtJQUN4RDtJQUNBLE1BQU1HLGNBQWM7UUFDbEIsTUFBTSxFQUFFVixLQUFLLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUUsR0FBR0w7UUFDdkQsSUFBSSxDQUFDRSxTQUFTLENBQUNDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDQyxpQkFBaUI7WUFDeEROLFNBQVM7WUFDVCxPQUFPO1FBQ1Q7UUFDQSxJQUFJLENBQUNKLCtEQUFhQSxDQUFDTyxRQUFRO1lBQ3pCSCxTQUFTO1lBQ1QsT0FBTztRQUNUO1FBQ0EsSUFBSUksYUFBYUUsaUJBQWlCO1lBQ2hDTixTQUFTO1lBQ1QsT0FBTztRQUNUO1FBQ0EsSUFBSSxDQUFDSCxrRUFBZ0JBLENBQUNPLFdBQVc7WUFDL0JKLFNBQ0U7WUFFRixPQUFPO1FBQ1Q7UUFDQSxPQUFPO0lBQ1Q7SUFDQSxNQUFNYyxlQUFlLE9BQU9OO1FBQzFCQSxFQUFFTyxjQUFjO1FBQ2hCLE1BQU0sRUFBRVosS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUFHSjtRQUN0QyxJQUFJLENBQUNZLGVBQWU7SUFDdEI7SUFDQSxxQkFDRSw4REFBQ1o7UUFDQ2UsVUFBVUY7UUFDVkcsV0FBVTs7MEJBRVYsOERBQUNDO2dCQUFNQyxTQUFROztvQkFBUTtrQ0FFckIsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMWixNQUFLO3dCQUNMYSxJQUFHO3dCQUNIQyxhQUFZO3dCQUNaQyxRQUFRO3dCQUNSQyxVQUFVbEI7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ1c7Z0JBQU1DLFNBQVE7O29CQUFXO2tDQUV4Qiw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xaLE1BQUs7d0JBQ0xhLElBQUc7d0JBQ0hDLGFBQVk7d0JBQ1pDLFFBQVE7d0JBQ1JDLFVBQVVsQjs7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDVztnQkFBTUMsU0FBUTs7b0JBQVc7a0NBRXhCLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTFosTUFBSzt3QkFDTGEsSUFBRzt3QkFDSEMsYUFBWTt3QkFDWkMsUUFBUTt3QkFDUkMsVUFBVWxCOzs7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNXO2dCQUFNQyxTQUFROztvQkFBa0I7a0NBRS9CLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTFosTUFBSzt3QkFDTGEsSUFBRzt3QkFDSEMsYUFBWTt3QkFDWkMsUUFBUTt3QkFDUkMsVUFBVWxCOzs7Ozs7Ozs7Ozs7WUFHYlIsdUJBQ0MsOERBQUMyQjtnQkFBRVQsV0FBVTswQkFBeUNsQjs7Ozs7OzBCQUV4RCw4REFBQ3FCO2dCQUNDQyxNQUFLO2dCQUNMWCxPQUFNO2dCQUNOTyxXQUFVOzs7Ozs7Ozs7Ozs7QUFJbEI7R0FuR3dCbkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lnblVwRm9ybS50c3g/ODgyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBGb3JtRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHZhbGlkYXRlRW1haWwsIHZhbGlkYXRlUGFzc3dvcmQgfSBmcm9tIFwiQC91dGlscy92YWxpZGF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwRm9ybSgpIHtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xuICAgIGVtYWlsOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgIGNvbmZpcm1QYXNzd29yZDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBGb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgc2V0RXJyb3IoXCJcIik7XG4gICAgc2V0Rm9ybSgocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIFtuYW1lXTogdmFsdWUgfSkpO1xuICB9O1xuICBjb25zdCBpc0Zvcm1WYWxpZCA9ICgpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgdXNlcm5hbWUsIGNvbmZpcm1QYXNzd29yZCB9ID0gZm9ybTtcbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCB8fCAhdXNlcm5hbWUgfHwgIWNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgc2V0RXJyb3IoXCJQbGVhc2UgZmlsbCBhbGwgZmllbGRzXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXZhbGlkYXRlRW1haWwoZW1haWwpKSB7XG4gICAgICBzZXRFcnJvcihcIkludmFsaWQgZW1haWxcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICBzZXRFcnJvcihcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCkpIHtcbiAgICAgIHNldEVycm9yKFxuICAgICAgICBcIlBhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCA2IGNoYXJhY3RlcnMsIG9uZSB1cHBlcmNhc2UgbGV0dGVyIGFuZCBvbmUgbnVtYmVyXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBoYW5kbGVTaWduVXAgPSBhc3luYyAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIHVzZXJuYW1lIH0gPSBmb3JtO1xuICAgIGlmICghaXNGb3JtVmFsaWQoKSkgcmV0dXJuO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU2lnblVwfVxuICAgICAgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGZsZXgtY29sIGdhcC00IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTQvNSBwLTIgdGV4dC14cyB0ZXh0LXNsYXRlLTYwMCBtYXgtdy03MlwiXG4gICAgPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxuICAgICAgICBFbWFpbFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImpob25fZG9lQHRvZG9saXN0LmNvbVwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5cbiAgICAgICAgVXNlcm5hbWVcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJqaG9uX2RvZVwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2FmZSBwYXN3b3JkXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtUGFzc3dvcmRcIj5cbiAgICAgICAgQ29uZmlybSBQYXNzd29yZFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgIGlkPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInNhZmUgcGFzd29yZFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXhzIHRleHQtbGVmdCB3LWZ1bGxcIj57ZXJyb3J9PC9wPlxuICAgICAgKX1cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgdmFsdWU9XCJTaWduIFVwXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtOCBtdC0yIHB5LTEgcHgtMiByb3VuZGVkLWxnIGJnLXNsYXRlLTUwMCB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyXCJcbiAgICAgIC8+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidmFsaWRhdGVFbWFpbCIsInZhbGlkYXRlUGFzc3dvcmQiLCJTaWduVXBGb3JtIiwiZXJyb3IiLCJzZXRFcnJvciIsImZvcm0iLCJzZXRGb3JtIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJuYW1lIiwiY29uZmlybVBhc3N3b3JkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJwcmV2U3RhdGUiLCJpc0Zvcm1WYWxpZCIsImhhbmRsZVNpZ25VcCIsInByZXZlbnREZWZhdWx0Iiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SignUpForm.tsx\n"));

/***/ })

});