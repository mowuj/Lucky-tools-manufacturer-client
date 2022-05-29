import React from 'react';
import useTools from '../../../hooks/useTools';

const ManageProduct = () => {
    const [products, setProducts] = useTools();
    console.log(products);
    const handleDelete = id => {
        const proceed =window.confirm('Are You sure?')
        if (proceed) {
            const url =`https://agile-citadel-75234.herokuapp.com/service/${id}`

            fetch(url, {
                method:'DELETE'
            })
                .then(res => res.json())
                .then(data=>console.log(data))
                const remaining=products.filter(product=>product._id!==id)
                setProducts(remaining)
        }
    }
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Photo</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
                    products.map(product => 
                    <tr>
        <th>*</th>
        <td><div className="avatar">
  <div className="w-8 rounded">
    <img src={product.img} alt={product.name} />
  </div>
</div></td>
        <td>{ product.name}</td>
                            <td>{ product.quantity}</td>
                            <td>{ product.price}</td>
            <td></td>
            <td><button className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary" onClick={()=>handleDelete(product._id)}>X Delete</button></td>
        
      </tr>
                        
                    )
                    } 
                    
    </tbody>
  </table>
</div>
    );
};

export default ManageProduct;