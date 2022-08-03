import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import Markdown from "markdown-to-jsx";

const CardSong = ({ song }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Grid item xs={11} lg={4}>
      <Card variant="outlined">
        <CardContent>
          <Grid
            container
            spacing={1}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={12} sm={8}>
              <Typography
                sx={{
                  marginLeft: 1,
                  marginBottom: 1,
                }}
              >
                {song.song}
              </Typography>
              <ReactAudioPlayer src={song.url} autoPlay={false} controls />
            </Grid>
          </Grid>
          {showMore && <Markdown>{decodeURI(song?.description)}</Markdown>}
        </CardContent>
        <CardActions>
          {!showMore && (
            <Button onClick={() => setShowMore(true)} size="small">
              Read More
            </Button>
          )}
          {showMore && (
            <Button onClick={() => setShowMore(false)} size="small">
              Read Less
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardSong;
