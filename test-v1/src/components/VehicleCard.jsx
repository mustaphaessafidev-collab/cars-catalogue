import React from 'react'

function VehicleCard({ vehicle }) {
  return (
    <article className="vehicle-card">
      <div className="vehicle-card-image-wrapper">
        <img
          src={vehicle.photo_url}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="vehicle-card-image"
        />
      </div>

      <div className="vehicle-card-body">
        <p className="vehicle-card-brand">{vehicle.brand}</p>
        <h3 className="vehicle-card-model">{vehicle.model}</h3>

        <ul className="vehicle-card-features">
          <li>{vehicle.fuel}</li>
          <li>{vehicle.transmission}</li>
          <li>{vehicle.seats} seats</li>
        </ul>

        <div className="vehicle-card-footer">
          <div className="vehicle-card-price">
            <span className="vehicle-card-price-amount">
              ${vehicle.price_per_day}
            </span>
            <span className="vehicle-card-price-unit">/ day</span>
          </div>

          <button className="primary-button" type="button">
            View Details
          </button>
        </div>
      </div>
    </article>
  )
}

export default VehicleCard

