package com.group1.stagesWs.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@MappedSuperclass
@Data
public class Classe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String nom;
    private int nbDeDivision;
    private int argentAjouter;
    private Double penaliter;

    @OneToMany
    private List<Inscription> inscriptionList;
    @OneToMany
    private List<Inscription> ordreDePassage;

    @OneToMany
    private List<Inscription> classement;

    public Classe() {
    }

    public Classe(int nbDeDivision, int argentAjouter, Double penaliter) {
        this.nbDeDivision = nbDeDivision;
        this.argentAjouter = argentAjouter;
        this.penaliter = penaliter;
    }
}
