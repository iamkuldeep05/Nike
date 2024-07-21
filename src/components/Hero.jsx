const HeroSection = () => {
    return <main className="hero container">

        <div className="hero-content">
            <h1>STEP INTO FUTURE OF FOOTWEAR</h1>
            <p className="para">Upgrade your shoe game this season with our latest collection – where style meets substance, step after step</p>
          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>
          <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazon" />
                <img src="/images/flipkart.png" alt="flipkart" />
            </div>
          </div>
        </div>
        <div className="hero-image">
            <img className="herox-image"  src="/images/heross-image.png" alt="shoes" />
        </div>
    </main>
}

export default HeroSection;