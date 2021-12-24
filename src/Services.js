import React from "react";
import { FaDownload } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineDomainVerification } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import { SiAmazonpay } from "react-icons/si";
import { RiGlobalFill } from "react-icons/ri";

const Services = () => {
  const ServicesApi = [
    {
      icon: <FaDownload />,
      title: "Register for free",
      describtion:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor dicta exercitationem asperiores ipsa vitae ad?Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <MdOutlineDomainVerification />,
      title: "Verify your identity",
      describtion:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor dicta exercitationem asperiores ipsa vitae ad?Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <BiDetail />,
      title: "Add recipient's details",
      describtion:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor dicta exercitationem asperiores ipsa vitae ad?Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <SiAmazonpay />,
      title: "Pay for your transfer",
      describtion:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor dicta exercitationem asperiores ipsa vitae ad?Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <GiReceiveMoney />,
      title: "Change an amound to send",
      describtion:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor dicta exercitationem asperiores ipsa vitae ad?Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <RiGlobalFill />,
      title: "That's it",
      describtion:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor dicta exercitationem asperiores ipsa vitae ad?Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <>
      <div className="services">
        <div className="services-items">
          <h3 className="text-center">How to send money</h3>
          <div className="services-cards">
            {ServicesApi.map((curEl, index) => {
              return (
                <div className="service-card" key={index}>
                  <p>{curEl.icon}</p>
                  <h5>{curEl.title}</h5>
                  <p>{curEl.describtion}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
