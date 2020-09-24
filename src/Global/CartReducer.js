
export const CartReducer = (state, action) => {
    const {Shoppingcart,Totalprice,qty} = state
    let product;
    let index;
    let updatePrice
    let updateQty
switch(action.type){
     case  "ADD_TO_CART":
        const check = Shoppingcart.find(product => product.id === action.id)
if(check){
    return state;
        } else {
            product = action.product
            product["qty"] = 1
            updateQty = qty + 1
            updatePrice = Totalprice + product.price
            return {Shoppingcart: [product, ...Shoppingcart], Totalprice: updatePrice, qty: updateQty}
        }
        
break;

case "INC":
    product = action.cart
    product.qty = product.qty + 1
    updatePrice = Totalprice  + product.price
    updateQty = qty + 1 
      index =  Shoppingcart.findIndex(cart => cart.id === action.id);
      Shoppingcart[index] = product;
      return {Shoppingcart: [...Shoppingcart], Totalprice: updatePrice , qty: updateQty}
      break;

      case "DEC":
          product = action.cart
          if(product.qty > 1){
              product.qty = product.qty - 1
          
          updatePrice = Totalprice - product.price;
          updateQty = qty - 1
          index =  Shoppingcart.findIndex(cart => cart.id === action.id);
          Shoppingcart[index] = product;
          return {Shoppingcart: [...Shoppingcart], Totalprice: updatePrice , qty: updateQty}
         
        }
        else{
            return state
        }
        break
        case "DELETE":
            const filtered = Shoppingcart.filter(product => product.id !== action.id);
            product = action.cart
            updateQty = qty - product.qty 
            updatePrice = Totalprice - product.price * product * product.qty
            return {Shoppingcart: [...filtered], Totalprice: updatePrice, qty: updateQty} 
            break

default:
     return state
    }
}

