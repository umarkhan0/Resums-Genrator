import React from 'react';
import DrawerAppBar from "./Component/header";
import './notFound.css';  // Import the CSS file
import { Button } from '@mui/material';
import Footer from "../../componenets/footer";
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
    let navigate = useNavigate();
    return (
        <>
            <DrawerAppBar />
            <section
                className=" flex justify-center items-center bg-cover bg-center mt-14 p-3 h-[600px] bg-image">
                <div>
                    <h1 className=' text-center text-[90px] font-[700] text-[#fff]'>404</h1>
                    <h2 className=' text-center text-[30px] font-[700] text-[#fff]'>LOST IN SPACE</h2>
                    <p className=' text-center text-[#fff]'>The page you're looking for can't be found.</p>
                    <div className=' flex justify-center'>

                    <Button onClick={() => navigate("/intro")} sx={{
                        
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "14px",
                        backgroundColor: "#008d5f",
                        padding: "10px",
                        '&:hover': {
                            backgroundColor: "#006a47", // Darker shade for hover state
                        },
                    }}
                        
                       
                        
                    >
                        GO BACK TO RESUME

                    </Button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default NotFound;
