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
        console.log(window.innerWidth);
        return (
            <table className="jobListingContainer centered responsive-table striped">
                <thead>
                    <tr>
                        {window.innerWidth < 600 ? <th className="tableHead">Company</th> : <th className="tableHead">Company Name</th>}
                        <th className="tableHead">Job Title</th>
                        <th className="tableHead">Status</th>
                        <th className="tableHead">Location</th>
                        {window.innerWidth < 600 ? <th className="tableHead">Date</th> : <th className="tableHead">Date Applied</th>}
                        {/* <th className="tableHead" width="50px"></th> */}
                    </tr>
                </thead>
                <tbody>
                    {this.jobList.map(job => (
                        <tr className="jobListingRow modal-trigger" data-target={job._id}>
                            <td className="tableData">{job.company}</td>
                            <td className="tableData">{job.jobTitle}</td>
                            <td className="tableData">{job.status}</td>
                            <td className="tableData">{job.location}</td>
                            <td className="tableData">{job.dateApplied}</td>
                            <EditJobsModal
                                id={job._id}
                                onPress={this.props.onPress}
                                onDelete={this.props.delete}
                                onCancel={this.props.cancel}
                                company={job.company}
                                jobTitle={job.jobTitle}
                                status={job.status}
                                location={job.location}
                                source={job.source}
                                jobUrl={job.jobUrl}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default JobListing;