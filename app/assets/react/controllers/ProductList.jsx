import React, {useEffect, useState} from 'react';

import {getProducts, deleteProduct} from '../services/product';

const ProductList = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        const res = await getProducts();
        // console.log(res.data['hydra:member']);
        setData(res.data['hydra:member']);
    }
    
    useEffect(() => {
        console.log('useEffect')
        getData();
    }, [])

    const onClickDeleteButtonHandler = async (id) => {
        console.log('delete')
        await deleteProduct(id)
        await getData()
    }

    return <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((value,index) => {
            return <div key={index} className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">{value.name}</h5>
                    </div>
                    <div className="card-footer">
                        <a href={`/products/${value.id}/edit`} className="btn btn-primary">Edit</a>
                        <button type="button" onClick={e => onClickDeleteButtonHandler(value.id)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        })}
    </div>;
}

export default ProductList;
