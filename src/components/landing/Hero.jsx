function Hero(){
    return(
        <div className="hero">
            <h2>HomeNest Development</h2>
            <div className="hero-content">
                <h2>Your Dream Home, Within Reach</h2>
                <p className="catchphrase">Find the perfect property that fits your lifestyle.</p>
                <p id="searchResponse"></p>
                <div className="search-area">
                    <form id="search-string">
                        <input type="text" id="user-searchInput" placeholder="Search by area or name..."/>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
    </div>
    )
}
export default Hero;