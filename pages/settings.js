import UpdateInfo from "../components/form/UpdateInfo";
import LayoutAdmin from "../components/layout/LayoutAdmin";
import PersonalInfo from "../components/form/PersonalInfo";
import UpdateAvatar from "../components/form/UpdateAvatar";
import SettingsMenu from "../components/layout/SettingsMenu";

function SettingsProfile() {
    return (
        <>
            <LayoutAdmin
                headTitle="Profile"
                pageTitle="Profile"
                pageTitleSub={"Neftify Profile page"}
                pageClass={"admin"}
                parent={"Settings"}
                child={"Profile"}
            >
                <SettingsMenu />
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <h4 className="card-title mb-3">User Profile</h4>
                        <div className="card">
                            <div className="card-body">
                                <UpdateAvatar />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <h4 className="card-title mb-3">Update Profile</h4>
                        <div className="card">
                            <div className="card-body">
                                <UpdateInfo />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                                <h4 className="card-title mb-3">Personal Information</h4>
                        <div className="card">
                            <div className="card-body">
                                <PersonalInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAdmin>
        </>
    );
}
export default SettingsProfile;
