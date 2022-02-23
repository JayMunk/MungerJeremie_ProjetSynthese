package com.group1.stagesWs.repositories;

import com.group1.stagesWs.model.AllerRetour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AllerRetourRepository extends JpaRepository<AllerRetour, Integer> {
}
