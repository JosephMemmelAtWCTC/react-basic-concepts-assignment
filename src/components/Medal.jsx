import React, { Component } from 'react';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton';
import Icon from '@mdi/react';
import {mdiMedal,mdiNumericPositive1,mdiNumericNegative1} from '@mdi/js';

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
                return 'No';
            default:
                return medalCount;
        }
    }

    renderMedalColor(medalName){
        switch (medalName.toLowerCase()) {
            case "bronze":
                return "brown";
            default:
                return medalName;
        }
    }

    render(){
        const { name, medal, count } = this.props.medal;
        return (
            <ListItem secondaryAction={
                <div>
                    <IconButton edge="end" aria-label="decrement_medal_count" disabled={count === 0}
                        onClick={this.handleMedalDecrement}>
                        <Icon path={mdiNumericNegative1}
                            title={"Add a "+name+" medal"}
                            size={1}
                            color={this.renderMedalColor(name)}
                        />
                    </IconButton>
                    <IconButton edge="end" aria-label="increment_medal_count"
                        onClick={this.handleMedalIncrement}>
                        <Icon path={mdiNumericPositive1}
                            title={"Add a "+name+" medal"}
                            size={1}
                            color={this.renderMedalColor(name)}
                        />
                    </IconButton>
                </div>
            }>
            <ListItemAvatar>
                <IconButton>
                    <Icon path={mdiMedal}
                        title={count+" "+name+" medals"}
                        size={1}
                        color={this.renderMedalColor(name)}
                    />
                </IconButton>
            </ListItemAvatar>
            <ListItemText primary={this.renderMedalCount(count)+" "+name}/>
            </ListItem>
        );
    }
}

export default Medal;