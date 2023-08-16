import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Дипломная pабота",
      description: "Разработка сайта бронирования билетов онлайн",
      imgUrl: projImg1,
      links: 'https://polinafomicheva.github.io/cinema-diplom/#'
    },
    {
      title: "Дипломная pабота",
      description: "Верстка макета сайта",
      imgUrl: projImg2,
      links: 'https://polinafomicheva.github.io/noemi-diplom/'
    },
    {
      title: "Дипломная pабота",
      description: "Сайт-биржа для крипто-стартапа",
      imgUrl: projImg3,
      links: 'https://github.com/PolinaFomicheva/bhj-diploma'
    },
    {
      title: "Мини-игра",
      description: "разработка мини-игры",
      imgUrl: projImg4,
      links: 'https://polinafomicheva.github.io/aim-game/'
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Проекты</h2>
                <p>Основной стек технологий: JavaScript, CSS, BootStrap, HTML, fetch, React. Кроссбраузерная вёрстка, соответствие вёрстки макету, промежуточные состояния между макетами, состояния при повороте экрана.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>В ожидании новых проектов...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>В ожидании новых проектов...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
