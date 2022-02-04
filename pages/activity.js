
// import ThemeSwitch from "../components/elements/DarkLight";

import LayoutFront from "../components/layout/LayoutFront";
import ProfileMenu from "../components/layout/ProfileMenu";

function Test() {
    return (
        <>
            <LayoutFront
                headTitle="Activity"
                pageTitle="Activity"
                pageTitleSub={"Neftify Activity page"}
                pageClass={"front"}
                parent={"Profile"}
                child={"Activity"}
            >
                <div className="profile-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ProfileMenu />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <h4 className="card-title mb-3">My Activity </h4>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="all-notification">
                                            <div className="notification-list">
                                                <div className="lists">
                                                    <a href="#" className="">
                                                        <div className="d-flex align-items-center">
                                                            <span className="me-3 icon success">
                                                                <i className="bi bi-check"></i>
                                                            </span>
                                                            <div>
                                                                <h6 className="mb-0">
                                                                    Account created
                                                                    successfully
                                                                </h6>
                                                                <span>
                                                                    2020-11-04 12:00:23
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="">
                                                        <div className="d-flex align-items-center">
                                                            <span className="me-3 icon fail">
                                                                <i className="bi bi-x"></i>
                                                            </span>
                                                            <div>
                                                                <h6 className="mb-0">
                                                                    2FA verification
                                                                    failed
                                                                </h6>
                                                                <span>
                                                                    2020-11-04 12:00:23
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="">
                                                        <div className="d-flex align-items-center">
                                                            <span className="me-3 icon success">
                                                                <i className="bi bi-check"></i>
                                                            </span>
                                                            <div>
                                                                <h6 className="mb-0">
                                                                    Device confirmation
                                                                    completed
                                                                </h6>
                                                                <span>
                                                                    2020-11-04 12:00:23
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="">
                                                        <div className="d-flex align-items-center">
                                                            <span className="me-3 icon pending">
                                                                <i className="bi bi-exclamation-triangle"></i>
                                                            </span>
                                                            <div>
                                                                <h6 className="mb-0">
                                                                    xs verification
                                                                    pending
                                                                </h6>
                                                                <span>
                                                                    2020-11-04 12:00:23
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </LayoutFront>
        </>
    );
}
export default Test;
