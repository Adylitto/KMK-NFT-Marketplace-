import { useState } from "react";
import Link from "next/link"
const data = [
    {
        id: 1,
        title: "The Sandbox",
        img: "1.jpg",
        value: "positive",
        price: 136305.78,
        status: 104.25,
    },
    {
        id: 2,
        title: "The Sandbox",
        follow: true,
        img: "2.jpg",
        value: "positive",
        price: 136305.78,
        status: 104.25,
    },
    {
        id: 3,
        title: "The Sandbox",
        img: "3.jpg",
        value: "negative",
        price: 136305.78,
        status: 104.25,
    },
    {
        id: 4,
        title: "The Sandbox",
        img: "4.jpg",
        value: "positive",
        price: 136305.78,
        status: 104.25,
    },
    {
        id: 5,
        title: "The Sandbox",
        img: "5.jpg",
        value: "negative",
        price: 136305.78,
        status: 104.25,
    },
    {
        id: 6,
        title: "The Sandbox",
        img: "6.jpg",
        value: "positive",
        price: 136305.78,
        status: 104.25,
    },
    {
        id: 7,
        title: "The Sandbox",
        img: "7.jpg",
        value: "negative",
        price: 136305.78,
        status: 104.25,
    },
    {
        id: 8,
        title: "The Sandbox",
        img: "8.jpg",
        value: "positive",
        price: 136305.78,
        status: 104.25,
    },
    {
        id: 8,
        title: "The Sandbox",
        img: "9.jpg",
        value: "negative",
        price: 136305.78,
        status: 104.25,
    },
    {
        id: 8,
        title: "The Sandbox",
        img: "10.jpg",
        value: "positive",
        price: 136305.78,
        status: 104.25,
    },
    {
        id: 8,
        title: "The Sandbox",
        img: "11.jpg",
        value: "positive",
        price: 136305.78,
        status: 104.25,
    },
    {
        id: 8,
        title: "The Sandbox",
        img: "12.jpg",
        value: "negative",
        price: 136305.78,
        status: 104.25,
    },
];
function TopCollection() {
    const [open, setOpen] = useState("p1");
    return (
        <>
            {data.map((item, i) => (
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <Link href="/collection">
                        <a className="top-collection-content d-block">
                            <div className="d-flex align-items-center">
                                <span className="serial">{i + 1}. </span>
                                <div className="flex-shrink-0">
                                    <span className="top-img"><img
                                        className="img-fluid"
                                        src={`/images/items/${item.img}`}
                                        alt=""
                                        width="70"
                                    /></span>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5>{item.title}</h5>
                                    <p className="text-muted">
                                        <img src="/images/svg/eth.svg" alt="" width={10} className="me-2" />
                                        {item.price}
                                    </p>
                                </div>
                                <h5 class={item.value == "positive" ? "text-success" : "text-danger"}>{item.value == "positive" ? "+" : "-"}{item.status}</h5>
                            </div>
                        </a>
                    </Link>
                </div>
            ))}



        </>
    );
}
export default TopCollection;
