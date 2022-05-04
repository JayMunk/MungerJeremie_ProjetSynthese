package com.group1.stagesWs.controller;

import com.group1.stagesWs.model.User;
import com.group1.stagesWs.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{email}/{password}")
    public ResponseEntity<User> login(
            @PathVariable("email") String email, @PathVariable("password") String password) {
        return userService
                .login(email, password)
                .map(etudiant1 -> ResponseEntity.status(HttpStatus.OK).body(etudiant1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }
}
