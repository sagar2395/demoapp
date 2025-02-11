import { useState } from "react";
import axios from "axios";

export default function Contact() {

   const [contactData, setContactData] = useState({
      name: '',
      email: '',
      message: '',
   });


   async function contactFormSubmit(event) {
      event.preventDefault()
      console.log("Heyyyyyyyyyy whatsuppppppp")
      console.log("Inside contactFormSubmit")
      await axios.post('http://demoapp-backend-svc.demoapp-prod.svc.cluster.local:8080/api/contactrequest', contactData, 
         {
            headers: {
              "Content-Type": "application/json", // Set Content-Type
            },
         }
      )
      .then(res =>{
         console.log(contactData)
         console.log(res)
      })
      
   }


   return(
      <div class="p-8 mt-8 max-w-lg mx-auto">
    <h1 class="text-4xl text-gray-800 sm:text-4xl font-bold mb-4">Contact Form</h1>
    <form onSubmit={contactFormSubmit}>
        <div class="p-sure2 w-full">
            <div class="relative">
                <label for="name" class="leading-7 py-4 text-lg text-gray-900">Name</label>
                <input type="text" id="name" name="name" required="" value={contactData.name} onChange={e => {
                  setContactData({
                     ...contactData,
                     name: e.target.value
                  })
                }}
                    class=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
            </div>
        </div>
        <div class="p-2 w-full">
            <div class="relative">
                <label for="email" class="leading-7 py-4 text-lg text-gray-900">Email</label>
                <input type="email" id="email" name="email" required="" value={contactData.email} onChange={e => {
                  setContactData({
                     ...contactData,
                     email: e.target.value
                  })
                }}
                    class=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
        </div>
        <div class="p-2 w-full">
            <div class="relative">
                <label for="message" class="leading-7 py-4 text-lg text-gray-900">Message</label>
                <textarea id="message" name="message" required="" value={contactData.message} onChange={e => {
                  setContactData({
                     ...contactData,
                     message: e.target.value
                  })
                }}
                    class=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
        </div>
        <div class="p-2 w-full">
            <div>
                <button type="submit"
                    class="flex text-white bg-gray-900 border-0 py-3 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center">
                    Send
                </button>
            </div>
         </div>
    </form>
</div>
   )
}