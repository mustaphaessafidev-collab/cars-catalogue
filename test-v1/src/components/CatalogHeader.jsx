import React from 'react'

function CatalogHeader({ totalResults, sortOption, onSortChange }) {
  return (
    <header className="catalog-header">
      <div>
        <h1 className="catalog-title">Vehicle Catalog</h1>
        <p className="catalog-subtitle">{totalResults} results</p>
      </div>

      <div className="catalog-header-actions">
        <label className="catalog-sort-label">
          <span>Sort by:</span>
          <select
            className="catalog-select"
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="popular">Most Popular</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="brand-az">Brand A–Z</option>
          </select>
        </label>
      </div>
    </header>
  )
}

export default CatalogHeader

