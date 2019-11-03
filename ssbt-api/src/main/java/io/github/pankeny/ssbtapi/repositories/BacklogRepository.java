package io.github.pankeny.ssbtapi.repositories;

import io.github.pankeny.ssbtapi.domain.Backlog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacklogRepository extends CrudRepository<Backlog, Long> {

    Backlog findByProjectIdentifier(String identifier);

}
