import React from 'react'
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {CardMedia, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    root: {
        borderRadius: 8,
        boxShadow: "0 0 10px 0px #e2e2e2",
        padding:0,
    },
    media:{
        width:200,
        height:80
    }
}));



export default function NearByCard(props){

    const classes = useStyles();
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return <Card className={classes.root}>
        <CardMedia
            className={classes.media}
            image="https://limetray.com/blog/wp-content/uploads/2020/01/steel-011Lead-1200x800.jpg"/>
            <Typography style={{padding:8}} component="h5" variant="h5">
                New Cafe
            </Typography>
    </Card>
}