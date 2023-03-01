import React from "react";
import data from "./data.js";
function App() {
  console.log(data);
  return (
    <main className="font-poppins max-w-[550px] mx-auto ">
      <nav className="shadow-7xl h-[70px] flex items-center px-[30px] w-full ">
        <img src="/assets/logo.svg" alt="Ironhack Logo" />
      </nav>
      <div className="py-[30px] h-fit">
        <img
          className="object-contain w-full h-3/4"
          src="/assets/Hero.png"
          alt="Ironhack Hero"
        />
      </div>
      <div className="">
        <h1 className="font-semibold  text-[36px] leading-[110%] text-left">
          Online Experiences
        </h1>
        <p className="text-[16px] leading-[110%] font-light">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
        <div className="flex w-full gap-[18px] items-start mt-4 mb-16 rounded-[9px]">
          {data.map((item, index) => (
            <div className="w-[176px] relative" key={index}>
              <img
                className="object-cover w-full h-[235px]"
                src={item.coverImg}
                alt={item.title}
              />
              <div className="flex items-center gap-2 absolute top-0 left-2 ">
                {item.openSpots <= 0 && (
                  <h1 className="bg-white text-black px-2 py-1">SOLD OUT</h1>
                )}
                {item.location === "Online" && !item.openSpots <= 0 && (
                  <h1 className="bg-white text-black absolute top-2 left-2 px-2 py-1">
                    ONLINE
                  </h1>
                )}
              </div>
              <div className="flex items-center">
                <img src="/assets/star.svg" alt="Star" />

                <span>{item.stats.rating}</span>
                <span>({item.stats.reviewCount})</span>
                <span>.</span>
                <span>USA</span>
              </div>
              <p>{item.stats.description}</p>
              <div className="flex items-center">
                <span className="font-semibold">From ${item.price}</span>
                <span>/</span>
                <span>person</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
