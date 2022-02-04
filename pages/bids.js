import Link from "next/link";
import RecentBid from "../components/elements/RecentBid";
import LayoutAdmin from "../components/layout/LayoutAdmin";

function Invoice() {
    return (
        <>
            <LayoutAdmin
                headTitle="Bids"
                pageTitle="Bids"
                pageTitleSub={"Neftify Bids page"}
                pageClass={"admin"}
                parent={"Home"}
                child={"Bids"}
            >
                <div className="row">
                    <div className="col-xl-3 col-sm-6">
                        <div className="stat-widget d-flex align-items-center">
                            <div className="widget-icon me-3 bg-primary">
                                <span>
                                    <i className="ri-file-copy-2-line"></i>
                                </span>
                            </div>
                            <div className="widget-content">
                                <h3>24K</h3>
                                <p>Artworks</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="stat-widget d-flex align-items-center">
                            <div className="widget-icon me-3 bg-success">
                                <span>
                                    <i className="ri-file-list-3-line"></i>
                                </span>
                            </div>
                            <div className="widget-content">
                                <h3>82K</h3>
                                <p>Auction</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="stat-widget d-flex align-items-center">
                            <div className="widget-icon me-3 bg-warning">
                                <span>
                                    <i className="ri-file-paper-line"></i>
                                </span>
                            </div>
                            <div className="widget-content">
                                <h3>200</h3>
                                <p>Creators</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="stat-widget d-flex align-items-center">
                            <div className="widget-icon me-3 bg-danger">
                                <span>
                                    <i className="ri-file-paper-2-line"></i>
                                </span>
                            </div>
                            <div className="widget-content">
                                <h3>89</h3>
                                <p>Canceled</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="card-header px-0">
                            <h4 className="card-title">Active Bids </h4>
                            <Link href="/create-invoice">
                                <a className="btn btn-primary">
                                    Place a Bid
                                </a>
                            </Link>
                        </div>
                                <div className="bid-table">
                                    <RecentBid />
                                </div>
                    </div>
                </div>
            </LayoutAdmin>
        </>
    );
}
export default Invoice;
