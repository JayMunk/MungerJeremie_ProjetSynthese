package com.group1.stagesWs.model;

import lombok.Data;

import javax.persistence.Entity;
import java.io.Serializable;
import java.time.Duration;

@Data
@Entity
public class Tour extends Classe implements Serializable {

    public Tour() {
    }

    public Tour(int nbDeDivision, int argentAjouter, Duration penaliter) {
        super(nbDeDivision, argentAjouter, penaliter);
        this.setNom("Tour de ring");
    }
}
