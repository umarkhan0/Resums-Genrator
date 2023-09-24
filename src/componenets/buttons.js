import { IoArrowBackSharp } from "react-icons/io5";
const Buttons = () =>{

    return(
        <div className="mt-6 mb-4 flex ">
                    <button className=" bg-[#f6f6f6] p-3 cursor-pointer mr-3" onClick={ () => window.history.back()
                    } >
                      <IoArrowBackSharp color="#000" size={"25px"}/>
                    </button>
                    <button
                      type="submit"
                      className="w-full py-1 px-3 bg-[#008d5f] hover:bg-[#447666] text-white rounded-md focus:outline-none"
                    >
                      SAVE & CONTINUE
                    </button>
                  </div>
    )
}
export default Buttons