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
    private List<Equipe> inscriptionList;
    @OneToMany
    private List<Equipe> ordreDePassage;

    @OneToMany
    private List<Equipe> classement;

    public Classe() {
    }

    public Classe(int nbDeDivision, int argentAjouter, Double penaliter) {
        this.nbDeDivision = nbDeDivision;
        this.argentAjouter = argentAjouter;
        this.penaliter = penaliter;
    }
}
