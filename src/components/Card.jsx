import { Widgets } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

function Card({ card }) {
  return (
    <div className="card-main">
      <div className="card" key={card?.id}>
        <div className="card-body">
          <img src={card?.image} alt={card?.name} width={60} />
          <h5 className="card-title">{card?.name}</h5>
          <p className="card-text">${card?.current_price?.toString()}</p>
          <p>Today Rate</p>
          <div className="Rate d-inline-flex align-items-center gap-2">
            <span className="text-success">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0l8 10h-16l8-10zm8 14h-16l8 10 8-10z" />
              </svg>
              {card?.high_24h}%
            </span>
            <span className="text-danger">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 24l-8-10h16l-8 10zm-8-14h16l-8-10-8 10z" />
              </svg>
              {card?.low_24h}%
            </span>
          </div>
          <Link to={`/details/${card.id}`}>
            <button className="c-btn">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
