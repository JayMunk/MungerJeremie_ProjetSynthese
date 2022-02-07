package com.group1.stagesWs.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@MappedSuperclass
@Data
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(unique = true)
    private String courriel;
    private String password;

    public User() {
    }

    public User(String courriel, String password) {
        this.courriel = courriel;
        this.password = password;
    }
}