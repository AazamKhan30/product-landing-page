const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center justify-center text-white bg-coral-red py-4 px-7 rounded-full border-coral-red gap-2 font-montserrat text-lg">
      {label}{" "}
      {iconURL && <img 
        src={iconURL}
        alt="arrow right"
        className="rounded-full w-5 h-5 ml-2"
      />}
    </button>
  );
};

export default Button;
