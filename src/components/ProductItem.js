import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import Rate from './Rate'

class ProductItem extends Component {
  render() {
    const { imgUrl, description, title, price, rate } = this.props.item;
    const id = this.props.id;

    return (
      <div className="grid sm-12 md-6 lg-4 xl-3">
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
              <Rate value={rate} key={id} />
            </div>
            <div className="product-description">
              {description}
            </div>
            <div className="product-btn">
              <button>
                <FontAwesomeIcon icon={faCartPlus} className="icon" />
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductItem