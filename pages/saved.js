import SavedItems from "../components/elements/SavedItems";
import LayoutAdmin from "../components/layout/LayoutAdmin";

function CreateInvoice() {
    return (
        <>
            <LayoutAdmin
               headTitle="Saved"
               pageTitle="Saved Items"
               pageTitleSub={"Neftify Saved page"}
               pageClass={"admin"}
               parent={"Home"}
               child={"Saved"}
            >
                
                
                <div className="col-12">
                        <div className="filter-tab">
                                <div className="row">
                                    <SavedItems/>
                                </div>
                        </div>
                    </div>
           
                
            </LayoutAdmin>
        </>
    );
}
export default CreateInvoice;
