import React, { Component } from 'react';
import Medal from './Medal'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

class Country extends Component {
    
    handleMedalUpdate = (medalId, change) => {
        this.props.onMedalUpdate(this.props.country.id, medalId, change)
    }

    renderGoldCount(goldCount) {
        switch (goldCount) {
            case null:
                // return 'Unavailable';
            case undefined:
                return 'Unavailable';
            case 0:
                return 'None';
            default:
                return goldCount;
        }
    }

    totalMedals(){
        return this.props.country.medals.reduce((a, b) => a + b.count, 0);
    }

    render(){
        const { name, medals } = this.props.country;
        return (
            // <div className='flex-container quarter-screen center'>
            <div className=''>

                {/* <code>
                    { this.props.country }
                </code> */}
                <div className='flex-child'>
                    { name }
                </div>
                <div>
                    {medals.map(medal =>
                        <Medal
                            key={medal.name}
                            medal={medal}
                            onMedalUpdate={this.handleMedalUpdate}
                        />
                    )}
                </div>
                
                <div className='flex-child'>
                    { this.totalMedals() }
                </div>
            </div>
        );
    }
}

export default Country;