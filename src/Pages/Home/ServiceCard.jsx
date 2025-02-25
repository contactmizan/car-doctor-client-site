import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt=""
                    class="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-[#FF3811]">Price: ${price}</p>
                <div>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;