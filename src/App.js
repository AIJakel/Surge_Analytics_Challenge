import React, { useState } from 'react'
import SalesOrder from './components/SalesOrder/SalesOrder';
import CreditCheck from './components/CreditCheck/CreditCheck'
import './App.css';

/**
 * use state to track total
 */
function App() {
  const [total, updateTotal] = useState(0);

  return (
    <div className="App">
      <SalesOrder updateTotal={updateTotal} total={total} />
      <CreditCheck total={total} />
    </div>
  );
}

export default App;
