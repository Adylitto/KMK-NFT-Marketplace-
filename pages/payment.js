
import LayoutAdmin from "../components/layout/LayoutAdmin";
import SettingsMenu from "../components/layout/SettingsMenu";
function SettingsPayment() {
    return (
        <>
            <LayoutAdmin
                headTitle="Payment Method"
                pageTitle="Payment Method"
                pageTitleSub={"Neftify Settings Payment Method page"}
                pageClass={"admin"}
                parent={"Settings"}
                child={"Payment Method"}
            >
                <SettingsMenu />

                <div className="row">
                    <div className="col-12">
                        <h4 className="card-title mb-3">Add a payment method </h4>
                        <div className="card">
                            <div className="card-body">
                                <div className="verify-content">
                                    <div className="d-flex align-items-center">
                                        <span className="me-3 icon-circle bg-primary text-white">
                                            <i className="ri-bank-line"></i>
                                        </span>
                                        <div className="primary-number">
                                            <h5 className="mb-0">Bank of America</h5>
                                            <small>Bank **************5421</small>
                                            <br />
                                            <span className="text-success">Verified</span>
                                        </div>
                                    </div>
                                    <button className=" btn btn-outline-primary">Manage</button>
                                </div>
                                <hr className="dropdown-divider my-4" />
                                <div className="verify-content">
                                    <div className="d-flex align-items-center">
                                        <span className="me-3 icon-circle bg-primary text-white">
                                            <i className="ri-mastercard-line"></i>
                                        </span>
                                        <div className="primary-number">
                                            <h5 className="mb-0">Master Card</h5>
                                            <small>Credit Card *********5478</small>
                                            <br />
                                            <span className="text-success">Verified</span>
                                        </div>
                                    </div>
                                    <button className=" btn btn-outline-primary">Manage</button>
                                </div>
                            </div>

                        </div>
                        <button type="button" className="btn btn-primary m-2" data-toggle="modal"
                            data-target="#addBank">Add New Bank</button>
                        <button type="button" className="btn btn-success m-2" data-toggle="modal"
                            data-target="#addCard">Add New Card</button>
                    </div>
                </div>
            </LayoutAdmin>
        </>
    );
}
export default SettingsPayment;
