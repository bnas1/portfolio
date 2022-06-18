import me from '../images/me.png'
import react from '../images/react.svg'
import html from '../images/html.svg'
import css from '../images/css.svg'
import javascript from '../images/javascript.svg'
import bootsrap from '../images/bootsrap.svg'
const About = () => {
    return(
        <>
        <div className="about">
        <img src={me} className="me" />
        <p className='about-text'>Hello world ! i'm Saifeddine Ben Arous , i'm a front-end developer based in tunisia.
        </p>
        <p className='about-text'>I craft UI using modern front-end web technologies.</p>
        <button className='btn-about'>Let's work together!</button>
        <h1>MY STACK</h1>
        <div className='stacklogo'>
        <img src={html} className='stack-logo'/>
        <img src={css} className='stack-logo'/>
        <img src={javascript} className='stack-logo'/>
        <img src={react} className='stack-logo'/>
        <img src={bootsrap} className='stack-logo'/>
        </div>
        </div>
        </>
    )
}
export default About;