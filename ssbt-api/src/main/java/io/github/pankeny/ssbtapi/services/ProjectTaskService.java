package io.github.pankeny.ssbtapi.services;

import io.github.pankeny.ssbtapi.domain.Backlog;
import io.github.pankeny.ssbtapi.domain.Project;
import io.github.pankeny.ssbtapi.domain.ProjectTask;
import io.github.pankeny.ssbtapi.exceptions.ProjectNotFoundException;
import io.github.pankeny.ssbtapi.repositories.BacklogRepository;
import io.github.pankeny.ssbtapi.repositories.ProjectRepository;
import io.github.pankeny.ssbtapi.repositories.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {


    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ProjectService projectService;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask, String username) {
        Backlog backlog = projectService.findProjectByIdentifier(projectIdentifier, username).getBacklog();

        projectTask.setBacklog(backlog);
        Integer backlogSequence = backlog.getPTSequence();
        ++backlogSequence;
        backlog.setPTSequence(backlogSequence);

        projectTask.setProjectSequence(projectIdentifier + "-" + backlogSequence);
        projectTask.setProjectIdentifier(projectIdentifier);

        if (projectTask.getPriority() == null || projectTask.getPriority() == 0) {
            projectTask.setPriority(3);
        }

        if (projectTask.getStatus() == null || projectTask.getStatus().isEmpty()) {
            projectTask.setStatus("TO-DO");
        }

        return projectTaskRepository.save(projectTask);
    }

    public Iterable<ProjectTask> findBacklogById(String id, String username) {
        Project project = projectService.findProjectByIdentifier(id, username);
        return project.getBacklog().getProjectTasks();
    }

    public ProjectTask findPtByProjectSequence(String backlogId, String ptId) {

        Backlog backlog = backlogRepository.findByProjectIdentifier(backlogId);

        if (backlog == null) {
            throw new ProjectNotFoundException("Project with ID: '" + backlogId + "' does not exist");
        }

        ProjectTask projectTask = projectTaskRepository.findByProjectSequence(ptId);

        if (projectTask == null) {
            throw new ProjectNotFoundException("Project task: '" + ptId + "' not found");
        }

        if (!projectTask.getProjectIdentifier().equals(backlogId)) {
            throw new ProjectNotFoundException("Project task: '" + ptId + "' does not exist in project: '" + backlogId + "'");
        }

        return projectTaskRepository.findByProjectSequence(ptId);
    }

    public ProjectTask updateByProjectSequence(ProjectTask updatedTask, String backlogId, String ptId) {
        ProjectTask projectTask = findPtByProjectSequence(backlogId, ptId);

        projectTask = updatedTask;

        return projectTaskRepository.save(projectTask);
    }

    public void deletePtByProjectSequence(String backlogId, String ptId) {
        ProjectTask projectTask = findPtByProjectSequence(backlogId, ptId);

        projectTaskRepository.delete(projectTask);
    }
}
