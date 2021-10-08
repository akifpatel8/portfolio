import React from "react";
import Card from "./Card";
import Styles from "./Project.module.css";

const projectObj = [
  {
    img: "https://www.haptik.ai/hubfs/Case%20Study%20-%20HealthKart/HealthKart%20Logo.png",
    title: "HealthKart",
    description:
      "An Ecommerce web application to buy health and fitness products.",
    github: "url__",
    blog: "https://medium.com/@aakifpatel08/clone-of-a-e-commerce-website-dcd2aab64627",
  },
  {
    img: "https://www.pngitem.com/pimgs/m/140-1404846_oyo-rooms-logo-png-image-free-download-searchpng.png",
    title: "Oyo Rooms",
    description: "Online web application for booking Hotels and Homes .",
    github: "url__",
    blog: "https://medium.com/@aakifpatel08/oyorooms-clone-using-reactjs-9709c2571aa2",
  },
];

function Blogs() {
  return (
    <div className={`${Styles.Project} section`}>
      <div>
        <h1 className="heading">Blogs</h1>
      </div>
      <div className={Styles.Project__showcase}>
        {projectObj.map((proj) => (
          <a href={proj.blog} target="_blank">
            <Card key={proj.title} {...proj} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
