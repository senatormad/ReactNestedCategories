import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const HeroSlide = ({ route }) => {
  const labelSrc = route.label.split(' ').join('+');
  const src = `https://via.placeholder.com/920x440?text=${labelSrc}`;
  return (
    <section
      className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
      style={{
        maxWidth: '1600px',
        height: '22rem',
        backgroundImage: `url(${src})`,
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
          <h1 className="text-black text-2xl my-4">{route.label}</h1>
          {route.parent && (
            <nav className="breadcrumbs">
              <Breadcrumbs route={route} />
            </nav>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSlide;
