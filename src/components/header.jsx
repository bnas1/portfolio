import avatar from '../images/Avatar.svg'
import resume from '../images/resume.pdf'

const Header = () => {
    return(
        <>
        
        <div className='header'>
            <img src={avatar} className='avatar'></img> 

                <div >
                <p className='header-p' >Hi, I'm Saifeddine Ben Arous.</p>
                <p className='p-effect'>Frond-end Developer.</p>
                <p>I develop beautifully simple things. Available for freelance opportunities.</p>
                <div className='header-text'>
                <button className='btn'>Get in touch</button>
                <button className='btn'><a href={resume} className='resume-txt'>My resume</a></button>
                </div>
                </div>
        </div> 
     
    

       </>
    )
}
export default Header;