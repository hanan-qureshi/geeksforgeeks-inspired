import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './header.css';

export default function Header() {
    const pages = ['', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [courseEL, setCourseEL] = React.useState<null | HTMLElement>(null);
    const [tutorialEL, setTutorialEL] = React.useState<null | HTMLElement>(null);
    const [practiceEL, setPracticeEL] = React.useState<null | HTMLElement>(null);
    const [jobsEL, setJobsEL] = React.useState<null | HTMLElement>(null);
    const courseOpen = Boolean(courseEL);
    const tutorialOpen = Boolean(tutorialEL);
    const practiceOpen = Boolean(practiceEL);
    const jobsOpen = Boolean(jobsEL);
    const subHeading = ["DSA", "Practice Problems", "C", "C++", "Java", "Python", "JavaScript", "Data Science", "Machine Learning", "Courses"];
    const courseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCourseEL(event.currentTarget);
    };
    const tutorialClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setTutorialEL(event.currentTarget);
    };
    const practiceClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setPracticeEL(event.currentTarget);
    };
    const jobsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setJobsEL(event.currentTarget);
    };
    const courseClose = () => {
        setCourseEL(null);
    };
    const tutorialClose = () => {
        setTutorialEL(null);
    };
    const practiceClose = () => {
        setPracticeEL(null);
    };
    const jobsClose = () => {
        setJobsEL(null);
    };
    return (
        <div id="header">
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="LOGO" />
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, ml: "1rem", color: 'black' }} className='search-icon'>
                            <SearchIcon />
                        </Box>
                        <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', width: '69%' }}>
                            <div id="coursesDiv" >
                                <Button
                                    id="courses"
                                    aria-controls={courseOpen ? 'coursesMenu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={courseOpen}
                                    onMouseOver={courseClick}
                                    sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold', textTransform: 'capitalize' }}
                                >
                                    Courses
                                </Button>
                                <Menu
                                    id={'coursesMenu'}
                                    anchorEl={courseEL}
                                    open={courseOpen}
                                    onClose={courseClose}
                                    slotProps={{
                                        list: {
                                            'aria-labelledby': 'courses',
                                        },
                                    }}
                                >
                                    <MenuItem onClick={courseClose}>DSA / Placements</MenuItem>
                                    <MenuItem onClick={courseClose}>DSA / Placements</MenuItem>
                                    <MenuItem onClick={courseClose}>Development</MenuItem>
                                    <MenuItem onClick={courseClose}>DevOps Course</MenuItem>
                                    <MenuItem onClick={courseClose}>GATE Prep</MenuItem>
                                    <MenuItem onClick={courseClose}>All Courses</MenuItem>
                                </Menu>
                            </div>
                            <div id="tutorialsDiv">
                                <Button
                                    id="tutorials"
                                    aria-controls={tutorialOpen ? 'tutorialMenu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={tutorialOpen}
                                    onMouseOver={tutorialClick}
                                    sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold', textTransform: 'capitalize' }}
                                >
                                    Tutorials
                                </Button>
                                <Menu
                                    id={'tutorialMenu'}
                                    anchorEl={tutorialEL}
                                    open={tutorialOpen}
                                    onClose={tutorialClose}
                                    slotProps={{
                                        list: {
                                            'aria-labelledby': 'tutorials',
                                        },
                                    }}
                                >
                                    <MenuItem onClick={tutorialClose}>Python</MenuItem>
                                    <MenuItem onClick={tutorialClose}>Java</MenuItem>
                                    <MenuItem onClick={tutorialClose}>DSA</MenuItem>
                                    <MenuItem onClick={tutorialClose}>ML & Data Science</MenuItem>
                                    <MenuItem onClick={tutorialClose}>Interview Corner</MenuItem>
                                    <MenuItem onClick={tutorialClose}>Programming Languages</MenuItem>
                                    <MenuItem onClick={tutorialClose}>Web Development</MenuItem>
                                    <MenuItem onClick={tutorialClose}>GATE</MenuItem>
                                    <MenuItem onClick={tutorialClose}>CS Subjects</MenuItem>
                                    <MenuItem onClick={tutorialClose}>DevOps</MenuItem>
                                    <MenuItem onClick={tutorialClose}>School Learning</MenuItem>
                                    <MenuItem onClick={tutorialClose}>Software and Tools</MenuItem>
                                </Menu>
                            </div>
                            <div id="practiceDiv">
                                <Button
                                    id="practice"
                                    aria-controls={practiceOpen ? 'practiceMenu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={practiceOpen}
                                    onMouseOver={practiceClick}
                                    sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold', textTransform: 'capitalize' }}
                                >
                                    Practice
                                </Button>
                                <Menu
                                    id={'practiceMenu'}
                                    anchorEl={practiceEL}
                                    open={practiceOpen}
                                    onClose={practiceClose}
                                    slotProps={{
                                        list: {
                                            'aria-labelledby': 'practice',
                                        },
                                    }}
                                >
                                    <MenuItem onClick={practiceClose}>Summer Skillup</MenuItem>
                                    <MenuItem onClick={practiceClose}>Practice Coding Problems</MenuItem>
                                    <MenuItem onClick={practiceClose}>Problem of the Day</MenuItem>
                                    <MenuItem onClick={practiceClose}>Connect 1:1 with Experts</MenuItem>
                                </Menu>
                            </div>
                            <div id="jobsDiv">
                                <Button
                                    id="jobs"
                                    aria-controls={practiceOpen ? 'jobsMenu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={jobsOpen}
                                    onMouseOver={jobsClick}
                                    sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold', textTransform: 'capitalize' }}
                                >
                                    Jobs
                                </Button>
                                <Menu
                                    id={'jobsMenu'}
                                    anchorEl={jobsEL}
                                    open={jobsOpen}
                                    onClose={jobsClose}
                                    slotProps={{
                                        list: {
                                            'aria-labelledby': 'jobs',
                                        },
                                    }}
                                >
                                    <MenuItem onClick={jobsClose}> Apply Now!</MenuItem>
                                    <MenuItem onClick={jobsClose}>Post Jobs</MenuItem>
                                    <MenuItem onClick={jobsClose}>Jobs Updates</MenuItem>
                                </Menu>
                            </div>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, ml: "7rem", mr: "0.5rem", color: 'black' }} className='search-icon'> <DarkModeIcon /> </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, mr: "1rem", color: 'black' }} className='search-icon'> <NotificationsIcon /></Box>
                        <Button variant="contained" sx={{ backgroundColor: 'black' }}>Sign In</Button>
                        <Box sx={{ flexGrow: 0 }}>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <div id="subHeading" className='sub-icon' >
                {subHeading.map((item) => (
                    <Button variant="text" key={item}>{item}</Button>
                ))}
            </div>
        </div>
    )
}