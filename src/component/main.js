const Main = () => {
    return(
    `
    <div class="body">
        <div class="map-screen">
            <iframe  class="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808902.457307156!2d0.32242311820418196!3d46.5661046531654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sfr!2sbe!4v1669481381508!5m2!1sfr!2sbe"style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="actual-hour"></div>
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