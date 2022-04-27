package com.group1.stagesWs.repositories;

import com.group1.stagesWs.model.AllerRetour;
import com.group1.stagesWs.model.Equipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AllerRetourRepository extends JpaRepository<AllerRetour, Integer> {

    AllerRetour findById(int id);
}
