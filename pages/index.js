import React, { useState } from "react";
import BrowseCategory from "../components/elements/BrowseCategory";
import TopCollection from "../components/elements/TopCollection";
import LayoutFront from "../components/layout/LayoutFront";
import "react-modal-video/css/modal-video.css";
import dynamic from "next/dynamic";

import Link from "next/link";
import IntroSlider from "../components/slider/IntroSlider";
import NotableDrops from "../components/slider/NotableDrops";
import TrendingSlider from "../components/slider/Trending";

const ModalVideo = dynamic(import("react-modal-video"), {
    ssr: false,
});

const Index = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <LayoutFront pageClass={"front"}>
                <div className="intro1 section-padding">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-5 col-lg-6 col-12">
                                <div className="intro-content  my-5">
                                    <h1 className="mb-3">
                                        Discover, collect, and sell
                                        <span> extraordinary NFTs</span>
                                    </h1>
                                    <p>
                                        on the world's first & largest NFT
                                        marketplace
                                    </p>

                                    <div className="intro-btn mt-5">
                                        <Link href="/explore">
                                            <a className="btn btn-primary">
                                                Explore
                                                <i className="bi bi-arrow-right"></i>
                                            </a>
                                        </Link>
                                        <Link href="/upload">
                                            <a className="btn btn-outline-primary">
                                                Create
                                            </a>
                                        </Link>
                                    </div>

                                    <a
                                        onClick={() => setOpen(true)}
                                        className="more c-pointer d-inline-flex"
                                    >
                                        <span>
                                            <i className="bi bi-play-fill"></i>
                                        </span>
                                        Learn more 
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 col-12">
                                <div className="intro-slider">
                                    <IntroSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="notable-drops section-padding bg-light triangle-top-light triangle-bottom-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title text-center d-flex justify-content-between mb-3">
                                    <h2>Notable Drops</h2>
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
                        <div className="row">
                            <div className="col-12">
                                <div className="notable-drops-slider">
                                    <NotableDrops />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="top-collection section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="section-title text-center">
                                    <h2>Top collections over last 7 days</h2>
                                    <p>
                                        Here are a few reasons why you should
                                        choose us
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <TopCollection />
                        </div>
                    </div>
                </div>

                <div className="trending-category section-padding bg-light triangle-top-light triangle-bottom-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title text-center d-flex justify-content-between mb-3">
                                    <h2>Trending Items</h2>
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
                        <div className="row">
                            <div className="col-12">
                                <div className="trending-slider">
                                <TrendingSlider/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="create-sell section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="section-title text-center">
                                    <h2>Create and sell your NFTs</h2>
                                    <p>
                                        Here are a few reasons why you should
                                        choose Neftify
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="create-sell-content">
                                    <div className="create-sell-content-icon">
                                        <i className="bi bi-shield-check"></i>
                                    </div>
                                    <div>
                                        <h4>Set up your wallet </h4>
                                        <p>
                                            Once you’ve set up your wallet of
                                            choice, connect it to Neftify by
                                            clicking the wallet icon in the top
                                            right corner. Learn about the
                                            wallets we support.
                                        </p>
                                        <Link href="/explore">
                                            <a>
                                                Explore
                                                <i className="bi bi-arrow-right-short"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="create-sell-content">
                                    <div className="create-sell-content-icon">
                                        <i className="bi bi-x-diamond"></i>
                                    </div>
                                    <div>
                                        <h4>Create your collection</h4>
                                        <p>
                                            Click My Collections and set up your
                                            collection. Add social links, a
                                            description, profile & banner
                                            images, and set a secondary sales
                                            fee.
                                        </p>
                                        <Link href="/explore">
                                            <a>
                                                Explore
                                                <i className="bi bi-arrow-right-short"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="create-sell-content">
                                    <div className="create-sell-content-icon">
                                        <i className="bi bi-circle-half"></i>
                                    </div>
                                    <div>
                                        <h4>Add your NFTs</h4>
                                        <p>
                                            Upload your work (image, video,
                                            audio, or 3D art), add a title and
                                            description, and customize your NFTs
                                            with properties, stats, and
                                            unlockable content.
                                        </p>
                                        <Link href="/explore">
                                            <a>
                                                Explore
                                                <i className="bi bi-arrow-right-short"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="create-sell-content">
                                    <div className="create-sell-content-icon">
                                        <i className="bi bi-circle-half"></i>
                                    </div>
                                    <div>
                                        <h4>List them for sale</h4>
                                        <p>
                                            Choose between auctions, fixed-price
                                            listings, and declining-price
                                            listings. You choose how you want to
                                            sell your NFTs, and we help you sell
                                            them!
                                        </p>
                                        <Link href="/explore">
                                            <a>
                                                Explore
                                                <i className="bi bi-arrow-right-short"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="browse-category section-padding border-top">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="section-title text-center">
                                    <h2>Browse by category</h2>
                                    <p>
                                        Here are a few reasons why you should
                                        choose Neftify
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <BrowseCategory />
                        </div>
                    </div>
                </div>

                <div className="intro-video section-padding bg-light triangle-top-light triangle-bottom-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="section-title text-center">
                                    <h2>NFT Marketplace</h2>
                                    <p>
                                        The NFT marketplace with everything for
                                        everyone
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="intro-video-play">
                                    <div className="play-btn">
                                        <a onClick={() => setOpen(true)}>
                                            <i className="bi bi-play-fill"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="intro-video-content text-center mt-5">
                                    <a
                                        href="#"
                                        className="btn btn-primary px-4"
                                    >
                                        Explore the marketplace
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="7e90gBu4pas"
                    onClose={() => setOpen(false)}
                />
            </LayoutFront>
        </>
    );
};

export default Index;
