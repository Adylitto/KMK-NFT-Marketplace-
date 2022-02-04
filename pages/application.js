import Preferences from "../components/form/Preferences";
import LayoutAdmin from "../components/layout/LayoutAdmin";
import SettingsMenu from "../components/layout/SettingsMenu";
function SettingsPreferences() {
    return (
        <>
            <LayoutAdmin
                headTitle="Application"
                pageTitle="Application"
                pageTitleSub={"Neftify Settings Application page"}
                pageClass={"admin"}
                parent={"Settings"}
                child={"Application"}
            >
                <SettingsMenu />

                <div className="row">
                    <div className="col-xxl-12">
                        <h4 className="card-title mb-3">Preperences</h4>
                        <div className="card">
                            <div className="card-body">
                                <Preferences />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAdmin>
        </>
    );
}
export default SettingsPreferences;
