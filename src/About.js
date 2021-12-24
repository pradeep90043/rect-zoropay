import React from "react";
import { FaDownload, FaChalkboardTeacher } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import "./App.css";

const About = (props) => {
  console.log(props.style);
  const img3 =
    "https://cdn.datafloq.com/cache/blog_pictures/878x531/online_payment_solutions_south_africa.jpg";
  const img5 =
    "https://smallbiztrends.com/ezoimgfmt/media.smallbiztrends.com/2018/07/shutterstock_722489089-850x476.jpg?ezimgfmt=rs:357x200/rscb12/ng:webp/ngcb12";
  const WorkApi = [
    {
      icon: <FaDownload />,
      title: "Download App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magni nesciunt consequatur, aperiam voluptatem eum laboriosam obcaecati ut unde at. Dolor, explicabo delectus neque eos qui aliquid eaque illo quos! ",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Complete the instruction",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magni nesciunt consequatur, aperiam voluptatem eum laboriosam obcaecati ut unde at. Dolor, explicabo delectus neque eos qui aliquid eaque illo quos! ",
    },
    {
      icon: <GiReceiveMoney />,
      title: "Recieve your funds",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magni nesciunt consequatur, aperiam voluptatem eum laboriosam obcaecati ut unde at. Dolor, explicabo delectus neque eos qui aliquid eaque illo quos! ",
    },
  ];
  return (
    <>
      <div className="about">
        <div className="about-items">
          {/* how App works */}
          <div
            className={
              props.stylling ? "working-body home-working-body" : "working-body"
            }
          >
            <h1 className=" text-center">How does it work</h1>
            <div className="working-cards text-center">
              {WorkApi.map((curEl, index) => {
                return (
                  <div key={index}>
                    <p className="icons icon">{curEl.icon}</p>
                    <p className="fs-4">{curEl.title} </p>
                    <p>{curEl.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* How to use app */}
          <div className="using-body">
            <div className="using-img">
              <img className="img3" src={img3} alt="img3" />
            </div>
            <div className="using-description">
              <p className="text-uppercase">
                --available @google and ios app store only
              </p>
              <h2>How to use the App?</h2>
              <ol>
                <li>
                  <p className="fs-5">Add your bank account</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Totam suscipit vero quo voluptates molestiae animi quidem,
                    quaerat aliquam dolores libero, iste sit fugiat. Officiis,
                    incidunt.
                  </p>
                </li>
                <li>
                  <p className="fs-5">Send payment request</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Totam suscipit vero quo voluptates molestiae animi quidem,
                    quaerat aliquam dolores libero, iste sit fugiat. Officiis,
                    incidunt.
                  </p>
                </li>
                <li>
                  <p className="fs-5">Sign In</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Totam suscipit vero quo voluptates molestiae animi quidem,
                    quaerat aliquam dolores libero, iste sit fugiat. Officiis,
                    incidunt.
                  </p>
                </li>
              </ol>
              <button className="text-primary bg-white border-primary rounded-pill p-1 px-2">
                Learn More
              </button>
            </div>
          </div>
          {/* Support available */}
          <div className="support-body using-body">
            <div className=" support-img using-description">
              <img className="img3" src={img5} alt="img5" />
            </div>
            <div className="support-description desc-img-support using-img">
              <p className="text-uppercase">--support in any languages</p>
              <h2>World class support is available 24/7</h2>
              <ol>
                <li>
                  <p className="fs-5">Add your bank account</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Totam suscipit vero quo voluptates molestiae animi quidem,
                    quaerat aliquam dolores libero, iste sit fugiat. Officiis,
                    incidunt.
                  </p>
                </li>
                <li>
                  <p className="fs-5">Send payment request</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Totam suscipit vero quo voluptates molestiae animi quidem,
                    quaerat aliquam dolores libero, iste sit fugiat. , incidunt.
                  </p>
                </li>
                <li>
                  <p className="fs-5">Sign In</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Totam suscipit vero quo voluptates molestiae animi quidem,
                    quaerat aliquam dolores libero, iste sit fugiat. Officiis,
                    incidunt.
                  </p>
                </li>
              </ol>
              <button className="text-primary bg-white border-primary rounded-pill p-1 px-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
