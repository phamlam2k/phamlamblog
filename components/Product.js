import React, { Component } from "react";
import * as axiosData from '../libs/post';


class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            product : []
        }
    }

    componentDidMount(){
        axiosData.getPostData("get", "product", null).then(res => {
            const prod  = res.data;
            this.setState({product : prod})
        })
    }

    onDelete(id){
        const data = this.state.product.filter(pro => pro.id != id);
        this.setState({product : data});

        axiosData.deletePostData(id)
    }
    

    render(){
        return(
            <div>
                {this.state.product.map(product => (
                    <div key={product.id}>
                        <h1>{product.name}</h1>
                        <p>{product.price}</p>
                        <button onClick={() => this.onDelete(product.id)}>Delete</button>
                    </div>    
                ))}
            </div>
        )
    }


}



export default Product;