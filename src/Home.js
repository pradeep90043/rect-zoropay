import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  const img1 = "online_payments.jpg";
  const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO0ug4vzCoCNgYj02dAC0_BuGQ_ZuoiLwag&usqp=CAU";
  return (
    <div>
      <div className="home">
      <div className="image-card">
          <img src={img2} alt="img2" className="img2" />

          <img src={img1} alt="img1" className="  img1" />
        </div>
        <div className="home-card1">
          <h1 className="text-capitalize">Online payment made easy for you </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in sint pariatur nulla suscipit iusto maxime cupiditate, nesciunt
            atque ab accusamus illum provident voluptatum.
          </p>
          <p>Get early acces for you</p>
          <div className="get-email bg-white rounded-pill ">
            <input type="email" placeholder="Enter Your Email" className=" border-0 bg-white py-1 px-1 rounded-pill " />
            <button className=" border-0 rounded-pill px-2 bg-primary my-1">Get It Now</button>
          </div>
        </div>

       
      </div>
      <About stylling={true} />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
