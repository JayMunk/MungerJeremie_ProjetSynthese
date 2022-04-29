package com.group1.stagesWs.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Duration;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class EquipeAfficher implements Serializable {

    private int id;

    private String prenom;
    private String nom;
    private String nomCheval;
    private String temps;

    public EquipeAfficher() {
    }

    public EquipeAfficher(int id, String prenom, String nom, String nomCheval, String temps) {
        this.id = id;
        this.prenom = prenom;
        this.nom = nom;
        this.nomCheval = nomCheval;
        this.temps = temps;
    }
}
