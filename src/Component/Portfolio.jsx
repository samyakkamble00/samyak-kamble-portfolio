
import React from "react";


const Portfolio = () => {
  const portfolios = [
    
    {
      id: 1,
      src:"https://digitalclock-hcj.netlify.app/",
      code:"https://github.com/samyakkamble00/Digital-clock",
    },
    {
      id: 2,
      src:"https://netflixclonebysam.netlify.app/",
      code:"https://github.com/samyakkamble00/NetflixClone",
    },
      
      
    {
      id: 3,
      src:"https://ecomersprojectclone.netlify.app/",
      code:"https://github.com/samyakkamble00/ecomersprojectclone/tree/main/src/Ecommerce",
    },
    {
      id: 4,
      src:"https://colorbackgroundchange.netlify.app/",
      code:"https://github.com/samyakkamble00/ColorGenretar",
    },
    {
      id: 5,
      src:"https://stop-watch-pro.netlify.app/",
      code:"https://github.com/samyakkamble00/StopWatch",
    },
    {
      id: 6,
      src:"https://fabulous-bienenstitch-49cb8c.netlify.app/",
      code:"https://github.com/samyakkamble00/Calculater",
    },
    {
      id: 7,
      src:"https://todo-list-p1.netlify.app/",
      code:"https://github.com/samyakkamble00/todo_list",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b sm:pt-8 from-black to-gray-800 w-full text-white md:h-screen sm:pb-10"
    >
      <div className="max-w-screen-lg p-4 pb-7 pt-11 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 sm:pt-40 pt-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,code}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <iframe src={src} className="w-full overflow-hidden h-52 rounded-md object-center duration-200 hover:scale-105" title="Example Website"></iframe>
            

              <div className="flex items-center justify-center">
                <a href={src} target='_blank'>
                <button className="w-1/2 px-4 py-2 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                </a>
               <a href={code} target='_blank'>
               <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
               Code
             </button>
             </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
