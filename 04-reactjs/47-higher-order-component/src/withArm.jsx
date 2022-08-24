import React, { Component } from 'react';

const Army = Men => {
    class NewMen extends Component {
        state = {
            gunShots: 0,
        }
    
        handleGunShots = () => {
            this.setState({gunShots: this.state.gunShots+1});
        }
        render(){
            return <Men hocGunName="AK47" hocGunShots={this.state.gunShots} hocHandleGunShots={this.handleGunShots} />
        }
    }

    return NewMen;
}


export default Army;