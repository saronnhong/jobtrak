import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";

class EditJobsModal extends Component {
    state = {
        jobApp: {
            company: this.props.company,
            jobTitle: this.props.jobTitle,
            status: this.props.status,
            location: this.props.location,
            source: this.props.source,
            jobUrl: this.props.jobUrl,
            _id: this.props.id
        }
    }

    componentDidMount() {
        const options = {
            onOpenStart: () => {
                console.log("Open Start");
            },
            onOpenEnd: () => {
                console.log("Open End");
            },
            onCloseStart: () => {
                console.log("Close Start");
            },
            onCloseEnd: () => {
                console.log("Close End");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "5%"
        };
        M.Modal.init(this.Modal, options);
        // let instance = M.Modal.getInstance(this.Modal);
        // instance.open();
        // instance.close();
        // instance.destroy();

    }

    onUpdate = () => {
        this.props.onPress(this.state.jobApp);
    }
    onDelete = (id) => {
        this.props.onDelete(id);
    }

    render() {
        const { jobApp } = this.state;
        return (
            <div className="editIconRow">
                {/* <a alt="edit" className="modal-trigger editIcon hvr-grow-shadow hvr-sweep-to-right-blue" data-target={this.props.id} ><i class="fas fa-pen "></i></a> */}
                <div ref={Modal => { this.Modal = Modal }} id={this.props.id} className="modal modal-fixed-footer" >
                    <div className="modal-content modalContainer">
                        <div className="row">
                            <div className="modalTitle">Edit Job Listing</div>
                        </div>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="company" type="text" className="validate modalInput" placeholder="" value={jobApp.company} onChange={e => this.setState({ jobApp: { ...jobApp, company: e.target.value } })} />
                                        <label className="modalLabelText active" for="company"><i className="far fa-building fontAwesomeModal"></i> Company</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="job_title" type="text" className="modalInput" value={jobApp.jobTitle} onChange={e => this.setState({ jobApp: { ...jobApp, jobTitle: e.target.value } })} />
                                        <label className="modalLabelText active" for="job_title"><i className="fas fa-user-md fontAwesomeModal"></i> Job Title</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="status" type="text" className="modalInput" value={jobApp.status} placeholder="Interested" onChange={e => this.setState({ jobApp: { ...jobApp, status: e.target.value } })} />
                                        <label className="modalLabelText active" for="status"><i className="far fa-file-alt fontAwesomeModal"></i> Status</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="location" type="text" className="modalInput" value={jobApp.location} placeholder="San Diego, CA" onChange={e => this.setState({ jobApp: { ...jobApp, location: e.target.value } })} />
                                        <label className="modalLabelText active" for="location"><i className="fas fa-map-marker-alt fontAwesomeModal"></i> Location</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="source" type="text" className="modalInput" value={jobApp.source} onChange={e => this.setState({ jobApp: { ...jobApp, source: e.target.value } })} />
                                        <label className="modalLabelText active" for="source"><i className="fab fa-sourcetree fontAwesomeModal"></i> Source</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="job_url" type="text" className="modalInput" placeholder="Where did you find this job?" value={jobApp.jobUrl} onChange={e => this.setState({ jobApp: { ...jobApp, jobUrl: e.target.value } })} />
                                        <label className="modalLabelText active" for="job_url"><i className="fas fa-laptop-code fontAwesomeModal"></i> Job Posting URL</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer ">
                        <div className="row center modalFooter">
                            <button onClick={() => {
                                this.onDelete(this.state.jobApp._id);
                                M.Modal.getInstance(this.Modal).close();
                            }}
                                className="modal-close #ff8a80 red accent-1 btn modalBtn">Delete</button>
                            <button onClick={() => M.Modal.getInstance(this.Modal).close()} className="modal-close #757575 grey darken-1 btn modalBtn">Cancel</button>
                            <button onClick={() => {
                                this.onUpdate();
                                M.Modal.getInstance(this.Modal).close();
                            }}
                                className="modal-close #80cbc4 teal lighten-3 btn modalBtn">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditJobsModal;
