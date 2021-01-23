import PropTypes from "prop-types";
import Error from "./Error";

const WeatherResult = ({ weatherResult }) => {
    // If the code is 404, returns a Error component
    if (weatherResult.cod === "404") return <Error message="No Results" />;

    // If there is no result, the component doesn't return
    if (weatherResult.cod !== 200) return null;

    // Destructuring of the needed values
    const {
        name,
        main: { temp, temp_min, temp_max },
    } = weatherResult;

    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The {name} Weather is</h2>
                <p className="temperatura">
                    {(temp - kelvin).toFixed(2)} <span>&#8451;</span>
                </p>
                <p>
                    Maximum Temperature {(temp_max - kelvin).toFixed(2)}
                    <span>&#8451;</span>
                </p>
                <p>
                    Minimum Temperature {(temp_min - kelvin).toFixed(2)}
                    <span>&#8451;</span>
                </p>
            </div>
        </div>
    );
};

WeatherResult.propTypes = {
    weatherResult: PropTypes.object.isRequired,
};

export default WeatherResult;
