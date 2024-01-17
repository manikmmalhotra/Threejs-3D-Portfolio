import React from "react";

const ServiceContent = [
    {
      icon: "icon-mobile",
      title: "Web Developer",
      descriptions: `Expert Creative Web Developer crafting dynamic and responsive digital experiences.`,
    },
    {
      icon: "icon-puzzle",
      title: "Three.js Developer",
      descriptions: `Three.js Developer specializing in immersive and interactive 3D web applications.`,
    },
    {
      icon: "icon-gift",
      title: "Blender",
      descriptions: `Proficient Blender Artist creating stunning visual assets for diverse digital projects.`,
    },
  ];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
