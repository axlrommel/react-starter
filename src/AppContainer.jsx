import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  CardContent,
  Card,
  Typography,
} from "@mui/material";

const weatherApiRootUrl = "https://api.openweathermap.org";
const weatherApiKey = "d91f911bcf2c0f925fb6535547a5ddc9";

const AppContainer = () => {
  const [city, setCity] = useState("");
  const [possibleCities, setPossibleCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(undefined);
  const [weather, setWeather] = useState(undefined);

  const lookupCities = () => {
    fetch(
      `${weatherApiRootUrl}/geo/1.0/direct?q=${city}&limit=5&appid=${weatherApiKey}`
    )
      .then((resp) => resp.json())
      .then((data) => setPossibleCities(data));
  };

  useEffect(() => {
    if (selectedCity) {
      fetch(
        `${weatherApiRootUrl}/data/2.5/onecall?lat=${selectedCity.lat}&lon=${selectedCity.lon}&units=imperial&exclude=minutely,hourly&appid=${weatherApiKey}`
      )
        .then((resp) => resp.json())
        .then((data) => setWeather(data));
    }
  }, [selectedCity, setSelectedCity]);

  return (
    <Grid container>
      <Grid item lg={3} mt={2} ml={2}>
        <Grid container direction={"column"}>
          <Grid item>
            <TextField
              id="outlined-name"
              label="City"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </Grid>
          <Grid item>
            <Button variant="lookup" onClick={lookupCities}>
              Lookup
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={5} mt={2}>
        {possibleCities.length > 0 &&
          possibleCities.map((possibleCity, index) => {
            return (
              <Button
                key={`city_${index}`}
                onClick={() => setSelectedCity(possibleCity)}
              >
                <Card>
                  <CardContent>
                    <Typography>
                      {possibleCity.country}-{possibleCity.state}
                    </Typography>
                  </CardContent>
                </Card>
              </Button>
            );
          })}
      </Grid>
      <Grid item lg={3} mt={2}>
        {weather && (
          <Card>
            <CardContent>
              <Typography>Humidity: {weather.current.humidity}</Typography>
              <Typography>Wind Speed: {weather.current.wind_speed}</Typography>
              <Typography>Temperature: {weather.current.temp}</Typography>
              <Typography>Pressure: {weather.current.pressure}</Typography>
            </CardContent>
          </Card>
        )}
      </Grid>
    </Grid>
  );
};

export default AppContainer;
