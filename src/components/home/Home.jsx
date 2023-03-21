import React  from "react";
import profileImg from "../../assets/profile-img.png";
import { FaBeer } from "react-icons/fa";
// import { FaTwitter,FaDribble,FaBehance } from 'react-icons/fa'
import "./home.css";

const Home = () => {
  // const [ loading , setLoading] = useState(false);

  // useEffect(()=>{
  //   setLoading(true)
  //   setTimeout(()=>{
  //     setLoading(false);

  //   },4000)

  // },[])
  return (
    <section>
      <div className="home" id ='home'>
      <div className="home__wrapper">
        <div className="home__container contianer ">
          <p className="home__subtitle text-cs">
            Hello ,<span>My name Is</span>
          </p>
          <h1 className="home__title text -cs">
            <span>NirmalRaj</span>
            Joseph
          </h1>
          <p className="home__job">
            <span className="text-cs">I Am</span>
            <b>FrontEnd Developer</b>
          </p>

          {/* profile pic  */}
          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />

            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                6<b>+</b>
              </span>
              <span className="text-sm text-cs">
                Year of <span>experience</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">
                100
              </span>
              <span className="text-sm text-cs">
                Completed <span>Project</span>
                </span>
            </p>
          </div>

          <p className="home__text">
            From Pondicherry, india. I have rich experience in frontend design
            and development , also im good at nodejs backend.
          </p>

          <div className="home__socials">
            <a href="" className="home__social-link">
              <FaBeer />
            </a>
            <a href="" className="home__social-link">
              <FaBeer />
            </a>
            <a href="" className="home__social-link">
              <FaBeer />
            </a>
          </div>
          <div className="home__btns">
            <a href="" className="btn text-cs">
              <button>Download CV</button>
            </a>

            <a href="" className="hero__link text-cs">
              my Skills
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Home;
