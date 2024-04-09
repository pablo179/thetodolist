"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/LoginForm.tsx":
/*!**************************************!*\
  !*** ./src/components/LoginForm.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/request */ \"(app-pages-browser)/./src/utils/request.ts\");\n/* harmony import */ var _hooks_useLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useLoading */ \"(app-pages-browser)/./src/hooks/useLoading.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/../node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _utils_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/validator */ \"(app-pages-browser)/./src/utils/validator.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction LoginForm() {\n    _s();\n    const { LoadingSwitch, load } = (0,_hooks_useLoading__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleChange = (e)=>{\n        const { name, value } = e.currentTarget;\n        setError(\"\");\n        setForm((prevState)=>({\n                ...prevState,\n                [name]: value\n            }));\n    };\n    const isFormValid = ()=>{\n        const { email, password } = form;\n        if (!email || !password) {\n            setError(\"Please fill all fields\");\n            return false;\n        }\n        if (!(0,_utils_validator__WEBPACK_IMPORTED_MODULE_5__.validateEmail)(email)) {\n            setError(\"Invalid email\");\n            return false;\n        }\n        if (!(0,_utils_validator__WEBPACK_IMPORTED_MODULE_5__.validatePassword)(password)) {\n            setError(\"Password must contain at least one uppercase letter, one number and be at least 6 characters long\");\n            return false;\n        }\n        return true;\n    };\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        const { email, password } = form;\n        if (!isFormValid()) return;\n        const loginin = await load((0,_utils_request__WEBPACK_IMPORTED_MODULE_2__.request)(\"/auth/login\", \"POST\", {\n            email: email,\n            password: password\n        }));\n        if (loginin.error) {\n            setError(loginin.error);\n            return;\n        }\n        router.push(\"/todo\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleLogin,\n        className: \"mt-4 flex flex-col gap-4 justify-center items-center w-4/5 p-2 text-xs text-slate-600 max-w-72\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"email\",\n                children: [\n                    \"Email\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"email\",\n                        id: \"email\",\n                        placeholder: \"jhon_doe@todolist.com\",\n                        required: true,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/LoginForm.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/LoginForm.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"password\",\n                children: [\n                    \"Password\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        name: \"password\",\n                        id: \"password\",\n                        placeholder: \"safe pasword\",\n                        required: true,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/LoginForm.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/LoginForm.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500 text-xs text-left w-full\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/LoginForm.tsx\",\n                lineNumber: 77,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadingSwitch, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    value: \"Login\",\n                    className: \"bg-slate-600 p-2 rounded-md cursor-pointer w-full text-slate-200\"\n                }, void 0, false, {\n                    fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/LoginForm.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/LoginForm.tsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/LoginForm.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginForm, \"eEM1hDrtvkS4NU/MPZcsaAEYs7A=\", false, function() {\n    return [\n        _hooks_useLoading__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNEO0FBQ0U7QUFDRjtBQUN5QjtBQUVyRCxTQUFTTTs7SUFDdEIsTUFBTSxFQUFFQyxhQUFhLEVBQUVDLElBQUksRUFBRSxHQUFHTiw2REFBVUE7SUFDMUMsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1csTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQztRQUFFYSxPQUFPO1FBQUlDLFVBQVU7SUFBRztJQUMzRCxNQUFNQyxTQUFTWiwwREFBU0E7SUFDeEIsTUFBTWEsZUFBZSxDQUFDQztRQUNwQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLEVBQUVHLGFBQWE7UUFDdkNWLFNBQVM7UUFDVEUsUUFBUVMsQ0FBQUEsWUFBYztnQkFBRSxHQUFHQSxTQUFTO2dCQUFFLENBQUNILEtBQUssRUFBRUM7WUFBTTtJQUN0RDtJQUVBLE1BQU1HLGNBQWM7UUFDbEIsTUFBTSxFQUFFVCxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSDtRQUM1QixJQUFJLENBQUNFLFNBQVMsQ0FBQ0MsVUFBVTtZQUN2QkosU0FBUztZQUNULE9BQU87UUFDVDtRQUNBLElBQUksQ0FBQ04sK0RBQWFBLENBQUNTLFFBQVE7WUFDekJILFNBQVM7WUFDVCxPQUFPO1FBQ1Q7UUFDQSxJQUFJLENBQUNMLGtFQUFnQkEsQ0FBQ1MsV0FBVztZQUMvQkosU0FBUztZQUNULE9BQU87UUFDVDtRQUNBLE9BQU87SUFDVDtJQUVBLE1BQU1hLGNBQWMsT0FBT047UUFDekJBLEVBQUVPLGNBQWM7UUFDaEIsTUFBTSxFQUFFWCxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSDtRQUM1QixJQUFJLENBQUNXLGVBQWU7UUFDcEIsTUFBTUcsVUFBVSxNQUFNakIsS0FBS1AsdURBQU9BLENBQUMsZUFBZSxRQUFRO1lBQ3hEWSxPQUFPQTtZQUNQQyxVQUFVQTtRQUNaO1FBQ0EsSUFBSVcsUUFBUWhCLEtBQUssRUFBRTtZQUNqQkMsU0FBU2UsUUFBUWhCLEtBQUs7WUFDdEI7UUFDRjtRQUNBTSxPQUFPVyxJQUFJLENBQUM7SUFDZDtJQUNBLHFCQUNFLDhEQUFDZjtRQUNDZ0IsVUFBVUo7UUFDVkssV0FBVTs7MEJBRVYsOERBQUNDO2dCQUFNQyxTQUFROztvQkFBUTtrQ0FFckIsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMZCxNQUFLO3dCQUNMZSxJQUFHO3dCQUNIQyxhQUFZO3dCQUNaQyxRQUFRO3dCQUNSQyxVQUFVcEI7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ2E7Z0JBQU1DLFNBQVE7O29CQUFXO2tDQUV4Qiw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xkLE1BQUs7d0JBQ0xlLElBQUc7d0JBQ0hDLGFBQVk7d0JBQ1pDLFFBQVE7d0JBQ1JDLFVBQVVwQjs7Ozs7Ozs7Ozs7O1lBR2JQLHVCQUFTLDhEQUFDNEI7Z0JBQUVULFdBQVU7MEJBQXlDbkI7Ozs7OzswQkFDOUQsOERBQUNGOzBCQUNDLDRFQUFDd0I7b0JBQ0NDLE1BQUs7b0JBQ0xiLE9BQU07b0JBQ05TLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0dBL0V3QnRCOztRQUNVSix5REFBVUE7UUFHM0JDLHNEQUFTQTs7O0tBSkZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS50c3g/ZWVlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBGb3JtRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbHMvcmVxdWVzdFwiO1xuaW1wb3J0IHVzZUxvYWRpbmcgZnJvbSBcIi4uL2hvb2tzL3VzZUxvYWRpbmdcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IHZhbGlkYXRlRW1haWwsIHZhbGlkYXRlUGFzc3dvcmQgfSBmcm9tIFwiQC91dGlscy92YWxpZGF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xuICBjb25zdCB7IExvYWRpbmdTd2l0Y2gsIGxvYWQgfSA9IHVzZUxvYWRpbmcoKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoeyBlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBGb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgc2V0RXJyb3IoXCJcIik7XG4gICAgc2V0Rm9ybShwcmV2U3RhdGUgPT4gKHsgLi4ucHJldlN0YXRlLCBbbmFtZV06IHZhbHVlIH0pKTtcbiAgfVxuXG4gIGNvbnN0IGlzRm9ybVZhbGlkID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBmb3JtO1xuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XG4gICAgICBzZXRFcnJvcihcIlBsZWFzZSBmaWxsIGFsbCBmaWVsZHNcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghdmFsaWRhdGVFbWFpbChlbWFpbCkpIHtcbiAgICAgIHNldEVycm9yKFwiSW52YWxpZCBlbWFpbFwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSkge1xuICAgICAgc2V0RXJyb3IoXCJQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHVwcGVyY2FzZSBsZXR0ZXIsIG9uZSBudW1iZXIgYW5kIGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBmb3JtO1xuICAgIGlmICghaXNGb3JtVmFsaWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IGxvZ2luaW4gPSBhd2FpdCBsb2FkKHJlcXVlc3QoXCIvYXV0aC9sb2dpblwiLCBcIlBPU1RcIiwge1xuICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgIH0pKTtcbiAgICBpZiAobG9naW5pbi5lcnJvcikge1xuICAgICAgc2V0RXJyb3IobG9naW5pbi5lcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJvdXRlci5wdXNoKCcvdG9kbycpXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGZvcm1cbiAgICAgIG9uU3VibWl0PXtoYW5kbGVMb2dpbn1cbiAgICAgIGNsYXNzTmFtZT1cIm10LTQgZmxleCBmbGV4LWNvbCBnYXAtNCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy00LzUgcC0yIHRleHQteHMgdGV4dC1zbGF0ZS02MDAgbWF4LXctNzJcIlxuICAgID5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5cbiAgICAgICAgRW1haWxcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJqaG9uX2RvZUB0b2RvbGlzdC5jb21cIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+XG4gICAgICAgIFBhc3N3b3JkXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInNhZmUgcGFzd29yZFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC14cyB0ZXh0LWxlZnQgdy1mdWxsXCI+e2Vycm9yfTwvcD59XG4gICAgICAgIDxMb2FkaW5nU3dpdGNoPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICB2YWx1ZT1cIkxvZ2luXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXNsYXRlLTYwMCBwLTIgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlciB3LWZ1bGwgdGV4dC1zbGF0ZS0yMDBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTG9hZGluZ1N3aXRjaD5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJyZXF1ZXN0IiwidXNlTG9hZGluZyIsInVzZVJvdXRlciIsInZhbGlkYXRlRW1haWwiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwiTG9naW5Gb3JtIiwiTG9hZGluZ1N3aXRjaCIsImxvYWQiLCJlcnJvciIsInNldEVycm9yIiwiZm9ybSIsInNldEZvcm0iLCJlbWFpbCIsInBhc3N3b3JkIiwicm91dGVyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJwcmV2U3RhdGUiLCJpc0Zvcm1WYWxpZCIsImhhbmRsZUxvZ2luIiwicHJldmVudERlZmF1bHQiLCJsb2dpbmluIiwicHVzaCIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LoginForm.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/utils/validator.ts":
/*!********************************!*\
  !*** ./src/utils/validator.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateEmail: function() { return /* binding */ validateEmail; },\n/* harmony export */   validatePassword: function() { return /* binding */ validatePassword; }\n/* harmony export */ });\nconst validateEmail = (email)=>{\n    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n    return re.test(email);\n};\nconst validatePassword = (password)=>{\n    const re = /^(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;\n    return re.test(password);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy92YWxpZGF0b3IudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDTyxNQUFNQSxnQkFBZ0IsQ0FBQ0M7SUFDMUIsTUFBTUMsS0FBSztJQUNYLE9BQU9BLEdBQUdDLElBQUksQ0FBQ0Y7QUFDbkIsRUFBQztBQUVNLE1BQU1HLG1CQUFtQixDQUFDQztJQUM3QixNQUFNSCxLQUFLO0lBQ1gsT0FBT0EsR0FBR0MsSUFBSSxDQUFDRTtBQUNuQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy92YWxpZGF0b3IudHM/ZGEzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUVtYWlsID0gKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCByZSA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xuICAgIHJldHVybiByZS50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlUGFzc3dvcmQgPSAocGFzc3dvcmQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHJlID0gL14oPz0uKltBLVpdKSg/PS4qWzAtOV0pKD89Lns2LH0pLztcbiAgICByZXR1cm4gcmUudGVzdChwYXNzd29yZCk7XG59XG4iXSwibmFtZXMiOlsidmFsaWRhdGVFbWFpbCIsImVtYWlsIiwicmUiLCJ0ZXN0IiwidmFsaWRhdGVQYXNzd29yZCIsInBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/validator.ts\n"));

/***/ })

});