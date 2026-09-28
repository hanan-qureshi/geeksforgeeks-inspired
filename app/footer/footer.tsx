import { Grid } from "@mui/material";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css';

export default function Footer() {
    return (
        <footer id="footer">
            <Grid container spacing={2} className='style-FooterG' >
                <Grid size={3}>
                    <img src="../assets/gfgFooterLogo.png" alt="gh" className='style-FooterImg1' /> <br />
                    <PlaceOutlinedIcon className='style-Location1' /> <b className='style-Bold1'>Corporate & Communications Address:</b> <br />
                    <span className='style-Span1'>A-143, 6th Floor, Sovereign Corporate Tower, Sector- 136, Noida, Uttar Pradesh (201305)</span>
                    <PlaceOutlinedIcon className='style-Location2' /> <b className='style-Bold2'>Registered Address:</b> <br />
                    <span className='style-Span2'>K 061, Tower K, Gulshan Vivante Apartment, Sector 137, Noida, Gautam Buddh Nagar, Uttar Pradesh, 201305</span>
                </Grid>
                <Grid size={1.4}>
                    <b className='style-Bold3'>Company</b> <br />
                    <ul style={{ listStyle: 'none', padding: "0", textAlign: "left" }} className='style-Ul1'>
                        <li>  About Us </li>
                        <li>   Legal </li>
                        <li>    Privacy Policy </li>
                        <li>    Careers </li>
                        <li>  <a href="/contact">Contact Us</a></li>
                        <li>  Corporate Solution </li>
                        <li>    Campus Training Program </li>
                    </ul>


                </Grid>
                <Grid size={1.4}>
                    <b className='style-Bold4'>Explore</b> <br />
                    <ul style={{ listStyle: 'none', padding: "0", textAlign: "left" }} className='style-Ul2'>
                        <li>  POTD </li>
                        <li>  Practice Problems </li>
                        <li>  Blogs </li>
                        <li>  Upskill Courses </li>
                        <li>  Connect </li>
                    </ul>
                </Grid>
                <Grid size={1.4}>
                    <b className='style-Bold5'>Tutorials</b> <br />
                    <ul style={{ listStyle: 'none', padding: "0", textAlign: "left" }} className='style-Ul3'>
                        <li> Programming Languages </li>
                        <li> DSA </li>
                        <li> Web Technology</li>
                        <li> AI, ML & Data Science</li>
                        <li> DevOps</li>
                        <li> CS Core Subjects</li>
                        <li> GATE</li>
                        <li> School Subjects</li>
                        <li> Software and Tools</li>
                    </ul>
                </Grid>
                <Grid size={1.4}>
                    <b className='style-Bold6'>Courses</b> <br />
                    <ul style={{ listStyle: 'none', padding: "0", textAlign: "left" }} className='style-Ul4'>
                        <li>    ML and Data Science </li>
                        <li>    DSA and Placements</li>
                        <li>   Web Development</li>
                        <li>    Data Science</li>
                        <li>   Programming Languages</li>
                        <li>      DevOps & Cloud</li>
                        <li>    GATE</li>
                        <li>   MongoDB Certifications</li>
                    </ul>
                </Grid>
                <Grid size={1.4}>
                    <b className='style-Bold7'>Preparation Corner</b> <br />
                    <ul style={{ listStyle: 'none', padding: "0", textAlign: "left" }} className='style-Ul5'>
                        <li> Interview Corner</li>
                        <li> Aptitude</li>
                        <li> Puzzles</li>
                        <li> GfG 160</li>
                        <li> System Design</li>
                    </ul>
                </Grid>
                <Grid size={1.8}>
                </Grid>
                <Grid size={12} className='style-Socials' >
                    <LinkedInIcon className='style-Linkedin' />
                    <InstagramIcon className='style-Insta' />
                    <XIcon className='style-X' />
                    <FacebookOutlinedIcon className='style-Fb' />
                    <YouTubeIcon className='style-Youtube' />
                    <img src="../assets/googleplay-(1).png" alt="GP" className='style-Gp' />
                    <img src="../assets/appstore-(1).png" alt="AS" className='style-Astore' />
                </Grid>
            </Grid>
            <Grid size={12}>
                <p className='style-Lline'>@GeeksforGeeks, Sanchhaya Education Private Limited, All rights reserved</p>
            </Grid>
        </footer>
    )
}