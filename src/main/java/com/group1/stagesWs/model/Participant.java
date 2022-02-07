package com.group1.stagesWs.model;

import lombok.Data;

import javax.persistence.Entity;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@Entity
public class Participant extends User implements Serializable {

    private String nom;
    private LocalDate dateOfBirth;
    private int gain;


    public Participant() {

    }

    public Participant(String courriel, String password, String nom, LocalDate dateOfBirth, String numTelephone) {
        super(nom, courriel, password, numTelephone);
        this.dateOfBirth = dateOfBirth;
        this.gain = 0;
    }
}
