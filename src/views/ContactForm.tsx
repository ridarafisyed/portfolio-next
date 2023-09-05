'use client'
import React, {useState} from "react";

const ContactForm = () => {
  const [email, setEmail]= useState("")
  const [message, setMessage]= useState("")
  // async function handleSubmmit(e:any){
  //   e.preventDefault()
  //   const data = {
  //     email: String(e.target.email.value),
  //     message : String(e.target.message.value),
  //   }
  //   // console.log(data)
  //   try{
  //     const response = await fetch('api/contact', {
  //     method: "POST",
  //     headers:{
  //       'Content-Type':"application/json",
  //       },
  //     body: JSON.stringify(data),
  //     })
  //     if (response && !response?.ok ){
  //       console.log("SUCCESS!")
  //     }

  //   }catch(error){
  //     console.log(error)
  //   }
    
    
  // }
  async function handleSubmmit(event:React.FormEvent<HTMLElement>){
    event.preventDefault();
    
    
  }

   
  return (
    <>
      <form onSubmit={handleSubmmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-300/10 pb-12">
            <p className="mt-1 text-sm leading-6 text-gray-200">
              If you have any query please Leave a Message I&lsquo;ll
              get back to you.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-300">
                  Email
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-zinc-600 sm:max-w-md">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value = {email}
                      // autoComplete="email"
                      onChange={()=>setEmail(email)}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-gray-300">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
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
            type="reset"
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
    </>
  );
};

export default ContactForm;
