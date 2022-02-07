package com.group1.stagesWs.model;

import lombok.Data;

import javax.persistence.Entity;
import java.io.Serializable;

@Data
@Entity
public class Organisation extends User implements Serializable {

    private String nom;

    public Organisation() {

    }

    public Organisation(String courriel, String password, String nom) {
        super(courriel, password);
        this.nom = nom;
    }
}
