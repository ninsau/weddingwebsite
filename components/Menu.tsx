import { Container } from "./Container";

const MenuComponent = () => {
  return (
    <>
      <Container>
        <div className="pt-20 pb-16 text-center lg:pt-32">
          <h3 className="font-display text-3xl tracking-tight text-slate-400 sm:text-4xl">
            Menu
          </h3>
        </div>
        <div className="relative py-16 bg-white">
          <div className="lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              className="relative h-full text-lg max-w-prose mx-auto"
              aria-hidden="true"
            >
              <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
                Cocktails and Mocktails by thethirstbar.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default MenuComponent;
