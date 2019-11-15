import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import * as far from '@fortawesome/free-regular-svg-icons'

class Rate extends Component {
  stars = [];
  value = this.props.value

  render() {
    for (let i = 1; i <= 5; i++) {
      if (i <= this.value) {
        this.stars.push(
          <FontAwesomeIcon icon={faStar} className="icon active" key={Math.pow(this.value, i)} />
        )
      } else {
        this.stars.push(
          <FontAwesomeIcon icon={far.faStar} className="icon" key={Math.pow(this.value, i)} />
        )
      }
    }
    return this.stars
  }
}

export default Rate;