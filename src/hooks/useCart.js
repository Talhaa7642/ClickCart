import {useDispatch, useSelector} from 'react-redux';
import {setCart, updateCart} from '../store/features/cartSlice';

export const useCart = () => {
  const dispatch = useDispatch();
  const {cart} = useSelector(store => store.cart);

  const handleCart = (product, qty = 0) => {
    let copyCart = [...cart];
    if (copyCart.some(el => el.id == product.id)) {
      copyCart = copyCart.map(el => {
        if (el.id == product.id) {
          return {
            ...el,
            quantity: qty >= 0 ? qty : el.quantity + 1,
          };
        } else {
          return el;
        }
      });
      console.log('copyCart', copyCart);
      dispatch(updateCart(copyCart));
    } else {
      let payload = {
        ...product,
        quantity: 1,
      };
      dispatch(setCart(payload));
    }
  };

  return {
    handleCart,
  };
};
