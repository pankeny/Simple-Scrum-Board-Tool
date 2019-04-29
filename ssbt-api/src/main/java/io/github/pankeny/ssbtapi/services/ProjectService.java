package io.github.pankeny.ssbtapi.services;

import io.github.pankeny.ssbtapi.domain.Project;
import io.github.pankeny.ssbtapi.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project){

        //Logic

        return projectRepository.save(project);
    }

}
