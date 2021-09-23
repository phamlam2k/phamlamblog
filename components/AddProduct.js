import React from "react";
import { Component, createRef } from "react";
import * as axiosCallApi from '../libs/post';

class AddProduct extends Component {

    nameInput = createRef();
    priceInput = createRef();

    onAdd = () => {
        axiosCallApi.getPostData('post', 
            {
                name : this.nameInput.current.value,
                price : this.priceInput.current.value
            }
        
        )

    }

    render(){
        return(
            <div>
                <label>Name : </label>
                <input type="text" ref={this.nameInput}/>
                <label>Price : </label>
                <input type="text" ref={this.priceInput}/>

                <input type="submit" onClick={this.onAdd} value="Add"/>
            </div>
        )
    }
}

export default AddProduct;




