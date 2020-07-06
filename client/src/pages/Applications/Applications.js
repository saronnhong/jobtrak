import React, { Component } from 'react';
import AddJobsModal from '../../components/AddJobsModal';
import JobListings from '../../components/JobListing';
import API from '../../utils/API';
import withAuth from '../../components/withAuth';
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
        jobsData: [],
        user: "",
        _id: "",
        searchInputField: ""
    }
    componentDidMount() {
        this.getJobsData();
        this.setState({ user: this.props.user.username });
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
            dateApplied: this.state.dateApplied,
            user: this.state.user
        }).then(() => {
            this.getJobsData();
        })
    }
    getJobsData = () => {
        const username = this.props.user.username;
        API.getJobsByUser(username).then(res => {
            this.setState({ jobsData: res.data.reverse() });
        });
    }
    onUpdate = (jobApp) => {
        this.setState({
            company: jobApp.company,
            jobTitle: jobApp.jobTitle,
            status: jobApp.status,
            location: jobApp.location,
            source: jobApp.source,
            jobUrl: jobApp.jobUrl,
            dateApplied: jobApp.dateApplied,
            _id: jobApp._id
        }, this.updateDB);
    }
    updateDB = () => {
        API.updateJobs({
            company: this.state.company,
            jobTitle: this.state.jobTitle,
            status: this.state.status,
            location: this.state.location,
            source: this.state.source,
            jobUrl: this.state.jobUrl,
            dateApplied: this.state.dateApplied,
            user: this.state.user,
            _id: this.state._id
        }).then(() => {
            this.setState({
                jobsData: [] //dummy change needed in order for component to update automatically
            }, this.getJobsData())
        })
    }
    onDelete = (id) => {
        API.deleteJobs(id)
            .then(() => {
                this.getJobsData();
            }

            )
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
    searchInput = (word) => {
        const jobsDatabase = this.state.jobsData;
        const newArr = [];
        for (let i = 0; i < jobsDatabase.length; i++) {
            if (jobsDatabase[i].jobTitle.toLowerCase().includes(word.toLowerCase()) || jobsDatabase[i].company.toLowerCase().includes(word.toLowerCase()) || jobsDatabase[i].location.toLowerCase().includes(word.toLowerCase())) {
                newArr.push(jobsDatabase[i]);
            }
        }
        this.setState({ jobsData: newArr });
    }

    render() {
        return (
            <div className="appContainer">
                <div className="row">
                    <div className="col s12 m9 l8 headerText">Job Applicatons</div>
                    <div className="row col s12 l4 secondRow">
                        <div className="row searchField">
                            <div class="input-field col s4 ">
                                <input id="search" placeholder="Search" type="text" class="validate" value={this.state.searchInputField} onChange={e => this.setState({ ...this.state.searchInputField, searchInputField: e.target.value })} />
                            </div>
                            <div className="col s1 searchBtn">
                                <buttton onClick={() => this.searchInput(this.state.searchInputField)}><i class="material-icons searchIcon">search</i></buttton>
                            </div>
                            <div className="col s4">
                                <AddJobsModal onPress={this.onSubmit} />
                            </div>
                        </div>

                    </div>


                </div>
                <div className='row'>
                    <JobListings key={this.state.jobsData.length} onPress={this.onUpdate} delete={this.onDelete} appliedJobs={this.state.jobsData} />
                </div>
            </div>
        )
    }
}

export default withAuth(Applications);