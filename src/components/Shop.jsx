import React, { useState } from 'react';
import ProCard from './ProCard';
import { useNavigate } from 'react-router-dom';

export default function Shop(props) {
  const navigate = useNavigate();

  const handleProductClick = (name, id) => {
    navigate(`/product/${name}/${id}`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Total pages
  const totalPages = Math.ceil(props.PROLIST.length / productsPerPage);

  // Slicing products
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = props.PROLIST.slice(startIndex, startIndex + productsPerPage);

  // Handlers for Next and Previous buttons
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Logic to determine which page numbers and ellipses to show
  const getPaginationGroup = () => {
    // If 5 or fewer pages, just show all of them
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // If current page is near the start
    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages];
    }

    // If current page is near the end
    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    // If current page is somewhere in the middle
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  return (
    <div className='shop'>
      <div id="product_container">
        {currentProducts.map((pro, index) => (
          <ProCard
            key={index}
            name={pro.name}
            price={pro.price}
            img={pro.img}
            brand={pro.brand}
            onClick={() => handleProductClick(pro.name, pro.category)}
            addToCart={props.addToCart}
            product={pro}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 0 && (
        <div id="pagination" style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
          
          {/* Previous Button */}
          <button 
            onClick={handlePrev} 
            disabled={currentPage === 1}
            style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
          >
            Prev
          </button>

          {/* Page Numbers and Ellipses */}
          {getPaginationGroup().map((item, index) => {
            if (item === '...') {
              return (
                <span key={index} className="dots" style={{ padding: '0 5px' }}>
                  &#8230;
                </span>
              );
            }

            return (
              <button
                key={index}
                className={currentPage === item ? "active" : ""}
                onClick={() => setCurrentPage(item)}
                style={{ fontWeight: currentPage === item ? 'bold' : 'normal' }}
              >
                {item}
              </button>
            );
          })}

          {/* Next Button */}
          <button 
            onClick={handleNext} 
            disabled={currentPage === totalPages}
            style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
          >
            Next
          </button>

        </div>
      )}
    </div>
  );
}