import React, {useEffect} from "react";
import {Meteor} from "meteor/meteor";
import MaterialTable from "material-table";
import {withTracker} from "meteor/react-meteor-data";
import {Companies} from "../../../../api/companies/companies";
import {Projects} from "../../../../api/projects/projects";
import ControlledOpenSelect from './selectionModal'
import ProjectsSettingsPage from './projects'

function ProjectsControlPanel(props) {
    useEffect(() => {
    });


    return (
        <div>
            {
                props.currentCompany ?
                    <ControlledOpenSelect {...props} title="Projects" entity="Project" entities={props.projects} localCollection="localProjects" id="projectId"/> : ''
            }
            <br/>
            <ProjectsSettingsPage {...props} />
        </div>

    );
}


const ProjectsControlPanelPage = withTracker(props => {
    let local = LocalCollection.findOne({
        name: 'localCompanies'
    });
    let local1 = LocalCollection.findOne({
        name: 'localProjects'
    });

    const currentCompany = Companies.findOne({_id: local.companyId});
    const currentProject = Projects.findOne({_id: local1.projectId});

    return {
        companies: Companies.find({}).fetch(),
        projects: Projects.find({}).fetch(),
        currentCompany,
        currentProject
    };
})(ProjectsControlPanel);

export default ProjectsControlPanelPage