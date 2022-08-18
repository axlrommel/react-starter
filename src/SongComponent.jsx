import { Grid, Card, CardContent, Button, Dialog } from "@mui/material";
import ReactAudioPlayer from "react-audio-player";
import { useState } from "react";
import Markdown from "markdown-to-jsx";

const SongComponent = ({ song }) => {
  const [showDialog, setShowDialog] = useState(false);

  const setOpenDialog = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <>
      <Grid item xs="4">
        <Card>
          <Grid container justifyContent="center">
            <Grid item xs="9">
              <CardContent>{song.song}</CardContent>
              <ReactAudioPlayer src={song.url} autoPlay={false} controls />
              <Button
                variant="outlined"
                onClick={() => {
                  setOpenDialog();
                }}
              >
                Details
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      {showDialog && (
        <Dialog open={showDialog} onClose={handleClose}>
          <Markdown>{decodeURI(song?.description)}</Markdown>
        </Dialog>
      )}
    </>
  );
};

export default SongComponent;
