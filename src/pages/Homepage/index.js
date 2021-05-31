import { heroImg, logo } from "assets";
import { BaseContainer } from "containers";
import { React } from "libraries";
import ListMarketCoin from "../../components/organisms/ListMarketCoin";

export const Homepage = () => {
  return (
    <>
      <BaseContainer>
        <div className="container mx-auto lg:mb-32">
          <div className="px-8 py-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="max-w-xl mb-2">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
                    Innovative analytics &nbsp;
                    <br className="hidden md:block" />
                    that you {" "}
                    <span className="inline-block text-deep-purple-accent-400">
                      will love
                    </span>
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mb-2">
                  <img alt="hero image" src={heroImg} className="mb-10 lg:absolute lg:w-2/5 lg:right-12 lg:top-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ListMarketCoin className="px-8" />
      </BaseContainer>
    </>
  );
};

export default Homepage;
