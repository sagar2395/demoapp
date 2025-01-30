import profile from '../profile.jpg'

export default function Introduction() {
   return(
      <div>
         <div
             class="h-full w-full mx-auto relative top-12 pb-20 xl:px-16 px-8 flex md:flex-row flex-col gap-4 justify-center items-center pb-10 pt-4">
             <div class="w-full relative">
                 <img class="shadow-2xl shadow-rose-600 animate-[spin_12s_linear_infinite] absolute left-0 right-0 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto" src="https://techakim.com/sam/tg/7268/li/imgs/profile.jpg" alt="My Image" />
                 <img class="relative z-10 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-rose-400/30" src={profile} alt="My Image" />
             </div>
             <div class="w-full flex flex-col justify-center gap-4 md:text-left text-center text-white dark:text-gray-800 md:mt-0 sm:mt-8 mt-4">
                 <h1 class="md:text-4xl sm:text-3xl text-2xl font-semibold font-serif">Hello, My name is Sagar Chhabra</h1>
                 <h3 class="capitalize text-rose-400">i'm <span class="typing text-green-500 dark:text-green-700">Senior Devops Engineer</span></h3>
                 <p>Helloooo there I am Experienced Devops Engineer with 5+ years of expertise in Cloud computing and devops tools like Microsoft Azure, Amazon AWS, Azure Devops, Terraform, Powershell, Docker and Kubernetes.</p>
                 <div class="sm:mt-4 mt-2">
                     <a class="px-6 py-1 bg-rose-500 text-white rounded-sm" href="/Contact">Get In Touch</a>
                 </div>
                 <div class="flex justify-left space-x-5">
                     <a href="https://linkedin.com/in/sagarchhabra" target="_blank" rel="noopener noreferrer">
                         <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                     </a>
                     <a href="https://www.instagram.com/cloudinsights_by_sagar/" target="_blank" rel="noopener noreferrer">
                         <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                     </a>
               </div>
             </div>
         </div>
      </div>
   )
}