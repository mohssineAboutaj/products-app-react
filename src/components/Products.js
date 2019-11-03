import React, { Component } from 'react'
import ProductItem from './ProductItem'

class Products extends Component {
  render() {
    return (
      <div className="products-component">
        {
          this.props.list.map((p, i) => {
            return <ProductItem key={i} item={p} />
          })
        }  
      </div>
    )
  }
}

export default Products
