import React, { Component } from 'react'
import Army from './withArm';

class Aryan extends Component {
    

  render() {
    return (
      <div onMouseOver={this.props.hocHandleGunShots}>
        Aryan {this.props.hocGunName} GunShots : {this.props.hocGunShots}
      </div>
    )
  }
}

export default Army(Aryan);
