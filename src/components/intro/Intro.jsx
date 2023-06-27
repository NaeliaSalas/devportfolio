import "./intro.css";
import me from "../../img/me.png"
import naelia from "../../img/naelia.png"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h2 className="i-name">Naelia Salas</h2>
          <div className="i-title">
            <p className="i-title-wrapper">
              <div className="i-title-item">Web developer</div>
              <div className="i-title-item">UI/UX designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Content creator</div>

            </p>
          </div>
          <div className="i-description">Welcome to my page!
I am excited that you found your way over here. I have gathered a few of my projects down below, please have a look!
</div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={naelia} alt="" className="i-img" />
         </div>
    </div>
  );
};

export default Intro;
