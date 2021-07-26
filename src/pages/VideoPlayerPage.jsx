import React from "react";
import { YoutubePlayer } from "reactjs-media";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {CardMedia} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    media: {
        height: 80,
        width:140,
        marginRight:8
    },
}));

export default function VideoPlayerPage(props){

    const classes = useStyles();

    return(
        <React.Fragment>
            <YoutubePlayer
                src="https://youtu.be/UZCO5k1Nu70" // Reqiured
                width="100%"
                height={200}
            />
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <CardMedia
                        className={classes.media}
                        image="https://img.youtube.com/vi/z79M2ILZdg4/0.jpg" // Reqiured
                    />
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </React.Fragment>
    );
}