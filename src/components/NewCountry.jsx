import React, { Component } from 'react';

import Medal from './Medal'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import List from '@mui/material/List';
import Icon from '@mdi/react';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
// import Grid from '@mui/material/Grid2';
import Grid from '@mui/material/Grid';

import {mdiMedal,mdiFlag,mdiEarthPlus,mdiCloseCircleOutline} from '@mdi/js';

class NewCountry extends Component {
    state = {
        newName: this.props.defaults.newName,
        gold: this.props.defaults.gold,
        silver: this.props.defaults.silver,
        bronze: this.props.defaults.bronze,
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value});
    handleChangeAsNumber = (e) => this.setState({ [e.target.name]: Number(e.target.value.replace(/\D/g, ''))});

    handleNewCountry = () => {
        if(this.state.newName.length > 0){
            this.props.onNewCountry(this.state.newName, this.state.gold, this.state.silver, this.state.bronze);
            this.handleClear();
        }
        // TODO: Add toasts
    }
    handleClear = () => {
        this.state.newName = "";
        this.state.gold = 0;
        this.state.silver = 0;
        this.state.bronze = 0;
        this.forceUpdate();
    }

    render(){
        // console.log('defaults',this.props.defaults)
        // console.log('newName',this.props.defaults.newName)
        // console.log('gold',this.props.defaults.gold)
        // console.log('silver',this.props.defaults.silver)
        // console.log('bronze',this.props.defaults.bronze)

        const {newName, gold, silver, bronze} = this.state;

        return (
            // <div className='flex-container quarter-screen center'>
            <Card variant="outlined" className="new-country" style={{backgroundColor: "#00000010", height: "100%", outlineStyle: "dashed", outlineColor: 'gray', outlineWidth: '2px', outlineOffset: '-2px'}}>
                <CardHeader
                    // avatar={
                    // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    // R
                    // </Avatar>
                    // }
                    title={"Add country"}
                    // subheader={''}
                    // classes={ 'new-country' }
                />
                <CardContent>
                <form>
                    {/* <TextField
                        required
                        id="outlined-required"
                        label="Country Name"
                        // defaultValue=""
                        size={'small'}
                    /> */}
                    <List>
                        <ListItem>
                            <Grid size={12}>
                                <Icon path={mdiFlag}
                                    title={""}
                                    size={1}
                                    color={'black'}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Country Name"
                                    size={'small'}
                                    value={newName}
                                    name="newName"
                                    onChange={ this.handleChange }
                                    className='half-text-field'
                                    slotProps={{
                                        inputLabel: {
                                            shrink: true,
                                        }
                                    }}
                                />
                            </Grid>
                        </ListItem>
                        <ListItem>
                            <Grid size={12}>
                                <Icon path={mdiMedal}
                                    title={""}
                                    size={1}
                                    color={'gold'}
                                />
                                <TextField
                                    id="outlined-number-gold"
                                    label="Gold"
                                    type="number"
                                    size={'small'}
                                    name='gold'
                                    onChange={ this.handleChangeAsNumber }
                                    value={gold}
                                    className='half-text-field'
                                    slotProps={{
                                        inputLabel: {
                                            shrink: true,
                                        }
                                    }}
                                    InputProps={{
                                        inputProps: { 
                                            min: 0,
                                            step: 1,
                                        }
                                    }}
                                />
                            </Grid>
                        </ListItem>
                        <ListItem>
                            <Grid size={12}>
                                <Icon path={mdiMedal}
                                    title={""}
                                    size={1}
                                    color={'silver'}
                                />
                                <TextField
                                    id="outlined-number-bronze"
                                    label="Silver"
                                    type="number"
                                    size={'small'}
                                    value={silver}
                                    name='silver'
                                    onChange={ this.handleChangeAsNumber }
                                    className='half-text-field'
                                    slotProps={{
                                        inputLabel: {
                                            shrink: true,
                                        }
                                    }}
                                    InputProps={{
                                        inputProps: { 
                                            min: 0,
                                            step: 1,
                                        }
                                    }}
                                />
                            </Grid>
                        </ListItem>
                        <ListItem>
                            <Grid size={12}>
                                <Icon path={mdiMedal}
                                    title={""}
                                    size={1}
                                    color={'brown'}
                                />
                                <TextField
                                    id="outlined-number-bronze"
                                    label="Bronze"
                                    type="number"
                                    size={'small'}
                                    value={bronze}
                                    name='bronze'
                                    onChange={ this.handleChangeAsNumber }
                                    className='half-text-field'
                                    slotProps={{
                                        inputLabel: {
                                            shrink: true,
                                        }
                                    }}
                                    InputProps={{
                                        inputProps: { 
                                            min: 0,
                                            step: 1,
                                        }
                                    }}
                                />
                            </Grid>
                        </ListItem>
                        <ListItem>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid>
                                <Button variant="contained"
                                    onClick={this.handleClear}
                                    startIcon={
                                        <Icon path={mdiCloseCircleOutline}
                                            title={""}
                                            size={1}
                                        />
                                    }
                                >
                                    clear
                                </Button>
                            </Grid>
                            <Grid>
                                <Button variant="contained"
                                    onClick={this.handleNewCountry}
                                    endIcon={
                                        <Icon path={mdiEarthPlus}
                                            title={""}
                                            size={1}
                                        />
                                    }
                                >
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                        </ListItem>
                    </List>

                </form>
                </CardContent>
            </Card>
        );
    }
}

export default NewCountry;