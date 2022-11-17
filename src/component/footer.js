const fa = require("fontawesome");
const Footer = () => {
    return(
    `
        <div class="footer">
            <div class="icons">
                <div class="map">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="weather">
                <i class="fa-solid fa-cloud"></i>
                </div>
            </div>
            <div class="indicator-line"></div>
        </div>
    </div>
    `
    )
}

export default Footer ;