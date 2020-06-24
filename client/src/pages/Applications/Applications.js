import React, { Component } from 'react';
import Modal from '../../components/Modal';
import JobListings from '../../components/JobListing';
import API from '../../utils/API';
import "./style.css";

class Applications extends Component {
    state = {
        company: "",
        jobTitle: "",
        status: "",
        location: "",
        source: "",
        jobUrl: "",
        dateApplied: "",
        jobsData: null
    }
    componentDidMount() {
        this.getJobsData();
    }
    onSubmit = (jobApp) => {
        this.setState({
            company: jobApp.company,
            jobTitle: jobApp.jobTitle,
            status: jobApp.status,
            location: jobApp.location,
            source: jobApp.source,
            jobUrl: jobApp.jobUrl,
            dateApplied: this.changeDateFormat()
        }, this.writeToDB);
    }
    writeToDB = () => {
        API.saveJobs({
            company: this.state.company,
            jobTitle: this.state.jobTitle,
            status: this.state.status,
            location: this.state.location,
            source: this.state.source,
            jobUrl: this.state.jobUrl,
            dateApplied: this.state.dateApplied
        }).then(() => {
            this.getJobsData();
        })
    }
    getJobsData = () => {
        API.getJobs().then(res => {
            this.setState({ jobsData: res.data.reverse() });
        })
    }
    changeDateFormat = () => {
        const date = new Date();
        const formattedDate = Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        }).format(date);
        return formattedDate;
    }
    render() {
        return (
            <div className="appContainer">
                <div className="row">
                    <div className="col s9 headerText">Job Applicatons</div>
                    <div className="col s1">
                        <div class="input-field">
                            <input id="search" type="text" class="validate" />
                            <label for="search"><i class="material-icons">search</i></label>
                        </div>
                    </div>
                    <Modal onPress={this.onSubmit} />
                    {this.state.jobsData ? <JobListings key={this.state.jobsData.length} appliedJobs={this.state.jobsData} /> : null}
                </div>
            </div>
        )
    }
}

export default Applications;