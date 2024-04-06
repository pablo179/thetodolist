"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/../node_modules/next/dist/esm/api/server.js\");\n\n// This function can be marked `async` if using `await` inside\nfunction middleware(req, res) {\n    const isJwt = req.cookies.get(\"token\") === undefined;\n    const isTodoPath = req.nextUrl.pathname.startsWith(\"/todo\");\n    if (isTodoPath && isJwt) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/\", req.url));\n    }\n    if (!isTodoPath && !isJwt) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/todo\", req.url));\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n// See \"Matching Paths\" below to learn m3ore\nconst config = {\n    matcher: [\n        \"/\",\n        \"/todo\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBRzFDLDhEQUE4RDtBQUN2RCxTQUFTQyxXQUFXQyxHQUFnQixFQUFFQyxHQUFpQjtJQUM1RCxNQUFNQyxRQUFRRixJQUFJRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhQztJQUMzQyxNQUFNQyxhQUFhTixJQUFJTyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDO0lBRW5ELElBQUdILGNBQWNKLE9BQU87UUFDdEIsT0FBT0oscURBQVlBLENBQUNZLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLEtBQUtYLElBQUlZLEdBQUc7SUFDbkQ7SUFFQSxJQUFJLENBQUNOLGNBQWMsQ0FBQ0osT0FBTztRQUN6QixPQUFPSixxREFBWUEsQ0FBQ1ksUUFBUSxDQUFDLElBQUlDLElBQUksU0FBU1gsSUFBSVksR0FBRztJQUN2RDtJQUVBLE9BQU9kLHFEQUFZQSxDQUFDZSxJQUFJO0FBQzFCO0FBQ0EsNENBQTRDO0FBQ3JDLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztRQUFLO0tBQVE7QUFDekIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS50cz9kMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IHR5cGUgeyBOZXh0UmVxdWVzdCB9IGZyb20gJ25leHQvc2VydmVyJ1xuIFxuLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgbWFya2VkIGBhc3luY2AgaWYgdXNpbmcgYGF3YWl0YCBpbnNpZGVcbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcTogTmV4dFJlcXVlc3QsIHJlczogTmV4dFJlc3BvbnNlKSB7XG4gIGNvbnN0IGlzSnd0ID0gcmVxLmNvb2tpZXMuZ2V0KCd0b2tlbicpID09PSB1bmRlZmluZWQ7XG4gIGNvbnN0IGlzVG9kb1BhdGggPSByZXEubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKCcvdG9kbycpO1xuXG4gIGlmKGlzVG9kb1BhdGggJiYgaXNKd3QpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy8nLCByZXEudXJsKSlcbiAgfVxuXG4gIGlmICghaXNUb2RvUGF0aCAmJiAhaXNKd3QpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy90b2RvJywgcmVxLnVybCkpXG4gIH1cblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKVxufVxuLy8gU2VlIFwiTWF0Y2hpbmcgUGF0aHNcIiBiZWxvdyB0byBsZWFybiBtM29yZVxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogWycvJywgJy90b2RvJ10sXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJpc0p3dCIsImNvb2tpZXMiLCJnZXQiLCJ1bmRlZmluZWQiLCJpc1RvZG9QYXRoIiwibmV4dFVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});