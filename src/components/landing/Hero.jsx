function Hero(){
    const heroStyle={
    backgroundImage: `url("/secondOne.PNG")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
    }
    return(
        <div className="hero" style={heroStyle}>
            <h2 className="bgHeading">HomeNest Development</h2>
            <div className="hero-content">
                <h2>Your Dream Home, Within Reach</h2>
                <p className="catchphrase">Find the perfect property that fits your lifestyle.</p>
                <p id="searchResponse"></p>
                <div className="search-area">
                    <form id="search-string">
                        <input type="text" id="user-searchInput" placeholder="Search by area or name..."/>
                        <button type="submit">Search</button>
                    </form>
                    <a href="#developments" className="startBtn">Check Properties</a>
                </div>
            </div>
    </div>
    )
}
export default Hero;