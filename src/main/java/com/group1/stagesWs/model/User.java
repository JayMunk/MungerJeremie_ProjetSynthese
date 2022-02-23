package com.group1.stagesWs.model;

import com.group1.stagesWs.enums.UserType;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@MappedSuperclass
@Data
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String nom;
    @Column(unique = true)
    private String courriel;
    private String password;
    private String numTelephone;
    private UserType role;

    public User() {
    }

    public User(String nom, String courriel, String password, String numTelephone, UserType role) {
        this.nom = nom;
        this.courriel = courriel;
        this.password = password;
        this.numTelephone = numTelephone;
        this.role = role;
    }
}