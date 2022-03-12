package com.group1.stagesWs.service;

import com.group1.stagesWs.model.AllerRetour;
import com.group1.stagesWs.model.Baril;
import com.group1.stagesWs.model.Competition;
import com.group1.stagesWs.model.Tour;
import com.group1.stagesWs.repositories.AllerRetourRepository;
import com.group1.stagesWs.repositories.BarilRepository;
import com.group1.stagesWs.repositories.CompetitionRepository;
import com.group1.stagesWs.repositories.TourRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ClasseService {

    private final AllerRetourRepository allerRetourRepository;
    private final BarilRepository barilRepository;
    private final TourRepository tourRepository;
    private final CompetitionRepository competitionRepository;

    public ClasseService(AllerRetourRepository allerRetourRepository, BarilRepository barilRepository, TourRepository tourRepository, CompetitionRepository competitionRepository) {
        this.allerRetourRepository = allerRetourRepository;
        this.barilRepository = barilRepository;
        this.tourRepository = tourRepository;
        this.competitionRepository = competitionRepository;
    }

    public Optional<AllerRetour> createAllerRetourClasse(AllerRetour classe, int competitionId) {
        classe.setNom("Aller retour");
        AllerRetour finalClasse = allerRetourRepository.save(classe);
        Competition competition = competitionRepository.getById(competitionId);
        competition.setAllerRetour(finalClasse);
        competitionRepository.save(competition);
        return Optional.of(finalClasse);
    }

    public Optional<Baril> createBarilClasse(Baril classe, int competitionId) {
        classe.setNom("Course de Barils");
        Baril finalClasse = barilRepository.save(classe);
        Competition competition = competitionRepository.getById(competitionId);
        competition.setBaril(finalClasse);
        competitionRepository.save(competition);
        return Optional.of(finalClasse);
    }

    public Optional<Tour> createTourClasse(Tour classe, int competitionId) {
        classe.setNom("Tour de ring");
        Tour finalClasse = tourRepository.save(classe);
        Competition competition = competitionRepository.getById(competitionId);
        competition.setTour(finalClasse);
        competitionRepository.save(competition);
        return Optional.of(finalClasse);
    }
}
