package com.group1.stagesWs.service;

import com.group1.stagesWs.model.*;
import com.group1.stagesWs.repositories.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

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

    public Optional<AllerRetour> genererOrdreAllerRetour(int classeId) {
        AllerRetour classe = allerRetourRepository.findById(classeId);
        Competition competition = competitionRepository.findByAllerRetour(classe);
        List<Equipe> equipeList = classe.getInscriptionList();
        List<Equipe> ordre = genererOrdre(equipeList);
        classe.setOrdreDePassage(ordre);
        AllerRetour finalClasse = allerRetourRepository.save(classe);
        competition.setAllerRetour(finalClasse);
        System.out.println(ordre);
        competitionRepository.save(competition);
        return Optional.of(finalClasse);
    }

    public Optional<Baril> genererOrdreBaril(int classeId) {
        Baril classe = barilRepository.findById(classeId);
        Competition competition = competitionRepository.findByBaril(classe);
        List<Equipe> equipeList = classe.getInscriptionList();
        List<Equipe> ordre = genererOrdre(equipeList);
        classe.setOrdreDePassage(ordre);
        Baril finalClasse = barilRepository.save(classe);
        competition.setBaril(finalClasse);
        System.out.println(ordre);
        competitionRepository.save(competition);
        return Optional.of(finalClasse);
    }

    public Optional<Tour> genererOrdreTour(int classeId) {
        Tour classe = tourRepository.findById(classeId);
        Competition competition = competitionRepository.findByTour(classe);
        List<Equipe> equipeList = classe.getInscriptionList();
        List<Equipe> ordre = genererOrdre(equipeList);
        classe.setOrdreDePassage(ordre);
        Tour finalClasse = tourRepository.save(classe);
        competition.setTour(finalClasse);
        System.out.println(ordre);
        competitionRepository.save(competition);
        return Optional.of(finalClasse);
    }

    public List<Equipe> genererOrdre(List<Equipe> equipeList) {
        Random random_method = new Random();
        List<Equipe> ordre = new ArrayList<>();
        // loop for generation random number
        for (int i = 0; i < equipeList.size(); i++) {
            // generating random index with the help of
            // nextInt() method
            int index = random_method.nextInt(equipeList.size());

            ordre.add(equipeList.get(index));
        }
        return ordre;
    }

    public List<Equipe> getOrdreAllerRetour(int classeId) {
        AllerRetour classe = allerRetourRepository.findById(classeId);
        return classe.getOrdreDePassage();
    }


    public List<Equipe> getResultatAllerRetour(int classeId) {
        AllerRetour classe = allerRetourRepository.findById(classeId);
        return classe.getClassement();
    }

    public Integer getEquipeActuelIdAllerRetour(int classeId) {
        AllerRetour classe = allerRetourRepository.findById(classeId);
        List<Equipe> resultatList = classe.getClassement();
        return resultatList.size();
    }

    public Integer getEquipeActuelIdBaril(int classeId) {
        Baril classe = barilRepository.findById(classeId);
        List<Equipe> resultatList = classe.getClassement();
        return resultatList.size();
    }

    public Integer getEquipeActuelIdTour(int classeId) {
        Tour classe = tourRepository.findById(classeId);
        List<Equipe> resultatList = classe.getClassement();
        return resultatList.size();
    }


    public List<Participant> getOrdreListParticipantBaril(int classeId, int equipeId) {
        Baril classe = barilRepository.findById(classeId);
        List<Participant> tempListOrdreParticipant = new ArrayList<>();
        for (int i = equipeId + 1; i < classe.getOrdreDePassage().size(); i++) {
            tempListOrdreParticipant.add(classe.getOrdreDePassage().get(i).getParticipant());
        }
        return tempListOrdreParticipant;
    }

    public List<Participant> getOrdreListParticipantTour(int classeId, int equipeId) {
        Tour classe = tourRepository.findById(classeId);
        List<Participant> tempListOrdreParticipant = new ArrayList<>();
        for (int i = equipeId + 1; i < classe.getOrdreDePassage().size(); i++) {
            tempListOrdreParticipant.add(classe.getOrdreDePassage().get(i).getParticipant());
        }
        return tempListOrdreParticipant;
    }

    public List<Cheval> getOrdreListChevalTour(int classeId, int equipeId) {
        Tour classe = tourRepository.findById(classeId);
        List<Cheval> tempListOrdreCheval = new ArrayList<>();
        for (int i = equipeId + 1; i < classe.getOrdreDePassage().size(); i++) {
            tempListOrdreCheval.add(classe.getOrdreDePassage().get(i).getCheval());
        }
        return tempListOrdreCheval;
    }

    public List<EquipeAfficher> getResultatListAllerRetour(int classeId) {
        AllerRetour classe = allerRetourRepository.findById(classeId);
        List<EquipeAfficher> tempListResultat = new ArrayList<>();
        for (Equipe equipe : classe.getClassement()) {
            tempListResultat.add(new EquipeAfficher(equipe.getId(), equipe.getParticipant().getPrenom(), equipe.getParticipant().getNom(), equipe.getCheval().getNom(), equipe.getTemps()));
        }
        return tempListResultat;
    }

    public List<EquipeAfficher> getResultatListBaril(int classeId) {
        Baril classe = barilRepository.findById(classeId);
        List<EquipeAfficher> tempListResultat = new ArrayList<>();
        for (Equipe equipe : classe.getClassement()) {
            tempListResultat.add(new EquipeAfficher(equipe.getId(), equipe.getParticipant().getPrenom(), equipe.getParticipant().getNom(), equipe.getCheval().getNom(), equipe.getTemps()));
        }
        return tempListResultat;
    }

    public List<EquipeAfficher> getResultatListTour(int classeId) {
        Tour classe = tourRepository.findById(classeId);
        List<EquipeAfficher> tempListResultat = new ArrayList<>();
        for (Equipe equipe : classe.getClassement()) {
            tempListResultat.add(new EquipeAfficher(equipe.getId(), equipe.getParticipant().getPrenom(), equipe.getParticipant().getNom(), equipe.getCheval().getNom(), equipe.getTemps()));
        }
        return tempListResultat;
    }

    public List<EquipeAfficher> getOrdreListAllerRetour(int classeId, int equipeId) {
        AllerRetour classe = allerRetourRepository.findById(classeId);
        List<EquipeAfficher> tempListOrdre = new ArrayList<>();
        for (int i = equipeId + 1; i < classe.getOrdreDePassage().size(); i++) {
            tempListOrdre.add(new EquipeAfficher(classe.getOrdreDePassage().get(i).getId(), classe.getOrdreDePassage().get(i).getParticipant().getPrenom(), classe.getOrdreDePassage().get(i).getParticipant().getNom(), classe.getOrdreDePassage().get(i).getCheval().getNom(), classe.getOrdreDePassage().get(i).getTemps()));
        }
        return tempListOrdre;
    }

    public List<EquipeAfficher> getOrdreListBaril(int classeId, int equipeId) {
        Baril classe = barilRepository.findById(classeId);
        List<EquipeAfficher> tempListOrdre = new ArrayList<>();
        for (int i = equipeId + 1; i < classe.getOrdreDePassage().size(); i++) {
            tempListOrdre.add(new EquipeAfficher(classe.getOrdreDePassage().get(i).getId(), classe.getOrdreDePassage().get(i).getParticipant().getPrenom(), classe.getOrdreDePassage().get(i).getParticipant().getNom(), classe.getOrdreDePassage().get(i).getCheval().getNom(), classe.getOrdreDePassage().get(i).getTemps()));
        }
        return tempListOrdre;
    }

    public List<EquipeAfficher> getOrdreListTour(int classeId, int equipeId) {
        Tour classe = tourRepository.findById(classeId);
        List<EquipeAfficher> tempListOrdre = new ArrayList<>();
        for (int i = equipeId + 1; i < classe.getOrdreDePassage().size(); i++) {
            tempListOrdre.add(new EquipeAfficher(classe.getOrdreDePassage().get(i).getId(), classe.getOrdreDePassage().get(i).getParticipant().getPrenom(), classe.getOrdreDePassage().get(i).getParticipant().getNom(), classe.getOrdreDePassage().get(i).getCheval().getNom(), classe.getOrdreDePassage().get(i).getTemps()));
        }
        return tempListOrdre;
    }

    public EquipeAfficher getEquipeActuelAllerRetour(int classeId, int equipeId) {
        AllerRetour classe = allerRetourRepository.findById(classeId);
        Equipe equipe = classe.getOrdreDePassage().get(equipeId);
        return new EquipeAfficher(equipe.getId(), equipe.getParticipant().getPrenom(), equipe.getParticipant().getNom(), equipe.getCheval().getNom(), equipe.getTemps());
    }

    public EquipeAfficher getEquipeActuelBaril(int classeId, int equipeId) {
        Baril classe = barilRepository.findById(classeId);
        Equipe equipe = classe.getOrdreDePassage().get(equipeId);
        return new EquipeAfficher(equipe.getId(), equipe.getParticipant().getPrenom(), equipe.getParticipant().getNom(), equipe.getCheval().getNom(), equipe.getTemps());
    }

    public EquipeAfficher getEquipeActuelTour(int classeId, int equipeId) {
        Tour classe = tourRepository.findById(classeId);
        Equipe equipe = classe.getOrdreDePassage().get(equipeId);
        return new EquipeAfficher(equipe.getId(), equipe.getParticipant().getPrenom(), equipe.getParticipant().getNom(), equipe.getCheval().getNom(), equipe.getTemps());
    }
}