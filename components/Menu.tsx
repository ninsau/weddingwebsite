import { Container } from "./Container";

const MenuComponent = () => {
  return (
    <>
      <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://res.cloudinary.com/deyudesls/image/upload/v1658099737/csthemoment/photo-1541401154946-62f8d84bd284_ilqlrm.webp"
            alt="couple standing together in front of palm trees"
            className="w-full h-full object-center object-cover"
            loading="lazy"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 bg-opacity-50"
        />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Menu
          </h1>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <img src="https://res.cloudinary.com/deyudesls/image/upload/q_100,x_0,y_0/v1658103711/csthemoment/7d1d5ac5-c6d3-4999-a66d-822b9b1a399f_qhb4m7.webp"   alt="menu of food"
            className="w-full h-full object-center object-cover"
            loading="lazy"  />
        </div>
      </div>
    </>
  );
};
export default MenuComponent;
