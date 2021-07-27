import React, {useEffect, useState} from "react";
import {YoutubePlayer} from "reactjs-media";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {CardMedia} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {contentActions} from "../actions";

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
        width: 140,
        marginRight: 8
    },
}));

export default function VideoPlayerPage(props) {

    const classes = useStyles();
    const content = useSelector(state => state.contentReducers);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contentActions.getIntroduction());
        console.log(content);
    }, []);


    const {id} = useParams();
    const [video,setVideo] = useState(getSource(id,content && content.placeDetails &&
    content.placeDetails.videos?content.placeDetails.videos:[]));

    const onVideoListClick =(source) =>{
        setVideo(source);
    }

    return (
        <React.Fragment>
            <iframe width="100%" height="200" src={video}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>


            <List className={classes.root}>
                {
                    content && content.placeDetails && content.placeDetails.videos &&
                    content.placeDetails.videos.map((data, index) => (
                        <div>
                            <ListItem onClick={(e)=>onVideoListClick(data.source)}>
                                <CardMedia
                                    className={classes.media}
                                    image={data.thumbnail} // Reqiured
                                />
                                <ListItemText
                                    primary={data.title}
                                />
                            </ListItem>
                            <Divider variant="inset" component="li"/>
                        </div>
                    ))
                }
            </List>
        </React.Fragment>
    );
}

const getSource = (id, data) => {

    for (let i = 0; i < data.length; i++) {
        if(data[i].id === parseInt(id)){
            return data[0].source;
        }
        // return "https://www.youtube.com/embed/xz8w31Xeuvk";
    }
}