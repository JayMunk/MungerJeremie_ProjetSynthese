package com.group1.stagesWs.repositories;

import com.group1.stagesWs.model.Competition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface CompetitionRepository extends JpaRepository<Competition, Integer> {

    List<Competition> findAllByOrganisationCourrielIgnoreCase(String courriel);

    List<Competition> findByDateBetween(LocalDate from, LocalDate to);


}
