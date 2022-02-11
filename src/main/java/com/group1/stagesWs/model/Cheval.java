package com.group1.stagesWs.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@Entity
public class Cheval implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String nom;
    private String sexe;
    private boolean vaccinated;
    private boolean coggingTested;
    private String AQHANumber;
    private LocalDate dateOfBirth;
    private String fatherName;
    private String motherName;
    private String origineCountry;
    private String origineState;
    private int gain;

    @ManyToOne
    private Participant owner;


    public Cheval() {

    }

    public Cheval(String nom, String sexe, boolean vaccinated, boolean coggingTested, String AQHANumber, LocalDate dateOfBirth, String fatherName, String motherName, String origineCountry, String origineState) {
        this.nom = nom;
        this.sexe = sexe;
        this.vaccinated = vaccinated;
        this.coggingTested = coggingTested;
        this.AQHANumber = AQHANumber;
        this.dateOfBirth = dateOfBirth;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.origineCountry = origineCountry;
        this.origineState = origineState;
        this.gain = 0;
    }
}
