import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {
    const { key, name, img, description, price, car_type } = props.product;


    return (
        <>
            <div className="col-md-4">
                <div className="card h-100 package-card">
                    <img src={img} alt="Loading Tour Package Banner" />
                    <div className="card-body">
                        <p>{car_type}</p>
                        <h5 className="card-title fw-bold">{name}</h5>
                        <p className="card-text">{description}</p>
                        <h5 className="fw-bold">$ {price}</h5>
                    </div>

                    <div>
                        <div className="card-footer">
                            <Link to={`/booking/${key}`}>
                                <button className="btn btn-dark w-100">Buy Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;