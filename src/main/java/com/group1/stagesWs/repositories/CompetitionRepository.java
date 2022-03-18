package com.group1.stagesWs.repositories;

import com.group1.stagesWs.model.AllerRetour;
import com.group1.stagesWs.model.Baril;
import com.group1.stagesWs.model.Competition;
import com.group1.stagesWs.model.Tour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface CompetitionRepository extends JpaRepository<Competition, Integer> {

    List<Competition> findAllByOrganisationCourrielIgnoreCase(String courriel);

    List<Competition> findByDateBetween(LocalDate from, LocalDate to);

    Competition findByAllerRetour(AllerRetour allerRetour);

    Competition findByBaril(Baril baril);

    Competition findByTour(Tour tour);
}
