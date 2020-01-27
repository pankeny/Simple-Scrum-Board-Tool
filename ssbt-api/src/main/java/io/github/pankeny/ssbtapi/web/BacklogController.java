package io.github.pankeny.ssbtapi.web;

import io.github.pankeny.ssbtapi.domain.ProjectTask;
import io.github.pankeny.ssbtapi.services.MapValidationErrorService;
import io.github.pankeny.ssbtapi.services.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/backlog")
@CrossOrigin
public class BacklogController {

    @Autowired
    private ProjectTaskService projectTaskService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("/{backlog_id}")
    public ResponseEntity<?> addProjectTaskToBacklog(@Valid @RequestBody ProjectTask projectTask,
                                                     BindingResult result, @PathVariable String backlog_id) {

        ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        if (errorMap != null) return errorMap;

        ProjectTask projectTask1 = projectTaskService.addProjectTask(backlog_id, projectTask);
        return new ResponseEntity<>(projectTask1, HttpStatus.CREATED);
    }

    @GetMapping("/{backlog_id}")
    public Iterable<ProjectTask> getProjectBacklog(@PathVariable String backlog_id) {
        return projectTaskService.findBacklogById(backlog_id.toUpperCase());
    }


    @GetMapping("/{backlogId}/{ptId}")
    public ResponseEntity<?> getProjectTask(@PathVariable String backlogId, @PathVariable String ptId) {
        ProjectTask projectTask = projectTaskService.findPtByProjectSequence(backlogId, ptId);
        return new ResponseEntity<>(projectTask, HttpStatus.OK);
    }
}


