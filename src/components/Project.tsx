import React from "react";
// import mock01 from '../assets/images/mock01.png';
// import mock02 from '../assets/images/mock02.png';
// import mock03 from '../assets/images/mock03.png';
// import mock04 from '../assets/images/mock04.png';
// import mock05 from '../assets/images/mock05.png';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/ishapatil202/Power-BI-project" target="_blank" rel="noreferrer"><img src={img1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ishapatil202/Power-BI-project" target="_blank" rel="noreferrer"><h2></h2></a>
                <p>Developed an interactive COVID-19 dashboard using Power BI, Power Query, and DAX to visualize global trends, simulate ETL workflows, and deliver actionable healthcare insights through dynamic maps and KPIs.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ishapatil202/Smart-Attendance-System" target="_blank" rel="noreferrer"><img src={img2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ishapatil202/Smart-Attendance-System" target="_blank" rel="noreferrer"><h2></h2></a>
                <p>Designed an AI-powered Smart Attendance System using YOLOv5 and OpenCV, automating real-time face detection, data ingestion, and robust attendance tracking for scalable deployments.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ishapatil202/campus-placement-system" target="_blank" rel="noreferrer"><img src={img3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ishapatil202/campus-placement-system" target="_blank" rel="noreferrer"><h2></h2></a>
                <p>Designed and developed a full-stack Campus Placement System using Node.js, Express, EJS, and MongoDB, streamlining student registrations, company job postings, and placement officer workflows with a scalable and secure deployment.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ishapatil202/leetcode-solver-visualizer" target="_blank" rel="noreferrer"><img src={img4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ishapatil202/leetcode-solver-visualizer" target="_blank" rel="noreferrer"><h2></h2></a>
                <p>Created an interactive DSA visualizer with dynamic step-by-step animations and integrated ChatGPT assistance for real-time problem-solving guidance. Tech Stack: JavaScript, OpenAI API, Frontend Engineering.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ishapatil202/Meal-planner-app" target="_blank" rel="noreferrer"><img src={img5} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ishapatil202/Meal-planner-app" target="_blank" rel="noreferrer"><h2></h2></a>
                <p>Developed a full-stack Meal Planner App using Node.js, MongoDB, Svelte, and Spoonacular API, featuring JWT-secured authentication, dynamic meal plan management, and real-time search integration.</p>
            </div>
            {/* <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Developed a full-stack Meal Planner App using Node.js, MongoDB, Svelte, and Spoonacular API, featuring JWT-secured authentication, dynamic meal plan management, and real-time search integration.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;