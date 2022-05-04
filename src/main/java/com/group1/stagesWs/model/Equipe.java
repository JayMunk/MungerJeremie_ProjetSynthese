package com.group1.stagesWs.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
public class Equipe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private Participant participant;
    @ManyToOne
    private Cheval cheval;
    private String temps;
    private int nbPenaliter;

    public Equipe() {
    }

    public Equipe(Participant participant, Cheval cheval) {
        this.participant = participant;
        this.cheval = cheval;
    }
}
