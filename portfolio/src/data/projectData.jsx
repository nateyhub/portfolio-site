import mydashThumb from '../assets/images/projects/mydash.png'
import classifiThumb from '../assets/images/projects/classifi.png'
import noexcusesThumb from '../assets/images/projects/noexcuses.jpg'

import dataAnnotatorThumb from '../assets/images/projects/data-annotator.png'
import daImg1 from '../assets/images/projects/data-annotator/annotation.png'
import daImg2 from '../assets/images/projects/data-annotator/poster.jpg'
import daImg3 from '../assets/images/projects/data-annotator/landing.png'

import mindmateThumb from '../assets/images/projects/mindmate.png'
import mindmateVid from '../assets/videos/mindmate.mp4'
import mindmateImg1 from '../assets/images/projects/mindmate/map.png'
import mindmateImg2 from '../assets/images/projects/mindmate/chat.png'
import mindmateImg3 from '../assets/images/projects/mindmate/trello.png'
import mindmateImg4 from '../assets/images/projects/mindmate/meditation.png'

export const projects = [

    {
        name: "Data Annotator Tool",
        thumbnail: dataAnnotatorThumb,
        summary: "A yearlong group research project centred around a Minimum Viable Product for contextualising data for training machine learning algorithms",
        tags: [
            { text: "Group project", imgSrc: "group.svg" },
            { text: "JavaScript", imgSrc: 'js.svg' },
            { text: "Firebase", imgSrc: 'firebase.svg' },
        ],
        desc: `<p>The Data Annotator Tool was a cloud-based JS web app built as part of a yearlong research paper assignment, serving to streamline the annotation of unstructured text for Named Entity Recognition (NER). 
        It allowed project managers to upload datasets, define annotation classes, invite annotators to their team and assign them work, review completed annotations, and export the labelled data as JSON to use in training AI models.</p>
        <p>We used Firebase Realtime Database to store information about users, projects, uploaded text file names, created classes, and annotations. Additionally, Firebase Authentication was used to handle user account creation.
        <p>This project was completed </p>
        `,
        media: [
            { type: "image", src: dataAnnotatorThumb },
            { type: "image", src: daImg1 },
            { type: "image", src: daImg2 },
            { type: "image", src: daImg3 },
        ]
    },
    {
        name: "Classifi",
        thumbnail: classifiThumb,
        summary: "A personal recreation of the Data Annotator Tool app",
        tags: [
            {
                text: "Solo project", imgSrc: "solo.svg"
            },
            { text: "JavaScript", imgSrc: 'js.svg' }, { text: "Firebase", imgSrc: 'firebase.svg' },
            { text: "WIP", imgSrc: 'wip.svg' },
        ],
        desc: "The UI design is lightly inspired by the Neo-brutalism trend.",
        media: [
            { type: "video", src: "https://www.youtube.com/embed/aOiqcToGf5k?si=AiJSn2D98cYzBoxo" },
            { type: "image", src: "https://www.youtube.com/embed/aOiqcToGf5k?si=AiJSn2D98cYzBoxo" }
        ]
    },
    {
        name: "NoExcuses",
        thumbnail: noexcusesThumb,
        summary: "A mobile payment tracking app for myself and my partner",
        tags: [
            { text: "Group project", imgSrc: "group.svg" },
            { text: "React Native", imgSrc: 'react.svg' },
            { text: "SupaBase", imgSrc: 'supabase.svg' },
            { text: "VS Code", imgSrc: 'visual-studio.svg' },
        ],
        desc: "This was a project for a software development class in 2023",
        media: [
            { type: "video", src: "https://www.youtube.com/embed/aOiqcToGf5k?si=AiJSn2D98cYzBoxo" },
            { type: "image", src: "https://www.youtube.com/embed/aOiqcToGf5k?si=AiJSn2D98cYzBoxo" }
        ]
    },
    {
        name: "myDash",
        thumbnail: mydashThumb,
        summary: "My take on web browser \"New Tab\" page extensions",
        tags: [
            {
                text: "Solo project", imgSrc: "solo.svg"
            },
            { text: "JavaScript", imgSrc: 'js.svg' },
            { text: "Firebase", imgSrc: 'firebase.svg' },
        ],
        desc: "This was a project for a software development class in 2023",
        media: [
            { type: "video", src: "https://www.youtube.com/embed/aOiqcToGf5k?si=AiJSn2D98cYzBoxo" },
            { type: "image", src: "https://www.youtube.com/embed/aOiqcToGf5k?si=AiJSn2D98cYzBoxo" }
        ]
    },
    {
        name: "MindMate",
        thumbnail: mindmateThumb,
        summary: "An Android group project with a focus on providing mental health support through AI-generated affirmations",
        tags: [
            { text: "Group project", imgSrc: "group.svg" },
            { text: "Firebase", imgSrc: "firebase.svg" },
            { text: "Java", imgSrc: "java.svg" }, { text: "Android Studio", imgSrc: 'android-studio.svg' },
        ],
        desc: `<p>In my COMP602 Software Development Practice paper, we were challenged to spend the semester creating a large application in a team.
        We were allowed to choose our teammates and the project idea to build, as well as use any appropriate programming technology, as long as we challenged ourselves to learn new ones.</p>
        <p>My friend had an interesting idea: a chatbot named "MindMate". The primary goal was to build an Android app with an interface that allowed users to  
        chat with MindMate and receive mental health support at any time, as if they were talking to a friend.</p>
        <p>Building upon the AI theme, I suggested we also feature "Meditation Plans." These would be AI-generated affirmations pertaining to a topic of the user's choice, like dealing with anxiety, stress, loneliness etc.
        Once those were generated by ChatGPT, I sent them to OpenAI's text-to-speech service to produce an audio clip.
        Each time the user chose a topic, these affirmations were presented on the screen and read to them.</p>
        <p>We were required to use Agile Scrum as our framework, and so collectively planned the project on a Trello board and followed timeboxed sprints.
        We wrote user stories to represent app features, stored documents that recorded minutes of each team meeting, and used columns on the board to track the progress stages of the user stories.</p>
        <p>Throughout this paper, I built my skills in: project planning; team management; Android app development; Firebase Realtime Database, Storage, and Authentication; and OpenAI API.</p>
        <p>This project challenged my perspective on AI in the context of mental health. Without being fully aware of it, I had learned to consider the ethical implications and threats it could bring to vulnerable users and even ourselves in a legal sense if we had marketed it.</p>
        `,

        media: [
            {
                type: "video",
                src: mindmateVid,
                thumb: mindmateThumb
            },
            {
                type: "image",
                src: mindmateImg1,
            },
            {
                type: "image",
                src: mindmateImg2,
            },
            {
                type: "image",
                src: mindmateImg4,
            },
            {
                type: "image",
                src: mindmateImg3,
            },
        ]
    },
]