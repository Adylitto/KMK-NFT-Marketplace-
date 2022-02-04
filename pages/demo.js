import Link from "next/link";
import HeaderDemo from "../components/layout/HeaderDemo";
function Demo() {

    const dataFront = [
        {
            title: "home",
            img: "home.jpg",
            path: "",
        },
        {
            title: "explore",
            img: "explore.jpg",
            path: "explore",
        },
        {
            title: "item",
            img: "item.jpg",
            path: "item",
        },
        {
            title: "collections",
            img: "collections.jpg",
            path: "collections",
        },
        {
            title: "profile",
            img: "profile.jpg",
            path: "profile",
        },
        {
            title: "connect",
            img: "connect.jpg",
            path: "connect",
        },
        {
            title: "created",
            img: "created.jpg",
            path: "created",
        },
        {
            title: "collected",
            img: "collected.jpg",
            path: "collected",
        },
        {
            title: "activity",
            img: "activity.jpg",
            path: "activity",
        },
        {
            title: "onsale",
            img: "onsale.jpg",
            path: "onsale",
        },
        {
            title: "liked",
            img: "liked.jpg",
            path: "liked",
        },
        {
            title: "following",
            img: "following.jpg",
            path: "following",
        },
        {
            title: "followers",
            img: "followers.jpg",
            path: "followers",
        },


    ];
    const dataAdmin = [
        {
            title: "dashboard",
            img: "dashboard.jpg",
            path: "dashboard",
        },
        {
            title: "bids",
            img: "bids.jpg",
            path: "bids",
        },
        {
            title: "saved",
            img: "saved.jpg",
            path: "saved",
        },
        {
            title: "collections",
            img: "collections.jpg",
            path: "collections",
        },
        {
            title: "wallet",
            img: "wallet.jpg",
            path: "wallet",
        },
        {
            title: "settings",
            img: "settings.jpg",
            path: "settings",
        },
        {
            title: "application",
            img: "application.jpg",
            path: "application",
        },
        {
            title: "security",
            img: "security.jpg",
            path: "security",
        },
        {
            title: "log",
            img: "log.jpg",
            path: "log",
        },
        {
            title: "payment",
            img: "payment.jpg",
            path: "payment",
        },
        {
            title: "api",
            img: "api.jpg",
            path: "apis",
        },
        {
            title: "signin",
            img: "signin.jpg",
            path: "signin",
        },
        {
            title: "signup",
            img: "signup.jpg",
            path: "signup",
        },
        {
            title: "locked",
            img: "locked.jpg",
            path: "locked",
        },
        {
            title: "otp1",
            img: "otp1.jpg",
            path: "otp1",
        },
        {
            title: "otp2",
            img: "otp2.jpg",
            path: "otp2",
        },
        {
            title: "email",
            img: "email.jpg",
            path: "email",
        },
        {
            title: "reset",
            img: "reset.jpg",
            path: "reset",
        },

    ];

    return (
        <>
            <HeaderDemo />
            <div className="intro section-padding bg-light" id="intro">
                <div className="container">
                    <div className="row align-items-center justify-content-center">

                        <div className="col-xl-6 col-md-6 py-md-5">

                            <div className="intro-content my-5 text-center">
                                <h1>
                                    Neftify - NFT Marketplace React Nextjs App
                                </h1>
                                <p>
                                    Neftify is the complete UX & UI dashboard for
                                    NFT. Here included bids, collection,
                                    wallet, and all user setting pages
                                    including profile, application, activity,
                                    payment method, api, sign in & sign up etc.
                                </p>
                            </div>
                            <div className="intro-demo_img">
                                <img
                                    src="/images/demo/home.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="demo section-padding mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title text-center">
                                <h2>Landing Page</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {dataFront.map((item, i) => (
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href={`/${item.path}`}>
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src={`/images/demo/${item.img}`}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title text-center">
                                <h2>Admin</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {dataAdmin.map((item, i) => (
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href={`/${item.path}`}>
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src={`/images/demo/${item.img}`}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="features section-padding bg-light" data-scroll-index="2">
                <div className="container">
                    <div className="row py-lg-5 justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title text-center">
                                <span>Problem?</span>
                                <h2>Don't Worry, I am waiting your question</h2>
                                <p>Refreshing my inbox, waiting for your mail </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="customer-support-content">
                                <span><i className="fab fa-whatsapp"></i></span>
                                <h4>+8801843666660</h4>
                                <p>Without sleeping time, I am avaiable in Whstsapp. I recommend Whstsapp</p>
                                <a href="https://api.whatsapp.com/send?phone=008801843666660">Send Message <i className="la la-angle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="customer-support-content">
                                <span><i className="fab fa-skype"></i></span>
                                <h4>sporsho9</h4>
                                <p>Without sleeping time, I am avaiable in skype. I also recommend Skype</p>
                                <a href="skype:profile_name?sporsho9">Add Skype <i className="la la-angle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="customer-support-content">
                                <span><i className="fas fa-envelope"></i></span>
                                <h4>imsaifun@gmail.com</h4>
                                <p>When you send me email, I get notification, and quickly reply you</p>
                                <a href="mailto:imsaifun@gmail.com">Send Email <i className="la la-angle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="customer-support-content">
                                <span><i className="fas fa-headset"></i></span>
                                <h4>Pre sale question</h4>
                                <p>You have need more design or customization? Dont worry about Quality</p>
                                <a href="https://docs.google.com/forms/d/1KjSr2pRP9GSydodBYOz05ke6faVX0MgFCAznaYdKl6E">Hire
                                    Now <i className="la la-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Demo;
