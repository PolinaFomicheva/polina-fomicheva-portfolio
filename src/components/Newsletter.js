import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wrfkpao', 'template_lberoed', e.target, 'zBC-CPFc7ES-nDEwI')
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }





  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Подпишись на мою рассылку<br></br> и получай информацию о новых проектах</h3>
              {status === 'sending' && <Alert>Отправляется...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input name="email_to" value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                  <button type="submit">Отправить</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
