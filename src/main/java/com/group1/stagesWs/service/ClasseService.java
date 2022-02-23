package com.group1.stagesWs.service;

import com.group1.stagesWs.model.AllerRetour;
import com.group1.stagesWs.model.Baril;
import com.group1.stagesWs.model.Classe;
import com.group1.stagesWs.model.Tour;
import com.group1.stagesWs.repositories.AllerRetourRepository;
import com.group1.stagesWs.repositories.BarilRepository;
import com.group1.stagesWs.repositories.TourRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ClasseService {

    private final AllerRetourRepository allerRetourRepository;
    private final BarilRepository barilRepository;
    private final TourRepository tourRepository;

    public ClasseService(AllerRetourRepository allerRetourRepository, BarilRepository barilRepository, TourRepository tourRepository) {
        this.allerRetourRepository = allerRetourRepository;
        this.barilRepository = barilRepository;
        this.tourRepository = tourRepository;
    }

    public Optional<AllerRetour> createAllerRetourClasse(Classe classe) {
        classe.setNom("Aller retour");
        return Optional.of(allerRetourRepository.save((AllerRetour) classe));
    }

    public Optional<Baril> createBarilClasse(Classe classe) {
        classe.setNom("Course de Barils");
        return Optional.of(barilRepository.save((Baril) classe));
    }

    public Optional<Tour> createTourClasse(Classe classe) {
        classe.setNom("Tour de ring");
        return Optional.of(tourRepository.save((Tour) classe));
    }
}
