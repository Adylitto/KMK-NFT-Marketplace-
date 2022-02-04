import { useState } from "react";
const data = [
    {
        title: "Art",
        img: "9.jpg",
    },
    {
        title: "Collectibles",
        follow: true,
        img: "10.jpg",
    },
    {
        title: "Domain Names",
        img: "11.jpg",
    },
    {
        title: "Music",
        img: "12.jpg",
    },
    {
        title: "Photography",
        img: "13.jpg",
    },
    {
        title: "Sports",
        img: "14.jpg",
    },
    {
        title: "Trading Cards",
        img: "15.jpg",
    },
    {
        title: "Utility",
        img: "16.jpg",
    },
];
function BrowseCategory() {
    const [open, setOpen] = useState("p1");
    return (
        <>
            {data.map((item, i) => (
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="card browse-cat">
                        <img
                            className="img-fluid card-img-top"
                            src={`/images/items/${item.img}`}
                            alt=""
                        />
                        <div className="card-body">
                            <h4>{item.title}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
export default BrowseCategory;
