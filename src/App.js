import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import Notfound from './Components/Notfound'
import ProductContextProvider from './Global/ProductContex'
import Products from './Components/Product'
import CartContextProvider from './Global/CartContext'
import './App.css';

function App() {
  return (
    <div>
       <ProductContextProvider>
         <CartContextProvider>
         <Router>
         <Navbar />
           <Switch>
             <Route path="/" exact component={Products}/>
             <Route path="/cart" exact component={Cart}/>
          <Route path='*' component={Notfound} />
           </Switch>
         </Router>
    
    
         </CartContextProvider>
     </ProductContextProvider>
   
    </div>
  );
}

export default App;
