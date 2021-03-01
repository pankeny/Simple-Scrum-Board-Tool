package io.github.pankeny.ssbtapi.services;

import io.github.pankeny.ssbtapi.domain.Backlog;
import io.github.pankeny.ssbtapi.domain.Project;
import io.github.pankeny.ssbtapi.domain.User;
import io.github.pankeny.ssbtapi.exceptions.ProjectIdException;
import io.github.pankeny.ssbtapi.exceptions.ProjectNotFoundException;
import io.github.pankeny.ssbtapi.repositories.BacklogRepository;
import io.github.pankeny.ssbtapi.repositories.ProjectRepository;
import io.github.pankeny.ssbtapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private UserRepository userRepository;

    public Project saveOrUpdateProject(Project project, String username) {
        String projectIdentifier = project.getProjectIdentifier().toUpperCase();

        if (project.getId() != null) {
            Project existingProject = projectRepository.findByProjectIdentifier(projectIdentifier);
            if (existingProject != null
                    && (!existingProject.getId().equals(project.getId()) || !existingProject.getProjectLeader().equals(username))) {
                throw new ProjectNotFoundException("Project not found in your account");
            } else if (existingProject == null) {
                throw new ProjectNotFoundException(
                        String.format("Project with ID: '%s' cannot be updated, because it doesn't exist", projectIdentifier)
                );
            }
        }

        try {
            User user = userRepository.findByUsername(username);

            project.setUser(user);
            project.setProjectLeader(user.getUsername());
            project.setProjectIdentifier(projectIdentifier);

            if (project.getId() == null) {
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(projectIdentifier);
            }

            if (project.getId() != null) {
                project.setBacklog(backlogRepository.findByProjectIdentifier(projectIdentifier));
            }

            return projectRepository.save(project);
        } catch (Exception ex) {
            throw new ProjectIdException("Project ID '" + projectIdentifier + "' already exists");
        }
    }

    public Project findProjectByIdentifier(String projectId, String username) {
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

        if (project == null) {
            throw new ProjectIdException("Project ID '" + projectId.toUpperCase() + "' does not exists");
        }

        if (!project.getProjectLeader().equals(username)) {
            throw new ProjectNotFoundException("Project not found in your account");
        }

        return project;
    }

    public Iterable<Project> findAllProjects(String username) {
        return projectRepository.findAllByProjectLeader(username);
    }

    public void deleteProjectByIdentifier(String projectid, String username) {
        projectRepository.delete(findProjectByIdentifier(projectid, username));
    }

}
