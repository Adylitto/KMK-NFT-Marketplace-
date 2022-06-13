"use strict";
(() => {
var exports = {};
exports.id = 656;
exports.ids = [656];
exports.modules = {

/***/ 3846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ demo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/layout/HeaderDemo.js




const ThemeSwitch = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/layout/HeaderDemo.js -> " + "../elements/ThemeSwitch"
        ]
    },
    ssr: false
});
function HeaderDemo() {
    const { 0: isToggled , 1: setToggled  } = (0,external_react_.useState)(false);
    const toggleTrueFalse = ()=>setToggled(!isToggled)
    ;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "header landing",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "navigation",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                className: "navbar navbar-expand-lg navbar-light justify-content-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "brand-logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/images/",
                                                        alt: "",
                                                        className: "logo-primary"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/images/logo.webp",
                                                        alt: "",
                                                        className: "logo-white"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "signin-btn d-flex align-items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "btn btn-primary",
                                                children: "Buy Now"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const layout_HeaderDemo = (HeaderDemo);

;// CONCATENATED MODULE: ./pages/demo.js



function Demo() {
    const dataFront = [
        {
            title: "home",
            img: "home.jpg",
            path: ""
        },
        {
            title: "explore",
            img: "explore.jpg",
            path: "explore"
        },
        {
            title: "item",
            img: "item.jpg",
            path: "item"
        },
        {
            title: "collections",
            img: "collections.jpg",
            path: "collections"
        },
        {
            title: "profile",
            img: "profile.jpg",
            path: "profile"
        },
        {
            title: "connect",
            img: "connect.jpg",
            path: "connect"
        },
        {
            title: "created",
            img: "created.jpg",
            path: "created"
        },
        {
            title: "collected",
            img: "collected.jpg",
            path: "collected"
        },
        {
            title: "activity",
            img: "activity.jpg",
            path: "activity"
        },
        {
            title: "onsale",
            img: "onsale.jpg",
            path: "onsale"
        },
        {
            title: "liked",
            img: "liked.jpg",
            path: "liked"
        },
        {
            title: "following",
            img: "following.jpg",
            path: "following"
        },
        {
            title: "followers",
            img: "followers.jpg",
            path: "followers"
        }, 
    ];
    const dataAdmin = [
        {
            title: "dashboard",
            img: "dashboard.jpg",
            path: "dashboard"
        },
        {
            title: "bids",
            img: "bids.jpg",
            path: "bids"
        },
        {
            title: "saved",
            img: "saved.jpg",
            path: "saved"
        },
        {
            title: "collections",
            img: "collections.jpg",
            path: "collections"
        },
        {
            title: "wallet",
            img: "wallet.jpg",
            path: "wallet"
        },
        {
            title: "settings",
            img: "settings.jpg",
            path: "settings"
        },
        {
            title: "application",
            img: "application.jpg",
            path: "application"
        },
        {
            title: "security",
            img: "security.jpg",
            path: "security"
        },
        {
            title: "log",
            img: "log.jpg",
            path: "log"
        },
        {
            title: "payment",
            img: "payment.jpg",
            path: "payment"
        },
        {
            title: "api",
            img: "api.jpg",
            path: "apis"
        },
        {
            title: "signin",
            img: "signin.jpg",
            path: "signin"
        },
        {
            title: "signup",
            img: "signup.jpg",
            path: "signup"
        },
        {
            title: "locked",
            img: "locked.jpg",
            path: "locked"
        },
        {
            title: "otp1",
            img: "otp1.jpg",
            path: "otp1"
        },
        {
            title: "otp2",
            img: "otp2.jpg",
            path: "otp2"
        },
        {
            title: "email",
            img: "email.jpg",
            path: "email"
        },
        {
            title: "reset",
            img: "reset.jpg",
            path: "reset"
        }, 
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_HeaderDemo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "intro section-padding bg-light",
                id: "intro",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row align-items-center justify-content-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-xl-6 col-md-6 py-md-5",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "intro-content my-5 text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: "Neftify - NFT Marketplace React Nextjs App"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Neftify is the complete UX & UI dashboard for NFT. Here included bids, collection, wallet, and all user setting pages including profile, application, activity, payment method, api, sign in & sign up etc."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "intro-demo_img",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/demo/home.jpg",
                                        alt: "",
                                        className: "img-fluid"
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "demo section-padding mb-5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-7",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section-title text-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Landing Page"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: dataFront.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-4 col-md-4 col-sm-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "demo_img",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: `/${item.path}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "img-wrap",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: `/images/demo/${item.img}`,
                                                            alt: "",
                                                            className: "img-fluid"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: item.title
                                            })
                                        ]
                                    })
                                })
                            )
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-7",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section-title text-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Admin"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: dataAdmin.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-xl-4 col-md-4 col-sm-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "demo_img",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: `/${item.path}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "img-wrap",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: `/images/demo/${item.img}`,
                                                            alt: "",
                                                            className: "img-fluid"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: item.title
                                            })
                                        ]
                                    })
                                })
                            )
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "features section-padding bg-light",
                "data-scroll-index": "2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row py-lg-5 justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-7",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-title text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Problem?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "Don't Worry, I am waiting your question"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Refreshing my inbox, waiting for your mail "
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "customer-support-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-whatsapp"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "+8801843666660"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Without sleeping time, I am avaiable in Whstsapp. I recommend Whstsapp"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "https://api.whatsapp.com/send?phone=008801843666660",
                                                children: [
                                                    "Send Message ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "la la-angle-right"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "customer-support-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-skype"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "sporsho9"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Without sleeping time, I am avaiable in skype. I also recommend Skype"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "skype:profile_name?sporsho9",
                                                children: [
                                                    "Add Skype ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "la la-angle-right"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "customer-support-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-envelope"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "imsaifun@gmail.com"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "When you send me email, I get notification, and quickly reply you"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "mailto:imsaifun@gmail.com",
                                                children: [
                                                    "Send Email ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "la la-angle-right"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "customer-support-content",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-headset"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                children: "Pre sale question"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "You have need more design or customization? Dont worry about Quality"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "https://docs.google.com/forms/d/1KjSr2pRP9GSydodBYOz05ke6faVX0MgFCAznaYdKl6E",
                                                children: [
                                                    "Hire Now ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "la la-angle-right"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const demo = (Demo);


/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,152], () => (__webpack_exec__(3846)));
module.exports = __webpack_exports__;

})();