import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
    name : "products",
    initialState : null,
    reducers:{
        setProducts : (currentValue, action) => action.payload
    }
})

export const {setProducts} = productSlice.actions
export const getProductsThunk = (url) => (dispatch) =>{
    axios.get(url)
    .then(res => dispatch(setProducts(res.data)))
    .catch(err => console.log(err))
}
export default productSlice.reducer

