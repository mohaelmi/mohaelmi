import React from "react";
// import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section id="About">
      <div className="about-img">
        <img
          src={"https://avatars.githubusercontent.com/u/31275085?v=4"}
          alt="my_photo"
          width="200px"
          height="200px"
        />
      </div>

      <div className="introduction">
        <p>
          Hello! I am an enthusiastic and passionate full-stack web developer equipped
          with a solid foundation in both front-end and back-end technologies, 

          I love to contribute innovative solutions to web development projects
          and actively seeking a challenging position in the field of Full-Stack
          Web Development. 
          
          I built several projects that showcase my ability to
          translate concepts into tangible, functional applications. These 
          <a href="#project-item"> projects</a> highlight my proficiency in both front-end and back-end
          development and my commitment to delivering high-quality solutions. 

          I also enjoy solving code-related problems, learning new skills, and
          improving my technical and soft skills. I am actively seeking a
          Full-Stack Web Development position where I can leverage my skills and
          contribute to the success of dynamic and innovative projects. 
        </p>
      </div>
    </section>
  );
};

export default About;
