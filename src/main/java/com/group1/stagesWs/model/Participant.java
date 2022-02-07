package com.group1.stagesWs.model;

import lombok.Data;

import javax.persistence.Entity;
import java.io.Serializable;

@Data
@Entity
public class Participant extends User implements Serializable{

    private String nom;
    private String age;
    private int gain;


    public Participant() {

    }

    public Participant(String courriel, String password, String nom, String age) {
        super(courriel, password);
        this.nom = nom;
        this.age = age;
        this.gain = 0;
    }
}
