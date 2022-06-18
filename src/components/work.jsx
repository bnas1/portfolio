import { Card , Button} from "react-bootstrap";
import workImg from '../images/work.png'
const Work = () => {
    return(
        <>
        <div className="work">
        <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={workImg} />
      <Card.Body>
        <Card.Title>Adios e-commerce</Card.Title>
        <Card.Text>
        Design and integration of a responsive website for my mini-project at university 
        </Card.Text>
        <Button variant="dark"><a href='https://adioss.netlify.app/' className="work-link">Visit</a></Button>
      </Card.Body>
    </Card>

        </div>
        </>
    )
}
export default Work;