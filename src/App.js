import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import WeatherResult from "./components/WeatherResult";

function App() {
    // State for formData
    const [formData, setFormData] = useState({
        city: "",
        country: "",
    });

    // State for weather result
    const [weatherResult, setWeatherResult] = useState({});

    // Consult api
    const getWeather = async _ => {
        const appId = "API KEY HERE";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${formData.city},${formData.country}&appid=${appId}`;

        const res = await fetch(url);
        const data = await res.json();
        setWeatherResult(data);
    };

    return (
        <>
            <Header title="React Weather App" />
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <div className="col m6 s12">
                            <Form
                                setFormData={setFormData}
                                formData={formData}
                                getWeather={getWeather}
                            />
                        </div>
                        <div className="col m6 s12">
                            <WeatherResult weatherResult={weatherResult} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
