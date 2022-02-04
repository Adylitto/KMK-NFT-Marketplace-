// import ThemeSwitch from "../components/elements/DarkLight";

import LayoutFront from "../components/layout/LayoutFront";

function Item() {
    return (
        <>
            <LayoutFront
                headTitle="Item Details"
                pageTitle="Item Details"
                pageTitleSub={"Neftify Item Details page"}
                pageClass={"front"}
                parent={"Home"}
                child={"Item Details"}
            >
                <div className="item-single section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="top-bid">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img
                                                    src="/images/items/11.jpg"
                                                    className="img-fluid rounded"
                                                    alt="..."
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <h3 className="mb-3">
                                                    Brighten LQ
                                                </h3>
                                                <div className="d-flex align-items-center mb-3">
                                                    <img
                                                        src="/images/avatar/1.jpg"
                                                        alt=""
                                                        className="me-3 avatar-img"
                                                    />
                                                    <div className="flex-grow-1">
                                                        <h5 className="mb-0">
                                                            John Abraham
                                                            <span className="circle bg-success"></span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between mt-4 mb-4">
                                                    <div className="text-start">
                                                        <h4 className="mb-2">
                                                            Auction Time
                                                        </h4>
                                                        <h5 className="text-muted">
                                                            3h : 1m : 50s
                                                        </h5>
                                                    </div>
                                                    <div className="text-end">
                                                        <h4 className="mb-2">
                                                            Current Bid :{" "}
                                                            <strong className="text-primary">
                                                                0.05 ETH
                                                            </strong>
                                                        </h4>
                                                        <h5 className="text-muted">
                                                            0.15 ETH
                                                        </h5>
                                                    </div>
                                                </div>
                                                <p className="mb-3">
                                                    Lorem ipsum dolor, sit amet
                                                    consectetur adipisicing
                                                    elit. Eos, unde. Unde,
                                                    doloremque ipsam? Nesciunt
                                                    dolorem nisi quae nostrum
                                                    veniam quasi illum, iusto
                                                    tempore nihil, natus
                                                    perspiciatis? Sed
                                                </p>
                                                <h4 className="card-title mb-3">
                                                    Latest Bids
                                                </h4>
                                                <div className="bid mb-3 card">
                                                    <div class="activity-content card-body py-0">
                                                        <ul>
                                                            <li class="d-flex justify-content-between align-items-center">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="activity-user-img me-3">
                                                                        <img
                                                                            src="/images/avatar/1.jpg"
                                                                            alt=""
                                                                            width="50"
                                                                        />
                                                                    </div>
                                                                    <div class="activity-info">
                                                                        <h5 class="mb-0">
                                                                            Papaya
                                                                        </h5>
                                                                        <p>
                                                                            0.05
                                                                            ETH
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="text-end">
                                                                    <span class=" text-muted">
                                                                        12 min
                                                                        ago
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <li class="d-flex justify-content-between align-items-center">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="activity-user-img me-3">
                                                                        <img
                                                                            src="/images/avatar/2.jpg"
                                                                            alt=""
                                                                            width="50"
                                                                        />
                                                                    </div>
                                                                    <div class="activity-info">
                                                                        <h5 class="mb-0">
                                                                            Alex
                                                                            Maris
                                                                        </h5>
                                                                        <p>
                                                                            0.06
                                                                            ETH
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="text-end">
                                                                    <span class=" text-muted">
                                                                        12 min
                                                                        ago
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <li class="d-flex justify-content-between align-items-center">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="activity-user-img me-3">
                                                                        <img
                                                                            src="/images/avatar/3.jpg"
                                                                            alt=""
                                                                            width="50"
                                                                        />
                                                                    </div>
                                                                    <div class="activity-info">
                                                                        <h5 class="mb-0">
                                                                            John
                                                                            Adams
                                                                        </h5>
                                                                        <p>
                                                                            0.06
                                                                            ETH
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="text-end">
                                                                    <span class=" text-muted">
                                                                        12 min
                                                                        ago
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <a
                                                        href=""
                                                        className="btn btn-primary"
                                                    >
                                                        Place a Bid
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

                <div className="related section-padding bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title text-center d-flex justify-content-between mb-3">
                                    <h2>Related Items</h2>
                                    {/* <div className="arrows">
                                        <span>
                                            <i className="bi bi-arrow-left"></i>
                                        </span>
                                        <span>
                                            <i className="bi bi-arrow-right"></i>
                                        </span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-6 col-md-6">
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
                                                <p className="mb-2">Auction</p>
                                                <h5 className="text-muted">
                                                    3h 1m 50s
                                                </h5>
                                            </div>
                                            <div className="text-end">
                                                <p className="mb-2">
                                                    Bid :{" "}
                                                    <strong className="text-primary">
                                                        0.55 ETH
                                                    </strong>
                                                </p>
                                                <h5 className="text-muted">
                                                    0.55 ETH
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center mt-3">
                                            <a
                                                href=""
                                                className="btn btn-primary"
                                            >
                                                Place a Bid
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card items">
                                    <div className="card-body">
                                        <div className="items-img position-relative">
                                            <img
                                                src="/images/items/6.jpg"
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
                                                <p className="mb-2">Auction</p>
                                                <h5 className="text-muted">
                                                    3h 1m 50s
                                                </h5>
                                            </div>
                                            <div className="text-end">
                                                <p className="mb-2">
                                                    Bid :{" "}
                                                    <strong className="text-primary">
                                                        0.55 ETH
                                                    </strong>
                                                </p>
                                                <h5 className="text-muted">
                                                    0.55 ETH
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center mt-3">
                                            <a
                                                href=""
                                                className="btn btn-primary"
                                            >
                                                Place a Bid
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card items">
                                    <div className="card-body">
                                        <div className="items-img position-relative">
                                            <img
                                                src="/images/items/7.jpg"
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
                                                <p className="mb-2">Auction</p>
                                                <h5 className="text-muted">
                                                    3h 1m 50s
                                                </h5>
                                            </div>
                                            <div className="text-end">
                                                <p className="mb-2">
                                                    Bid :{" "}
                                                    <strong className="text-primary">
                                                        0.55 ETH
                                                    </strong>
                                                </p>
                                                <h5 className="text-muted">
                                                    0.55 ETH
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center mt-3">
                                            <a
                                                href=""
                                                className="btn btn-primary"
                                            >
                                                Place a Bid
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="card items">
                                    <div className="card-body">
                                        <div className="items-img position-relative">
                                            <img
                                                src="/images/items/8.jpg"
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
                                                <p className="mb-2">Auction</p>
                                                <h5 className="text-muted">
                                                    3h 1m 50s
                                                </h5>
                                            </div>
                                            <div className="text-end">
                                                <p className="mb-2">
                                                    Bid :{" "}
                                                    <strong className="text-primary">
                                                        0.55 ETH
                                                    </strong>
                                                </p>
                                                <h5 className="text-muted">
                                                    0.55 ETH
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center mt-3">
                                            <a
                                                href=""
                                                className="btn btn-primary"
                                            >
                                                Place a Bid
                                            </a>
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
export default Item;
