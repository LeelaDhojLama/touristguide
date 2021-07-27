import React from 'react'
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({

    root: {
        borderRadius: 60,
        boxShadow: "0 0 10px 0px #e2e2e2",
        padding:0,
        alignItems:"center",
        display:"flex"
    },
    playButton:{
        borderRadius:60,
        minWidth:26,
        padding:0,
        marginRight:8
    }
}));



export default function AudioCard(props){

    const classes = useStyles();
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return <Card className={classes.root}>
        <Chip
            style={{backgroundColor:"white"}}
            avatar={<PlayArrowIcon/>}
            label={props.data.title}
            onClick={(e)=>props.onClick(props.data.source)}
        />
    </Card>
}