import React, { useState } from 'react';

function Table({ data, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Slice data based on current page and items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  // Handle pagination
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              {/* Render more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div>
        <button disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Table;
