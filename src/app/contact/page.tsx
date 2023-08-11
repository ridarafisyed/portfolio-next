import React from "react";

const Contact = () => {
  return (
    <>
      <section className="text-white body-font" id="contact">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full my-16 py-10">
            <h1 className="title-font sm:text-4xl text-3xl my-6 font-medium text-yellow-500">
              Contact Me
            </h1>
            <div className="flex justify-center gap-3 border-b border-gray-300/10 pb-12">
              <a href="#" className="">
               <span className="text-yellow-500 font-bold text-xl"> f </span> Facebook
              </a>
              <a href="#" className="">
               <span className="text-yellow-500 font-bold text-xl"> in </span> LinkedIn
              </a>

              <a href="#" className="">
                <span className="text-yellow-500 font-bold text-xl"> @ </span>  ridarafisyed@gmail.com
              </a>
            </div>
            <div></div>

            <div className="item-left justify-start text-left ">
              <form>
                <div className="space-y-12">
                  <div className="border-b border-gray-300/10 pb-12">
                    <p className="mt-1 text-sm leading-6 text-gray-200">
                      If you have any query please Leave a Message I&lsquo;ll
                      get back to you.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-4">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium leading-6 text-gray-300">
                          Email
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-zinc-600 sm:max-w-md">
                            <input
                              type="text"
                              name="username"
                              id="username"
                              // autoComplete="username"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="email@example.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-300">
                          Message
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="about"
                            name="about"
                            placeholder="Write your message here."
                            className="block w-full  bg-transparent rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"></textarea>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-200">
                          250 words Max
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-300">
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
