import "./about.css";
// import Award from "../../img/award.png";
import salas from "../../img/salas.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={salas}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>

        <p className="a-desc">
          2 year Fullstack developer student excited to get out in the real word of developing sequre and good looking solutions.
          I have skills in React, Javascript, Express.js, Node, MongoDb, Docker, SQL, TypeScript, TRPC, Prisma, CSS and HTML. 
          I have some expereience in other languages but these are the latest technologies I have been working with.
          
        </p>
        <div className="a-award">
          {/* <img src={Award} alt="" className="a-award-img" /> */}
          <div className="a-award-texts">
            {/* <h4 className="a-award-title">International Design Awards 2021</h4> */}
            <p className="a-award-desc">
            I enjoy solving problems and learning new technologies to enhance my development skills. 
            I am highly motivated, diligent, and rarely give up when faced with challenges. I have no issues about seeking assistance and am proficient in communication. 
            I have a knack for spreading positive energy and love to share laughter. While I thrive in team environments, I am equally adept at working independently and taking on significant responsibilities.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;