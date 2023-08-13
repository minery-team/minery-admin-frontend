"use strict";
exports.id = 191;
exports.ids = [191];
exports.modules = {

/***/ 96519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* binding */ useWineKindList)
});

// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(71319);
// EXTERNAL MODULE: ./src/common/api/requester.ts + 1 modules
var requester = __webpack_require__(48467);
;// CONCATENATED MODULE: ./src/app/add-wine/api/fetchWineKind.ts

async function fetchWineKind() {
    const res = await requester/* requester */.L.get("/wine-kind");
    return res.data;
}

;// CONCATENATED MODULE: ./src/app/add-wine/hooks/useWineKindList.ts


function useWineKindList() {
    const { data: wineKindList } = (0,lib.useQuery)([
        "/wine-kind"
    ], ()=>fetchWineKind());
    return wineKindList;
}


/***/ }),

/***/ 66841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T4: () => (/* binding */ WineProps),
/* harmony export */   Wm: () => (/* binding */ WineInfo),
/* harmony export */   ze: () => (/* binding */ ProductProps)
/* harmony export */ });
const WineInfo = [
    {
        category: "와인 이름",
        content: [
            {
                name: "와인명",
                tag: "name"
            },
            {
                name: "와인 영문명",
                tag: "enName"
            }
        ]
    },
    {
        category: "와인 가격",
        content: [
            {
                name: "앱에서의 평균 금액",
                tag: "averagePrice"
            },
            {
                name: "웹에서의 원가",
                tag: "originalPrice"
            },
            {
                name: "웹에서의 할인 금액",
                tag: "price"
            }
        ]
    },
    {
        category: "와인 맛",
        content: [
            {
                name: "바디감",
                tag: "body"
            },
            {
                name: "탄닌",
                tag: "tannins"
            },
            {
                name: "당도",
                tag: "sweetness"
            },
            {
                name: "산도",
                tag: "acidity"
            }
        ]
    },
    {
        category: "와인 기본 정보",
        content: [
            {
                name: "와인 설명",
                tag: "desc"
            },
            {
                name: "품종",
                tag: "kinds"
            },
            {
                name: "와인 종류 (레드 - 0 / 화이트 - 1 / 로제 - 2 / 스파클링 - 3 / 기타 - 4)",
                tag: "type"
            },
            {
                name: "와인 스타일",
                tag: "style"
            },
            {
                name: "브랜드",
                tag: "maker"
            },
            {
                name: "생산국",
                tag: "country"
            },
            {
                name: "수입처",
                tag: "importer"
            },
            {
                name: "숙성 방식",
                tag: "ferment"
            },
            {
                name: "잘 어울리는 음식",
                tag: "foods"
            },
            {
                name: "최저 도수",
                tag: "minAlcohol"
            },
            {
                name: "최대 도수",
                tag: "maxAlcohol"
            },
            {
                name: "최저 음용온도",
                tag: "minTemperature"
            },
            {
                name: "최대 음용온도",
                tag: "maxTemperature"
            }
        ]
    },
    {
        category: "와인 이미지",
        content: [
            {
                name: "와인 대표 이미지",
                tag: "image"
            },
            {
                name: "컨텐츠 이미지",
                tag: "contentImage"
            },
            {
                name: "와인 이미지",
                tag: "images"
            },
            {
                name: "라벨 이미지",
                tag: "labelImages"
            }
        ]
    }
];
const WineProps = [
    {
        tag: "name",
        type: "string",
        index: 0
    },
    {
        tag: "enName",
        type: "string",
        index: 1
    },
    {
        tag: "price",
        type: "number",
        index: 2
    },
    {
        tag: "body",
        type: "number",
        index: 5
    },
    {
        tag: "tannins",
        type: "number",
        index: 6
    },
    {
        tag: "sweetness",
        type: "number",
        index: 7
    },
    {
        tag: "acidity",
        type: "number",
        index: 8
    },
    {
        tag: "kinds",
        type: "number",
        index: 10
    },
    {
        tag: "type",
        type: "number",
        index: 11
    },
    {
        tag: "style",
        type: "string",
        index: 12
    },
    {
        tag: "maker",
        type: "string",
        index: 13
    },
    {
        tag: "country",
        type: "string",
        index: 14
    },
    {
        tag: "importer",
        type: "string",
        index: 15
    },
    {
        tag: "ferment",
        type: "string",
        index: 16
    },
    {
        tag: "foods",
        type: "string",
        index: 17
    },
    {
        tag: "minAlcohol",
        type: "number",
        index: 18
    },
    {
        tag: "maxAlcohol",
        type: "number",
        index: 19
    },
    {
        tag: "minTemperature",
        type: "number",
        index: 20
    },
    {
        tag: "maxTemperature",
        type: "number",
        index: 21
    }
];
const ProductProps = [
    {
        tag: "name",
        type: "string",
        index: 0
    },
    {
        tag: "desc",
        type: "string",
        index: 9
    },
    {
        tag: "price",
        type: "number",
        index: 4
    },
    {
        tag: "originalPrice",
        type: "number",
        index: 3
    },
    {
        tag: "foodDescription",
        type: "string",
        index: 17
    }
];


/***/ }),

/***/ 25540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ divideByComma)
/* harmony export */ });
const divideByComma = (str)=>{
    const dividedList = str.split(",");
    return dividedList;
};


/***/ })

};
;