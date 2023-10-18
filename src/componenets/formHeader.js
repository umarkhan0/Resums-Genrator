import Logo from  '../images/logo-resume-nerd.svg'
const FormHeader = () =>{
    let pathWindow = window.location.pathname
  
    return(
        <div>
            <div className=" h-16 top-0 w-full  flex justify-between items-center">
            <img className='h-8 m-2' src={Logo}/>
            <div className='flex line-container'>
                {pathWindow == "/builder" ? <p className='font-["libre"] font-semibold text-[16px]'>
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
                <p className='ml-3 mr-3 opacity-40 font-["libre"] text-[16px]'>
                    5.Summary 
                </p>
            </div>

            </div>
        </div>
    )
}
export default FormHeader