import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/common/Sectiontitle";
import Button from "../../components/common/Button";
import Slideshow from "./Slideshow";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Blog from "./Blog";

function Home() {


  return (
    <div className="bg-[#ede7dc] min-h-screen px-4 pt-8 w-full gap-5">
      <div className="bg-transparent grid gap-30 lg:gap-2 lg:grid lg:grid-cols-[60%_40%] ">
        <div>
          <Slideshow />
        </div>


        <div className="flex flex-col lg:mr-9 items-center justify-center gap-10 lg:gap-23 ">
          <div className="bg-amber-300 h-[180px] w-full rounded-2xl overflow-hidden">
            <img
              src="1.jpg"
              alt="MENCOVER"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-amber-600 h-[180px] w-full rounded-2xl overflow-hidden">
            <img
              src="2.jpg"
              alt="WOMENcover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>


<div className="flex flex-row mt-6 bg-amber-900 justify-center gap-5 font-bold lg:mt-10 lg:gap-15 lg:text-4xl"> 
  <div>EXPLORE</div> 
   <div>APPUSON</div>
   <div>CLOTHING</div>
</div>




                 <Hero/>
                 <Hero2/>
 <Blog/>

      <div className="mt-16 space-y-12 max-w-3xl mx-auto">
        <section className="text-center">
          <SectionTitle title="Our T-Shirt Collection" />
          <Link to="/tshirts">
            <Button>Shop Now</Button>
          </Link>
        </section>

        <section className="text-center">
          <SectionTitle title="Hoodies for Every Season" />
          <Link to="/hoodies">
            <Button>Shop Now</Button>
          </Link>
        </section>

        <section className="text-center">
          <SectionTitle title="Perfect Fit Pants" />
          <Link to="/pants">
            <Button>Shop Now</Button>
          </Link>
        </section>
      </div>
    </div >
  );
}

export default Home;
