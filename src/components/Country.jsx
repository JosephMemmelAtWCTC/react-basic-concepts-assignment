import React, { Component } from 'react';
import Medal from './Medal'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import List from '@mui/material/List';

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
            <Card variant="outlined">
                <CardHeader
                    // avatar={
                    // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    // R
                    // </Avatar>
                    // }
                    title={name}
                    subheader={this.totalMedals()+' Total Medals'}
                />
                <CardContent>
                    <List>
                        {medals.map(medal =>
                            <Medal
                                key={medal.name}
                                medal={medal}
                                onMedalUpdate={this.handleMedalUpdate}
                            />
                        )}
                    </List>
                </CardContent>
            </Card>
        );
    }
}

export default Country;