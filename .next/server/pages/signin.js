"use strict";
(() => {
var exports = {};
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 9415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ signin)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
;// CONCATENATED MODULE: ./components/form/SigninForm.js




const initialValues = {
    email: "",
    password: ""
};
const SigninFormSchema = external_yup_.object().shape({
    email: external_yup_.string().email("Email is invalid").required("Email is required"),
    password: external_yup_.string().min(6, "Password must be at least 6 characters").required("Password is required")
});
function SigninForm() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: initialValues,
            validationSchema: SigninFormSchema,
            onSubmit: (fields)=>{
                alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
            },
            children: ({ errors , status , touched  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-12 mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            className: "form-label",
                                            children: "Email"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                            name: "email",
                                            type: "text",
                                            className: "form-control" + (errors.email && touched.email ? " is-invalid" : "")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.ErrorMessage, {
                                            name: "email",
                                            component: "div",
                                            className: "invalid-feedback"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-12 mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            className: "form-label",
                                            children: "Password"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                            name: "password",
                                            type: "text",
                                            className: "form-control" + (errors.password && touched.password ? " is-invalid" : "")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.ErrorMessage, {
                                            name: "password",
                                            component: "div",
                                            className: "invalid-feedback"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-check",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                type: "checkbox",
                                                name: "acceptTerms",
                                                className: "form-check-input "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-check-label",
                                                children: "Remember me"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-6 text-end",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/reset",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Forgot Password?"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mt-3 d-grid gap-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                className: "btn btn-primary mr-2",
                                children: "Sign In"
                            })
                        })
                    ]
                })
        })
    });
}
/* harmony default export */ const form_SigninForm = (SigninForm);

;// CONCATENATED MODULE: ./pages/signin.js



function Signin() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "authincation section-padding",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container h-100",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center h-100 align-items-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-xl-5 col-md-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mini-logo text-center my-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "./images/logo.webp",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "card-title mt-5",
                                        children: "Sign in to Neftify"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "auth-form card",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card-body",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(form_SigninForm, {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "mt-3 mb-0",
                                            children: [
                                                "Don't have an account?",
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/signup",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-primary",
                                                        children: "Sign up"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "privacy-link",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Have an issue with 2-factor authentication?"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Privacy Policy"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
/* harmony default export */ const signin = (Signin);


/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

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

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664], () => (__webpack_exec__(9415)));
module.exports = __webpack_exports__;

})();