"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/lib/features/auth/authApi.ts":
/*!******************************************!*\
  !*** ./src/lib/features/auth/authApi.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loginin: function() { return /* binding */ loginin; },\n/* harmony export */   signup: function() { return /* binding */ signup; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/../node_modules/axios/lib/axios.js\");\n\nconst baseURL = \"http://localhost:8000\";\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL\n});\nconst loginin = async (email, password)=>{\n    return await api.post(\"/auth/login\", {\n        email,\n        password\n    });\n};\nconst signup = async (email, password, username)=>{\n    try {\n        const response = await api.post(\"/auth/signup\", {\n            email,\n            password,\n            username\n        });\n        return response.data;\n    } catch (error) {\n        const err = error;\n        return {\n            error: err.response.data.message\n        };\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoQXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUMxQixNQUFNQyxVQUFVO0FBQ2hCLE1BQU1DLE1BQU1GLDZDQUFLQSxDQUFDRyxNQUFNLENBQUM7SUFBRUY7QUFBUTtBQUM1QixNQUFNRyxVQUFVLE9BQU9DLE9BQWVDO0lBQzNDLE9BQU8sTUFBTUosSUFBSUssSUFBSSxDQUFDLGVBQWU7UUFBRUY7UUFBT0M7SUFBUztBQUN6RCxFQUFFO0FBRUssTUFBTUUsU0FBUyxPQUNwQkgsT0FDQUMsVUFDQUc7SUFFQSxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNUixJQUFJSyxJQUFJLENBQUMsZ0JBQWdCO1lBQzlDRjtZQUNBQztZQUNBRztRQUNGO1FBQ0EsT0FBT0MsU0FBU0MsSUFBSTtJQUN0QixFQUFFLE9BQU9DLE9BQU87UUFDZCxNQUFNQyxNQUFNRDtRQUNaLE9BQU87WUFBRUEsT0FBT0MsSUFBSUgsUUFBUSxDQUFDQyxJQUFJLENBQUNHLE9BQU87UUFBQztJQUM1QztBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9mZWF0dXJlcy9hdXRoL2F1dGhBcGkudHM/N2VkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5jb25zdCBiYXNlVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIjtcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7IGJhc2VVUkwgfSk7XG5leHBvcnQgY29uc3QgbG9naW5pbiA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBhd2FpdCBhcGkucG9zdChcIi9hdXRoL2xvZ2luXCIsIHsgZW1haWwsIHBhc3N3b3JkIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNpZ251cCA9IGFzeW5jIChcbiAgZW1haWw6IHN0cmluZyxcbiAgcGFzc3dvcmQ6IHN0cmluZyxcbiAgdXNlcm5hbWU6IHN0cmluZ1xuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9hdXRoL3NpZ251cFwiLCB7XG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgdXNlcm5hbWUsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgZXJyID0gZXJyb3IgYXMgYW55O1xuICAgIHJldHVybiB7IGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlIH07XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJiYXNlVVJMIiwiYXBpIiwiY3JlYXRlIiwibG9naW5pbiIsImVtYWlsIiwicGFzc3dvcmQiLCJwb3N0Iiwic2lnbnVwIiwidXNlcm5hbWUiLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvciIsImVyciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/features/auth/authApi.ts\n"));

/***/ })

});