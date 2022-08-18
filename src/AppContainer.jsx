import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import SongComponent from "./SongComponent";

const AppContainer = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("https://f3y2mfbesq.us-east-1.awsapprunner.com/music?tag=2007")
      .then((resp) => resp.json())
      .then((data) => setSongs(data));
  }, []);

  return (
    <Grid container>
      {songs &&
        songs.map((song, index) =>
          index < 8 ? <SongComponent song={song} key={index} /> : null
        )}
    </Grid>
  );
};

export default AppContainer;
