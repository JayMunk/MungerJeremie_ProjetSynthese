package com.group1.stagesWs.model;

import lombok.Data;

import javax.persistence.Entity;
import java.io.Serializable;

@Data
@Entity
public class Baril extends Classe implements Serializable {
    public Baril() {
    }

    public Baril(int nbDeDivision, int argentAjouter, Double penaliter) {
        super(nbDeDivision, argentAjouter, penaliter);
        this.setNom("Course de Barils");
    }
}
