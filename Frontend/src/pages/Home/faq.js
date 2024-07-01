import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Root = styled('div')(({ theme }) => ({
    width: '100%',
    marginTop: theme.spacing(2),
}));

const Heading = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
}));

const Faq = () => {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    const faqs = [
        {
            question: "Does ResumeNerd have resume examples?",
            answer: (
                <>
                    <Typography>Yes. Check out our resume examples to</Typography>
                    <Typography>see what a typical resume in your industry includes. Our samples can also help you determine the</Typography>
                    <Typography>right designs and formats to use.</Typography>
                </>
            ),
        },
        {
            question: "What are the different formats ResumeNerd offers?",
            answer: (
                <>
                    <Typography>We provide the 3 typical resume formats.</Typography>
                    <Typography>Choose from chronological, functional or combination. Our career resources can help you determine the best</Typography>
                    <Typography>option for your industry.</Typography>
                </>
            ),
        },
        {
            question: "What is an ATS?",
            answer: (
                <>
                    <Typography>ATS stands for applicant tracking system. This is a software used to locate specific words</Typography>
                    <Typography>(keywords) within a resume to match the applicant to the job description. ResumeNerd helps you</Typography>
                    <Typography>build ATS-friendly resumes to get you past the software and to the interview.</Typography>
                </>
            ),
        },
    ];

    return (
        <Root>
            {faqs.map((faq, index) => (
                <div className=' sm:mx-16 px-3 my-4'>
                    <Accordion
                        key={index}
                        expanded={expanded === index}
                        onChange={handleChange(index)}
                    >
                        <AccordionSummary
                            expandIcon={expanded === index ? <RemoveIcon /> : <AddIcon />}
                            aria-controls={`panel${index + 1}-content`}
                            id={`panel${index + 1}-header`}
                            sx={{ border: "1px", borderRadius: "5px" }}
                        >
                            <Heading sx={{ fontSize: "19px", color: "#333", fontWeight: "700", fontFamily: "inherit" }}>{faq.question}</Heading>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                sx={{ borderTop: "1px solid #000", paddingY: "10px", fontSize: "16px", color: "#333", fontFamily: "inherit" }}
                            >{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            ))}
        </Root>
    );
};

export default Faq;
