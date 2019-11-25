package io.github.pankeny.ssbtapi.services;

import io.github.pankeny.ssbtapi.domain.Backlog;
import io.github.pankeny.ssbtapi.domain.Project;
import io.github.pankeny.ssbtapi.exceptions.ProjectIdException;
import io.github.pankeny.ssbtapi.repositories.BacklogRepository;
import io.github.pankeny.ssbtapi.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    public Project saveOrUpdateProject(Project project){
        String projectIdentifier = project.getProjectIdentifier().toUpperCase();
        try{
            project.setProjectIdentifier(projectIdentifier);

            if(project.getId() == null){
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(projectIdentifier);
            }

            if(project.getId() != null) {
                project.setBacklog(backlogRepository.findByProjectIdentifier(projectIdentifier));
            }

            return projectRepository.save(project);
        }catch (Exception ex) {
            throw new ProjectIdException("Project ID '" + projectIdentifier +"' already exists");
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

    public void deleteProjectByIdentifier(String projectid){
        Project  project = projectRepository.findByProjectIdentifier(projectid);

        if(project == null){
            throw new ProjectIdException("Cannot delete project with ID '" + projectid + "'. This project does not exist");
        }

        projectRepository.delete(project);
   }

}
