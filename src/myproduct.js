import React, { useState, useEffect } from "react";
import axios from "axios";

const Myproduct = () => {
  const [product, updateProduct] = useState([]);
  const getProduct = () => {
    var url = "http://localhost:1234/product";
    axios.get(url).then((response) => {
      updateProduct(response.data.reverse());
    });
  };

  useEffect(() => {
    getProduct();
  }, [true]);

  const [pname, pickName] = useState("");
  const [pprice, pickPrice] = useState("");
  const [pphoto, pickPhoto] = useState("");
  const [msg, updateMsg] = useState("");
  const save = () => {
    var url = "http://localhost:1234/product";
    var newproduct = { name: pname, price: pprice, pic: pphoto };
    axios.post(url, newproduct).then((resposne) => {
      getProduct();
      updateMsg(pname + " Added Successfully ! ");
      pickName("");
      pickPhoto("");
      pickPrice("");
    });
  };

  const removeItem = (proid) => {
    var url = "http://localhost:1234/product/" + proid; // pro is array, id is index
    axios.delete(url).then((response) => {
      updateMsg("Item Removed Successfully from Avilable Products !");
      getProduct(); // to reload the list
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-3">
          <div className="bg-light p-3 rounded">
            <h4 className="text-center"> Add New Product </h4>
            <div className="mb-3">
              <lable> Product Name </lable>
              <input
                type="text"
                className="form-control"
                onChange={(obj) => pickName(obj.target.value)}
                value={pname}
              />
            </div>
            <div className="mb-3">
              <label> Product Price </label>
              <input
                type="text"
                className="form-control"
                onChange={(obj) => pickPrice(obj.target.value)}
                value={pprice}
              />
            </div>
            <div className="mb-3">
              <lable> Product Phote URL </lable>
              <input
                type="text"
                className="form-control"
                onChange={(obj) => pickPhoto(obj.target.value)}
                value={pphoto}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary" onClick={save}>
                {" "}
                Save Product
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <p className="col-lg-12 p-3 text-danger text-center">{msg}</p>
          <h4 className="text-primary text-center m-2"> Avilable Products </h4>
          <table className="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Photo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {product.map((pinfo, index) => {
                return (
                  <tr key={index}>
                    <td>{pinfo.name}</td>
                    <td>{pinfo.price}</td>
                    <td>
                      <img src={pinfo.pic} height="50" width="50" />
                    </td>
                    <td>
                      {" "}
                      <i
                        className="fa fa-trash fa-lg text-danger"
                        onClick={removeItem.bind(this, pinfo.id)}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Myproduct;
