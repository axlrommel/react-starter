import { Grid, Button } from "@mui/material";
import { useEffect, useState } from "react";
import CardSong from "./CardSong";

const sortBySong = (a, b) => (a.song > b.song ? 1 : -1);

const STEP = 9;

const AppContainer = () => {
  const [songs, setSongs] = useState(undefined);
  const [startingSong, setStartingSong] = useState(0);
  const [endingSong, setEndingSong] = useState(0);

  useEffect(() => {
    fetch(`https://f3y2mfbesq.us-east-1.awsapprunner.com/music`)
      .then((resp) => resp.json())
      .then((entries) => {
        setStartingSong(0);
        setEndingSong(entries.length > STEP ? STEP - 1 : entries.length - 1);
        setSongs(entries.sort(sortBySong));
      })
      .catch(() => setSongs([]));
  }, []);

  const goToNext = () => {
    setStartingSong(startingSong + STEP);
    setEndingSong(
      endingSong + STEP <= songs.length - 1
        ? endingSong + STEP
        : songs.length - 1
    );
  };

  const goToPrevious = () => {
    setEndingSong(startingSong - 1);
    setStartingSong(startingSong - STEP);
  };

  return (
    <>
      <Grid item xs={11}>
        <Button onClick={goToPrevious} disabled={startingSong === 0}>
          Previous
        </Button>
        <Button
          onClick={goToNext}
          disabled={songs && endingSong === songs?.length - 1}
        >
          Next
        </Button>
      </Grid>
      <Grid container>
        {songs &&
          songs.map((song, index) => {
            return index < startingSong || index > endingSong ? null : (
              <CardSong song={song} key={index} />
            );
          })}
      </Grid>
    </>
  );
};

export default AppContainer;
