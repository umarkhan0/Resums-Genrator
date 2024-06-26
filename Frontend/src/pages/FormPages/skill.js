import { useFormik } from "formik";
import { useSpring, animated } from "react-spring";
import Footer from "../../componenets/footer";
import resumeImage from "../../images/hero_resume_home_page_rn.webp";
import { useNavigate, useLocation } from "react-router-dom";
import { LuArrowDownUp } from 'react-icons/lu';
import React from 'react';
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillDelete } from "react-icons/ai";
import { useState, useEffect } from 'react';
import {
  AiOutlinePlusCircle,
} from "react-icons/ai";
import FormHeader from "../../componenets/formHeader";
import Buttons from "../../componenets/buttons";
const Skills = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const SkillInput = ({ skill, moveSkill, findSkill }) => {
    const [{ isDragging }, ref] = useDrag({
      type: 'SKILL',
      item: { id: skill.id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });


  

    const [, drop] = useDrop({
      accept: 'SKILL',
      hover: (draggedItem) => {
        if (draggedItem.id !== skill.id) {
          const { id: draggedId } = draggedItem;
          const { id: overId } = skill;

          if (draggedItem.id !== overId) {
            moveSkill(draggedId, overId);
            draggedItem.id = overId;
          }
        }
      },
    });
    const springProps = useSpring({
      transform: isDragging ? 'translateY(-10px)' : 'translateY(0)',
    });
    // skills.map((v , i) => console.log(i))
    const shareIndex = skill => setSkills(skills.filter((s) => s.id !== skill.id));

    //     console.log(skills[0]);

const index = (skills , skill) => {
   const index = skills.findIndex(array => array.id === skill.id);
         return index + 1;
};
    return (
      <animated.div ref={(node) => ref(drop(node))}  className="mb-4 w-full h-full">
        <label htmlFor="schoolName" className="flex justify-between items-center text-[#535353] font-medium mb-2">
         Skill#{index(skills , skill)}
          <span><AiFillDelete
         className=" cursor-pointer"
       onClick={() => {
        shareIndex(skill)
       }}
         /></span>
        </label>
        <div className="flex items-center">
          <div className="h-8 w-10 rounded-sm flex justify-center items-center mr-4 shadow-md cursor-move">
            <LuArrowDownUp />
          </div>
          <input
  type="text"
  id="schoolName"
  name="schoolName"
  placeholder="Skill"
  value={skill.value}
  onChange={(e) => {
    const newValue = e.target.value;
    // console.log('New value:', newValue);
    setSkills((prevSkills) =>
      prevSkills.map((s) =>
        s.id === skill.id ? { ...s, value: newValue } : s
// console.log(s)

      )
    );
  }}
  
  className="p-2 border border-gray-300 rounded w-full outline-blue-400"
  autoFocus
/>

        </div>
      </animated.div>


    );
  };

  const [skills, setSkills] = useState([
    { id: 1, value: "" }
  ]);
  const moveSkill = (fromId, toId) => {
    const fromIndex = skills.findIndex((s) => s.id === fromId);
    const toIndex = skills.findIndex((s) => s.id === toId);
    const newSkills = [...skills];
    newSkills.splice(toIndex, 0, newSkills.splice(fromIndex, 1)[0]);
    setSkills(newSkills);
    console.log(newSkills);

  };
  const renderSkillInputs = () => {
    return skills.map((skill) => (
      <SkillInput
        key={skill.id}
        skill={skill}
        moveSkill={moveSkill}
        findSkill={(id) => skills.find((s) => s.id === id)}
      />
    ));
  };

  const location = useLocation();


  const experienceEndInfo = location.state.data;

  const navigate = useNavigate();
  const springProps = useSpring({
    from: { transform: "translateY(20%)" },
    to: { transform: "translateY(0%)" },
    config: { duration: 1000 },
  });
  const formik = useFormik({
    initialValues: {
      skillsArray: ""
    },
    onSubmit: (values) => {
      values.skillsArray = skills
      // console.log(values);


let skillsfinal  = values
      let language = experienceEndInfo.language;
      let contect = experienceEndInfo.contect;
      let experiecePage = experienceEndInfo.experiecePage;
      let education = experienceEndInfo.education;

      const experiencePlusContect = Object.assign({}, { contect }, { experiecePage }, { education }, { language } , {skillsfinal});
      console.log(experiencePlusContect);
      navigate("/summary-tips", { state: { data: experiencePlusContect } });
    },


  });


  return (
    <>
      <div>
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


              <DndProvider backend={HTML5Backend}>
                {renderSkillInputs()}
              </DndProvider>

              {
                skills.length < 6 &&
                <div onClick={

                  () =>
                    setSkills([...skills, { id: skills.length + 1, value: "" }])
                } className=" flex items-center mt-2 cursor-pointer text-[#03acbb] font-extrabold text-[13px]"

                > <AiOutlinePlusCircle
                  />  Add another skill</div>
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

    </>
  );
};
export default Skills