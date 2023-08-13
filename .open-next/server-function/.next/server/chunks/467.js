"use strict";
exports.id = 467;
exports.ids = [467];
exports.modules = {

/***/ 48467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ requester)
});

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(93258);
// EXTERNAL MODULE: ./src/utils/access-token.ts + 1 modules
var access_token = __webpack_require__(96061);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var node_modules_axios = __webpack_require__(64722);
;// CONCATENATED MODULE: ./src/common/api/interceptAuthToken.ts


async function interceptAuthToken(config) {
    const accessToken = (0,access_token/* getAccessToken */.hP)();
    return {
        ...config,
        headers: new node_modules_axios/* AxiosHeaders */.uu({
            ...config.headers.toJSON(),
            Authorization: `Bearer ${accessToken}`
        })
    };
}

;// CONCATENATED MODULE: ./src/common/api/requester.ts


const requester = axios["default"].create({
    baseURL: "https://r0up0kec01.execute-api.ap-northeast-2.amazonaws.com/live"
});
requester.interceptors.request.use(interceptAuthToken);


/***/ })

};
;