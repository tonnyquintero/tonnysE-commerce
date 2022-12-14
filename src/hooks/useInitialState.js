import { useState } from 'react'
import initialState from '../initialState'

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        setState(
            {...state,
            cart: [...state.cart, payload]}
        )
    }

    const removeFromCart = (payload, indexToRemove) => {
        setState({
            ...state,
            cart: state.cart.filter((_items, indexCurrent) => indexCurrent !== indexToRemove)
        })
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        state,
    }

}

export default useInitialState