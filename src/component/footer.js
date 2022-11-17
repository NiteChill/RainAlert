const fa = require("fontawesome");
const Footer = () => {
    return(
    `
        <div class="footer">
            <div class="icons">
                <div class="map">
                    <i class="fa-solid fa-location-dot fa-3x"></i>
                    <p class="map-text">Carte</p>
                </div>
                <div class="weather">
                    <i class="fa-solid fa-cloud fa-3x"></i>
                    <p class="weather-text">Prévision</p>
                </div>
            </div>
            <div class="indicator-line"></div>
        </div>
    </div>
    `
    )
}

export default Footer ;