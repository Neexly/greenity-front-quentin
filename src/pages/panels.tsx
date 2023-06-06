import PanelCard from "~/components/panels/PanelCard";
import getPanels from "~/actions/getPanels";

const Panels = () => {
  return (
    <>
      <div className="min-h-full">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      href="/dashboard"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Dashboard
                    </a>
                    <a
                      href="#"
                      className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                      aria-current="page"
                    >
                      Toutes nos bornes
                    </a>
                    <a
                      href="/live"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Voir en direct
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <a
                href="/dashboard"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                Toutes nos bornes
              </a>
              <a
                href="/live"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Voir en direct
              </a>
            </div>
          </div>
        </nav>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Toutes nos bornes
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Voici les bornes disponibles sur notre réseau
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {/* {panels?.map((panel) => (
                <PanelCard key={panel.id} data={panel} />
              ))} */}

              <div className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <img
                    src="https://res.cloudinary.com/ddbzkz1of/image/upload/v1686079026/borne-greenity-2_jb5fpg.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        Parvis de Nanterre
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Prix moyen par minute
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">0,97€</p>
                </div>
              </div>

              <div className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <img
                    src="https://res.cloudinary.com/ddbzkz1of/image/upload/v1686079026/borne-greenity-2_jb5fpg.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        Paris Gare de Lyon
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Prix moyen par minute
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">0,95€</p>
                </div>
              </div>

              <div className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <img
                    src="https://res.cloudinary.com/ddbzkz1of/image/upload/v1686079026/borne-greenity-2_jb5fpg.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        Place d'Italie
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Prix moyen par minute
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">0,91€</p>
                </div>
              </div>

              <div className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <img
                    src="https://res.cloudinary.com/ddbzkz1of/image/upload/v1686079026/borne-greenity-2_jb5fpg.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        Mairie du 12ème
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Prix moyen par minute
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">0,71€</p>
                </div>
              </div>

              {/* <!-- More products... --> */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Panels;
