import React, { useEffect } from "react";

const Weathercard = ({
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
}) => {
    const [weatherState, setWeatheState] = React.useState("");

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatheState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatheState("wi-fog");
                    break;
                case "Clear":
                    setWeatheState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatheState("wi-dust");
                    break;
                case "Rain":
                    setWeatheState("wi-rain");
                    break;
                case "Thunderstorm":
                    setWeatheState("wi-thunderstorm");
                    break;
                case "Drizzle":
                    setWeatheState("wi-rain");
                    break;
                default:
                    setWeatheState("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood]);

    // converting the seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">
                            {name}, {country}
                        </div>
                    </div>
                </div>

                <div className="date"> {new Date().toLocaleString()} </div>

                {/* our 4column section  */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                {/* <i className={"wi wi-sunset"}></i> */}
                                <img src={process.env.PUBLIC_URL + '/images/sunset.png'} alt="My Image" style={{ width: "55%" }} />
                            </p>
                            <p className="extra-info-leftside">
                                {timeStr} PM <br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                {/* <i className={"wi wi-humidity"}></i> */}
                                <img src={process.env.PUBLIC_URL + '/images/humidity.png'} alt="My Image" style={{ width: "40%" }} />

                            </p>
                            <p className="extra-info-leftside">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                {/* <i className={"wi wi-rain"}></i> */}
                                <img src={process.env.PUBLIC_URL + '/images/air.png'} alt="My Image" style={{ width: "55%" }} />
                            </p>
                            <p className="extra-info-leftside">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                {/* <i className={"wi wi-strong-wind"}></i> */}
                                <img src={process.env.PUBLIC_URL + '/images/wind.png'} alt="My Image" style={{ width: "40%" }} />
                            </p>
                            <p className="extra-info-leftside">
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Weathercard;