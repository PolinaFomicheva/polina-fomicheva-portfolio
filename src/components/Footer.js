import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://github.com/PolinaFomicheva"><img src={navIcon1} alt="GitHUB" title="GitHUB"/></a>
              <a href="mailto:puffyoluv@yandex.ru"><img src={navIcon2} alt="Email" title="Email"/></a>
              <a href="https://t.me/postpolnoch"><img src={navIcon3} alt="telegram" title="telegram"/></a>
            </div>
            <p>Полина Фомичева 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
