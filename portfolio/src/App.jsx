import { useEffect, useRef, useState } from 'react'
import './App.css'
import './projects.css'
import './modal.css'
import Tag from './components/Tag'
import Card from './components/Card'
import { ModalBackdrop, Modal } from './components/Modal'
import { projects } from './data/projectData'
import githubIcon from './assets/images/socials/GitHub.png'
import gmailIcon from './assets/images/socials/Gmail.png'
import linkedInIcon from './assets/images/socials/LinkedIn.png'
import resumeIcon from './assets/images/socials/Resume.png'
import logo from './assets/images/logo.svg'

function App() {
  const [focusedElement, setFocusedElement] = useState(null)
  const messageNameRef = useRef()
  const messageEmailRef = useRef()
  const messageContentRef = useRef()

  const [selectedProject, setSelectedProject] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const handleCloseModal = (a) => {
    console.log("Closing")
    setModalVisible(false)
    setSelectedProject(null)
  }

  const handleChooseProject = (p) => {
    console.log("Choosing", p)
    setSelectedProject(p)
  }

  useEffect(() => {
    console.log("Selected project", selectedProject)
    if (selectedProject) setModalVisible(true)
  }, [selectedProject])

  const handleEmailMessage = (e) => {
    e.preventDefault();
    const sendTo = "nathansellar15@gmail.com"


    let messageNameValue = messageNameRef.current.value
    let messageEmailValue = messageEmailRef.current.value
    let messageContentValue = messageContentRef.current.value

    console.log(messageNameValue, messageEmailValue, messageContentValue)

    if (!messageNameValue || !messageEmailValue || !messageContentValue) {
      alert("Please enter all fields")
      return;
    }

    let subject = encodeURIComponent("Enquiry from " + messageNameValue)
    const sendOff = "\n\nYou can reach me at " + messageEmailValue + "."
    const content = encodeURIComponent(messageContentValue + sendOff)
    window.location.href = `mailto:${sendTo}?&subject=${subject}&body=${content}`;
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let sec = entry.target.getAttribute('data-section')
          document.querySelector(`#${sec}_link`).classList.add('visible')
        } else {
          let sec = entry.target.getAttribute('data-section')
          document.querySelector(`#${sec}_link`).classList.remove('visible')
        }
      })
    })
    const sections = document.querySelectorAll('.section-heading')
    sections.forEach((el) => {
      observer.observe(el);
    })
  }, [])


  const handleNavigate = (destinationID) => {
    console.log(destinationID)
    document.getElementById(`${destinationID}`).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }


  return (
    <>
      {modalVisible && <ModalBackdrop handleClose={handleCloseModal} />}
      {modalVisible && <Modal project={selectedProject} handleClose={handleCloseModal} />}

      <nav>
        <img src={logo} className='logo' />
        <h1 className='main-heading'>Nathan Sellar</h1>
        <h2>Developer</h2>
        <div className="socials-wrapper">
          <a href="https://github.com/nateyhub" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub page" />
            <span>GitHub</span>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={gmailIcon} alt="GitHub page" />
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/nathan-sellar-9342282ba/" target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} alt="GitHub page" />
            <span>LinkedIn</span>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={resumeIcon} alt="Resume" />
            <span>Resume</span>
          </a>

        </div>
        <ul>
          <li id="about-me_link" data-icon="-" onClick={() => handleNavigate('about-me')}>About Me</li>
          <li id="education_link" data-icon="-" onClick={() => handleNavigate('education')}>Education</li>
          <li id="projects_link" data-icon="-" onClick={() => handleNavigate('projects')}>Projects</li>
          <li id="contact_link" data-icon="-" onClick={() => handleNavigate('contact')}>Contact</li>
        </ul>
      </nav>
      <main id="main">
        <div className="wrapper">

          <section id='about-me'>
            <div className='about-wrapper'>
              <div id="bio">
                <h1 className='section-heading' data-section="about-me">About Me</h1>
                {/* <img className='portrait' id="portrait" src="./src/assets/images/portrait_main_v3.png" alt="" /> */}
                <p>
                  My name is <strong>Nathan Sellar</strong>, and I am a passionate <strong>web and software developer</strong> with a strong interest in creating innovative solutions.
                  I have experience in various programming languages and frameworks, and I enjoy working on projects that challenge me to learn and grow as a developer.
                </p>
                <p>
                  I attained a bachelor's degree in <strong>Computer Science and Information Sciences</strong> at the Auckland University of Technology. In addition to my technical skills, I am a team player who values collaboration and communication.
                  I believe that the best solutions come from sharing ideas, working together, and building strong relationships with my peers .
                </p>
                <p>
                  When I'm not coding, I enjoy staying physically active through soccer, tennis, hiking, and the gym; and watch content exploring new developments in web development.
                  I also have an interest in <strong>UX/UI design</strong>; all user interfaces in the projects below have been designed primarily by me (with some valuable input from teammates), and I like to think critically about how the UX of a project affects the user's ability to achieve what they want.
                </p>
                <p>
                  I am always looking for new opportunities to expand my knowledge and skills, and I am excited to see where my career as a developer will take me.
                </p>
              </div>
              <h2>Skills</h2>
              <div id="skills">
                <div className="skill-group">
                  <h3>IDEs & Tools</h3>
                  <div className="skills-wrapper">
                    <Tag text={"VS Code"} iconSrc={'visual-studio.svg'} />
                    <Tag text={"Visual Studio"} iconSrc={'visual-studio.svg'} />
                    <Tag text={"Figma"} iconSrc={'figma.svg'} />
                    <Tag text={"Android Studio"} iconSrc={'android-studio.svg'} />
                    <Tag text={"Anaconda"} iconSrc={'anaconda.svg'} />
                    <Tag text={"Eclipse"} iconSrc={'eclipse.svg'} />
                    <Tag text={"Apache Netbeans"} iconSrc={'netbeans.svg'} />
                    <Tag text={"RStudio"} iconSrc={'rstudio.svg'} />
                  </div>
                </div>
                <div className="skill-group">
                  <h3>Programming Languages, Frameworks & Libraries </h3>
                  <div className="skills-wrapper">
                    <Tag text={"JavaScript"} iconSrc={'js.svg'} type={'language'} />
                    <Tag text={"React (JS & Native)"} iconSrc={'react.svg'} type={'language'} />
                    <Tag text={"Java"} iconSrc={'java.svg'} type={'language'} />
                    <Tag text={"JSON"} iconSrc={'json.svg'} type={'language'} />
                    <Tag text={"UX/UI Design"} iconSrc={'ux-ui.svg'} type={'language'} />
                    <Tag text={"Python"} iconSrc={'python.svg'} type={'language'} />
                    <Tag text={"C/C++"} iconSrc={'c.svg'} type={'language'} />
                    <Tag text={"PHP"} iconSrc={'php.svg'} type={'language'} />
                  </div>
                </div>
                <div className="skill-group">
                  <h3>Database Management</h3>
                  <div className="skills-wrapper">
                    <Tag text={"Firebase"} iconSrc={'firebase.svg'} type={'database'} />
                    <Tag text={"PostgreSQL"} iconSrc={'postgre.svg'} type={'database'} />
                    <Tag text={"SupaBase"} iconSrc={'supabase.svg'} type={'database'} />
                    <Tag text={"SQL Developer"} iconSrc={'sql.svg'} type={'database'} />
                    <Tag text={"MySQL"} iconSrc={'sql.svg'} type={'database'} />
                  </div>
                </div>
                <div className="skill-group">
                  <h3>Soft skills</h3>
                  <div className="skills-wrapper">
                    <Tag text={"Friendly"} type={'soft-skill'} />
                    <Tag text={"Hard-working"} type={'soft-skill'} />
                    <Tag text={"Team worker"} type={'soft-skill'} />
                    <Tag text={"Strong communicator"} type={'soft-skill'} />
                    <Tag text={"Dependable"} type={'soft-skill'} />
                    <Tag text={"Adaptable"} type={'soft-skill'} />
                    <Tag text={"User-focused"} type={'soft-skill'} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='education'>
            <h1 className='section-heading' data-section="education">Education</h1>
            <div className='row'>
              <div className="col">
                <h2 className='year'>
                  2022 - 2025
                </h2>
              </div>
              <div className="col">
                <h1>
                  Auckland University of Technology
                </h1>
                <h2>Computer Science & Information Systems</h2>
                <h3>Majored in Software Development</h3>
                <h3>Minored in Data Science</h3>
              </div>
            </div>
            <div className='row'>
              <div className="col">
                <h2 className='year'>
                  2014 - 2016
                </h2>
              </div>
              <div className="col">
                <h1>
                  Hebron College
                </h1>
                <h2>NCEA Level <span style={{ 'fontFamily': 'DM Sans' }}>3</span></h2>
                <h3>Achieved with merit</h3>
              </div>
            </div>
          </section>
          <section id='projects'>
            <h1 className='section-heading' data-section="projects">Projects</h1>
            <div className="project-list-wrapper">
              {projects && projects.map((project) => {
                return (
                  <Card
                    key={project.name}
                    project={project}
                    tags={project.tags}
                    // projectName={project.name}
                    // projectSummary={project.summary}
                    // projectDesc={project.desc}
                    // imgSrc={project.thumbnail}
                    handleClick={handleChooseProject}
                  />
                )
              })}
            </div>
          </section>
          <section id='contact'>
            <h1 className='section-heading' data-section="contact">Contact</h1>
            <p>Get in touch with me through email by writing a message below</p>
            <form onSubmit={handleEmailMessage}>
              <div className="form-wrapper">
                <div className="form-group">
                  <div className="input-wrapper">
                    <label htmlFor="name">Name</label>
                    <input ref={messageNameRef} id='name' type='text' />
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input ref={messageEmailRef} id="email" type='email' />
                  </div>
                </div>
                <div className="form-group" id='message-group'>
                  <div className="input-wrapper">
                    <label htmlFor="message">Message</label>
                    <textarea ref={messageContentRef} id='message' ></textarea>
                  </div>
                </div>
              </div>
              <input type="submit" value="Send email" />
            </form>
          </section>
        </div>

      </main>

    </>
  )
}

export default App
