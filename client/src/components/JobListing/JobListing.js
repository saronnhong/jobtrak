import React, { Component } from 'react';
import EditJobsModal from '../EditJobsModal';
import M from "materialize-css";
import "./style.css";

class JobListing extends Component {

    state = {
        jobApp: this.props.appliedJobs
    }

    jobList = this.state.jobApp;

    render() {
        return (
            <table className="jobListingContainer centered responsive-table striped">
                <thead>
                    <tr>
                        <th width="30%">Company Name</th>
                        <th>Job Title</th>
                        <th>Status</th>
                        <th>Location</th>
                        <th>Date Applied</th>
                        <th width="45px"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.jobList.map(job => (
                        <tr>
                            <td>{job.company}</td>
                            <td>{job.jobTitle}</td>
                            <td>{job.status}</td>
                            <td>{job.location}</td>
                            <td>{job.dateApplied}</td>
                            <EditJobsModal
                                id={job._id}
                                onPress={this.props.onPress}
                                company={job.company}
                                jobTitle={job.jobTitle}
                                status={job.status}
                                location={job.location}
                                source={job.source}
                                jobUrl={job.jobUrl}
                            />
                            <a className="modal-trigger deleteBtn"
                                onClick={() => this.props.delete(job._id)}
                                data-target={this.props.id}>
                                <i class="fas fa-trash"></i>
                            </a>

                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default JobListing;