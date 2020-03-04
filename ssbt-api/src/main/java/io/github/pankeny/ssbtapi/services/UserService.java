package io.github.pankeny.ssbtapi.services;

import io.github.pankeny.ssbtapi.domain.User;
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
        newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));

        // Todo - Username has to be unique
        // Todo - make sure that password and confirmPassword match

        return userRepository.save(newUser);
    }
}
