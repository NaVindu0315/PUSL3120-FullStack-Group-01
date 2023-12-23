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
import Home from './Home';
import UserRegistration from './authenication/user_reg';
import UserLogin from './authenication/user_login';
import EmpLogin from './authenication/emp_login';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
 <Route path='/' element ={<App/>}/>
 <Route path ='/home' element ={<Home/>}/>

{/*Authentication */}
<Route path ='/userreg' element ={<UserRegistration/>}/>
<Route path ='/userlog' element ={<UserLogin/>}/>
<Route path ='/emplog' element ={<EmpLogin/>}/>

 {/*menu */}
 <Route path ='/menu' element ={<Menu2/>}/>
 <Route path ='/menuform' element ={<MenuForm/>}/>
 <Route path ='/menutable' element ={<MenuTable/>}/>
 {/*inventory*/}
 <Route path ='/inventory' element ={<Inventory/>}/>
 <Route path ='/inventoryform' element ={<InventoryForm/>}/>
 <Route path ='/inventorytable' element ={<InventoryTable/>}/>
 {/*Order */}
 <Route path ='/order' element ={<Order/>}/>
 <Route path ='/orderform' element ={<OrderForm/>}/>
 <Route path ='/ordertable' element ={<OrderTable/>}/>
 {/*Employee*/}
 <Route path ='/employee' element ={<Employee/>}/>
 <Route path ='/employeeform' element ={<EmployeeForm/>}/>
 <Route path ='/employeetable' element ={<EmployeeTable/>}/>
 {/*table */}
 <Route path ='/tableview' element ={<TableReserve/>}/>
 <Route path ='/tableform' element ={<TableForm/>}/>
 <Route path ='/tabletable' element ={<TableTable/>}/>

 </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
