

export default function HeaderPage() {
   return (
      <div class="w-full h-full bg-gray-900 dark:bg-gray-200">
         <header class="lg:px-16 px-4 flex flex-wrap items-center py-4 text-xl shadow-lg">
             <div class="flex-1 flex justify-between items-center">
                 <h1 class="sm:w-[10rem] w-[7rem]">Cloud Insights</h1>
             </div>
             <label for="menu-toggle" class="cursor-pointer md:hidden block">
                 <svg class="fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                 <title>menu</title>
                 <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                 </svg>
                 </label>
             <input class="hidden" type="checkbox" id="menu-toggle" />

             <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                 <nav>
                     <ul class="md:flex items-center justify-between text-base text-gray-100 dark:text-gray-600 pt-4 md:pt-0">
                         <li><a class="md:p-4 py-3 px-0 block text-rose-500" href="/">Home</a></li>
                         <li><a class="md:p-4 py-3 px-0 block" href="/About">About Me</a></li>
                         <li><a class="md:p-4 py-3 px-0 block" href="/Experience">Experience</a></li>
                         <li><a class="md:p-4 py-3 px-0 block" href="/Projects">Projects</a></li>
                     </ul>
                 </nav>
             </div>
         </header>
      </div>
   );
 };