import { connect } from "react-redux";
import DoughnutChart from "../components/chart/DoughnutChart";
import BarChart from "../components/chart/LineChart";
import RecentActivity from "../components/elements/RecentActivity";
import RecentBid from "../components/elements/RecentBid";
import TopCreators from "../components/elements/TopCreators";
import TrendingBids from "../components/elements/TrendingBids";
import LayoutAdmin from "../components/layout/LayoutAdmin";

function Home({ lineData, doughnutData }) {
    return (
        <>
            <LayoutAdmin
                headTitle="Dashboard"
                // pageTitle="Dashboard"
                pageTitleSub={"KMK Dashboard"}
                pageClass={"admin"}
                parent={"Home"}
                child={"Dashboard"}
            >
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="promotion d-flex justify-content-between align-items-center">
                            <div className="promotion-detail">
                                <h3 className="text-white mb-3">
                                    Discover, Collect, Sell  and Create
                                    your Own NFT
                                </h3>
                                <p>
                                    Digital marketplace for crypto collectibles
                                    and non fungable tokens
                                </p>
                                <a className="btn btn-primary me-3">Explore</a>
                                <a className="btn btn-secondary">Create</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6">
                        <div className="card top-bid">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <img
                                            src="/images/items/11.jpg"
                                            className="img-fluid rounded"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center mb-3">
                                            <img
                                                src="/images/avatar/1.jpg"
                                                alt=""
                                                className="me-3 avatar-img"
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">
                                                    John Abraham
                                                    <span className="circle bg-success"></span>
                                                </h6>
                                            </div>
                                        </div>
                                        <h4 className="card-title">Brighten LQ</h4>
                                        <div className="d-flex justify-content-between mt-3 mb-3">
                                            <div className="text-start">
                                                <p className="mb-2">Auction</p>
                                                <h5 className="text-muted">3h 1m 50s</h5>
                                            </div>
                                            <div className="text-end">
                                                <p className="mb-2">
                                                    Bid :{" "}
                                                    <strong className="text-primary">0.05 ETH</strong>
                                                </p>
                                                <h5 className="text-muted">0.15 ETH</h5>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <a
                                                href=""
                                                className="btn btn-primary"
                                            >
                                                Place a Bid
                                            </a>
                                            <a
                                                href=""
                                                className="btn btn-secondary"
                                            >
                                                Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6">
                        <div className="card top-bid">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <img
                                            src="/images/items/14.jpg"
                                            className="img-fluid rounded"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center mb-3">
                                            <img
                                                src="/images/avatar/1.jpg"
                                                alt=""
                                                className="me-3 avatar-img"
                                            />
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">
                                                    John Abraham
                                                    <span className="circle bg-success"></span>
                                                </h6>
                                            </div>
                                        </div>
                                        <h4 className="card-title">Brighten LQ</h4>
                                        <div className="d-flex justify-content-between mt-3 mb-3">
                                            <div className="text-start">
                                                <p className="mb-2">Auction</p>
                                                <h5 className="text-muted">3h 1m 50s</h5>
                                            </div>
                                            <div className="text-end">
                                                <p className="mb-2">
                                                    Bid :{" "}
                                                    <strong className="text-primary">0.05 ETH</strong>
                                                </p>
                                                <h5 className="text-muted">0.15 ETH</h5>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <a
                                                href=""
                                                className="btn btn-primary"
                                            >
                                                Place a Bid
                                            </a>
                                            <a
                                                href=""
                                                className="btn btn-secondary"
                                            >
                                                Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="filter-tab">
                            <div className="d-flex justify-content-between">
                                <h4 className="card-title mb-3">Trending Bids</h4>
                                <div className="filter-nav mb-3">
                                    <a href="#" className="active">
                                        All
                                    </a>
                                    <a href="#">
                                        Games
                                    </a>
                                    <a href="#">
                                        Artwork
                                    </a>
                                </div>
                            </div>
                                <div className="row">
                                    <TrendingBids />
                                </div>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-xl-12">
                        <div className="row">
                            <div className="col-xxl-12 col-xl-4 col-md-4 col-sm-6">
                                <div className="stat-widget d-flex align-items-center">
                                    <div className="widget-icon me-3 bg-primary">
                                        <span>
                                            <i className="ri-wallet-line"></i>
                                        </span>
                                    </div>
                                    <div className="widget-content">
                                        <h3>24K</h3>
                                        <p>Artworks</p>
                                    </div>

                                    <div className="widget-arrow">
                                        <p className="text-success mb-0">
                                            +168.001%{" "}
                                            <span>
                                                <i className="bi bi-arrow-up"></i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-12 col-xl-4 col-md-4 col-sm-6">
                                <div className="stat-widget d-flex align-items-center">
                                    <div className="widget-icon me-3 bg-secondary">
                                        <span>
                                            <i className="ri-wallet-2-line"></i>
                                        </span>
                                    </div>
                                    <div className="widget-content">
                                        <h3>82K</h3>
                                        <p>Auction</p>
                                    </div>
                                    <div className="widget-arrow">
                                        <p className="text-danger mb-0">
                                            +168.001%{" "}
                                            <span>
                                                <i className="bi bi-arrow-down"></i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-12 col-xl-4 col-md-4 col-sm-6">
                                <div className="stat-widget d-flex align-items-center">
                                    <div className="widget-icon me-3 bg-success">
                                        <span>
                                            <i className="ri-wallet-3-line"></i>
                                        </span>
                                    </div>
                                    <div className="widget-content">
                                        <h3>1K</h3>
                                        <p>Creators</p>
                                        {/* <p className="text-danger mb-0">
                            -15.034%{" "}
                            <span>
                                <i className="bi bi-arrow-down"></i>
                            </span>
                        </p> */}
                                    </div>
                                    <div className="widget-arrow">
                                        <p className="text-success mb-0">
                                            +168.001%{" "}
                                            <span>
                                                <i className="bi bi-arrow-up"></i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-8 col-lg-6">

                        <h4 className="card-title mb-3">ETH Price</h4>

                        <div id="user-activity" className="card">


                            <div className="card-body">
                                <BarChart lineData={lineData} />
                            </div>
                        </div>
                    </div>
                    <div className=" col-xxl-3 col-xl-4 col-lg-6">
                        <h4 className="card-title mb-3">Statistics</h4>
                        <div className="card">
                            <div className="card-body">
                                <DoughnutChart doughnutData={doughnutData} />
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-12">
                        <h4 className="card-title mb-3">Recent Activity</h4>
                        <div className="card">
                            <div className="card-body">
                                <RecentActivity />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-12">
                        <h4 className="card-title mb-3">Top Creators</h4>
                        <div className="card">
                            <div className="card-body top-creators-content">
                                <div className="row">
                                    <TopCreators />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <h4 className="card-title mb-3">Recent Bid </h4>
                        <div className="bid-table">
                            <RecentBid />
                        </div>
                    </div>
                </div>
            </LayoutAdmin>
        </>
    );
}

const mapStateToProps = (state) => ({
    lineData: state.LineChart.expenses,
    doughnutData: state.DoughnutChart.statistics,
});
export default connect(mapStateToProps, {})(Home);
