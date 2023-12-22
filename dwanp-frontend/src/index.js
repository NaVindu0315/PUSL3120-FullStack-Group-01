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
import EmployeeForm from './Employee-Navindu/Employee_Form';
//table 
import TableReserve from './Table-Dumindu/Table'; 
import TableForm from './Table-Dumindu/Table_Form';
import TableTable from './Table-Dumindu/Table_Table';
import { BrowserRouter, Route,Routes } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
 <Route path='/' element ={<App/>}/>
 {/*menu */}
 <Route path ='/menu' element ={<Menu2/>}/>
 <Route path ='/menuform' element ={<MenuForm/>}/>
 <Route path ='/menutable' element ={<MenuTable/>}/>
 {/*inventory*/}
 <Route path ='/inventory' element ={<Inventory/>}/>
 <Route path ='/inventoryform' element ={<InventoryForm/>}/>
 <Route path ='/inventorytable' element ={<InventoryTable/>}/>
 {/*menu */}
 <Route path ='/' element ={</>}/>
 <Route path ='/' element ={</>}/>
 <Route path ='/' element ={</>}/>
 {/*menu */}
 <Route path ='/' element ={</>}/>
 <Route path ='/' element ={</>}/>
 <Route path ='/' element ={</>}/>
 {/*menu */}
 <Route path ='/' element ={</>}/>
 <Route path ='/' element ={</>}/>
 <Route path ='/' element ={</>}/>

 </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
