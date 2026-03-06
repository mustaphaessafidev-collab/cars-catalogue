import React, { useMemo, useState } from 'react'
import vehiclesData from '../fake-data/vehicles.json'
import CatalogHeader from '../components/CatalogHeader'
import FiltersSidebar from '../components/FiltersSidebar'
import VehicleGrid from '../components/VehicleGrid'
import CatalogPagination from '../components/CatalogPagination'

function VehicleCatalogPage() {
  const [sortOption, setSortOption] = useState('popular')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const allVehicles = vehiclesData.vehicles || []

  const sortedVehicles = useMemo(() => {
    const vehicles = [...allVehicles]

    if (sortOption === 'price-low-high') {
      vehicles.sort((a, b) => a.price_per_day - b.price_per_day)
    } else if (sortOption === 'price-high-low') {
      vehicles.sort((a, b) => b.price_per_day - a.price_per_day)
    } else if (sortOption === 'brand-az') {
      vehicles.sort((a, b) => a.brand.localeCompare(b.brand))
    }

    return vehicles
  }, [allVehicles, sortOption])

  const totalPages = Math.ceil(sortedVehicles.length / itemsPerPage) || 1
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedVehicles = sortedVehicles.slice(
    startIndex,
    startIndex + itemsPerPage,
  )

  const handleSortChange = (option) => {
    setSortOption(option)
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="catalog-page">
      <FiltersSidebar />

      <main className="catalog-main">
        <CatalogHeader
          totalResults={allVehicles.length}
          sortOption={sortOption}
          onSortChange={handleSortChange}
        />

        <VehicleGrid vehicles={paginatedVehicles} />

        <CatalogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  )
}

export default VehicleCatalogPage

