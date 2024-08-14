import React from 'react';
import Table from './page1';
import PaginatorBasicDemo from './Page3Prime';
import { Link } from 'react-router-dom';
function DispalyData() {
  const data = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
    { id: 5, name: "e" },
    { id: 6, name: "f" },
  ]; 
  const itemsPerPage = 2;

  return (
    <div>
      <h1>Table with Pagination</h1>
      <Table data={data} itemsPerPage={itemsPerPage} />  <br/> <br/>
      <Link to="/page"> PrimeReact Pagination </Link>
    </div>
  );
}

export default DispalyData;
