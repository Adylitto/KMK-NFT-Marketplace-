
import LayoutAdmin from "../components/layout/LayoutAdmin";
import SettingsMenu from "../components/layout/SettingsMenu";
function SettingsSecurity() {
    return (
        <>
            <LayoutAdmin
                headTitle="Security"
                pageTitle="Security"
                pageTitleSub={"Neftify Settings Security page"}
                pageClass={"admin"}
                parent={"Settings"}
                child={"Security"}
            >
                <SettingsMenu />

                <div className="row">
                    <div className="col-xxl-12">
                        <h4 className="card-title mb-3">2-step verification </h4>
                        <div className="card">
                            <div className="card-body">
                                <div className="verify-content ">
                                    <div className="d-flex align-items-center">
                                        <span className="me-3 icon-circle bg-primary text-white">
                                            <i className="ri-smartxs-line"></i>
                                        </span>
                                        <div className="primary-number">
                                            <p className="mb-0"><strong>+xxx xxxxxxxx60</strong></p>
                                            <small>Keep your primary xs number up-to-date</small>
                                            <br />
                                            <span className="text-success">Required</span>
                                        </div>
                                    </div>
                                    <button className=" btn btn-primary">Manage</button>
                                </div>
                                <hr className="dropdown-divider my-4" />
                                <div className="verify-content">
                                    <div className="d-flex align-items-center">
                                        <span className="me-3 icon-circle bg-primary text-white"><i className="ri-mail-line"></i></span>
                                        <div className="primary-number">
                                            <p className="mb-0"><strong>hello@example.com</strong></p>
                                            <small>Keep your primary email up-to-date</small>
                                            <br />
                                            <span className="text-success">Required</span>
                                        </div>
                                    </div>
                                    <button className=" btn btn-primary">Manage</button>
                                </div>
                                <hr className="dropdown-divider my-4" />
                                <div className="verify-content">
                                    <div className="d-flex align-items-center">
                                        <span className="me-3 icon-circle bg-primary text-white"><i className="ri-key-line"></i></span>
                                        <div className="primary-number">
                                            <p className="mb-0"><strong>*************</strong></p>
                                            <small>You can change your password</small>
                                            <br />
                                            <span className="text-success">Required</span>
                                        </div>
                                    </div>
                                    <button className=" btn btn-primary">Manage</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <h4 className="card-title mb-3">Identity verification </h4>
                        <div className="card">
                            <div className="card-body">
                                <div className="verify-content">
                                    <div className="d-flex align-items-center">
                                        <span className="me-3 icon-circle bg-primary text-white">
                                            <i className="ri-lock-password-line"></i>
                                        </span>
                                        <div className="primary-number">
                                            <p className="mb-0">xxx xxxxx xxx40</p>
                                            <small>Social Security Number</small>
                                            <br />
                                            <span className="text-success">Verified</span>
                                        </div>
                                    </div>
                                    <button className=" btn btn-primary" data-toggle="modal"
                                        data-target="#idCardModal">Manage</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAdmin>
        </>
    );
}
export default SettingsSecurity;
