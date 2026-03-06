import React from 'react'

function FiltersSidebar() {
  return (
    <aside className="filters-sidebar">
      <div className="filters-header">
        <h2 className="filters-title">Filters</h2>
        <button className="link-button" type="button">
          Reset All
        </button>
      </div>

      <div className="filters-section">
        <h3 className="filters-section-title">Availability Dates</h3>
        <div className="filters-field">
          <label className="filters-label">
            From
            <input className="filters-input" type="date" />
          </label>
        </div>
        <div className="filters-field">
          <label className="filters-label">
            To
            <input className="filters-input" type="date" />
          </label>
        </div>
      </div>

      <div className="filters-section">
        <h3 className="filters-section-title">Category</h3>
        <div className="filters-checkbox-group">
          <label className="filters-checkbox">
            <input type="checkbox" defaultChecked />
            <span>All Vehicles</span>
          </label>
          <label className="filters-checkbox">
            <input type="checkbox" />
            <span>SUV</span>
          </label>
          <label className="filters-checkbox">
            <input type="checkbox" />
            <span>Sedan</span>
          </label>
          <label className="filters-checkbox">
            <input type="checkbox" />
            <span>Luxury</span>
          </label>
          <label className="filters-checkbox">
            <input type="checkbox" />
            <span>Electric</span>
          </label>
        </div>
      </div>

      <div className="filters-section">
        <h3 className="filters-section-title">Price / Day</h3>
        <input type="range" className="filters-range" min="0" max="500" />
        <p className="filters-range-values">$0 – $500</p>
      </div>

      <div className="filters-section">
        <h3 className="filters-section-title">Brand</h3>
        <select className="filters-select">
          <option>All Brands</option>
          <option>Tesla</option>
          <option>BMW</option>
          <option>Audi</option>
          <option>Mercedes</option>
          <option>Toyota</option>
          <option>Volkswagen</option>
        </select>
      </div>

      <div className="filters-premium-card">
        <h3 className="filters-premium-title">Premium Membership</h3>
        <p className="filters-premium-text">
          Get 15% off on luxury rentals and priority support.
        </p>
        <button className="primary-button" type="button">
          Upgrade Now
        </button>
      </div>
    </aside>
  )
}

export default FiltersSidebar

