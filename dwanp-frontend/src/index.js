import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//imporitng components for paths 
///menu
import Menu2 from './menu-aruni/Menu';
import MenuForm from './menu-aruni/MenuForm';
import MenuTable from './menu-aruni/MenuTable';
//inventory
import  Inventory from './Inventory-pasindu/Inventory';
import InventoryForm from './Inventory-pasindu/Inventory_Form';
import InventoryTable from './Inventory-pasindu/Inventory_Table';
///order
import Order from './Order-wish/Order';
import OrderTable from './Order-wish/Order_Table';
import OrderForm from './Order-wish/Order_Form';
//employee
import Employee from './Employee-Navindu/Employee';
import EmployeeTable from './Employee-Navindu/Employee_Table';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
