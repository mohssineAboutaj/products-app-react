import React, { Component } from 'react'

class ProductItem extends Component {
  render() {
    const { imgUrl, description, title, price } = this.props.item;
    
    return (
      <div className="product-card">
        <img className="product-img" src={imgUrl} alt={title} />
        <div className="product-info">
          <h3 className="product-title">{title}</h3>
          <div className="product-price">
            <span className="product-price-new">
              $ {price.new}
            </span>
            <span className="product-price-old">
              $ {price.old}
            </span>
          </div>
          <div className="product-rate">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <div className="product-description">
            {description}
          </div>
          <div className="product-btn">
            <button>
              <i className="fa fa-cart-plus"></i>
              add to cart
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductItem