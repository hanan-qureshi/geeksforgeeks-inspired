"use client";
import * as React from 'react';
import Header from '../header/header';
import TextField from '@mui/material/TextField';
import Footer from '../footer/footer';
import './courses.css';


export default function Home() {
    const [search, setSearch] = React.useState("");
    const [courses, setCourses] = React.useState<any[]>([]);
    React.useEffect(() => {
        fetch('/courses.json').then(res => res.json()).then(setCourses);
    }, []);
    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div id="firstpage1">
            <Header />

            <TextField value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            {filteredCourses.map((course) => (
                <div key={course.id}>
                    {course.title}
                </div>
            ))}

            <Footer />
        </div>
    );
}