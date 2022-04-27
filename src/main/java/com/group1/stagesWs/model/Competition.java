package com.group1.stagesWs.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@Entity
public class Competition implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    private String nom;
    private String adresse;
    @ManyToOne
    private Organisation organisation;
    private LocalDate date;
    @ManyToOne
    private Tour tour;
    @ManyToOne
    private Baril baril;
    @ManyToOne(cascade = {CascadeType.ALL})
    private AllerRetour allerRetour;

    public Competition() {
    }

    public Competition(String nom, String adresse, LocalDate date) {
        this.nom = nom;
        this.adresse = adresse;
        this.date = date;
    }
}
