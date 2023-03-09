import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from './features/counter/counterSlice'
import userReducer from './features/user/userSlice'
import filterReducer from './features/filter/filterSlice'
import basketReducer from './features/basket/basketSlice'
import themeReducer from './features/theme/themeSlice'
import { productsApi } from './features/product/productSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        filter: filterReducer,
        basket: basketReducer,
        theme: themeReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch)