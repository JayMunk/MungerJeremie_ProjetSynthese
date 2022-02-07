package com.group1.stagesWs.model;

import lombok.Data;

import javax.persistence.Entity;
import java.io.Serializable;

@Data
@Entity
public class Organisation extends User implements Serializable {

    public Organisation() {

    }

    public Organisation(String courriel, String password, String nom, String numTelephone) {
        super(nom, courriel, password, numTelephone);
    }
}
