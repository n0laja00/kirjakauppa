import uuid from 'react-uuid';

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            
            return [...state, /*state adustaa "item" objectia!*/{
                kirjaNro: action.item.kirjaNro,
                hinta: action.item.hinta,
                maara: action.item.maara,
                id: uuid()
            }]
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.id)
        default:
            return state 
    }
}