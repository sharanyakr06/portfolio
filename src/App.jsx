import React from 'react';
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt, FaReact, FaDatabase, FaLaptopCode, FaUser, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const resumeUrl = import.meta.env.BASE_URL + 'resumekr.pdf';
const photoUrl = import.meta.env.BASE_URL +'photo.jpeg';
const linkedinUrl = "https://www.linkedin.com/in/sharanyakr";
const githubUrl = "https://github.com/sharanyakr06";

const projects = [
  {
    title: 'Food Fusion',
    description: 'A responsive website for a specific food shop where users can view available food items, prices, and calculate total cost before visiting the shop.',
    demo: 'https://foodfusion-coral.vercel.app',
    github: 'https://github.com/sharanyakr06/FOODFUSION',
    image: import.meta.env.BASE_URL + 'w1.png',
  },
];

const skills = ['HTML','CSS', 'MySQL', 'Java', 'C Programming','Javascript' ,'React'];

const education = [
  { title: 'Master of Computer Applications (MCA)', institution: 'NMAM Institute of Technology Nitte', period: '2025 - Pursuing',percentage: '8.69 SGPA' },
  { title: 'Bachelor of Computer Applications (BCA)', institution: 'Vivekananda College of Arts, Science and Commerce Puttur', period: '2022 - 2025',percentage: '8.7 CGPA' },
  { title: 'Senior Secondary School(12)', institution: 'Jawahar Navodaya Vidyalaya Periye', period: '2020 - 2022',percentage: '85%' },
  { title: 'Secondary School(10)', institution: 'Jawahar Navodaya Vidyalaya Periye', period: '2019 - 2020',percentage: '69%' },
];

const certificates = [
  {
    title: 'Cloud Computing and Distributed Systems ',
    description: 'NPTEL Certification offered by IIT Kanpur ' ,
    image: import.meta.env.BASE_URL + 'ccds.jpeg',
  },
  {
    title: 'Oracle Cloud Infrastructure',
    description: 'OCI Certification offered by Oracle University',
    image: import.meta.env.BASE_URL + 'oci.jpeg',
  },
  {
    title: 'Agile Explorer',
    description: 'Certificate credential issued by IBM SkillsBuild',
    image: import.meta.env.BASE_URL + 'agilexplorer.jpeg',
  },
  {
    title: 'AI Literacy',
    description: ' Certificate issued by IBM SkillsBuild',
    image: import.meta.env.BASE_URL + 'AILiteracy.jpeg',
  },
];

const achievements = [
  {
    title: 'NCC A Certificate',
    description: 'Secured A certificate from K Battalion Payyanur in 2020 ',
    image: import.meta.env.BASE_URL + 'nccA.jpeg',
  },
  {
    title: 'NCC B Certificate',
    description: 'Secured B certificate from KAR Battalion Madikeri in 2024 ',
    image: import.meta.env.BASE_URL + 'nccB.jpeg',
  },
  {
    title: 'NCC C Certificate',
    description: 'Secured C certificate from KAR Battalion Madikeri in 2025',
    image: import.meta.env.BASE_URL + 'nccC.jpeg',
  },
  {
    title: 'CATC 2024 Certificate',
    description: 'Attended Combined Annual Training Camp 2024 held at KPT Mangalore',
    image: import.meta.env.BASE_URL + 'CATC24.jpeg',
  },
  {
    title: 'CATC 2025 Certificate',
    description: 'Attended Combined Annual Training Camp 2025 held at Nehru College Sullia',
    image: import.meta.env.BASE_URL + 'CATC25.jpeg',
  },
];

const toggleMenu = () => {
  document.getElementById("navLinks").classList.toggle("active");
};

export default function App() {
  const [selectedCert, setSelectedCert] = React.useState(null);
  const [selectedNCC, setSelectedNCC] = React.useState(null);

  return (
    <div className="page-shell">

      <nav className="navbar">
  <div className="logo">Sharanya</div>

  <div className="menu-toggle" onClick={() => {
    document.getElementById("navLinks").classList.toggle("active");
  }}>
    ☰
  </div>

  <ul className="nav-links" id="navLinks">
  <li><a href="#about" onClick={toggleMenu}>About</a></li>
  <li><a href="#education" onClick={toggleMenu}>Education</a></li>
  <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
  <li><a href="#certificates" onClick={toggleMenu}>Certificates</a></li>
  <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
  <li><a href="#achievements" onClick={toggleMenu}>Achievements</a></li>
  <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
  </ul>
</nav>

      {/* HERO SECTION */}
      <header className="hero-section">
        <div className="hero-copy">
          <h1 className="main-name">Hey👋 I am Sharanya K R</h1>
          <h2 className="typing-line">
  I'm a{' '}
  <span className="typing-text">
    <Typewriter
      words={['MCA Student', 'Frontend Developer', 'Web Developer']}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</h2>
          <p>
            I build modern web applications with React, clean UX, and responsive design. Explore my projects,
            achievements and get in touch.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={resumeUrl} download>
              <FaDownload /> Download Resume
            </a>
            <a className="secondary-button" href="#contact">
              Contact Me
            </a>
          </div>
          <div className="hero-details">
            <div><FaEnvelope /> <a href="mailto:sharanyakr105@gmail.com">sharanyakr105@gmail.com</a></div>
            <div><FaPhone /> +91 7034899346</div>
            <div><FaMapMarkerAlt /> Kerala, India</div>
          </div>
          <div className="social-icons">
  <a href={linkedinUrl} target="_blank" rel="noreferrer">
    <FaLinkedin />
  </a>
  <a href={githubUrl} target="_blank" rel="noreferrer">
    <FaGithub />
  </a>
</div>

        </div>
        <div className="hero-image">
          <img src={photoUrl} alt="Sharanya profile" />
        </div>
      </header>

      <main>

        {/* ABOUT SECTION */}
        <section id="about" className="section-block alt-background">
          <div className="section-heading">
            <span>About Me</span>
          </div>
          <div className="about-layout">
            <div className="about-icon"><FaUser /></div>
            <div className="about-text">
              <p>
                I am Sharanya K R, MCA student at NMAM Institute of Technology Nitte,
                 passionate about learning and building user-friendly web applications.
                  I am eager to gain knowledge in software development and improve my
                   technical skills in this field. I enjoy frontend development and 
                   creating simple, interactive user experiences. 
                   </p>
                   <p>
                I'm currently looking for opportunities where I can apply my skills, 
                contribute to work on real world projects, continue learning and grow as a developer 
                through hands on experience.
              </p>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="section-block">
          <div className="section-heading">
            <span>Education</span>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <div key={item.title} className="education-card">
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
                <span>{item.period}</span>
                {item.percentage && (
                  <div className="edu-percentage">
                    {item.percentage}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section-block alt-background">
          <div className="section-heading">
            <span>Skills</span>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-top">
                <FaLaptopCode /> 
                <p>HTML</p>
                <span>85%</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-top">
                <FaLaptopCode /> 
                <p>CSS</p>
                <span>85%</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-top">
                <FaDatabase /> 
                <p>MySQL</p>
                <span>80%</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-top">
                <FaLaptopCode /> 
                <p>Java</p>
                <span>70%</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-top">
                <FaLaptopCode /> 
                <p>C</p>
                <span>70%</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-top">
                <FaLaptopCode /> 
                <p>JavaScript</p>
                <span>60%</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-top">
                <FaReact /> 
                <p>React</p>
                <span>50%</span>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATES SECTION */}
        <section id="certificates" className="section-block">
          <div className="section-heading">
            <span>Certificates & Certifications </span>
          </div>

          <div className="certificates-grid">
            {certificates.map((cert) => (
              <div key={cert.title} className="cert-card">
                <div className="cert-icon"></div>
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
                <button 
                  className="view-cert-btn"
                  onClick={() => setSelectedCert(cert)}
                >
                  VIEW CERTIFICATE →
                </button>
              </div>
            ))}
          </div>

          {/* CERTIFICATE MODAL */}
          {selectedCert && (
            <div className="cert-modal" onClick={() => setSelectedCert(null)}>
              <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={() => setSelectedCert(null)}>✕</button>
                <img src={selectedCert.image} alt={selectedCert.title} />
                <h3>{selectedCert.title}</h3>
              </div>
            </div>
          )}
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section-block alt-background">
          <div className="section-heading">
            <span>Projects</span>
          </div>

          <div className="cards-grid">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <div className="card-icon"><FaLaptopCode /></div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                 <div className="project-links">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo <FaExternalLinkAlt />
                </a>

                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub <FaGithub />
                </a>
              </div>
              </article>
            ))}
          </div>
        </section>

         {/* ACHIEVEMENTS SECTION */}
        <section id="achievements" className="section-block">
          <div className="section-heading">
            <span>Achievements</span>
          </div>

          <div className="certificates-grid">
  {achievements.map((item) => (
    <div key={item.title} className="cert-card">
      <div className="cert-icon"></div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>

      <button 
        className="view-cert-btn"
        onClick={() => setSelectedNCC(item)}
      >
        VIEW CERTIFICATE →
      </button>
    </div>
  ))}
</div>

          {/* ACHIEVEMENTS MODAL */}
          {selectedNCC && (
            <div className="cert-modal" onClick={() => setSelectedNCC(null)}>
              <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={() => setSelectedNCC(null)}>✕</button>
                <img src={selectedNCC.image} alt={selectedNCC.title} />
                <h3>{selectedNCC.title}</h3>
              </div>
            </div>
          )}
        </section>


        {/* CONTACT SECTION */}
        <section id="contact" className="section-block contact-block">
          <div className="section-heading">
            <span>Contact</span>
            <h2>Let's Connect</h2>
          </div>
          <div className="contact-layout">
            <div className="contact-copy">
              <p>Have an idea or opportunity ? Let’s connect!</p>
              
              <div className="contact-info">
                <div><strong>Email:</strong> sharanyakr105@gmail.com</div>
                <div><strong>Phone:</strong> +91 7034899346</div>
              </div>
              
            </div>
            <form className="contact-form" action="https://api.web3forms.com/submit" method="post">

            <input type="hidden" name="access_key" value="247acc9e-bdf2-441a-a41b-391ea1e90f7b" />
            <input type="hidden" name="subject" value="New Message from Portfolio" />
            <input type="hidden" name="from_name" value="Portfolio Contact" />
            <input type="hidden" name="redirect" value="https://sharanyakr06.github.io/portfolio/" />

              <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
              <label>Email<input type="email" name="email" placeholder="Your email" required /></label>
              <label>Message<textarea name="message" rows="5" placeholder="Write your message" required /></label>
              <button type="submit" className="primary-button">Send Message</button>
            </form>
          </div>
        </section>

      </main>
      <footer className="page-footer">
  <div className="footer-top-line"></div>

  <div className="footer-social">
    <a href={linkedinUrl} target="_blank" rel="noreferrer">
      <FaLinkedin />
    </a>
    <a href="mailto:sharanyakr105@gmail.com">
      <FaEnvelope />
    </a>
    <a href={githubUrl} target="_blank" rel="noreferrer">
      <FaGithub />
    </a>
  </div>

  <p className="footer-text">
    © 2026 Sharanya K R • All rights reserved 
  </p>
</footer>
    </div>
  );
}
