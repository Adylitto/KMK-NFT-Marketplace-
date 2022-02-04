import LayoutFront from "../components/layout/LayoutFront";
import ProfileMenu from "../components/layout/ProfileMenu";
function Profile() {
    return (
        <>
            <LayoutFront
                headTitle="Profile"
                pageTitle="Profile"
                pageTitleSub={"Neftify Profile page"}
                pageClass={"front"}
                parent={"Home"}
                child={"Profile"}
            >
                <div className="profile-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ProfileMenu />
                            </div>
                        </div>

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
                            <div className="col-xxl-4 col-xl-12">
                                <div className="card welcome-profile">
                                    <div className="card-body">
                                        <img
                                            src="./images/avatar/1.jpg"
                                            alt=""
                                        />
                                        <h4>Welcome, Jannatul Maowa!</h4>
                                        <p>
                                            Looks like you are not verified yet.
                                            Verify yourself to use the full
                                            potential of Xtrader.
                                        </p>

                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <span className="verified">
                                                        <i className="ri-check-line"></i>
                                                    </span>
                                                    Verify account
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="not-verified">
                                                        <i className="ri-shield-check-line"></i>
                                                    </span>
                                                    Two-factor authentication
                                                    (2FA)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xxl-4">
                                <div class="card card-fluid">
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h6 class="text-sm mb-0">
                                                    <i class="bi bi-facebook me-2"></i>
                                                    Facebook
                                                </h6>
                                            </div>
                                            <div class="col-auto">
                                                <span class="text-sm">
                                                    imsaifun
                                                </span>
                                            </div>
                                        </div>

                                        <hr class="my-3" />

                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h6 class="text-sm mb-0">
                                                    <i class="bi bi-instagram me-2"></i>
                                                    Instagram
                                                </h6>
                                            </div>
                                            <div class="col-auto">
                                                <a href="#" class="text-sm">
                                                    Connect
                                                </a>
                                            </div>
                                        </div>
                                        <hr class="my-3" />
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h6 class="text-sm mb-0">
                                                    <i class="bi bi-linkedin me-2"></i>
                                                    LinkedIn
                                                </h6>
                                            </div>
                                            <div class="col-auto">
                                                <span class="text-sm">
                                                    imsaifun
                                                </span>
                                            </div>
                                        </div>
                                        <hr class="my-3" />
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h6 class="text-sm mb-0">
                                                    <i class="bi bi-linkedin me-2"></i>
                                                    LinkedIn
                                                </h6>
                                            </div>
                                            <div class="col-auto">
                                                <span class="text-sm">
                                                    imsaifun
                                                </span>
                                            </div>
                                        </div>
                                        <hr class="my-3" />
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h6 class="text-sm mb-0">
                                                    <i class="bi bi-linkedin me-2"></i>
                                                    LinkedIn
                                                </h6>
                                            </div>
                                            <div class="col-auto">
                                                <span class="text-sm">
                                                    imsaifun
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-6">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">
                                            VERIFY &amp; UPGRADE{" "}
                                        </h4>
                                    </div>
                                    <div class="card-body">
                                        <h5>
                                            Account Status :{" "}
                                            <span class="text-warning">
                                                Pending{" "}
                                                <i class="icofont-warning"></i>
                                            </span>{" "}
                                        </h5>
                                        <p>
                                            Your account is unverified. Get
                                            verified to enable funding, trading,
                                            and withdrawal.
                                        </p>
                                        <a href="#" class="btn btn-primary">
                                            {" "}
                                            Get Verified
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-12">
                                <div class="card-header px-0">
                                    <h4 class="card-title">Information </h4>
                                    <a
                                        href="./settings-profile.html"
                                        class="btn btn-primary"
                                    >
                                        Edit
                                    </a>
                                </div>
                                <div class="card">

                                    <div class="card-body">
                                        <form class="row">
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                                <div class="user-info">
                                                    <span>USER ID</span>
                                                    <h4>818778</h4>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                                <div class="user-info">
                                                    <span>EMAIL ADDRESS</span>
                                                    <h4>email@example.com</h4>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                                <div class="user-info">
                                                    <span>
                                                        COUNTRY OF RESIDENCE
                                                    </span>
                                                    <h4>Bangladesh</h4>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                                <div class="user-info">
                                                    <span>JOINED SINCE</span>
                                                    <h4>20/10/2020</h4>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                                <div class="user-info">
                                                    <span>TYPE</span>
                                                    <h4>Personal</h4>
                                                </div>
                                            </div>
                                        </form>
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
export default Profile;
