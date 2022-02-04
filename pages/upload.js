import UpdateInfo from "../components/form/UpdateInfo";
import LayoutFront from "../components/layout/LayoutFront";
import PersonalInfo from "../components/form/PersonalInfo";
import UploadItem from "../components/form/UploadItem";
import SettingsMenu from "../components/layout/SettingsMenu";

function SettingsProfile() {
    return (
        <>
            <LayoutFront
                headTitle="Profile"
                pageTitle="Profile"
                pageTitleSub={"Profile page"}
                pageClass={"admin"}
                parent={"Settings"}
                child={"Profile"}
            >
                <div className="upload-item section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <h4 className="card-title mb-3">
                                    Upload Item
                                </h4>
                                <div className="card">
                                    <div className="card-body">
                                        <UploadItem />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-6">
                                <h4 className="card-title mb-3">
                                    Preview
                                </h4>
                                <div className="card items">
                                    <div className="card-body">
                                        <div className="items-img position-relative">
                                            <img
                                                src="/images/items/5.jpg"
                                                className="img-fluid rounded mb-3"
                                                alt=""
                                            />
                                            <img
                                                src="/images/avatar/5.jpg"
                                                className="creator"
                                                width="50"
                                                alt=""
                                            />
                                        </div>
                                        <h4 className="card-title">
                                            Liguid Wave
                                        </h4>
                                        <p></p>
                                        <div className="d-flex justify-content-between">
                                            <div className="text-start">
                                                <p className="mb-2">Creator</p>
                                                <h5 className="text-muted">
                                                    Jenny Abraham
                                                </h5>
                                            </div>
                                            <div className="text-end">
                                                <p className="mb-2">Price</p>
                                                <h5 className="text-muted">
                                                    0.55 ETH
                                                </h5>
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
export default SettingsProfile;
