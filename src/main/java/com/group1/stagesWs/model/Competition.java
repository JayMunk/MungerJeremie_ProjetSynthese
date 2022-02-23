package com.group1.stagesWs.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@Entity
public class Competition implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String nom;
    @ManyToOne
    private Organisation organisation;
    private LocalDate date;
    @ManyToOne
    private Tour tour;
    @ManyToOne
    private Baril baril;
    @ManyToOne
    private AllerRetour allerRetour;

    public Competition() {
    }

    public Competition(LocalDate date) {
        this.date = date;
    }
}
