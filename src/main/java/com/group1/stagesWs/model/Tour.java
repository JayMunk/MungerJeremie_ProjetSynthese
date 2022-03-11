package com.group1.stagesWs.model;

import lombok.Data;

import javax.persistence.Entity;
import java.io.Serializable;

@Data
@Entity
public class Tour extends Classe implements Serializable {

    public Tour() {
    }

    public Tour(int nbDeDivision, int argentAjouter, Double penaliter) {
        super(nbDeDivision, argentAjouter, penaliter);
        this.setNom("Tour de ring");
    }
}
