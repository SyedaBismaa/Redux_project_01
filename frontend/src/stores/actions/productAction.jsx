import axios from "../../api/axiosconfig"
import { loadproduct } from "../reducers/productSlice";

export const asyncloadproduct = () => async (dispatch, getState) => {

    try {
        const { data } = await axios.get("/products");
        dispatch(loadproduct(data));
    } catch (error) {
        console.log(error);

    }
}





export const asynccreateproduct = (product) => async (dispatch, getState) => {
    try {
        await axios.post("/products", product);
        dispatch(asyncloadproduct());

    } catch (error) {
        console.log(error);

    }
}