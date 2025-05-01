import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman",
    "Svelte",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Pandas",
];

const labelsThird = [
    "OpenAI",
    "Python",
    "Scikit-Learn",
    "TensorFlow",
    "PyTorch",
    "Pandas",
    "NumPy",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have experience designing and developing scalable web applications, integrating frontend and backend services, and managing databases. My expertise includes React, Svelte, and Node.js, and I adhere to industry best practices in software architecture, development, and deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud & DevOps</h3>
                    <p>I have experience in cloud computing, containerization, and DevOps automation. I have worked with AWS, GCP, and Azure, setting up CI/CD pipelines, managing containerized applications using Docker and Kubernetes, and deploying scalable architectures.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI/ML & Data Science</h3>
                    <p>I specialize in Machine Learning, Deep Learning, and AI-driven applications. I have worked on SVM classification, recommendation systems, embeddings, and clustering, optimizing models for performance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;