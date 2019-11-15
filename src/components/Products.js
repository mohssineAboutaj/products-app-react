import React, { Component } from 'react'
import ProductItem from './ProductItem'

class Products extends Component {
  render() {
    return (
      <div className="products-list">
        <div className="row">
          { this.props.list.map((p, i) => {
              return <ProductItem key={i} item={p} id={i} />
            })
          }
        </div>
      </div>
    )
  }
}

export default Products
