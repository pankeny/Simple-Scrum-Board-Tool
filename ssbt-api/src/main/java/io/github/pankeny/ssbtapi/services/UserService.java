package io.github.pankeny.ssbtapi.services;

import io.github.pankeny.ssbtapi.domain.User;
import io.github.pankeny.ssbtapi.exceptions.UsernameAlreadyExistsException;
import io.github.pankeny.ssbtapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser(User newUser) {

        // Todo - Username has to be unique
        // Todo - make sure that password and confirmPassword match
        try {
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            return userRepository.save(newUser);
        } catch (Exception exception) {
            throw new UsernameAlreadyExistsException(String.format("Username '%s' already exists", newUser.getUsername()));
        }

    }
}
