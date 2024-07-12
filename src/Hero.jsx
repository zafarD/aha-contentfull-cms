
import heroImage from './assets/hero.svg'
const Hero = () => {
    return <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p className="hero-info">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="img-container">
                <img
                    className='image'
                    src={heroImage}
                    alt='woman and the browser'>
                </img>
            </div>
        </div>
    </section>
}

export default Hero;