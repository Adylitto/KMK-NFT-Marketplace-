"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./redux/actions/type.js
const CHART = "CHART";

;// CONCATENATED MODULE: ./redux/reducers/lineChart.js

const initialState = {
    expenses: {
        name: "ETH Price",
        // youtube: [65, 59, 80, 81, 56, 55, 40,80, 81, 56, 55, 40],
        facebook: [
            0,
            105,
            92,
            155,
            138,
            205,
            120,
            92,
            155,
            138,
            205,
            320
        ]
    }
};
const LineChart = (state = initialState, action)=>{
    const { payload , type  } = action;
    switch(type){
        case CHART:
            return {
                ...state,
                payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const lineChart = (LineChart);

;// CONCATENATED MODULE: ./redux/reducers/doughnutChart.js

const doughnutChart_initialState = {
    statistics: {
        name: "Statistics",
        data: [
            33,
            33
        ]
    }
};
const DoughnutChart = (state = doughnutChart_initialState, action)=>{
    const { payload , type  } = action;
    switch(type){
        case CHART:
            return {
                ...state,
                payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const doughnutChart = (DoughnutChart);

;// CONCATENATED MODULE: ./redux/reducers/lineInvestment.js

const lineInvestment_initialState = {
    investment: {
        name: "Investment",
        data: [
            15,
            26,
            36,
            30,
            46,
            38,
            60
        ]
    }
};
const LineInvestment = (state = lineInvestment_initialState, action)=>{
    const { payload , type  } = action;
    switch(type){
        case CHART:
            return {
                ...state,
                payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const lineInvestment = (LineInvestment);

;// CONCATENATED MODULE: ./redux/reducers/root.js




/* harmony default export */ const root = ((0,external_redux_namespaceObject.combineReducers)({
    LineChart: lineChart,
    DoughnutChart: doughnutChart,
    LineInvestment: lineInvestment
}));

;// CONCATENATED MODULE: ./redux/store.js



const store_initialState = {};
const middleware = [
    (external_redux_thunk_default())
];
const store = (0,external_redux_namespaceObject.createStore)(root, store_initialState, (0,external_redux_namespaceObject.applyMiddleware)(...middleware));
/* harmony default export */ const redux_store = (store);

;// CONCATENATED MODULE: ./pages/_app.js



// import 'swiper/swiper.min.css';
// import 'swiper/swiper.scss';
// import 'swiper/swiper-bundle.css';




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Head, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Inter&display=optional",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
                store: redux_store,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2035));
module.exports = __webpack_exports__;

})();