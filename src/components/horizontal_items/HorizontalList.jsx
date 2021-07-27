import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AudioCard from "./AudioCard";
import VideoCard from "./VideoCard";
import NearByCard from "./NearByCards";

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    overflowY: "scroll",
    width: "100%"
};

export default function HorizontalList(props) {
    return <React.Fragment>
        <Typography gutterBottom variant="h3" component="h3">
            {props.title}
        </Typography>
        <List className="horizontal-list" style={flexContainer}>
            {
                props.data.map((data, index) => {
                    return (
                        <ListItem key={data.id} style={{
                            display: "flex",
                            flex: "0 0 auto",
                            width: props.type === "audio" ? "auto" : "60%",
                            paddingLeft: 0
                        }}>
                            {displayCard(props,data)}
                        </ListItem>
                    );
                })
            }

        </List>
    </React.Fragment>
}

const displayCard = (props,data) => {

    switch (props.type) {
        case "audio":
            return <AudioCard data={data} onClick={props.onCardClick}/>;
        case "video":
            return <VideoCard data={data}/>
        case "nearby":
            return <NearByCard data={data} />
        default:
            return "";

    }
}