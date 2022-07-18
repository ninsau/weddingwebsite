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
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block">Tasty dishes for your pleasure.</span>
          </h2>
          <div className="m-12 py-12  justify-center">
            <div className="inline-flex rounded-md shadow">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
                JERK CHICKEN PIECES
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray bg-gray-100 hover:bg-gray-200">
                FISH FILLET IN WHITE CREAMY SAUCE
              </a>
            </div>

            <div className="inline-flex rounded-md shadow">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
                CHILI LEMON CHICKEN WINGS
              </a>
            </div>

            <div className="ml-3 inline-flex">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray bg-gray-100 hover:bg-gray-200">
                JERK CHICKEN
              </a>
            </div>

            <div className="inline-flex rounded-md shadow">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
                FULL GRILLED GROUPER FISH
              </a>
            </div>

            <div className="ml-3 inline-flex">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray bg-gray-100 hover:bg-gray-200">
                FULL GRILLED GROUPER FISH
              </a>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};
export default MenuComponent;
