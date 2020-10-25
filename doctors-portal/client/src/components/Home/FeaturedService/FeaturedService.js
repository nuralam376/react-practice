import React from "react";
import featured from "../../../images/featured.png";

const FeaturedService = () => {
  return (
    <section className="mt-5 md-5 pb-0" style={{ marginBottom: `150px` }}>
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-5">
            <img src={featured} alt="featured image" className="img-fluid" />
          </div>
          <div className="col-md-7 align-self-center">
            <h3>
              Exceptional Dental <br /> Care, On Your terms
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              quod veritatis id error magnam provident voluptatem illum laborum
              repellendus a impedit reiciendis inventore necessitatibus maiores
              animi non expedita quibusdam porro libero dolorem, incidunt
              architecto. Suscipit ipsum, eum nobis, accusantium omnis, vero
              cumque reprehenderit esse aspernatur consequuntur sequi dolorum
              magnam alias. Excepturi culpa facilis similique adipisci dolorem
              ab quo tenetur doloremque voluptatem id consectetur a, sequi ullam
              deleniti velit laudantium natus et debitis ipsum expedita. Et vero
              ratione quibusdam cum necessitatibus ad maxime totam, voluptatibus
              assumenda aspernatur architecto vitae omnis, deserunt porro
              ducimus commodi molestiae soluta dolor dignissimos, mollitia minus
              doloremque!
            </p>
            <button className="btn btn-info">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
