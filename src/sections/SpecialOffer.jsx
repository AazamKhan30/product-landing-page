import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <div className=" max-container flex  justify-wrap items-center gap-10 max-xl:flex-col-reverse">
      <div className=" flex-1">
        <img src={offer} width={773} height={687} className="w-full object-contain"/>
      </div>
      <div className="flex flex-1 flex-col">
     
     <h2 className=" font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
     <span className=" text-coral-red">Special</span> Offer
     </h2>
     <p className=" mt-4 lg:max-w-lg info-text">
     Ensuring premium comfort and style, our meticulously crafted footwear
       is designed to elevate your experience, providing you with unmatched
       quality, innovation, and a touch of elegance.
     </p>
     <p className=" mt-6 lg:max-w-lg info-text">
     Our dedication to detail and excellence ensures your satisfaction
     </p>
     <div className=" mt-10">
     <Button label="View details"/>
     </div>
  </div>
    </div>
  )
}

export default SpecialOffer