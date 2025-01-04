// import Footer from "../../components/footer/footer";
// import Navbar from "../../components/navbar/";
import "./style.scss";
import abincii from "../../assets/img/abincii.jpeg";
import esca from "../../assets/img/esca.jpeg";
import peanut from "../../assets/img/peanut.jpeg";
import pretsl from "../../assets/img/pretsl.jpeg";
import stacked from "../../assets/img/stacked.jpeg";

import { FaArrowDown, FaFilter, FaLink } from "react-icons/fa";

export default function Portfolio() {
  const portfolioArray = [
    {
      name: "Pretsl",
      img: pretsl,
      date: 2020,
      category: "Web Design",
      url: "https://www.pretsl.com/",
    },

    {
      name: "Peanut Tab",
      img: peanut,
      date: 2022,
      category: "Web Design",
      url: "https://www.pretsl.com/",
    },

    {
      name: "Abincii",
      img: abincii,
      date: 2024,
      category: "Web Design",
      url: "https://abinci.co/",
    },

    {
      name: "Esca Finance",
      img: esca,
      date: 2023,
      category: "Web Design",
      url: "https://www.esca.finance/",
    },

    {
      name: "Stacked",
      img: stacked,
      date: 2020,
      category: "Web Design",
      url: "https://stacked-ecommerce.netlify.app/",
    },
  ];
  return (
    <div style={{ width: "100%" }}>
      {/* <Navbar /> */}
      <section className="header">
        <h2>
          Building <br />
          Digital Products
        </h2>
        <div>
          <p>
            Creating digital experiences that <br />
            leave a lasting impression
          </p>
        </div>
      </section>

      <section className="portfolio-items">
        <div className="portfolio-controls">
          <p>
            Scroll to explore <FaArrowDown style={{ marginLeft: "8px" }} />
          </p>
          <p>
            Filter <FaFilter style={{ marginLeft: "8px" }} />{" "}
          </p>
        </div>
          <div id="portfolio-items"></div>
        <div className="portfolio" >
          {portfolioArray.map((item, index) => {
            return (
              <div key={index} className={`portfolio-card`}>
                <div className="portfolio-display-card">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      alignItems: "center",
                      marginTop:"10px"
                    }}
                  >
                    <div className="overlay">
                      <p className="date-icon">{item.date}</p>
                      <h2>{item.name}</h2>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <FaLink
                          style={{ marginRight: "8px", color: "white" }}
                        />
                      </a>
                    </div>
                  </a>
                  <img src={item.img} className="portfilioImg" />
                </div>
                <div className="portfolio-info">
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                </div>
              </div>
            );
          })}

        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
