import React from 'react'

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-conent grey-text text-darken-3">
                <span className="card-title">
                    {project.title}
                </span>
                <p>Posted by the Net Ninja</p>
                <p className="grey-text">14th Sept, 12pm</p>
            </div>
        </div>
    )
}

export default ProjectSummary;