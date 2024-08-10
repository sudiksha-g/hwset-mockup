import React from 'react';
import ProjectCard from './ProjectCard.js'

function Projects() {
    const projects = [
        {
            name: "Project Name 1",
            authorizedUsers: "",
            hwSets: [
                { name: "HWSet1", score: "50/100" },
                { name: "HWSet2", score: "0/100" }
            ],
            isJoined: false
        },
        {
            name: "Project Name 2",
            authorizedUsers: "",
            hwSets: [
                { name: "HWSet1", score: "50/100" },
                { name: "HWSet2", score: "25/100" }
            ],
            isJoined: false
        },
        {
            name: "Project Name 3",
            authorizedUsers: "",
            hwSets: [
                { name: "HWSet1", score: "0/100" },
                { name: "HWSet2", score: "0/100" }
            ],
            isJoined: false
        }
    ];

    const handleToggleJoin = (projectName, joinedStatus) => {
        // Logic to handle join/leave based on projectName and joinedStatus
        console.log(`${joinedStatus ? 'Leaving' : 'Joining'} ${projectName}`);
    };

    return (
        <div>
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    projectName={project.name}
                    authorizedUsers={project.authorizedUsers}
                    hwSets={project.hwSets}
                    isJoined={project.isJoined}
                    onToggleJoin={() => handleToggleJoin(project.name, project.isJoined)}
                />
            ))}
        </div>
    );
}

export default Projects;