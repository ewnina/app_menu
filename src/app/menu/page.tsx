import Head from "next/head"



const MenuPage = () => {


  return (
    <>

<Head>
        <title>My page title</title>
      </Head>
 <section className="max-w-sm mx-auto py-8">
  <div className="text-center mb-6">
    <h1 className="text-2xl font-bold dark:text-white">Welcome Maxcoach</h1>
    <div className="mt-4 flex justify-center">
      <div className="relative">
        <input type="text" className="pl-10 pr-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Search" />
        <svg className="w-6 h-6 absolute left-2 top-1/2 transform -translate-y-1/2 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  </div>
  <div className="flex justify-center space-x-2 mb-6">
    <button className="bg-yellow-500 text-white px-4 py-1 rounded-full">All</button>
    <button className="bg-zinc-200 text-zinc-800 px-4 py-1 rounded-full dark:bg-zinc-700 dark:text-zinc-300">
      Pizza
    </button>
    <button className="bg-zinc-200 text-zinc-800 px-4 py-1 rounded-full dark:bg-zinc-700 dark:text-zinc-300">
      Burger
    </button>
    <button className="bg-zinc-200 text-zinc-800 px-4 py-1 rounded-full dark:bg-zinc-700 dark:text-zinc-300">
      Desert
    </button>
    <button className="bg-zinc-200 text-zinc-800 px-4 py-1 rounded-full dark:bg-zinc-700 dark:text-zinc-300">
      Subw
    </button>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center dark:bg-zinc-700">
      <img src="https://placehold.co/100x100" alt="Crispy Chicken" />
      <p className="mt-2 font-semibold dark:text-white">Crispy Chicken</p>
      <p className="text-yellow-600">$2</p>
      <button className="bg-yellow-500 text-white px-4 py-1 rounded-full mt-2">&gt;</button>
    </div>
    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center dark:bg-zinc-700">
      <img src="https://placehold.co/100x100" alt="Sushi" />
      <p className="mt-2 font-semibold dark:text-white">Sushi</p>
      <p className="text-yellow-600">$0.5</p>
      <button className="bg-yellow-500 text-white px-4 py-1 rounded-full mt-2">&gt;</button>
    </div>
    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center dark:bg-zinc-700">
      <img src="https://placehold.co/100x100" alt="Open Now" />
      <p className="mt-2 font-semibold dark:text-white">Open Now</p>
      <p className="text-yellow-600">Special</p>
      <button className="bg-yellow-500 text-white px-4 py-1 rounded-full mt-2">&gt;</button>
    </div>
    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center dark:bg-zinc-700">
      <img src="https://placehold.co/100x100" alt="Ice Cream" />
      <p className="mt-2 font-semibold dark:text-white">Ice Cream</p>
      <p className="text-yellow-600">$1.2</p>
      <button className="bg-yellow-500 text-white px-4 py-1 rounded-full mt-2">&gt;</button>
    </div>
  </div>
</section>
</>
  
  )
}


export default MenuPage