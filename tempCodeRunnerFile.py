<button
                type="button"
                onClick={() => handleButtonClick("wilks")}
                class="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
              >
                Wilks
              </button>
              <button
                type="button"
                onClick={() => handleButtonClick("dots")}
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
              >
                Dots
              </button>
              <button
                type="button"
                onClick={() => handleButtonClick("1rm")}
                class="rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
              >
                1RM
              </button>
            </div>
            <div class="flex flex-col items-center">
              {activeButton === "wilks" && <Wilks />}
              {activeButton === "dots" && <Wilks />}
              {activeButton === "1rm" && <Wilks />}
                <form class="w-full max-w-lg">
                  // form inputs and submit button
                </form>