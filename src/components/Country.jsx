import React, { Component } from 'react';
import Medal from './Medal'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Icon from '@mdi/react';

import {mdiEarthMinus} from '@mdi/js';

class Country extends Component {
    
    handleMedalUpdate = (medalId, change) => {
        this.props.onMedalUpdate(this.props.country.id, medalId, change)
    }

    handleRemoveCountry = () => {
        this.props.onRemoveCountry(this.props.country.id);
    }

    totalMedals(){
        return this.props.country.medals.reduce((a, b) => a + b.count, 0);
    }

    render(){
        const { name, medals } = this.props.country;
        return (
            // <div className='flex-container quarter-screen center'>
            <Card variant="outlined" style={{height: "100%"}}>
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
                <Grid container justifyContent="center" alignItems="center">
                    <Grid>
                        <Button variant="contained"
                            onClick={this.handleRemoveCountry}
                            color={'warning'}
                            startIcon={
                                <Icon path={mdiEarthMinus}
                                    title={""}
                                    size={1}
                                />
                            }
                        >
                            Remove
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        );
    }
}

export default Country;