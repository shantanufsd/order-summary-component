import React from "react";

function Card(props) {
    return <section className="card-container" aria-label="Order Summary">
    <img className="card-image" src={props.image} alt={props.alt} />
    <article className="card-content">
    <h2 className="card-title">{props.title}</h2>
    <p className="card-description">{props.description}</p>
    <div className="card-plan">
    <img className="plan-icon" src={props.Icon} alt={props.IconAlt} />
    <h3 className="plan-title">Annual Plan</h3>
    <h3 className="plan-price">{props.price}/year</h3>
    <button className="btn-link">Change</button>
    </div>
    <button className="btn-payment">Proceed to Payment</button>
    <button className="btn-cancel">Cancel Order</button>
    </article>
    </section>
    
}

export default Card;