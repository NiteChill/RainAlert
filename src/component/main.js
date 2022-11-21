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
            <div class="chart-container">
                <canvas id="chart"></canvas>
            </div>
        </div>
    </div>
    `
    )
}

export default Main ;