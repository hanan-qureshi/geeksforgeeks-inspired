"use client";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './pages.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { title } from 'process';
import Footer from './footer/footer';
import Header from './header/header';

export default function Home() {
  const chips = ["Placement 360", "Data Science 360", "Full Stack Dev"];
  const [allCourses, setAllCourses] : any = React.useState([]);

  React.useEffect(() => {
    fetch('/courses.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setAllCourses(data);
    })
    .catch((error) => {
      console.error('Error fetching courses:' , error);
    })
    // fectch data from courses.json
    // setData to allCourses
  }, [])
  const explore = ['Jobs for you', 'Hire with us', 'Advertise with Us', 'Placement Training Program']
  const subMain = [{
    title: "1:1 Expert Sessions",
    imageSrc: "../assets/Frame-1000001823.svg"
  },

  {
    title: "Personalized Feed",
    imageSrc: "../assets/Frame-10000018241.svg"
  },
  {
    title: "Flexible & Affordable",
    imageSrc: "../assets/Frame-1000001823-7.svg"
  },
  {
    title: "Build Your Network",
    imageSrc: "../assets/Frame-1000001823-8.svg"
  }]

  const exploreCards = [{
    title: 'Data Structure and Algorithms',
    bgColor: 'linear-gradient(to right bottom, rgb(59, 89, 152), rgb(123, 153, 216))',
  },
  {
    title: 'Web Development',
    bgColor: 'linear-gradient(to right bottom, rgb(168, 92, 92), rgb(232, 156, 156))',
  },
  {
    title: 'AI ML & Data Science',
    bgColor: 'linear-gradient(to right bottom, rgb(90, 133, 96), rgb(154, 197, 160))',
  },
  {
    title: 'Machine Learning',
    bgColor: 'linear-gradient(to right bottom, rgb(125, 107, 168), rgb(189, 171, 232))',
  },
  {
    title: 'Phython',
    bgColor: 'linear-gradient(to right bottom, rgb(184, 131, 74), rgb(248, 195, 138))',
  },
  {
    title: 'Java',
    bgColor: 'linear-gradient(to right bottom, rgb(168, 102, 125), rgb(232, 166, 189))',
  },
  {
    title: 'System Design',
    bgColor: 'linear-gradient(to right bottom, rgb(90, 156, 160), rgb(154, 220, 224))',
  },
  {
    title: 'DevOps',
    bgColor: 'linear-gradient(to right bottom, rgb(168, 160, 90), rgb(232, 224, 154))',
  },
  {
    title: 'Programming Languages',
    bgColor: 'linear-gradient(to right bottom, rgb(107, 114, 128), rgb(171, 178, 192))',
  },
  {
    title: 'CS Subjects',
    bgColor: 'linear-gradient(to right bottom, rgb(156, 93, 93), rgb(220, 157, 157))',
  },
  {
    title: 'Practice DSA',
    bgColor: 'linear-gradient(to right bottom, rgb(93, 107, 168), rgb(157, 171, 232))',
  },
  {
    title: 'Interview Preparation',
    bgColor: 'linear-gradient(to right bottom, rgb(96, 168, 112), rgb(160, 232, 176))',
  },
  {
    title: 'Databases',
    bgColor: 'linear-gradient(to right bottom, rgb(109, 107, 168), rgb(173, 171, 232))',
  },
  {
    title: 'Software & Tools',
    bgColor: 'linear-gradient(to right bottom, rgb(168, 96, 96), rgb(232, 160, 160))',
  },

  ]
  const texts = ["Skill Development?", "Industry Insight?", "career Guidance?", "Interview Prepration?", "Learning Roadmaps"];
  return (
    <div id="firstPage" className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* nabar */}
      <Header/>
      <div id='start' className='start-style'>
        <h1>Start Your Learning Today!</h1>
        <div id="chips" className='style-chips'  >
          {chips.map((item, index) => (
            <Button variant="outlined" key={index}>{item}</Button>
          ))}
        </div>

        <Grid container spacing={2}>
          <Grid size={6} className='style-course'>
            <h2>Courses</h2>
          </Grid>
          <Grid size={6} className='style-course2'>
            <Button variant="outlined" href='/courses'>View All</Button>
          </Grid>
        </Grid>
        <Grid container id='coursesCard' spacing={2} sx={{ flexGrow: 1, justifyContent: 'center' }}>
          {allCourses?.map((item, index) => (
            <Grid size={4} style={{ width: 'auto', padding: "0 2rem" }} key={index}>
              <Card sx={{ position: 'relative', width: 293, height: 330, borderRadius: '1rem' }}>

                <CardMedia
                  sx={{ height: 170 }}
                  image={item?.imageSrc}

                />
                <div className='capsule'>
                  <StarIcon fontSize="small" sx={{ color: 'yellow', fontSize: 'small' }} /> {item.rating}
                </div>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="p" className='style-title' >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }} className='style-celular'>
                    <SignalCellularAltIcon /> {item.level}
                  </Typography>
                </CardContent>

                <CardActions >
                  <Grid container spacing={2} style={{ width: '100%' }}>
                    <Grid size={6} className='style-Ticon' >
                      <TrendingUpIcon className='style-Inicon' />
                      {item.trend}
                    </Grid>
                    <Grid size={6}><Button className='style-Courseb' size="small">Explore More</Button></Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className='style-Fullimg'>
          <img src="../assets/GATE1_1786167567.webp" alt="IMG" />
        </div>
        <div id='explore' className='styl-Explore'>
          <h2>Must Explore</h2>
        </div>
        <div className='style-ExCard'>
          <Grid container spacing={1}
            sx={{
              marginLeft: "9rem",
              marginRight: "5rem"
            }} >
            {explore.map((item) => (
              <Grid size={3} key={item}>
                <Card className='hoverOn1' sx={{ height: 100, backgroundColor: "#AD80D0", color: 'white', width: 210, borderRadius: '12px', }}>
                  <CardContent>
                    <Typography color="white" sx={{ fontWeight: 'bold', float: 'left' }} className='style-typo'>{item} </Typography>
                  </CardContent>
                  <div className='style-Arrow'>
                    <ArrowForwardIcon fontSize='medium' />
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <Grid container spacing={2} className='style-Anidiv'>
          <Grid size={6}>
            <h1 className="hero-heading">
              Need help with <br />
              <span className="rotating-text">
                <span>Skill Development?</span>
                <span>Industry Insight?</span>
                <span>Career Guidance?</span>
                <span>Interview Preparation?</span>
                <span>Learning Roadmaps?</span>
              </span>
            </h1>
            <div className='style-text'>
              <p>Connect with trusted experts, anytime. Get real answers,<br />
                real guidance, in real time</p>
            </div>
            <div className="start-Button2">
              <Button variant="contained">Explore Now</Button>
            </div>
          </Grid>
          <Grid size={6} >
            <img src="../assets/file3.svg" alt="Img2" className='style-Img2' />
          </Grid>
          <Grid size={12} spacing={2} sx={{ display: "flex" }}>
            {subMain.map((item, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  height: "50px",
                  borderRadius: "12px",
                  width: "14rem",
                  marginLeft: "2rem",
                  padding: "0.6rem 0 0",
                  fontSize: "0.8rem",
                  marginTop: "-4rem"
                }}
                className='style-img3'
              > <img src={item.imageSrc} alt="" /> {item.title}</Card>
            ))}
          </Grid>
        </Grid>
        <div className='style-ExploreT'>
          <h2>Explore</h2>
        </div>
        <Grid container spacing={2}
          sx={{
            marginLeft: "9rem",
            marginRight: "5rem"
          }}>
          {exploreCards.map((item, index) => (
            <Grid size={6} key={index}>

              <Card
                className='hoverOn'
                variant="outlined"
                sx={{
                  height: "190px",
                  borderRadius: "12px",
                  width: "30rem",
                  background: item.bgColor
                }}><p className='style-ExploreP' >{item.title}</p>
                <Button variant="outlined" className='style-ExploreBt'>View More <ArrowForwardIcon /> </Button></Card>
            </Grid>
          ))}
        </Grid>
        <Footer />
      </div>
    </main >
    </div >
  );
}
