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

/***/ "(app-pages-browser)/./src/lib/features/auth/authSlice.ts":
/*!********************************************!*\
  !*** ./src/lib/features/auth/authSlice.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authSlice: function() { return /* binding */ authSlice; },\n/* harmony export */   login: function() { return /* binding */ login; },\n/* harmony export */   logout: function() { return /* binding */ logout; },\n/* harmony export */   signup: function() { return /* binding */ signup; }\n/* harmony export */ });\n/* harmony import */ var _lib_createAppSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/createAppSlice */ \"(app-pages-browser)/./src/lib/createAppSlice.ts\");\n/* harmony import */ var _authApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authApi */ \"(app-pages-browser)/./src/lib/features/auth/authApi.ts\");\n\n\nconst initialState = {\n    token: null,\n    user: null,\n    fetching: false,\n    error: null\n};\nconst authSlice = (0,_lib_createAppSlice__WEBPACK_IMPORTED_MODULE_0__.createAppSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: (create)=>({\n            login: create.asyncThunk(async (data)=>{\n                return await (0,_authApi__WEBPACK_IMPORTED_MODULE_1__.loginin)(data.email, data.password);\n            }, {\n                pending: (state)=>{\n                    state.fetching = true;\n                },\n                fulfilled: (state, action)=>{\n                    state.fetching = false;\n                    state.token = action.payload.token;\n                    state.user = action.payload.user;\n                },\n                rejected: (state)=>{\n                    state.fetching = false;\n                    state.error = \"Invalid email or password\";\n                }\n            }),\n            signup: create.asyncThunk(async (data)=>{\n                return await (0,_authApi__WEBPACK_IMPORTED_MODULE_1__.signup)(data.email, data.password, data.username);\n            }, {\n                pending: (state)=>{\n                    state.fetching = true;\n                },\n                fulfilled: (state, action)=>{\n                    state.fetching = false;\n                    state.token = action.payload.token;\n                    state.user = action.payload.user;\n                },\n                rejected: (state)=>{\n                    state.fetching = false;\n                    state.error = \"Invalid email or password\";\n                }\n            }),\n            logout: create.reducer((state)=>{\n                state.token = null;\n                state.user = null;\n            }),\n            setError: create.reducer((state, action)=>{\n                state.error = action.payload;\n            })\n        })\n});\nconst { login, signup, logout } = authSlice.actions;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNEO0FBQ087QUFVN0QsTUFBTUksZUFBK0I7SUFDbkNDLE9BQU87SUFDUEMsTUFBTTtJQUNOQyxVQUFVO0lBQ1ZDLE9BQU87QUFDVDtBQUVPLE1BQU1DLFlBQVlULG1FQUFjQSxDQUFDO0lBQ3RDVSxNQUFNO0lBQ05OO0lBQ0FPLFVBQVUsQ0FBQ0MsU0FBWTtZQUNyQkMsT0FBT0QsT0FBT0UsVUFBVSxDQUN0QixPQUFPQztnQkFDTCxPQUFPLE1BQU1kLGlEQUFPQSxDQUFDYyxLQUFLQyxLQUFLLEVBQUVELEtBQUtFLFFBQVE7WUFDaEQsR0FDQTtnQkFDRUMsU0FBUyxDQUFDQztvQkFDUkEsTUFBTVosUUFBUSxHQUFHO2dCQUNuQjtnQkFDQWEsV0FBVyxDQUFDRCxPQUFPRTtvQkFDakJGLE1BQU1aLFFBQVEsR0FBRztvQkFDakJZLE1BQU1kLEtBQUssR0FBR2dCLE9BQU9DLE9BQU8sQ0FBQ2pCLEtBQUs7b0JBQ2xDYyxNQUFNYixJQUFJLEdBQUdlLE9BQU9DLE9BQU8sQ0FBQ2hCLElBQUk7Z0JBQ2xDO2dCQUNBaUIsVUFBVSxDQUFDSjtvQkFDVEEsTUFBTVosUUFBUSxHQUFHO29CQUNqQlksTUFBTVgsS0FBSyxHQUFHO2dCQUNoQjtZQUNGO1lBRUZOLFFBQVFVLE9BQU9FLFVBQVUsQ0FDdkIsT0FBT0M7Z0JBQ0wsT0FBTyxNQUFNWixnREFBYUEsQ0FBQ1ksS0FBS0MsS0FBSyxFQUFFRCxLQUFLRSxRQUFRLEVBQUVGLEtBQUtTLFFBQVE7WUFDckUsR0FDQTtnQkFDRU4sU0FBUyxDQUFDQztvQkFDUkEsTUFBTVosUUFBUSxHQUFHO2dCQUNuQjtnQkFDQWEsV0FBVyxDQUFDRCxPQUFPRTtvQkFDakJGLE1BQU1aLFFBQVEsR0FBRztvQkFDakJZLE1BQU1kLEtBQUssR0FBR2dCLE9BQU9DLE9BQU8sQ0FBQ2pCLEtBQUs7b0JBQ2xDYyxNQUFNYixJQUFJLEdBQUdlLE9BQU9DLE9BQU8sQ0FBQ2hCLElBQUk7Z0JBQ2xDO2dCQUNBaUIsVUFBVSxDQUFDSjtvQkFDVEEsTUFBTVosUUFBUSxHQUFHO29CQUNqQlksTUFBTVgsS0FBSyxHQUFHO2dCQUNoQjtZQUNGO1lBRUZpQixRQUFRYixPQUFPYyxPQUFPLENBQUMsQ0FBQ1A7Z0JBQ3RCQSxNQUFNZCxLQUFLLEdBQUc7Z0JBQ2RjLE1BQU1iLElBQUksR0FBRztZQUNmO1lBQ0FxQixVQUFXZixPQUFPYyxPQUFPLENBQUMsQ0FBQ1AsT0FBT0U7Z0JBQ2hDRixNQUFNWCxLQUFLLEdBQUdhLE9BQU9DLE9BQU87WUFDOUI7UUFDRjtBQUNGLEdBQUc7QUFFSSxNQUFNLEVBQUVULEtBQUssRUFBRVgsTUFBTSxFQUFFdUIsTUFBTSxFQUFFLEdBQUdoQixVQUFVbUIsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UudHM/ZWRhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHBTbGljZSB9IGZyb20gXCJAL2xpYi9jcmVhdGVBcHBTbGljZVwiO1xuaW1wb3J0IHsgbG9naW5pbiwgc2lnbnVwIGFzIHNpZ251cFJlcXVlc3QgfSBmcm9tIFwiLi9hdXRoQXBpXCI7XG5pbXBvcnQgeyBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXRoU2xpY2VTdGF0ZSB7XG4gIHRva2VuOiBzdHJpbmcgfCBudWxsO1xuICB1c2VyOiBhbnk7XG4gIGZldGNoaW5nOiBib29sZWFuO1xuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBBdXRoU2xpY2VTdGF0ZSA9IHtcbiAgdG9rZW46IG51bGwsXG4gIHVzZXI6IG51bGwsXG4gIGZldGNoaW5nOiBmYWxzZSxcbiAgZXJyb3I6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgYXV0aFNsaWNlID0gY3JlYXRlQXBwU2xpY2Uoe1xuICBuYW1lOiBcImF1dGhcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2VyczogKGNyZWF0ZSkgPT4gKHtcbiAgICBsb2dpbjogY3JlYXRlLmFzeW5jVGh1bmsoXG4gICAgICBhc3luYyAoZGF0YTogeyBlbWFpbDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGxvZ2luaW4oZGF0YS5lbWFpbCwgZGF0YS5wYXNzd29yZCk7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwZW5kaW5nOiAoc3RhdGUpID0+IHtcbiAgICAgICAgICBzdGF0ZS5mZXRjaGluZyA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bGZpbGxlZDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICBzdGF0ZS5mZXRjaGluZyA9IGZhbHNlO1xuICAgICAgICAgIHN0YXRlLnRva2VuID0gYWN0aW9uLnBheWxvYWQudG9rZW47XG4gICAgICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkLnVzZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdGVkOiAoc3RhdGUpID0+IHtcbiAgICAgICAgICBzdGF0ZS5mZXRjaGluZyA9IGZhbHNlO1xuICAgICAgICAgIHN0YXRlLmVycm9yID0gXCJJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkXCI7XG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKSxcbiAgICBzaWdudXA6IGNyZWF0ZS5hc3luY1RodW5rKFxuICAgICAgYXN5bmMgKGRhdGE6IHsgZW1haWw6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZzsgdXNlcm5hbWU6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBzaWdudXBSZXF1ZXN0KGRhdGEuZW1haWwsIGRhdGEucGFzc3dvcmQsIGRhdGEudXNlcm5hbWUpO1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGVuZGluZzogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgc3RhdGUuZmV0Y2hpbmcgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBmdWxmaWxsZWQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgc3RhdGUuZmV0Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICBzdGF0ZS50b2tlbiA9IGFjdGlvbi5wYXlsb2FkLnRva2VuO1xuICAgICAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZC51c2VyO1xuICAgICAgICB9LFxuICAgICAgICByZWplY3RlZDogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgc3RhdGUuZmV0Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICBzdGF0ZS5lcnJvciA9IFwiSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZFwiO1xuICAgICAgICB9LFxuICAgICAgfVxuICAgICksXG4gICAgbG9nb3V0OiBjcmVhdGUucmVkdWNlcigoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLnRva2VuID0gbnVsbDtcbiAgICAgIHN0YXRlLnVzZXIgPSBudWxsO1xuICAgIH0pLFxuICAgIHNldEVycm9yIDogY3JlYXRlLnJlZHVjZXIoKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikgPT4ge1xuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9KSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgbG9naW4sIHNpZ251cCwgbG9nb3V0IH0gPSBhdXRoU2xpY2UuYWN0aW9ucztcbiJdLCJuYW1lcyI6WyJjcmVhdGVBcHBTbGljZSIsImxvZ2luaW4iLCJzaWdudXAiLCJzaWdudXBSZXF1ZXN0IiwiaW5pdGlhbFN0YXRlIiwidG9rZW4iLCJ1c2VyIiwiZmV0Y2hpbmciLCJlcnJvciIsImF1dGhTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImNyZWF0ZSIsImxvZ2luIiwiYXN5bmNUaHVuayIsImRhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlamVjdGVkIiwidXNlcm5hbWUiLCJsb2dvdXQiLCJyZWR1Y2VyIiwic2V0RXJyb3IiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/features/auth/authSlice.ts\n"));

/***/ })

});