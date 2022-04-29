package com.group1.stagesWs.repositories;

import com.group1.stagesWs.model.AllerRetour;
import com.group1.stagesWs.model.Inscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InscriptionRepository extends JpaRepository<Inscription, Integer> {

}
