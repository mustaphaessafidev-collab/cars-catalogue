import React from 'react'

function CatalogPagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) {
    return null
  }

  const pages = []
  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(i)
  }

  return (
    <nav className="catalog-pagination" aria-label="Vehicle catalog pages">
      <button
        type="button"
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ‹
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={
            page === currentPage
              ? 'pagination-page pagination-page-active'
              : 'pagination-page'
          }
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="pagination-button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ›
      </button>
    </nav>
  )
}

export default CatalogPagination

