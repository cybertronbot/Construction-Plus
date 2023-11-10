import Image from "next/image"
const getVariant = variant => {
    switch (variant) {
      case "primary":
        return "bg-[#F2CE38;] hover:bg-black text-black shadow shadow-black-600/25 hover:shadow-black-600/75"
      case "secondary":
        return "bg-[#9747FF] hover:bg-black text-white shadow shadow-black-600/25 hover:shadow-black-600/75"
  
      case "outline-primary":
        return "bg-transparent text-white border border-white hover:text-white hover:bg-[#181818]"
  
      default:
        return "bg-violet-500 hover:bg-violet-700 text-white shadow shadow-violet-600/25 hover:shadow-violet-600/75"
    }
  }
  export const Button = ({
    className,
    children,
    variant,
    square,
    paddingLess,
    type = "button",
    onClick,
    imgSrc, 
    imgAlt, 
    iconPresent,
    ...props
  }) => {
    return (
      <button
        {...props}
        type={type}
        onClick={onClick}
        className={`
          ${getVariant(variant)}  transition duration-75  ${!paddingLess &&
          "sm:px-[20px] px-4 py-2 sm:py-3"}  ${!square &&
          "rounded-[8px] sm:rounded-[8px] "} active:scale-95 ${className}  ${!iconPresent &&
            "flex justify-center items-center"} gap-[10px] sm:text-[18px] text-[14px] font-Agency text-black uppercase font-bold `}
      >
        {imgSrc && (
        <div className="relative sm:w-[20px] w-[10px] sm:h-[20px] h-[10px]">
          <Image
            src={imgSrc}
            alt={imgAlt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
        {children}
      </button>
    )
  }
  