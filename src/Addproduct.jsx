import React, { useState } from 'react';
import axios from 'axios';

const Addproduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://your-django-api-url/products/', formData);
      console.log(response.data); // handle success
    } catch (error) {
      console.error('Error adding product:', error); // handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} />
      <textarea name="description" placeholder="Product Description" value={formData.description} onChange={handleChange}></textarea>
      <input type="number" name="price" placeholder="Product Price" value={formData.price} onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default Addproduct;
