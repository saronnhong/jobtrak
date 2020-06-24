import React from 'react';
import "./style.css";

const JobListing = (props) => {
    const jobList = props.appliedJobs;
    
    return (
        <table className="jobListingContainer centered responsive-table striped">
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Job Title</th>
                    <th>Status</th>
                    <th>Location</th>
                    <th>Date Applied</th>
                </tr>
            </thead>
            <tbody>
                {jobList.map(job => (
                    <tr>
                        <td>{job.company}</td>
                        <td>{job.jobTitle}</td>
                        <td>{job.status}</td>
                        <td>{job.location}</td>
                        <td>{job.dateApplied}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default JobListing;