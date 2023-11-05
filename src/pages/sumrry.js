import { useSpring, animated } from "react-spring";
import Footer from "../componenets/footer";
import resumeImage from "../images/hero_resume_home_page_rn.webp";
import { useNavigate, useLocation } from "react-router-dom";
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState , useEffect } from 'react';
import { FaUnderline, FaBold } from "react-icons/fa"
import { FiItalic } from "react-icons/fi";
import FormHeader from "../componenets/formHeader";
import Buttons from "../componenets/buttons";
const Sumrry = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const handleBoldClick = (typeChanging) => {
        onChange(RichUtils.toggleInlineStyle(editorState, typeChanging));
    };
    const onChange = (newEditorState) => {
        setEditorState(newEditorState);
        const contentState = newEditorState.getCurrentContent();
        const serializedContent = JSON.stringify(convertToRaw(contentState));
        setStoredValue(serializedContent);
    };
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [storedValue, setStoredValue] = useState('');

    console.log(storedValue);





    const location = useLocation();


    const experienceEndInfo = location.state.data;
    console.log(experienceEndInfo);
    const navigate = useNavigate();
    const springProps = useSpring({
        from: { transform: "translateY(20%)" },
        to: { transform: "translateY(0%)" },
        config: { duration: 1000 },
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
                            Summary
                        </p>
                        <div className=" max-w-[430px] text-[16px] mb-3 leading-5 text-[#515151]">
                            Briefly describe the value that you bring through your skills, background and experience.
                        </div>


                        <div>
                            <div className=" flex justify-between items-center text-center h-12">
                                <p className=" text-center block text-[#535353] font-medium mb-2">Summary</p>
                                <section className=" flex mb-3">
                                    <div
                                        onClick={() => handleBoldClick("BOLD")}
                                        className="border-solid border-2 w-8 flex justify-center  h-8 items-center  mr-1 hover:shadow-md cursor-pointer rounded-sm ease-in duration-300">
                                        <FaBold color="#9b9b9b" />
                                    </div>
                                    <div
                                        onClick={() => handleBoldClick("UNDERLINE")}
                                        className="border-solid border-2 w-8 flex justify-center h-8 items-center  mr-1 hover:shadow-md cursor-pointer rounded-sm ease-in duration-300">
                                        <FaUnderline color="#9b9b9b" />
                                    </div>
                                    <div
                                        onClick={() => handleBoldClick("ITALIC")}
                                        className="border-solid border-2 w-8 flex justify-center h-8 items-center  mr-1 hover:shadow-md cursor-pointer rounded-sm ease-in duration-300">
                                        <FiItalic color="#9b9b9b" />
                                    </div>

                                </section>
                            </div>

                            <div className=" break-all border border-gray-300 lg:w-[430px] sm:w-[430px] md:w-[430px] h-56 overflow-y-auto p-2 rounded">
                                <Editor
                                    editorState={editorState}
                                    onChange={onChange}

                                />
                            </div>
                        </div>
                        <Buttons />
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
export default Sumrry;