import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const skillsList = ["Вёрстка под тач и мобильные устройства", 
  "Работа с Flexbox и JavaScript, React JS",
  "Способность правильно использовать переменные, числа и строки",
  "Создание прототипа и конструктора объекта",
  "Использование выражений в JavaScript",
  "Применение символов, итераторов и генераторов",
  "Импорт и экспорт модулей",
  "Создание интерактивных веб-страниц",
  "Работа с файлами и медиаресурсами",
  "Применение принципов клиент-серверного взаимодействия",
  "Создание одностраничных веб-приложений (SPA)",
  "JavaScript",
  "HTML5, CSS3",
  "Bootstrap",
  "Git и GitHub",
  "VirtualDOM",
  "Flexbox",
  "React JS",
  ];
const listSkills = skillsList.map((skill) =>
  <li className="list-skills">{skill}</li>
);

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Ключевые компетенции</h2>
                        <p>Основные навыки полученные на курсах<br></br> JavaScript & React JS</p>
                        <ul>{listSkills}</ul>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Внимательность</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Ответственность</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Усидчивость</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
