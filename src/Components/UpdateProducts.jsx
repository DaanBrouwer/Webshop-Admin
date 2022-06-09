import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import agent from "../agent";

function UpdateProduct() {
  const inputvalues = { 
    id: 0, 
    name: '', 
    brand: '', 
    price: 0, 
    stock: 0, 
    description: ''
  };
  const { id } = useParams();
  const [product, setProduct] = useState(inputvalues);
  const navigate = useNavigate();

  useEffect(() => {
    agent.ProductList.details(parseInt(id)).then((response) =>
      setProduct(response)
    );
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
    console.log(product);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const updateProduct = {
      id: product?.id,
      name: product?.name,
      brand: product?.brand,
      price: product?.price,
      stock: product?.stock,
      description: product?.description,
    };

    axios
      .put('https://localhost:5001/api/products/', updateProduct)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) {
          console.error(error.request);
        } else {
          console.error("Error", error.message);
        }
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    let confirmDelete = window.confirm('Delete product?')
    if(confirmDelete){
      axios.delete(`https://localhost:5001/api/products/`+ (product.id))
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) {
          console.error(error.request);
        } else {
          console.error("Error", error.message);
        }
      });
    }    
    return navigate('/');   
    };


  return (
    <div className="form">
      <div>
        <h1>Edit or delete product</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label className="label">id</label>
          <input
            onChange={handleChange}
            className="form-control"
            defaultValue={product.id || ''}
            name="id"
            type="text"
          />

<div className="form-input">
          <label className="label">name</label>
          <input
            onChange={handleChange}
            className="form-control"
            defaultValue={product.name || ''}
            name="name"
            type="text"
          />
          </div>
          <div className="form-input">
            <label className="label">brand</label>
            <input
              onChange={handleChange}
              defaultValue={product.brand || ''}
              className="form-control"
              name="brand"
              type="text"
            />
          </div>
          <div className="form-input">
            <label className="label">price</label>
            <input
              onChange={handleChange}
              defaultValue={product.price || ''}
              className="form-control"
              name="price"
              type="text"
            />
          </div>
          <div className="form-input">
            <label className="label">stock</label>
            <input
              onChange={handleChange}
              defaultValue={product.stock || ''}
              className="form-control"
              name="stock"
              type="text"
            />
          </div>
          <div className="form-input">
            <label className="label">description</label>
            <input
              onChange={handleChange}
              defaultValue={product.description || ''}
              className="form-control"
              name="description"
              type="text"
            />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
          <button size="sm" color="danger" onClick={(e) =>handleDelete(e, product.id)}>Delete</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProduct;
