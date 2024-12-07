import React from "react";

export default function Content() {
  return (
    <>
      <div className="content">
        <div className="info">
          <h1>Derick Sheldrick</h1>
          <h3>Fullstack Developer</h3>
          <h5>
            <a
              href="https://dericksportfoliowebsite.netlify.app"
              target="_blank"
            >
              My Portfolio
            </a>
          </h5>
          <a href="mailto:sheldrickderick9@gmail.com">
            <button type="button">Email</button>
          </a>
          <a
            href="https://www.linkedin.com/in/sheldrick-derick-90320a175/"
            target="_blank"
          >
            <button type="button">LinkedIn</button>
          </a>
        </div>
        <div className="main_content">
          <h1 class="body_title">About</h1>
          <p>
            I’m a passionate tech enthusiast driven by curiosity and a vision to
            create innovative solutions that make a real-world impact. With a
            strong foundation in Fullstack development, I harness technology as
            a tool to solve challenges, drive change, and shape the future.
            Let’s collaborate to turn ideas into meaningful outcomes.
          </p>
          <h1 class="body_title">Interest</h1>
          <p>
            Exploring innovative technologies, discovering new cultures,
            embracing the beauty of the earth, and indulging in hiking and
            outdoor adventures fuel my passion. I’m a foodie at heart, always
            eager to try new cuisines, and I find fulfillment in community
            projects and mentorship, creating connections and inspiring growth.
          </p>
        </div>
      </div>
    </>
  );
}
