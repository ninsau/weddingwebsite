import { Container } from "./Container";

export default function FooterComponent() {
  return (
    <Container>
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2022 csthemoment. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </Container>
  );
}
