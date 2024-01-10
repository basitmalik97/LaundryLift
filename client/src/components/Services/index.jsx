import { useStoreContext } from '../../utils/GlobalState';
import { idbPromise } from '../../utils/helpers';

import { ADD_TO_CART } from '../../utils/actions';

function ServiceItem(item) {
    const [state, dispatch] = useStoreContext();

    const {
        image,
        title,
        _id,
        price
    } = item

    const { cart } = state

    const addToCart = () => {
        const cartItem = cart.find((item) => item._id === _id)
        if (cartItem) {
            dispatch({
                type: ADD_TO_CART,
                _id: _id,
                quantity: parseInt(cartItem.quantity) + 1
            });
            idbPromise('cart', 'put', {
                ...cartItem,
                quantity: parseInt(cartItem.quantity) + 1
            })
        }
    }

    return (
        <div>
            <img src={`/images/${image}`} alt={title}/>
            <h2>{title}</h2>
            <h2>{price}</h2>
            <span>
                <button onClick={addToCart}>
                </button>
            </span>
        </div>
    )
}

export default ServiceItem