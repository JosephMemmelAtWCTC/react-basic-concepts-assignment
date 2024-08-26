import React, { Component } from 'react';
import Button from '@mui/material/Button';

class Medal extends Component {

    handleMedalIncrement = () => {
        this.props.onMedalUpdate(this.props.medal.id, 1)
    }
    handleMedalDecrement = () => {
        this.props.onMedalUpdate(this.props.medal.id, -1)
    }

    renderMedalCount(medalCount) {
        switch (medalCount) {
            case null:
            case undefined:
                return 'Unavailable';
            case 0:
                return 'None';
            default:
                return medalCount;
        }
    }

    render(){
        const { name, medal, count } = this.props.medal;
        return (
            <div className='flex-container quarter-screen center'>
                <div className='flex-child'>
                    { name }
                </div>
                <div className='flex-child'>
                    { this.renderMedalCount(count) }
                </div>
                <Button variant="contained" onClick={this.handleMedalIncrement} className="square-button" >
                    +
                </Button>
                <Button variant="contained" disabled={medal === 0} onClick={this.handleMedalDecrement} className="square-button" >
                    -
                </Button>
            </div>
        );
    }
}

export default Medal;