import { star } from "../assets/icons"

const ReviewCard = ({customerName, imgURL, rating, feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center">
            <img
            src={imgURL}
            alt="Customer"
            className=" object-cover w-[120px] h-[120px] rounded-full"
            />
            <p className="text-center mt-6 max-w-sm info-text">{feedback}</p>
            <div className="flex justify-center items-center gap-2.5 mt-3 ">
                <img
                src= {star}
                width={24}
                height={24}
                className="object-contain m-0"
                />
                <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
            </div>
            <h3 className=" font-palanquin text-3xl text-center mt-1 font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard