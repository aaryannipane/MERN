import "./App.css";
import { useGeolocated } from "react-geolocated";

function App() {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });

  function lat2m(lat) {
    return 110.574 * lat * 1000;
  }
  function lon2m(lon) {
    return 111.32 * lon * 1000;
  }

  //bounding box
  let lon = [73.02495915149763, 73.0251015419144];
  let lat = [18.981869743665502, 18.980792560622486];

  // ulwe
  // 18.98213351098564, 73.0270842820715
  // 18.98114388492029, 73.02716096771707

  // 18.981869743665502, 73.02495915149763
  // 18.980792560622486, 73.0251015419144

  console.log(coords);

  if (!isGeolocationAvailable) {
    return <div>Your browser does not support Geolocation</div>;
  } else {
    if (!isGeolocationEnabled) {
      return <div>Geolocation is not enabled</div>;
    } else {
      if (coords) {
        let leeway = 10;
        if (
          lat2m(lat[0]) - (coords.accuracy + leeway) < lat2m(coords.latitude) &&
          lat2m(coords.latitude) < lat2m(lat[1]) + (coords.accuracy + leeway)
        ) {
          if (
            lon2m(lon[0] - (coords.accuracy + leeway)) <
              lon2m(coords.longitude) &&
            lon2m(coords.longitude) < lon2m(lon[1]) + (coords.accuracy + leeway)
          ) {
            /**
             *
             *
             *
             * the actual app goes here
             *
             *
             *
             */

            return (
              <table border="1">
                <tbody>
                  <tr>
                    <td>latitude</td>
                    <td>{coords.latitude}</td>
                  </tr>
                  <tr>
                    <td>longitude</td>
                    <td>{coords.longitude}</td>
                  </tr>
                  <tr>
                    <td>accuracy + leeway (meters)</td>
                    <td>{coords.accuracy + leeway}</td>
                  </tr>
                </tbody>
              </table>
            );
          } else {
            return error();
          }
        } else {
          return error();
        }
      }
    }
  }
  function error() {
    return (
      <div>
        <h1>
          either you are not in the area or your location is not accurate enough
        </h1>
        {lat2m(lat[0]) - coords.accuracy} {lat2m(coords.latitude)}{" "}
        {lat2m(coords.latitude)} {lat2m(lat[1]) + coords.accuracy} <br />
        {lon2m(lon[0]) - coords.accuracy} {lon2m(coords.longitude)}{" "}
        {lon2m(coords.longitude)}
        {lon2m(lon[1]) + coords.accuracy}
        <br />
        <br />
        {lat2m(lat[0]) - coords.accuracy < lat2m(coords.latitude)
          ? "true"
          : "false"}{" "}
        {lat2m(coords.latitude) < lat2m(lat[1]) + coords.accuracy
          ? "true"
          : "false"}{" "}
        <br />
        {lon2m(lon[0]) - coords.accuracy < lon2m(coords.longitude)
          ? "true"
          : "false"}{" "}
        {lon2m(coords.longitude) < lon2m(lon[1]) + coords.accuracy
          ? "true"
          : "false"}
      </div>
    );
  }
}

export default App;
