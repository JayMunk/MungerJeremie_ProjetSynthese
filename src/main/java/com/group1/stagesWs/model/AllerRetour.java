package com.group1.stagesWs.model;

import lombok.Data;

import javax.persistence.Entity;
import java.io.Serializable;
import java.time.Duration;

@Data
@Entity
public class AllerRetour extends Classe implements Serializable {

    public AllerRetour() {

    }

    public AllerRetour(int nbDeDivision, int argentAjouter, Duration penaliter) {
        super(nbDeDivision, argentAjouter, penaliter);
    }
}
