import React, { Component } from "react";
import AddProduct from "../components/AddProduct";
import Head from "../components/Head";
import Home from "../components/Home";
import Product from "../components/Product";

class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
          route: window.location.hash.substr(1)
        };
    }

    
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            });
        });
    }
    
    render() {
        var Child;
        
        switch(this.state.route) {
            case '/products': 
                Child = Product; 
                break;
            case '/product': 
                Child = AddProduct; 
                break;
            default:       
                Child = Home;
        }
        
        return (
            <div>
                <Head />
                <Child/>
            </div>
        );
    }
}

export default App;