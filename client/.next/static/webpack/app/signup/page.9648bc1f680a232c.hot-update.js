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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUpForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/request */ \"(app-pages-browser)/./src/utils/request.ts\");\n/* harmony import */ var _hooks_useLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useLoading */ \"(app-pages-browser)/./src/hooks/useLoading.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/../node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _utils_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/validator */ \"(app-pages-browser)/./src/utils/validator.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SignUpForm() {\n    _s();\n    const { LoadingSwitch, load } = (0,_hooks_useLoading__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\",\n        username: \"\",\n        confirmPassword: \"\"\n    });\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleChange = (e)=>{\n        const { name, value } = e.currentTarget;\n        setError(\"\");\n        setForm((prevState)=>({\n                ...prevState,\n                [name]: value\n            }));\n    };\n    const isFormValid = ()=>{\n        const { email, password, username, confirmPassword } = form;\n        if (!email || !password || !username || !confirmPassword) {\n            setError(\"Please fill all fields\");\n            return false;\n        }\n        if (!(0,_utils_validator__WEBPACK_IMPORTED_MODULE_5__.validateEmail)(email)) {\n            setError(\"Invalid email\");\n            return false;\n        }\n        if (password !== confirmPassword) {\n            setError(\"Passwords do not match\");\n            return false;\n        }\n        if (!(0,_utils_validator__WEBPACK_IMPORTED_MODULE_5__.validatePassword)(password)) {\n            setError(\"Password must contain at least 6 characters, one uppercase letter and one number\");\n            return false;\n        }\n        return true;\n    };\n    const handleSignUp = async (e)=>{\n        e.preventDefault();\n        const { email, password, username } = form;\n        if (!isFormValid()) return;\n        const signup = await load((0,_utils_request__WEBPACK_IMPORTED_MODULE_2__.request)(\"/auth/signup\", \"POST\", {\n            email: email,\n            password: password,\n            username: username\n        }));\n        if (signup.error) {\n            setError(signup.error);\n            return;\n        } else {\n            router.push(\"/todo\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSignUp,\n        className: \"mt-4 flex flex-col gap-4 justify-center items-center w-4/5 p-2 text-xs text-slate-600 max-w-72\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"email\",\n                children: [\n                    \"Email\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"email\",\n                        id: \"email\",\n                        placeholder: \"jhon_doe@todolist.com\",\n                        required: true,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"username\",\n                children: [\n                    \"Username\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"username\",\n                        id: \"username\",\n                        placeholder: \"jhon_doe\",\n                        required: true,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"password\",\n                children: [\n                    \"Password\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        name: \"password\",\n                        id: \"password\",\n                        placeholder: \"safe pasword\",\n                        required: true,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"confirmPassword\",\n                children: [\n                    \"Confirm Password\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        name: \"confirmPassword\",\n                        id: \"confirmPassword\",\n                        placeholder: \"safe pasword\",\n                        required: true,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500 text-xs text-left w-full\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadingSwitch, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    value: \"Sign Up\",\n                    className: \"w-full h-8 mt-2 py-1 px-2 rounded-lg bg-slate-500 text-white cursor-pointer\"\n                }, void 0, false, {\n                    fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pablo179/Documents/proyectos/TheTodoList/client/src/components/SignUpForm.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(SignUpForm, \"mS27tObNywfxyZ6OaI0ToUzkg2M=\", false, function() {\n    return [\n        _hooks_useLoading__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = SignUpForm;\nvar _c;\n$RefreshReg$(_c, \"SignUpForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpZ25VcEZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDRDtBQUNFO0FBQ0Q7QUFDd0I7QUFFckQsU0FBU007O0lBQ3RCLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxJQUFJLEVBQUUsR0FBR04sNkRBQVVBO0lBQzFDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNXLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUM7UUFBRWEsT0FBTztRQUFJQyxVQUFVO1FBQUlDLFVBQVU7UUFBSUMsaUJBQWlCO0lBQUU7SUFDN0YsTUFBTUMsU0FBU2QsMERBQVNBO0lBQ3hCLE1BQU1lLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxhQUFhO1FBQ3ZDWixTQUFTO1FBQ1RFLFFBQVEsQ0FBQ1csWUFBZTtnQkFBRSxHQUFHQSxTQUFTO2dCQUFFLENBQUNILEtBQUssRUFBRUM7WUFBTTtJQUN4RDtJQUNBLE1BQU1HLGNBQWM7UUFDbEIsTUFBTSxFQUFFWCxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUUsR0FBR0w7UUFDdkQsSUFBSSxDQUFDRSxTQUFTLENBQUNDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDQyxpQkFBaUI7WUFDeEROLFNBQVM7WUFDVCxPQUFPO1FBQ1Q7UUFDQSxJQUFJLENBQUNOLCtEQUFhQSxDQUFDUyxRQUFRO1lBQ3pCSCxTQUFTO1lBQ1QsT0FBTztRQUNUO1FBQ0EsSUFBSUksYUFBYUUsaUJBQWlCO1lBQ2hDTixTQUFTO1lBQ1QsT0FBTztRQUNUO1FBQ0EsSUFBSSxDQUFDTCxrRUFBZ0JBLENBQUNTLFdBQVc7WUFDL0JKLFNBQVM7WUFDVCxPQUFPO1FBQ1Q7UUFDQSxPQUFPO0lBQ1Q7SUFDQSxNQUFNZSxlQUFlLE9BQU9OO1FBQzFCQSxFQUFFTyxjQUFjO1FBQ2hCLE1BQU0sRUFBRWIsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUFHSjtRQUN0QyxJQUFJLENBQUNhLGVBQWU7UUFDcEIsTUFBTUcsU0FBUyxNQUFNbkIsS0FDbkJQLHVEQUFPQSxDQUFDLGdCQUFnQixRQUFRO1lBQzlCWSxPQUFPQTtZQUNQQyxVQUFVQTtZQUNWQyxVQUFVQTtRQUNaO1FBRUYsSUFBSVksT0FBT2xCLEtBQUssRUFBRTtZQUNoQkMsU0FBU2lCLE9BQU9sQixLQUFLO1lBQ3JCO1FBQ0YsT0FBTztZQUNMUSxPQUFPVyxJQUFJLENBQUM7UUFDZDtJQUNGO0lBQ0EscUJBQ0UsOERBQUNqQjtRQUNDa0IsVUFBVUo7UUFDVkssV0FBVTs7MEJBRVYsOERBQUNDO2dCQUFNQyxTQUFROztvQkFBUTtrQ0FFckIsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMZCxNQUFLO3dCQUNMZSxJQUFHO3dCQUNIQyxhQUFZO3dCQUNaQyxRQUFRO3dCQUNSQyxVQUFVcEI7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ2E7Z0JBQU1DLFNBQVE7O29CQUFZO2tDQUV6Qiw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xkLE1BQUs7d0JBQ0xlLElBQUc7d0JBQ0hDLGFBQVk7d0JBQ1pDLFFBQVE7d0JBQ1JDLFVBQVVwQjs7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDYTtnQkFBTUMsU0FBUTs7b0JBQVc7a0NBRXhCLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTGQsTUFBSzt3QkFDTGUsSUFBRzt3QkFDSEMsYUFBWTt3QkFDWkMsUUFBUTt3QkFDUkMsVUFBVXBCOzs7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNhO2dCQUFNQyxTQUFROztvQkFBa0I7a0NBRS9CLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTGQsTUFBSzt3QkFDTGUsSUFBRzt3QkFDSEMsYUFBWTt3QkFDWkMsUUFBUTt3QkFDUkMsVUFBVXBCOzs7Ozs7Ozs7Ozs7WUFHYlQsdUJBQ0MsOERBQUM4QjtnQkFBRVQsV0FBVTswQkFBeUNyQjs7Ozs7OzBCQUV4RCw4REFBQ0Y7MEJBQ0MsNEVBQUMwQjtvQkFDQ0MsTUFBSztvQkFDTGIsT0FBTTtvQkFDTlMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0E3R3dCeEI7O1FBQ1VKLHlEQUFVQTtRQUczQkMsc0RBQVNBOzs7S0FKRkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lnblVwRm9ybS50c3g/ODgyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBGb3JtRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbHMvcmVxdWVzdFwiO1xuaW1wb3J0IHVzZUxvYWRpbmcgZnJvbSBcIi4uL2hvb2tzL3VzZUxvYWRpbmdcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHZhbGlkYXRlRW1haWwsIHZhbGlkYXRlUGFzc3dvcmQgfSBmcm9tIFwiQC91dGlscy92YWxpZGF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwRm9ybSgpIHtcbiAgY29uc3QgeyBMb2FkaW5nU3dpdGNoLCBsb2FkIH0gPSB1c2VMb2FkaW5nKCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHsgZW1haWw6IFwiXCIsIHBhc3N3b3JkOiBcIlwiLCB1c2VybmFtZTogXCJcIiwgY29uZmlybVBhc3N3b3JkOiBcIlwifSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIHNldEVycm9yKFwiXCIpO1xuICAgIHNldEZvcm0oKHByZXZTdGF0ZSkgPT4gKHsgLi4ucHJldlN0YXRlLCBbbmFtZV06IHZhbHVlIH0pKTtcbiAgfTtcbiAgY29uc3QgaXNGb3JtVmFsaWQgPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIHVzZXJuYW1lLCBjb25maXJtUGFzc3dvcmQgfSA9IGZvcm07XG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIXVzZXJuYW1lIHx8ICFjb25maXJtUGFzc3dvcmQpIHtcbiAgICAgIHNldEVycm9yKFwiUGxlYXNlIGZpbGwgYWxsIGZpZWxkc1wiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF2YWxpZGF0ZUVtYWlsKGVtYWlsKSkge1xuICAgICAgc2V0RXJyb3IoXCJJbnZhbGlkIGVtYWlsXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocGFzc3dvcmQgIT09IGNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgc2V0RXJyb3IoXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpKSB7XG4gICAgICBzZXRFcnJvcihcIlBhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCA2IGNoYXJhY3RlcnMsIG9uZSB1cHBlcmNhc2UgbGV0dGVyIGFuZCBvbmUgbnVtYmVyXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBoYW5kbGVTaWduVXAgPSBhc3luYyAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIHVzZXJuYW1lIH0gPSBmb3JtO1xuICAgIGlmICghaXNGb3JtVmFsaWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IHNpZ251cCA9IGF3YWl0IGxvYWQoXG4gICAgICByZXF1ZXN0KFwiL2F1dGgvc2lnbnVwXCIsIFwiUE9TVFwiLCB7XG4gICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICB9KVxuICAgICk7XG4gICAgaWYgKHNpZ251cC5lcnJvcikge1xuICAgICAgc2V0RXJyb3Ioc2lnbnVwLmVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2goXCIvdG9kb1wiKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGZvcm1cbiAgICAgIG9uU3VibWl0PXtoYW5kbGVTaWduVXB9XG4gICAgICBjbGFzc05hbWU9XCJtdC00IGZsZXggZmxleC1jb2wgZ2FwLTQganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctNC81IHAtMiB0ZXh0LXhzIHRleHQtc2xhdGUtNjAwIG1heC13LTcyXCJcbiAgICA+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XG4gICAgICAgIEVtYWlsXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiamhvbl9kb2VAdG9kb2xpc3QuY29tXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiID5cbiAgICAgICAgVXNlcm5hbWVcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJqaG9uX2RvZVwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2FmZSBwYXN3b3JkXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtUGFzc3dvcmRcIj5cbiAgICAgICAgQ29uZmlybSBQYXNzd29yZFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgIGlkPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInNhZmUgcGFzd29yZFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXhzIHRleHQtbGVmdCB3LWZ1bGxcIj57ZXJyb3J9PC9wPlxuICAgICAgKX1cbiAgICAgIDxMb2FkaW5nU3dpdGNoPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICB2YWx1ZT1cIlNpZ24gVXBcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTggbXQtMiBweS0xIHB4LTIgcm91bmRlZC1sZyBiZy1zbGF0ZS01MDAgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgIC8+XG4gICAgICA8L0xvYWRpbmdTd2l0Y2g+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwicmVxdWVzdCIsInVzZUxvYWRpbmciLCJ1c2VSb3V0ZXIiLCJ2YWxpZGF0ZUVtYWlsIiwidmFsaWRhdGVQYXNzd29yZCIsIlNpZ25VcEZvcm0iLCJMb2FkaW5nU3dpdGNoIiwibG9hZCIsImVycm9yIiwic2V0RXJyb3IiLCJmb3JtIiwic2V0Rm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VybmFtZSIsImNvbmZpcm1QYXNzd29yZCIsInJvdXRlciIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwicHJldlN0YXRlIiwiaXNGb3JtVmFsaWQiLCJoYW5kbGVTaWduVXAiLCJwcmV2ZW50RGVmYXVsdCIsInNpZ251cCIsInB1c2giLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SignUpForm.tsx\n"));

/***/ })

});