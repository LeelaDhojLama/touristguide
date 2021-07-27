import React, {useCallback, useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel as Slider} from "react-responsive-carousel";
import Paper from "@material-ui/core/Paper";
import {Avatar, Divider, Typography} from "@material-ui/core";
import TranslateIcon from '@material-ui/icons/Translate';
import makeStyles from "@material-ui/core/styles/makeStyles";
import HorizontalList from "../components/horizontal_items/HorizontalList";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import {VolumeDown} from "@material-ui/icons";
import {useSpeechSynthesis} from 'react-speech-kit';
import Chip from "@material-ui/core/Chip";
import {useDispatch, useSelector} from "react-redux";
import {contentActions} from '../actions'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Carousel from 'react-images'
import {Modal, ModalGateway} from 'react-images';
import Gallery from "react-photo-gallery";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Rating from "@material-ui/lab/Rating";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(1)
    },
    imageRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: 500,
        // height: 450,
    },
    avatar: {
        marginRight: 30
    }
}));

const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
}

const photos = [
    {
        src: "data:image/jpeg;base64,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",
        title: "History",
        width: 4,
        height: 3
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Khaasti_Stupa_in_1950_by_William_Morris.jpg/220px-Khaasti_Stupa_in_1950_by_William_Morris.jpg",
        title: "History",
        width: 1,
        height: 1
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnuUHQ6awnXujOR47WyAWC1kRaam-w1oboDYvmBM6roU5-4_qgw8HVkEpdMvrWAfnMrg&usqp=CAU",
        title: "History",
        width: 3,
        height: 4
    },
]

const languageData = [
    {
        title:"English",
        language: "en",
        flag: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
    },
    {
        title:"Hindi",
        language: "hi",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
    },
    {
        title:"Japanese",
        language: "jp",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"
    },
]

export default function HomePage() {

    const classes = useStyles();
    const [audio, setAudio] = useState('')
    const [voiceIndex] = useState(7);
    const [activeChip, setActiveChip] = useState("introduction");
    const [activeBottomSheetAction, setActiveBottomSheetAction] = useState("");
    const {speak, voices} = useSpeechSynthesis();
    const voice = voices[voiceIndex] || null;

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const content = useSelector(state => state.contentReducers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contentActions.getIntroduction());
        console.log(content);
    }, []);

    const onAudioClick = (source) => {
        setAudio(source);
        handleActiveBottomSheetAction(source);
    }

    const handleActiveBottomSheetAction = (active) => {
        setActiveBottomSheetAction(active);
    }

    const handleLanguageSelection = (language) => {
        localStorage.setItem("language", language);
        dispatch(contentActions.getIntroduction());
    }

    const handleCheapSelect = (chip) => {
        setActiveChip(chip)
    }

    return (
        <React.Fragment>
            <Slider>
                <div>
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5b735348266c075124b0ffb3/1568373828844-AP1ZPOIWBGGFJWMIZ55N/Boudha_Stupa_181030-9.jpg?format=1000w"
                        alt="stupa"
                    />
                </div>
                <div>
                    <img
                        src="https://i1.wp.com/www.ashesh.com.np/wp-content/uploads/2019/09/Boudhanath-world-heritage-site-inside-Kathmandu-Nepal.jpg?fit=1200%2C478&ssl=1"
                        alt="stupa"
                    />
                </div>
                <div>
                    <img
                        src="https://previews.123rf.com/images/klapixs/klapixs1509/klapixs150900015/44843501-sunset-boudhanath-stupa-and-new-year-festival-in-kathmandu-nepal.jpg"
                        alt="stupa"
                    />
                </div>
            </Slider>
            <Paper className="header-chip-div" elevation={0} style={{
                padding: 16
            }}>
                <Chip onClick={(e) => handleCheapSelect("introduction")}
                      color={activeChip === "introduction" ? "primary" : "default"} className="header-chip"
                      label={content.placeDetails.introduction}/>
                <Chip onClick={(e) => handleCheapSelect("nearby")}
                      color={activeChip === "nearby" ? "primary" : "default"} className="header-chip" label={content.placeDetails.nearby}/>
                <Chip onClick={(e) => handleCheapSelect("review")}
                      color={activeChip === "review" ? "primary" : "default"} className="header-chip"
                      label={content.placeDetails.review_rating}/>
            </Paper>

            <Paper style={{display: activeChip === "introduction" ? "flex" : "none"}} className={classes.root}
                   elevation={0}>

                <div style={headerStyle}>
                    <Typography variant="h3" component="h3">
                        Boudhanath
                    </Typography>
                    <div className="icons">
                        <VolumeDown onClick={() => speak({text: "Hello", voice: voice})}
                                    style={{marginRight: 8}}/>
                        <TranslateIcon onClick={(e) => handleActiveBottomSheetAction("language")}/>
                    </div>

                </div>
                <Typography style={{marginBottom:24}} align={"justify"} variant="body1" component="p">
                    {content.placeDetails.introduction_text}
                </Typography>

                <HorizontalList title={content.placeDetails.audio} type="audio"
                                data={content && content.placeDetails && content.placeDetails.audios ? content.placeDetails.audios : []}
                                onCardClick={onAudioClick}/>
                <HorizontalList title={content.placeDetails.video} type="video"
                                data={content && content.placeDetails && content.placeDetails.videos ? content.placeDetails.videos : []}/>
                <Typography gutterBottom variant="h3" component="h3">
                    {content.placeDetails.old_photos}
                </Typography>
                <div className={classes.imageRoot}>
                    <Gallery photos={photos} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
            </Paper>
            <Paper style={{display: activeChip === "nearby" ? "flex" : "none"}} className={classes.root} elevation={0}>
                <HorizontalList title={content.placeDetails.hotel_title} type="nearby"
                                data={
                                    content &&
                                    content.placeDetails &&
                                    content.placeDetails.nearBy &&
                                    content.placeDetails.nearBy.hotels
                                        ? content.placeDetails.nearBy.hotels : []}/>
                <HorizontalList title={content.placeDetails.cafe_title} type="nearby"
                                data={
                                    content &&
                                    content.placeDetails &&
                                    content.placeDetails.nearBy &&
                                    content.placeDetails.nearBy.cafes
                                        ? content.placeDetails.nearBy.cafes : []}/>
            </Paper>

            <Paper style={{display: activeChip === "review" ? "flex" : "none"}} className={classes.root} elevation={0}>
                <List>
                    {
                        content && content.placeDetails && content.placeDetails.reviews &&
                            content.placeDetails.reviews.map((data,index)=>(
                                <React.Fragment>
                                    <ListItem alignItems="flex-start" >
                                        <ListItemAvatar>
                                            <Avatar
                                                title={"A"}/>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={data.review}
                                            secondary={
                                                <Rating style={{fontSize:"1rem",marginTop:8}} name="read-only" value={data.rating} readOnly />
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </React.Fragment>
                            ))
                    }
                </List>
            </Paper>

            <div
                onClick={(e) => handleActiveBottomSheetAction("")}
                style={{
                    display: activeBottomSheetAction !== "" ? "block" : "none",
                    padding: 8,
                    boxShadow: "2px 2px 2px grey",
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "rgba(0,0,0,0.6)"
                }}>
                {/*<div style={{*/}
                {/*    padding: 8,*/}
                {/*    position: "absolute",*/}
                {/*    right: 0,*/}
                {/*    backgroundColor: "white"*/}
                {/*}}*/}
                {/*>*/}
                {/*    <Cancel/>*/}
                {/*</div>*/}

                <div style={{
                    padding: 8,
                    boxShadow: "2px 2px 2px grey",
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "white"
                }}>
                    {
                        activeBottomSheetAction === "language" ?
                            <List component="nav" aria-label="main mailbox folders">
                                {
                                    languageData.map((data, index) => (
                                        <div>
                                            <ListItem button onClick={(e) => handleLanguageSelection(data.language)}>
                                                <Avatar
                                                    className={classes.avatar}
                                                    src={data.flag}/>
                                                <ListItemText primary={data.title}/>
                                            </ListItem>
                                            <Divider/>
                                        </div>
                                    ))
                                }
                            </List> :
                            audio !== "" ? <audio autoPlay controls style={{width: "100%", height: 40}}>
                                <source src={audio} type="audio/mp3"/>
                                Your browser does not support the audio element.
                            </audio> : ""
                    }
                </div>
            </div>
        </React.Fragment>
    );
}