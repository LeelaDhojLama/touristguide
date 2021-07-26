import React from 'react'
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {CardMedia} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: "100%",
        width: "100%",
        borderRadius: 15,
        boxShadow: "0 0 10px 0px #e2e2e2"
    },
    categoryCardMedia: {
        height: 40,
        width: 40,
        borderRadius: 60,
    },
    media: {
        height: 120,
        borderRadius: 15
    },
    content: {
        padding: 8
    },
    rating: {
        fontSize: "1rem"
    },
    textCenter: {
        textAlign: "center"
    }
}));


export default function VideoCard(props){

    const classes = useStyles();

    return <Card component={Link} to="video"  className={classes.root}>
        <CardMedia
            className={classes.media}
            image="https://img.youtube.com/vi/z79M2ILZdg4/0.jpg" // Reqiured
        />
    </Card>
}