exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 15720:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 78244:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 65530));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 42374));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54971));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 32834))

/***/ }),

/***/ 65530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReactQueryProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71319);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function ReactQueryProvider({ children }) {
    const [queryClient] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>new react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient());
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {
        client: queryClient,
        children: children
    });
}


/***/ }),

/***/ 73813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_hocs_withAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67963);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const Home = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        children: "home"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_hocs_withAuth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(Home));


/***/ }),

/***/ 54971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuBar: () => (/* binding */ MenuBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73813);
/* harmony import */ var _ant_design_icons_lib_icons_VideoCameraOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56123);
/* harmony import */ var _ant_design_icons_lib_icons_RestOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68453);
/* harmony import */ var _ant_design_icons_lib_icons_PlusCircleOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56211);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31065);
/* harmony import */ var antd_es_layout_Sider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14273);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ MenuBar auto */ 







function MenuBar() {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const handleMenuClick = (path)=>{
        router.push(path);
    };
    //FIXME: inline style 제거
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd_es_layout_Sider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        style: {
            height: "100vh"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
            theme: "dark",
            mode: "inline",
            defaultSelectedKeys: [
                path
            ],
            items: [
                {
                    key: "/",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_page__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
                    label: "홈",
                    onClick: ()=>handleMenuClick("/")
                },
                {
                    key: "/wine",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons_lib_icons_RestOutlined__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    label: "와인 관리",
                    onClick: ()=>handleMenuClick("/wine")
                },
                {
                    key: "/add-wine",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons_lib_icons_PlusCircleOutlined__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    label: "와인 추가",
                    onClick: ()=>handleMenuClick("/add-wine")
                },
                {
                    key: "/order",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons_lib_icons_VideoCameraOutlined__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    label: "주문",
                    onClick: ()=>handleMenuClick("/order")
                }
            ]
        })
    });
}


/***/ }),

/***/ 32834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecoilWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95291);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function RecoilWrapper({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recoil__WEBPACK_IMPORTED_MODULE_1__/* .RecoilRoot */ .Wh, {
        children: children
    });
}


/***/ }),

/***/ 67963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_access_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96061);
/* __next_internal_client_entry_do_not_use__ default auto */ 



//FIXME: 현재는 권한이 필요한 페이지 컴포넌트마다 withAuth로 감싸주어야한다!
const withAuth = (WrappedComponent)=>{
    return (props)=>{
        const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
        const accessToken = (0,_utils_access_token__WEBPACK_IMPORTED_MODULE_3__/* .getAccessToken */ .hP)();
        const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();
        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
            if (!accessToken && pathname !== "/login") {
                router.push(`/login?from=${pathname}`);
            }
        }, [
            accessToken
        ]);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WrappedComponent, {
            ...props
        });
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withAuth);


/***/ }),

/***/ 96061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  hP: () => (/* binding */ getAccessToken),
  M8: () => (/* binding */ setAccessToken)
});

// UNUSED EXPORTS: ACCESS_TOKEN_KEY, clearAccessToken

;// CONCATENATED MODULE: ./src/utils/Storage.ts
class MemoStorage {
    get(key) {
        return this.storage.get(key);
    }
    set(key, value) {
        this.storage.set(key, value);
    }
    remove(key) {
        this.storage.delete(key);
    }
    constructor(){
        this.storage = new Map();
    }
}
class LocalStorage {
    static canUse() {
        const TEST_KEY = "LOCAL_STORAGE_TEST_KEY";
        try {
            localStorage.setItem(TEST_KEY, "test");
            localStorage.removeItem(TEST_KEY);
            return true;
        } catch (err) {
            return false;
        }
    }
    get(key) {
        return localStorage.getItem(key) ?? undefined;
    }
    set(key, value) {
        localStorage.setItem(key, value);
    }
    remove(key) {
        localStorage.removeItem(key);
    }
}
class SessionStorage {
    static canUse() {
        const TEST_KEY = "SESSION_STORAGE_TEST_KEY";
        try {
            sessionStorage.setItem(TEST_KEY, "test");
            sessionStorage.removeItem(TEST_KEY);
            return true;
        } catch (err) {
            return false;
        }
    }
    get(key) {
        return sessionStorage.getItem(key) ?? undefined;
    }
    set(key, value) {
        sessionStorage.setItem(key, value);
    }
    remove(key) {
        sessionStorage.removeItem(key);
    }
}
function generateStorage() {
    if (LocalStorage.canUse()) {
        return new LocalStorage();
    }
    return new MemoStorage();
}
function generateSessionStorage() {
    if (SessionStorage.canUse()) {
        return new SessionStorage();
    }
    return new MemoStorage();
}
const safeLocalStorage = generateStorage();
const Storage_safeSessionStorage = generateSessionStorage();

;// CONCATENATED MODULE: ./src/utils/access-token.ts

const ACCESS_TOKEN_KEY = "@YWNjZXNzX3Rva2Vu";
function getAccessToken() {
    return Storage_safeSessionStorage.get(ACCESS_TOKEN_KEY);
}
function clearAccessToken() {
    return safeSessionStorage.remove(ACCESS_TOKEN_KEY);
}
function setAccessToken(accessToken) {
    return Storage_safeSessionStorage.set(ACCESS_TOKEN_KEY, accessToken);
}


/***/ }),

/***/ 88869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(25856);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/common/components/MenuBar/MenuBar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/boxfox/Desktop/projects/minery-admin-frontend/src/common/components/MenuBar/MenuBar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["MenuBar"];

// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
;// CONCATENATED MODULE: ./src/app/ReactQueryClient.tsx

const ReactQueryClient_proxy = (0,module_proxy.createProxy)(String.raw`/Users/boxfox/Desktop/projects/minery-admin-frontend/src/app/ReactQueryClient.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ReactQueryClient_esModule, $$typeof: ReactQueryClient_$$typeof } = ReactQueryClient_proxy;
const ReactQueryClient_default_ = ReactQueryClient_proxy.default;


/* harmony default export */ const ReactQueryClient = (ReactQueryClient_default_);
// EXTERNAL MODULE: ./node_modules/antd/es/layout/index.js
var layout = __webpack_require__(41387);
;// CONCATENATED MODULE: ./src/common/components/RecoilWrapper/RecoilWrapper.tsx

const RecoilWrapper_proxy = (0,module_proxy.createProxy)(String.raw`/Users/boxfox/Desktop/projects/minery-admin-frontend/src/common/components/RecoilWrapper/RecoilWrapper.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: RecoilWrapper_esModule, $$typeof: RecoilWrapper_$$typeof } = RecoilWrapper_proxy;
const RecoilWrapper_default_ = RecoilWrapper_proxy.default;


/* harmony default export */ const RecoilWrapper = (RecoilWrapper_default_);
;// CONCATENATED MODULE: ./src/app/layout.tsx







const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx(RecoilWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ReactQueryClient, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.ZP, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(e0, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.ZP, {
                                children: children
                            })
                        ]
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;