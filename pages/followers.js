// import ThemeSwitch from "../components/elements/DarkLight";

import LayoutFront from "../components/layout/LayoutFront";
import ProfileMenu from "../components/layout/ProfileMenu";

function Test() {
    return (
        <>
            <LayoutFront
                headTitle="Followers"
                pageTitle="Followers"
                pageTitleSub={"Neftify Followers page"}
                pageClass={"front"}
                parent={"Profile"}
                child={"Followers"}
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
                                        <h4 className="card-title mb-3">Followers</h4>
                                <div className="card">
                                    <div className="card-body top-creators-content">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="d-flex justify-content-between creator-widget active  align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <div className="top-creators-user-img me-3">
                                                            <img
                                                                src="/images/avatar/5.jpg"
                                                                alt=""
                                                                width="60"
                                                            />
                                                        </div>
                                                        <div className="top-creators-info">
                                                            <h5 className="mb-0">
                                                                Terry Camacho
                                                            </h5>
                                                            <p className="mb-2">
                                                                60 Items
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <a className="btn btn-secondary">
                                                            Unfollow
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="d-flex justify-content-between creator-widget active  align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <div className="top-creators-user-img me-3">
                                                            <img
                                                                src="/images/avatar/6.jpg"
                                                                alt=""
                                                                width="60"
                                                            />
                                                        </div>
                                                        <div className="top-creators-info">
                                                            <h5 className="mb-0">
                                                                Terry Camacho
                                                            </h5>
                                                            <p className="mb-2">
                                                                60 Items
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <a className="btn btn-secondary">
                                                            Unfollow
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="d-flex justify-content-between creator-widget active  align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <div className="top-creators-user-img me-3">
                                                            <img
                                                                src="/images/avatar/7.jpg"
                                                                alt=""
                                                                width="60"
                                                            />
                                                        </div>
                                                        <div className="top-creators-info">
                                                            <h5 className="mb-0">
                                                                Terry Camacho
                                                            </h5>
                                                            <p className="mb-2">
                                                                60 Items
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <a className="btn btn-secondary">
                                                            Unfollow
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="d-flex justify-content-between creator-widget active  align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <div className="top-creators-user-img me-3">
                                                            <img
                                                                src="/images/avatar/8.jpg"
                                                                alt=""
                                                                width="60"
                                                            />
                                                        </div>
                                                        <div className="top-creators-info">
                                                            <h5 className="mb-0">
                                                                Terry Camacho
                                                            </h5>
                                                            <p className="mb-2">
                                                                60 Items
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <a className="btn btn-secondary">
                                                            Unfollow
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
                </div>
            </LayoutFront>
        </>
    );
}
export default Test;
