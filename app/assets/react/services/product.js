import axios from "axios"

export const getProducts = async () => {
    return await axios({
        method: 'get',
        url: '/api/products',
    });
}

export const getProduct = async (id) => {
    return await axios({
        method: 'get',
        url: `/api/products/${id}`,
    });
}

export const deleteProduct = async (id) => {
    return await axios({
        method: 'delete',
        url: `/api/products/${id}`,
    });
}