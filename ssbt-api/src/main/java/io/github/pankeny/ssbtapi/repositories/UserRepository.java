package io.github.pankeny.ssbtapi.repositories;

import io.github.pankeny.ssbtapi.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
}
