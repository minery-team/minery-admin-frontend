(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[637],{89574:function(e,t,n){Promise.resolve().then(n.bind(n,80830))},94760:function(e,t,n){"use strict";n.d(t,{Y:function(){return s}});var a=n(59077),r=n(73685);async function i(){let e=await r.L.get("/wine-kind");return e.data}function s(){let{data:e}=(0,a.useQuery)(["/wine-kind"],()=>i());return e}},33798:function(e,t,n){"use strict";n.d(t,{T4:function(){return r},Wm:function(){return a},ze:function(){return i}});let a=[{category:"와인 이름",content:[{name:"와인명",tag:"name"},{name:"와인 영문명",tag:"enName"}]},{category:"와인 가격",content:[{name:"앱에서의 평균 금액",tag:"averagePrice"},{name:"웹에서의 원가",tag:"originalPrice"},{name:"웹에서의 할인 금액",tag:"price"}]},{category:"와인 맛",content:[{name:"바디감",tag:"body"},{name:"탄닌",tag:"tannins"},{name:"당도",tag:"sweetness"},{name:"산도",tag:"acidity"}]},{category:"와인 기본 정보",content:[{name:"와인 설명",tag:"desc"},{name:"품종",tag:"kinds"},{name:"와인 종류 (레드 - 0 / 화이트 - 1 / 로제 - 2 / 스파클링 - 3 / 기타 - 4)",tag:"type"},{name:"와인 스타일",tag:"style"},{name:"브랜드",tag:"maker"},{name:"생산국",tag:"country"},{name:"수입처",tag:"importer"},{name:"숙성 방식",tag:"ferment"},{name:"잘 어울리는 음식",tag:"foods"},{name:"최저 도수",tag:"minAlcohol"},{name:"최대 도수",tag:"maxAlcohol"},{name:"최저 음용온도",tag:"minTemperature"},{name:"최대 음용온도",tag:"maxTemperature"}]},{category:"와인 이미지",content:[{name:"와인 대표 이미지",tag:"image"},{name:"컨텐츠 이미지",tag:"contentImage"},{name:"와인 이미지",tag:"images"},{name:"라벨 이미지",tag:"labelImages"}]}],r=[{tag:"name",type:"string",index:0},{tag:"enName",type:"string",index:1},{tag:"price",type:"number",index:2},{tag:"body",type:"number",index:5},{tag:"tannins",type:"number",index:6},{tag:"sweetness",type:"number",index:7},{tag:"acidity",type:"number",index:8},{tag:"kinds",type:"number",index:10},{tag:"type",type:"number",index:11},{tag:"style",type:"string",index:12},{tag:"maker",type:"string",index:13},{tag:"country",type:"string",index:14},{tag:"importer",type:"string",index:15},{tag:"ferment",type:"string",index:16},{tag:"foods",type:"string",index:17},{tag:"minAlcohol",type:"number",index:18},{tag:"maxAlcohol",type:"number",index:19},{tag:"minTemperature",type:"number",index:20},{tag:"maxTemperature",type:"number",index:21}],i=[{tag:"name",type:"string",index:0},{tag:"desc",type:"string",index:9},{tag:"price",type:"number",index:4},{tag:"originalPrice",type:"number",index:3},{tag:"foodDescription",type:"string",index:17}]},80830:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(57437),r=n(2265),i=n(33798),s=n(73685);async function o(e){let t=await s.L.post("/wine",{...e});return t.data}async function l(e){let t=await s.L.post("/product",{...e});return t.data}var c=n(94760),u=e=>{let{wineCategory:t}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"text-xl font-bold mb-2.5",children:t.category}),(0,a.jsx)("div",{className:"flex flex-col bg-white rounded-2xl gap-2.5 px-5 py-5",children:t.content.map(e=>(0,a.jsxs)("div",{className:"flex flex-col gap-1.5",children:[(0,a.jsx)("div",{children:e.name}),(0,a.jsx)("input",{type:"text",className:"w-full h-8 border border-solid border-black"})]}))})]})},g=n(62350);let m=(e,t)=>{let n=e.current;if(n){let e={},a=n.querySelectorAll('input[type="text"]');for(let n=0;n<i.T4.length;n+=1)if("foods"===i.T4[n].tag)e[i.T4[n].tag]=[a[i.T4[n].index].value];else if("kinds"===i.T4[n].tag){let r=(0,g.h)(a[i.T4[n].index].value),s=[];for(let e=0;e<r.length;e+=1)for(let e=0;e<t.length;e+=1)if(t[e].name.includes(a[i.T4[n].index].value)){s.push(t[e].id);break}e[i.T4[n].tag]=s}else"number"===i.T4[n].type?e[i.T4[n].tag]=Number(a[i.T4[n].index].value):e[i.T4[n].tag]=a[i.T4[n].index].value;return e.rating=void 0,e.searchable=!1,e.image=a[22].value||"https://wine21.speedgabia.com/WINE_MST/TITLE/0174000/W0174956.png",e.rate=0,e}},d=(e,t)=>{let n=e.current;if(n){let e={},a=n.querySelectorAll('input[type="text"]');for(let t=0;t<i.ze.length;t+=1)"number"===i.ze[t].type?e[i.ze[t].tag]=Number(a[i.ze[t].index].value):e[i.ze[t].tag]=a[i.ze[t].index].value;return e.wineId=t,e.type="wine",e.image=a[22].value||"https://wine21.speedgabia.com/WINE_MST/TITLE/0174000/W0174956.png",e.contentImage=a[23].value||"https://wine21.speedgabia.com/WINE_MST/TITLE/0174000/W0174956.png",e.images=a[24].value.split(",")||["https://wine21.speedgabia.com/WINE_MST/TITLE/0174000/W0174956.png"],e.labelImages=a[25].value.split(",")||["https://wine21.speedgabia.com/WINE_MST/TITLE/0174000/W0174956.png"],e.order=0,e}};var p=(0,n(91016).Z)(function(){let e=(0,c.Y)(),t=(0,r.useRef)(null),n=async()=>{let n=m(t,e);n&&await o(n).then(async e=>{let{_id:n}=e,a=d(t,n);await l(a).then(()=>{window.alert("와인이 등록되었습니다!")}).catch(()=>{window.alert("product 등록에 실패했습니다. ".concat(n," 와인에 대해 문의 바랍니다."))})}).catch(()=>{window.alert("wine 등록에 실패했습니다.")})};return(0,a.jsxs)("div",{className:"h-screen overflow-y-scroll",children:[(0,a.jsx)("div",{className:"text-3xl font-bold pl-5",children:"와인 추가"}),(0,a.jsxs)("form",{ref:t,className:"flex flex-col w-full gap-5 px-5 py-5",onSubmit:e=>{e.preventDefault(),n()},children:[i.Wm.map(e=>(0,a.jsx)(u,{wineCategory:e})),(0,a.jsx)("button",{type:"submit",className:"self-end w-24 h-12 rounded-xl text-xl text-white bg-blue-500",children:"저장"})]})]})})},62350:function(e,t,n){"use strict";n.d(t,{h:function(){return a}});let a=e=>{let t=e.split(",");return t}},73685:function(e,t,n){"use strict";n.d(t,{L:function(){return o}});var a=n(29222),r=n(82170),i=n(92164);async function s(e){let t=(0,r.hP)();return{...e,headers:new i.uu({...e.headers.toJSON(),Authorization:"Bearer ".concat(t)})}}let o=a.default.create({baseURL:"https://r0up0kec01.execute-api.ap-northeast-2.amazonaws.com/live"});o.interceptors.request.use(s)},91016:function(e,t,n){"use strict";var a=n(57437),r=n(24033),i=n(2265),s=n(82170);t.Z=e=>t=>{let n=(0,r.useRouter)(),o=(0,s.hP)(),l=(0,r.usePathname)();return(0,i.useEffect)(()=>{o||"/login"===l||n.push("/login?from=".concat(l))},[o]),(0,a.jsx)(e,{...t})}},82170:function(e,t,n){"use strict";n.d(t,{hP:function(){return l},M8:function(){return c}});class a{get(e){return this.storage.get(e)}set(e,t){this.storage.set(e,t)}remove(e){this.storage.delete(e)}constructor(){this.storage=new Map}}class r{static canUse(){let e="LOCAL_STORAGE_TEST_KEY";try{return localStorage.setItem(e,"test"),localStorage.removeItem(e),!0}catch(e){return!1}}get(e){var t;return null!==(t=localStorage.getItem(e))&&void 0!==t?t:void 0}set(e,t){localStorage.setItem(e,t)}remove(e){localStorage.removeItem(e)}}class i{static canUse(){let e="SESSION_STORAGE_TEST_KEY";try{return sessionStorage.setItem(e,"test"),sessionStorage.removeItem(e),!0}catch(e){return!1}}get(e){var t;return null!==(t=sessionStorage.getItem(e))&&void 0!==t?t:void 0}set(e,t){sessionStorage.setItem(e,t)}remove(e){sessionStorage.removeItem(e)}}r.canUse()?new r:new a;let s=i.canUse()?new i:new a,o="@YWNjZXNzX3Rva2Vu";function l(){return s.get(o)}function c(e){return s.set(o,e)}}},function(e){e.O(0,[89,77,971,596,744],function(){return e(e.s=89574)}),_N_E=e.O()}]);