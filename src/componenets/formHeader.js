import Logo from  '../images/logo-resume-nerd.svg'
const FormHeader = () =>{
    let pathWindow = window.location.pathname
  
    return(
        <div>
            <div className=" h-16 top-0 w-full  flex justify-between items-center text-center">
            <img className='h-8 m-2' src={Logo}/>
            <div className='flex line-container justify-center text-center items-center mt-2.5'>
                {pathWindow == "/builder" ? <p className='font-["libre"] font-semibold text-[16px] text-center'>
                    1.Contact Info <span className=' ml-3'> &gt; </span>
                </p> : 
                 <p className='font-["libre"] opacity-40 text-[16px]'>
                 1.Contact Info <span className=' ml-3'> &gt; </span>
                 </p>
                }
               {pathWindow == "/experience"  ?  <p className=' ml-3 font-semibold font-["libre"] text-[16px]'>
                    2.Work Experience  <span className=' ml-3'> &gt; </span>
                </p> : 
                <p className=' ml-3 opacity-40 font-["libre"] text-[16px]'>
                    2.Work Experience  <span className=' ml-3'> &gt; </span>
                </p>
            }
               {pathWindow == "/education" || pathWindow === "/education/language" ? <p className='font-semibold ml-3  font-["libre"] text-[16px]'>
                    3.Education  <span className=' ml-3'> &gt; </span>
                </p>: <p className=' ml-3  font-["libre"] opacity-40  text-[16px]'>
                    3.Education  <span className=' ml-3'> &gt; </span>
                
                </p>}
                {pathWindow == "/skills" ?
                  
                  <p className='ml-3 font-semibold font-["libre"] text-[16px]'>
                  4.Skills  <span className=' ml-3'> &gt; </span>
                  </p>
                  :
                    
                    <p className='ml-3 opacity-40 font-["libre"] text-[16px]'>
                    4.Skills  <span className=' ml-3'> &gt; </span>
                </p>}
                {pathWindow == "/summary" ?
                  
                  <p className='ml-3 font-semibold font-["libre"] text-[16px] mr-4'>
                  5.Summary 
                  </p>
                  :
                    
                    <p className='ml-3 opacity-40 font-["libre"] text-[16px] mr-4'>
                    5.Summary  
                </p>}
            </div>

            </div>
        </div>
    )
}
export default FormHeader