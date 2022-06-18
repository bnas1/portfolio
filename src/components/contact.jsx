import { Button, Form } from "react-bootstrap"
const Contact = () => {
    return(
        <>
        <div className="contact">
        <p className="contact-p">Contact.</p>
        <p className="contact-p">Get in touch or shoot me an email directly on <b>m.s.bnas33@gmail.com</b></p>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control as="textarea" placeholder="Message" size="lg" rows={3} />
      </Form.Group>


    <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>

        </div>
        </>
    )
}
export default Contact