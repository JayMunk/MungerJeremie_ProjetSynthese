package com.group1.stagesWs.repositories;

import com.group1.stagesWs.model.Cheval;
import com.group1.stagesWs.model.Competition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompetitionRepository extends JpaRepository<Competition, Integer> {
}
