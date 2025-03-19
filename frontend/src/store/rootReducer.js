import { combineReducers } from 'redux'
import theme from './slices/themeSlice'
import auth from './slices/authSlice'
import roomCategory from './slices/roomCategoriesSlice'


const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        theme,
        auth,
        roomCategory,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}
  
export default rootReducer
