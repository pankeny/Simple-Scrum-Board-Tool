package io.github.pankeny.ssbtapi.services;

import io.github.pankeny.ssbtapi.domain.Project;
import io.github.pankeny.ssbtapi.exceptions.ProjectIdException;
import io.github.pankeny.ssbtapi.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project){

        try{
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        }catch (Exception ex) {
            throw new ProjectIdException("Project ID '" + project.getProjectIdentifier().toUpperCase()+"' already exists");
        }

    }

    public Project findProjectByIdentifier(String projectId){

        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

            if(project == null){
                throw new ProjectIdException("Project ID '" + projectId.toUpperCase() +"' does not exists");
            }

            return project;
    }

    public Iterable<Project> findAllProjects(){
        return projectRepository.findAll();
    }

}
