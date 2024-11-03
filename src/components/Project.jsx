import React from 'react';

const Resume = () => {
    return (
        <div style={resumeStyle}>
            <header style={headerStyle}>
                <h1>Your Name</h1>
                <p>Your Email | Your Phone Number | Your LinkedIn URL</p>
            </header>
            <section style={sectionStyle}>
                <h2>Summary</h2>
                <p>A brief summary of your qualifications and career goals.</p>
            </section>
            <section style={sectionStyle}>
                <h2>Experience</h2>
                <ul>
                    <li>
                        <strong>Job Title</strong> at Company Name
                        <br />
                        <em>Month Year - Month Year</em>
                        <p>Responsibilities and achievements in this role.</p>
                    </li>
                    <li>
                        <strong>Job Title</strong> at Company Name
                        <br />
                        <em>Month Year - Month Year</em>
                        <p>Responsibilities and achievements in this role.</p>
                    </li>
                </ul>
            </section>
            <section style={sectionStyle}>
                <h2>Education</h2>
                <ul>
                    <li>
                        <strong>Degree</strong> in Field of Study
                        <br />
                        <em>University Name, Year</em>
                    </li>
                </ul>
            </section>
            <section style={sectionStyle}>
                <h2>Skills</h2>
                <ul>
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                </ul>
            </section>
            <footer style={footerStyle}>
                <p>References available upon request.</p>
            </footer>
        </div>
    );
};

const resumeStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
};

const headerStyle = {
    borderBottom: '2px solid #333',
    marginBottom: '20px',
};

const sectionStyle = {
    marginBottom: '20px',
};

const footerStyle = {
    borderTop: '1px solid #333',
    paddingTop: '10px',
    textAlign: 'center',
};

export default Resume;
