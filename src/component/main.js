const Main = () => {
    return(
    `
    <div class="body">
        <div class="map-screen">
        </div>
        <div class="home-screen">
            <input
            type="text"
            class="research"
            placeholder="Rechercher"/>
            <div class="results">
                <div class="name"></div>
                <div class="button">
                    <div class="cancel">Annuler</div>
                    <div class="search">Rechercher</div>
                </div>
            </div>
            <div class="degree">
                <i class="degree-icon fa-7x"></i>
                <p class="degree-text">error : no acces to the api</p>
            </div>
            <p class="degree-text-info">text a générer avec arrayHourly</p>
            <div class="graph">
                <div class="graph-header">
                    <p class="graph-header-text">Précipitations</p>
                    <div class="chance">
                        <p class="chance-text">Chance de pluie</p>
                        <div class="chance-percentage">%</div>
                    </div>
                </div>
                <div class="graph-body">
                    <div class="rain-lvl">
                        <div class="rain-lvl-obj">
                            <img src="./assets/images/big-rain.png"
                            alt="logo of rain">
                            <p>Fortes</p>
                        </div>
                        <div class="rain-lvl-obj">
                            <img src="./assets/images/middle-rain.png"
                            alt="logo of rain">
                            <p>Moyennes</p>
                        </div>
                        <div class="rain-lvl-obj">
                            <img src="./assets/images/small-rain.png"
                            alt="logo of rain">
                            <p>Faibles</p>
                        </div>
                    </div>
                    <div class="chart-container">
                        <canvas id="chart"></canvas>
                    </div>
                </div>
            </div>
            <div class="hours">
                <div class="hours-mask"></div>
                <p class="hours-txt txt-1" id="txt1">12:00</p>
                <p class="hours-txt txt-2" id="txt2">12:00</p>
                <p class="hours-txt txt-3" id="txt3">12:00</p>
                <p class="hours-txt txt-4" id="txt4">12:00</p>
                <p class="hours-txt txt-5" id="txt5">12:00</p>
            </div>
        </div>
    </div>
    `
    )
}

export default Main ;