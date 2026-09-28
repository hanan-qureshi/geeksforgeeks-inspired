"use client";
import './contact.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Grid from '@mui/material/Grid';


export default function Contact() {

    const [reason, setReason] = React.useState('');
    const [emailId, setEmailid] = React.useState('');
    const [contactNo, setContactno] = React.useState('');
    const [feedbackQuery, setfeedbackQuery] = React.useState('');


    const submit = (event: any) => {
        event.preventDefault();
        if (reason === "" ||
            emailId === "" ||
            contactNo === "" ||
            feedbackQuery === ""
        ) {
            alert("Please fill all the Fields")
            return;
        };

        const data: any = {
            reason: reason,
            emailId: emailId,
            contactNo: contactNo,
            feedbackQuery: feedbackQuery

        }
        window.location.href =
            `mailto:hanansyed22@gmail.com?subject=Feedback&body=${encodeURIComponent(data)}`;
    }


    const handleChange = (event: SelectChangeEvent) => {
        setReason(event.target.value as string);
    };
    const [image, setImage] = React.useState<File | null>(null);

    return (
        <div id="pageOne">

            <Header />
            <Grid container spacing={2}>
                <Grid size={7} >
                    <div className='style-Div1' >
                        <p className='style-Title'>Contact Us</p>
                        <p className='style-Title2'>GeeksforGeeks</p>
                        <p className='style-Title3'>Feedback and Queries</p>
                        <label htmlFor="reason" className='style-Reason'>Select Reason <span className='style-Span1'>*</span></label>

                        <FormControl fullWidth sx={{ marginBottom: '1rem', marginTop: '1rem' }} >
                            <InputLabel id="demo-simple-select-label">Select an Option</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={reason}
                                label="Select Reason"
                                onChange={handleChange}
                                style={{ width: '36rem' }}
                            >
                                <MenuItem value="Feedback and Query">Feedback and Query</MenuItem>
                                <MenuItem value="Course Query">Course Related Queries</MenuItem>
                                <MenuItem value="Course Payment Query">Course Payment Related Issues</MenuItem>
                                <MenuItem value="Purchase Course Issues">Any Issue in Purchased Course</MenuItem>
                                <MenuItem value="Review Query">Review Related Queries</MenuItem>
                                <MenuItem value="Campus Event Sponsorship Query">Campus Event Sponsorship Related Queries</MenuItem>
                                <MenuItem value="Content Improvement Query">Content Improvement Related Queries</MenuItem>
                                <MenuItem value="Content Internship/Payment Query">Content Internship/Payment Related Queries</MenuItem>
                                <MenuItem value="DMCA Copyright">DMCA Notice/Copyright/Takedown Issue</MenuItem>
                                <MenuItem value="DPO">DPO Related Queries</MenuItem>
                                <MenuItem value="Hiring Query">Hiring Related Queries</MenuItem>
                                <MenuItem value="Advertise with us">Advertise with us</MenuItem>
                                <MenuItem value="Brand and Content Integration">Brand and Content Integration</MenuItem>
                                <MenuItem value="Content List Suggestions">Content List Suggestions</MenuItem>
                                <MenuItem value="Premium Plans Related Queries">Premium Plans Related Queries</MenuItem>
                                <MenuItem value="Institute/Company Page">Institute/Company Page Related Queries</MenuItem>
                                <MenuItem value="Collaborate with us">Collaborate with us if you have a Strong Social Media Presence</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>

                        <label htmlFor="emailaddress" className='style-Email'>Email Address <span className='style-Span1'>*</span></label>

                        <Box

                            component="form"
                            sx={{ '& > :not(style)': { width: '36rem', marginTop: '1rem', marginBottom: '1rem' } }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField type="email" required id="outlined-email" label="" variant="outlined" value={emailId} onChange={(event) => setEmailid(event.target.value)}
                                slotProps={{
                                    htmlInput: {
                                        maxLength: 40,
                                    },
                                }} />
                        </Box>
                        <label htmlFor="contactnumber" className='style-Email'>Contact Number</label>

                        <Box

                            component="form"
                            sx={{ '& > :not(style)': { width: '36rem', marginTop: '1rem', marginBottom: '1rem' } }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField type="tel" required id="outlined-contact" label="" variant="outlined" value={contactNo} onChange={(event) => setContactno(event.target.value)}
                                slotProps={{
                                    htmlInput: {
                                        maxLength: 10,
                                    },
                                }} />
                        </Box>
                        <label htmlFor="emailaddress" className='style-Email'>Drop your feedback/query<span className='style-Span1'>*</span></label> <br />
                        <TextareaAutosize
                            maxLength={300}
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Max Allowed Characters: 300"
                            style={{ width: '36rem', height: '3rem', marginBottom: '1rem', fontSize: '16px', marginTop: '1rem' }}
                            value={feedbackQuery}
                            onChange={(event) => setfeedbackQuery(event.target.value)}
                        />
                        <input type="file" accept="image/*"
                            onChange={(event) => {
                                const file = event.target.files?.[0];
                                if (file) {
                                    setImage(file);
                                }
                            }}
                        />
                        {image && (
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Selected image"
                                width="200"
                            />
                        )}


                        <Button variant="contained" className='style-Submit' onClick={submit}>Submit</Button>
                        <p className='style-Para'>To contribute, please see the contribute page</p>
                        <p className='style-Para2'>Corporate Address (For Communications):</p>
                        <p className='style-Para3'>GeeksforGeeks <br />
                            A-143, 7th Floor, Sovereign Corporate Tower, Sector- 136, Noida, Uttar Pradesh (201305) <br />
                            08069289001(Course related Queries)</p>
                        <p className='style-Para4'>Registered Address:</p>
                        <p className='style-Para5'>K 061, Tower K, Gulshan Vivante Apartment, Sector 137, Noida, Gautambuddha <br /> Nagar, Uttar Pradesh,201305</p>
                    </div>
                </Grid>
                <Grid size={5} sx={{ marginTop: '14rem' }}>
                    <iframe
                        src="https://www.google.com/maps?q=GeeksforGeeks+Sector+136+Noida&output=embed"
                        width="84%"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>

                </Grid>
            </Grid>
            <Footer />
        </div>
    );
}