"use strict";
(() => {
var exports = {};
exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 8678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ signup)
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
;// CONCATENATED MODULE: ./components/form/SignupForm.js



const initialValues = {
    fullName: "",
    email: "",
    password: "",
    acceptTerms: false
};
const SignupFormSchema = external_yup_.object().shape({
    fullName: external_yup_.string().required("Full is required"),
    email: external_yup_.string().email("Email is invalid").required("Email is required"),
    password: external_yup_.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    acceptTerms: external_yup_.bool().oneOf([
        true
    ], "Accept Ts & Cs is required")
});
function SignupForm() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: initialValues,
            validationSchema: SignupFormSchema,
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
                                            children: "Full Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                            name: "fullName",
                                            type: "text",
                                            className: "form-control" + (errors.fullName && touched.fullName ? " is-invalid" : "")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.ErrorMessage, {
                                            name: "fullName",
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
                                    className: "col-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-check",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                type: "checkbox",
                                                name: "acceptTerms",
                                                className: "form-check-input " + (errors.acceptTerms && touched.acceptTerms ? " is-invalid" : "")
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: "form-check-label",
                                                children: [
                                                    "I certify that I am 18 years of age or older, and agree to the ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        className: "text-primary",
                                                        children: "User Agreement"
                                                    }),
                                                    " and ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        className: "text-primary",
                                                        children: "Privacy Policy"
                                                    }),
                                                    "."
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.ErrorMessage, {
                                                name: "acceptTerms",
                                                component: "div",
                                                className: "invalid-feedback"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mt-3 d-grid gap-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                className: "btn btn-primary mr-2",
                                children: "Sign Up"
                            })
                        })
                    ]
                })
        })
    });
}
/* harmony default export */ const form_SignupForm = (SignupForm);

;// CONCATENATED MODULE: ./pages/signup.js



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
                                        children: "Sign up to Neftify"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "auth-form card",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card-body",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(form_SignupForm, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "mt-3 mb-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/signin",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "text-primary",
                                                            children: "Sign in"
                                                        })
                                                    }),
                                                    "to your account"
                                                ]
                                            })
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
/* harmony default export */ const signup = (Signin);


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
var __webpack_exports__ = __webpack_require__.X(0, [505,664], () => (__webpack_exec__(8678)));
module.exports = __webpack_exports__;

})();