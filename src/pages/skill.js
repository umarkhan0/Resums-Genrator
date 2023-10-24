import { useFormik } from "formik";
import { useSpring, animated } from "react-spring";
import Footer from "../componenets/footer";
import resumeImage from "../images/hero_resume_home_page_rn.webp";
import { useNavigate, useLocation } from "react-router-dom";
import BasicSelect from "../componenets/simpleDropDown";
import {LuArrowDownUp} from 'react-icons/lu';
import React from 'react';
// import Drag from "../componenets/drag";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import {useState} from 'react';
import { SortableItem } from "../sortable";
import {
        AiOutlinePlusCircle,
        AiOutlineExclamationCircle,
        AiFillDelete
} from "react-icons/ai";
import FormHeader from "../componenets/formHeader";
import Buttons from "../componenets/buttons";
const Skills = () => {
        function handleDragEnd(event) {
                console.log("Drag end called");
                const {active, over} = event;
                console.log("ACTIVE: " + active.id);
                console.log("OVER :" + over.id);
            
                if(active.id !== over.id) {
                  setLanguages((items) => {
                    const activeIndex = items.indexOf(active.id);
                    const overIndex = items.indexOf(over.id);
                    console.log(arrayMove(items, activeIndex, overIndex));
                    return arrayMove(items, activeIndex, overIndex);
                    // items: [2, 3, 1]   0  -> 2
                    // [1, 2, 3] oldIndex: 0 newIndex: 2  -> [2, 3, 1] 
                  });
                  
                }
              }
    const location = useLocation();
    const [language1 , setLanguage1] = useState("");
    const [language2 , setLanguage2] = useState("");
    const [language3 , setLanguage3] = useState("");
    const [proficiency1 , setProfency1] = useState("");
    const [proficiency2 , setProfency2] = useState("");
    const [proficiency3 , setProfency3] = useState("");
    const [languages, setLanguages ] = useState(["JavaScript", "Python", "TypeScript"]);

            const experienceEndInfo = location.state.data;
           
            const navigate = useNavigate();
            const springProps = useSpring({
                    from: { transform: "translateY(20%)" },
                    to: { transform: "translateY(0%)" },
                    config: { duration: 1000 },
            });
            const formik = useFormik({
                    initialValues: {
                           language1: "",
                           proficiency1: "",
                           language2: "",
                           proficiency2: "",
                           language3: "",
                           proficiency3: "",
                    },
                    onSubmit: (values) => {
                          
                            console.log(values);
                            
                           
    
    let language = values;
    let contect = experienceEndInfo.contect;
    let experiecePage = experienceEndInfo.experiecePage;
    let education = experienceEndInfo.education;
    
     const experiencePlusContect = Object.assign({}, { contect }, { experiecePage }, { education } , {language});
                            // navigate("/skills", { state: { data: experiencePlusContect } });
                    },
    
    
            });
    
           
            
            return (
                    <>
                     <div>
        {/* <Draggable>
          <div
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'lightblue',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'grab',
            }}
          >
            Drag me!
          </div>
        </Draggable> */}
      </div>
                            <FormHeader />
                            <div className="flex justify-between  main-first-component ml-4">
                                    <animated.div
                                            style={springProps}
                                            className=" w-full flex justify-center   flex-row"
                                    >
                                            <div>
                                                    <p className=" text-[36px] mt-[24px] font-bold font-['libre']">
                                                            Skills
                                                    </p>
                                                    <div className=" max-w-[460px] text-[16px] mb-3 leading-5 text-[#515151]">
                                                    Add a few skills to show employers what you're good at.
</div>
    
    
    
                                                  
                                                                    
                                                                         
                                                    <form onSubmit={formik.handleSubmit}>
                                                                  
                                                                   
                                                  
                                                    <div className="mb-4 w-full h-full">
                                                                                <label
                                                                                        htmlFor="schoolName"
                                                                                        className="block text-[#535353] font-medium mb-2"
                                                                                >
                                                                                        Skill#1
                                                                                </label>
                                                                                <div className=" flex items-center">
                                                                                <div className=" h-8 w-10 rounded-sm flex justify-center items-center mr-4 shadow-md cursor-move"><LuArrowDownUp /></div>
                                                                                <input
                                                                                        type="text"
                                                                                        id="schoolName                                                                                        "
                                                                                        name="schoolName"
                                                                                        placeholder="Karachi Univercity"
                                                                                        onChange={
                                                                                                formik.handleChange
                                                                                        }
                                                                                        onBlur={
                                                                                                formik.handleBlur
                                                                                        }
                                                                                        value={
                                                                                                formik
                                                                                                        .values
                                                                                                        .schoolName
                                                                                        }
                                                                                        className=" p-2 border border-gray-300 rounded w-full outline-blue-400"
                                                                                />
                                                                                {formik
                                                                                        .touched
                                                                                        .schoolName &&
                                                                                        formik
                                                                                                .errors
                                                                                                .schoolName && (
                                                                                                <div className="text-red-600 text-sm mt-1">
                                                                                                        {
                                                                                                                formik
                                                                                                                        .errors
                                                                                                                        .schoolName
                                                                                                        }
                                                                                                </div>
                                                                                        )}
                                                                                        </div>
                                                                        </div>       
                                                            
                                                    
                                                   
                                                       {!language3 &&    <div onClick={() =>{ 
                                                                   if(!language2){
                                                                    setLanguage2(true);
                                                                   }else{
                                                                    setLanguage3(true);
                                                                   };
                                                                  
                                                                   
                                                            
                                                            
                                                            }} className=" flex items-center mt-2 cursor-pointer text-[#03acbb] font-extrabold text-[13px]"
                                                                  
                                                            > <AiOutlinePlusCircle /> Add another Language</div>
                                                          } 
                                                          
                      <Buttons />
                      </form>              
    
    
                                            </div>
                                    </animated.div>
                                    <div className=" flex justify-center form-side-image items-center">
                                            <animated.div
                                                    style={springProps}
                                                    className=" absolute flex  justify-center items-center"
                                            >
                                                    <img
                                                            className=" h-[380px]"
                                                            src={resumeImage}
                                                            alt="resume image"
                                                    />
                                            </animated.div>
    
                                            <div className="flex h-full  object-contain">
                                                    <img
                                                            width="1299px"
                                                            src="https://cdn3.resumenerd.com/images/branded-funnel/how-It-works.svg"
                                                            alt="Ui image"
                                                    />
                                            </div>
                                    </div>
                            </div>
                            <Footer />
                            {/* <Drag /> */}
                            <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <Container className="p-3" style={{"width": "50%"}} align="center">
        <h3>The best programming languages!</h3>
        <SortableContext
          items={languages}
          strategy={verticalListSortingStrategy}
        >
          {/* We need components that use the useSortable hook */}
          {languages.map(language => <SortableItem key={language} id={language}/>)}
        </SortableContext>
      </Container>
    </DndContext>
                    </>
    );
};
export default Skills