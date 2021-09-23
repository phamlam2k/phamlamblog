import React from "react";
import { Component } from "react";

class Navbar extends Component {
    render() {
        return(
            <>
                <ul>
                    <li><a href="/">Home</a> </li>
                    <li><a href="#/product">Product</a></li>
                    <li><a href="#/products">Products</a></li>
                </ul>
            </>
        )
    }
}

export default Navbar;