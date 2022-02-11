package com.group1.stagesWs.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
    private int AQHANumber;
    private LocalDate dateOfBirth;
    private String fatherName;
    private String motherName;
    private String origine;


    public Cheval() {

    }

    public Cheval(String nom, String sexe, boolean vaccinated, boolean coggingTested, int AQHANumber, LocalDate dateOfBirth, String fatherName, String motherName, String origine) {
        this.nom = nom;
        this.sexe = sexe;
        this.vaccinated = vaccinated;
        this.coggingTested = coggingTested;
        this.AQHANumber = AQHANumber;
        this.dateOfBirth = dateOfBirth;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.origine = origine;
    }
}
