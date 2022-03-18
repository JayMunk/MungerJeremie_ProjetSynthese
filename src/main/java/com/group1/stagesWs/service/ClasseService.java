package com.group1.stagesWs.service;

import com.group1.stagesWs.model.*;
import com.group1.stagesWs.repositories.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ClasseService {

    private final AllerRetourRepository allerRetourRepository;
    private final BarilRepository barilRepository;
    private final TourRepository tourRepository;
    private final CompetitionRepository competitionRepository;
    private final ChevalRepository chevalRepository;
    private final EquipeRepository equipeRepository;
    private final ParticipantRepository participantRepository;

    public ClasseService(AllerRetourRepository allerRetourRepository, BarilRepository barilRepository, TourRepository tourRepository, CompetitionRepository competitionRepository, ChevalRepository chevalRepository, EquipeRepository equipeRepository, ParticipantRepository participantRepository) {
        this.allerRetourRepository = allerRetourRepository;
        this.barilRepository = barilRepository;
        this.tourRepository = tourRepository;
        this.competitionRepository = competitionRepository;
        this.chevalRepository = chevalRepository;
        this.equipeRepository = equipeRepository;
        this.participantRepository = participantRepository;
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

    public Optional<AllerRetour> sinscrireAllerRetour(int chevalId, String courriel, int classeId) {
        AllerRetour classe = allerRetourRepository.findById(classeId);
        Competition competition = competitionRepository.findByAllerRetour(classe);
        Cheval cheval = chevalRepository.findById(chevalId);
        Participant participant = participantRepository.findParticipantByCourrielIgnoreCase(courriel);
        Equipe equipe = new Equipe(participant, cheval);
        equipeRepository.save(equipe);
        List<Equipe> equipeList = classe.getInscriptionList();
        if (equipeList.isEmpty()) {
            equipeList = new ArrayList<>(List.of(equipe));
        } else {
            equipeList.add(equipe);
        }
        classe.setInscriptionList(equipeList);
        AllerRetour finalClasse = allerRetourRepository.save(classe);
        competition.setAllerRetour(finalClasse);
        competitionRepository.save(competition);
        return Optional.of(finalClasse);
    }

    public Optional<Baril> sinscrireBaril(int chevalId, String courriel, int classeId) {
        Baril classe = barilRepository.findById(classeId);
        Competition competition = competitionRepository.findByBaril(classe);
        Cheval cheval = chevalRepository.findById(chevalId);
        Participant participant = participantRepository.findParticipantByCourrielIgnoreCase(courriel);
        Equipe equipe = new Equipe(participant, cheval);
        equipeRepository.save(equipe);
        List<Equipe> equipeList = classe.getInscriptionList();
        if (equipeList.isEmpty()) {
            equipeList = new ArrayList<>(List.of(equipe));
        } else {
            equipeList.add(equipe);
        }
        classe.setInscriptionList(equipeList);
        Baril finalClasse = barilRepository.save(classe);
        competition.setBaril(finalClasse);
        competitionRepository.save(competition);
        return Optional.of(finalClasse);
    }

    public Optional<Tour> sinscrireTour(int chevalId, String courriel, int classeId) {
        Tour classe = tourRepository.findById(classeId);
        Competition competition = competitionRepository.findByTour(classe);
        Cheval cheval = chevalRepository.findById(chevalId);
        Participant participant = participantRepository.findParticipantByCourrielIgnoreCase(courriel);
        Equipe equipe = new Equipe(participant, cheval);
        equipeRepository.save(equipe);
        List<Equipe> equipeList = classe.getInscriptionList();
        if (equipeList.isEmpty()) {
            equipeList = new ArrayList<>(List.of(equipe));
        } else {
            equipeList.add(equipe);
        }
        classe.setInscriptionList(equipeList);
        Tour finalClasse = tourRepository.save(classe);
        competition.setTour(finalClasse);
        competitionRepository.save(competition);
        return Optional.of(finalClasse);
    }
}
