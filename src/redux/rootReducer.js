import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import productsLikeReducer from './productsLikeReducer'

const rootReducer = combineReducers({
    likeButtonsState: productsLikeReducer,
    productsInCart: cartReducer,
})

export default rootReducer
