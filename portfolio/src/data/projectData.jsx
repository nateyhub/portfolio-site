import mydashThumb from '../assets/images/projects/mydash.png'
import dataAnnotatorThumb from '../assets/images/projects/data-annotator.png'
import classifiThumb from '../assets/images/projects/classifi.png'
import noexcusesThumb from '../assets/images/projects/noexcuses.jpg'
import mindmateThumb from '../assets/images/projects/mindmate.png'

export const projects = [
    {
        name: "myDash",
        thumbnail: mydashThumb,
        summary: "My take on web browser \"New Tab\" page extensions",
        tags: [
            { text: "Solo project" },
            { text: "JavaScript", imgSrc: 'js.svg' },
            { text: "Firebase", imgSrc: 'firebase.svg' },
        ],
        desc: "This was a project for a software development class in 2023",
        media: {
            videos: ["https://www.youtube.com/embed/aOiqcToGf5k?si=AiJSn2D98cYzBoxo"],
            images: []
        }
    },
    {
        name: "Data Annotator Tool",
        thumbnail: dataAnnotatorThumb,
        summary: "A yearlong group research project centred around a Minimum Viable Product for contextualising data for training machine learning algorithms",
        tags: [
            { text: "Group project" },
            { text: "JavaScript", imgSrc: 'js.svg' }, { text: "Firebase", imgSrc: 'firebase.svg' },
        ],
        desc: "This was a project for a software development class in 2023",
        media: {
            videos: ["https://www.youtube.com/embed/aOiqcToGf5k?si=AiJSn2D98cYzBoxo"],
            images: []
        }
    },
    {
        name: "Classifi",
        thumbnail: classifiThumb,
        summary: "A personal recreation of the Data Annotator Tool app",
        tags: [
            { text: "Solo project" },
            { text: "JavaScript", imgSrc: 'js.svg' }, { text: "Firebase", imgSrc: 'firebase.svg' },
            { text: "WIP", imgSrc: 'wip.svg' },
        ],
        desc: "",
        media: {
            videos: ["https://www.youtube.com/embed/aOiqcToGf5k?si=AiJSn2D98cYzBoxo"],
            images: []
        }
    },
    {
        name: "NoExcuses",
        thumbnail: noexcusesThumb,
        summary: "A mobile payment tracking app for myself and my partner",
        tags: [
            { text: "Group project" },
            { text: "React Native", imgSrc: 'react.svg' },
            { text: "SupaBase", imgSrc: 'supabase.svg' },
            { text: "VS Code", imgSrc: 'visual-studio.svg' },
        ],
        desc: "This was a project for a software development class in 2023",
        media: {
            videos: ["https://www.youtube.com/embed/aOiqcToGf5k?si=AiJSn2D98cYzBoxo"],
            images: []
        }
    },
    {
        name: "MindMate",
        thumbnail: mindmateThumb,
        summary: "An Android group project with a focus on providing mental health support through AI-generated affirmations",
        tags: [
            { text: "Group project" },
            { text: "Firebase", imgSrc: "firebase.svg" },
            { text: "Java", imgSrc: "java.svg" }, { text: "Android Studio", imgSrc: 'android-studio.svg' },
        ],
        desc: "This was a project for a software development class in 2023",
        media: {
            videos: ["https://www.youtube.com/embed/aOiqcToGf5k?si=AiJSn2D98cYzBoxo"],
            images: []
        }
    },
]