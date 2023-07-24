import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";


export const fetchData = () => {
    return async(dispatch)=> {
        const fetchRequest = async()=> {
            const res = await fetch('https://redux-store-7bc0a-default-rtdb.firebaseio.com/cartItems.json')
            const data = await res.json()
            return data
        }
        
        try{
            const cartData = await fetchRequest()
            dispatch(cartActions.replaceData(cartData))
        }catch(err){
            dispatch(uiActions.showNotification({
                open: true,
                message: 'Not connected to the internet',
                type: 'error'
              }));
        }
    }
   
}

export const sendCartData = (cart) => {
    
    return async(dispatch)=> {
        
            //send state as sending request
            
  dispatch(uiActions.showNotification({
    open: true,
    message: 'Sending Request Loading...',
    type: 'warning'
  }));

  const sendRequest = async() => {
    const res = await fetch('https://redux-store-7bc0a-default-rtdb.firebaseio.com/cartItems.json',{
      method:'PUT',
      body:JSON.stringify(cart)
    })
    const data = await res.json()
    //Sent state as request is successfull
    dispatch(uiActions.showNotification({
      open: true,
      message: 'Sending Request Successful',
      type: 'success'
    }));
  }
  try{
    await sendRequest()
        }catch(err){
            dispatch(uiActions.showNotification({
                open: true,
                message: 'Sending Request failed',
                type: 'error'
              }));
        }
    }
}