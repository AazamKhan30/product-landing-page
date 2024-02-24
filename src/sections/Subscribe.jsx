

const Subscribe = () => {
  return (
  <section id="contact-us" className=" max-container flex justify-between items-center max-lg:flex-col gap-10">
    <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up for
     <span className=" text-coral-red"> Updates </span> & Newsletter </h3>
    <div className="w-full flex items-center border border-slate-gray lg:max-w-[40%] rounded-full p-2.5 gap-5">
      <input type="text" placeholder="subscribe@nike.com" className="input" />
      <div className="max-sm:w-full flex items-center max-sm:justify-end">
        <button className="flex justify-center items-center text-center px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red rounded-full w-full">Sign Up</button>
      </div>
    </div>
  </section>
  )
}

export default Subscribe