import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/lightning.gif";
import 'animate.css';

import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from "../assets/img/nav-icon3.svg";
import TrackVisibility from 'react-on-screen';
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Отправить');
  const [status, setStatus] = useState({});
  const [email, setEmail] = useState('');

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Отправляется...");
    emailjs.sendForm('service_wrfkpao', 'template_8cml8rq', e.target, 'zBC-CPFc7ES-nDEwI')
    email &&
    formDetails.email.indexOf("@") > -1 &&
  

    // let response = await fetch("http://localhost:5000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(formDetails),
    // });
    setButtonText("Отправлено");
    // let result = await response.json();
    setFormDetails(formInitialDetails);
    // if (result.code == 200) {
    //   setStatus({ succes: true, message: 'Message sent successfully'});
    // } else {
    //   setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    // }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>

            <TrackVisibility>
              {({ isVisible }) =>
              
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Связаться со мной: </h2>
                  <p className="phone">Номер телефона: <a href="tel: +79856409628">+79856409628</a></p>
                  <div className="social-icon-contact">
              <a href="mailto:puffyoluv@yandex.ru"><img src={navIcon2} alt="Email" title="Email"/></a>
              <a href="https://t.me/postpolnoch"><img src={navIcon3} alt="telegram" title="telegram"/></a>
            </div>

                <h3>Оставить контактные данные</h3>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="name_from" value={formDetails.firstName} placeholder="Имя" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="surname_from" value={formDetails.lastName} placeholder="Фамилия" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name='email_from' value={formDetails.email} placeholder="Email" onChange={(e) => { onFormUpdate('email', e.target.value); setEmail(e.target.value) }} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone_from" value={formDetails.phone} placeholder="Телефон" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                      
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Сообщение" name="message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
