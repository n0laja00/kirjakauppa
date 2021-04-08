import uuid from 'react-uuid';

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, /*state represents the "books" object!*/{
                bookNro: action.book.bookNro,
                
                id: uuid()
            }]
        case 'REMOVE_FROM_CART':
            return state.filter(book => book.id !== action.id)
        default:
            return state /*default catch all!*/
    }
}