import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { LuArrowDownUp } from "react-icons/lu";

const Drag = () => {
  const [skills, setSkills] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
  ]);
console.log(skills);
  const SkillInput = ({ skill, moveSkill, findSkill }) => {
    const [, ref] = useDrag({
      type: 'SKILL',
      item: { id: skill.id },
    });

    const [, drop] = useDrop({
      accept: 'SKILL',
      hover: (draggedItem) => {
        if (draggedItem.id !== skill.id) {
          const { id: draggedId } = draggedItem;
          const { id: overId } = skill;
          moveSkill(draggedId, overId);
          draggedItem.id = overId;
        }
      },
    });
    skills.map((v , i) => console.log(i))
console.log(skills.length);
    return (
      <div ref={(node) => ref(drop(node))} className="mb-4 w-full h-full">
       
        <label htmlFor="schoolName" className="block text-[#535353] font-medium mb-2">
          Skill#{skill.id}
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
    setSkills((prevSkills) =>
      prevSkills.map((s) =>
        s.id === skill.id ? { ...s, value: newValue } : s
      )
    );
  }}
  className="p-2 border border-gray-300 rounded w-full outline-blue-400"
/>

        </div>
      </div>
    );
  };

  const moveSkill = (fromId, toId) => {
    const fromIndex = skills.findIndex((s) => s.id === fromId);
    const toIndex = skills.findIndex((s) => s.id === toId);
    const newSkills = [...skills];
    newSkills.splice(toIndex, 0, newSkills.splice(fromIndex, 1)[0]);
    setSkills(newSkills);
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

  return (
    <DndProvider backend={HTML5Backend}>
      {renderSkillInputs()}
    </DndProvider>
  );
};

export default Drag;
