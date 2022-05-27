import axios from 'axios';

const setCars = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("https://rent-car-appx.herokuapp.com/admin/car");
            dispatch({ type: 'SET_CARS', payload: data })
            return data
        } catch (error) {
            alert(error.message)
        }
    };
};

export {setCars}