
import LayoutAdmin from "../components/layout/LayoutAdmin";
import CreateApi from '../components/form/CreateApi';
import SettingsMenu from "../components/layout/SettingsMenu";
function SettingsApi() {
    return (
        <>
            <LayoutAdmin
                headTitle="API"
                pageTitle="API"
                pageTitleSub={"Neftify API page"}
                pageClass={"admin"}
                parent={"Settings"}
                child={"API"}
            >
                <SettingsMenu />

                <div className="row">
                    <div className="col-xxl-12">
                        <h4 className="card-title mb-3">Create API Key</h4>
                        <div className="card">
                            <div className="card-body">
                                <CreateApi />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <h4 className="card-title mb-3">Your API Keys</h4>
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive api-table">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Key</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                                                <td>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" checked={true} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>
                                                        <i className="ri-delete-bin-line"></i>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                                                <td>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>
                                                        <i className="ri-delete-bin-line"></i>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                                                <td>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>
                                                        <i className="ri-delete-bin-line"></i>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                                                <td>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>
                                                        <i className="ri-delete-bin-line"></i>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                                                <td>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>
                                                        <i className="ri-delete-bin-line"></i>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAdmin>
        </>
    );
}
export default SettingsApi;
