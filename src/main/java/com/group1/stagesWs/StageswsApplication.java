package com.group1.stagesWs;

import com.group1.stagesWs.model.*;
import com.group1.stagesWs.repositories.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDate;
import java.util.List;


@SpringBootApplication
public class StageswsApplication implements CommandLineRunner {

    private final OrganisationRepository organisationRepository;
    private final ParticipantRepository participantRepository;
    private final CompetitionRepository competitionRepository;
    private final BarilRepository barilRepository;
    private final TourRepository tourRepository;
    private final ChevalRepository chevalRepository;
    private final EquipeRepository equipeRepository;
    private final List<Participant> participantList = getParticipantList();
    private final List<Cheval> chevalList = getChevalList();
    private final Organisation organisation = getOrganisation();
    private final List<Equipe> equipeList = getEquipeList();
    private final Baril baril = getBaril();
    private final Tour tour = getTour();
    private final AllerRetour allerRetour = getAllerRetour();
    private final List<Competition> competitionList = getCompetitionList();


    public StageswsApplication(OrganisationRepository organisationRepository, ParticipantRepository participantRepository, CompetitionRepository competitionRepository, BarilRepository barilRepository, TourRepository tourRepository, ChevalRepository chevalRepository, EquipeRepository equipeRepository) {
        this.organisationRepository = organisationRepository;
        this.participantRepository = participantRepository;
        this.competitionRepository = competitionRepository;
        this.barilRepository = barilRepository;
        this.tourRepository = tourRepository;
        this.chevalRepository = chevalRepository;
        this.equipeRepository = equipeRepository;
    }


    public static void main(String[] args) {
        SpringApplication.run(StageswsApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        organisationRepository.save(organisation);
        participantRepository.saveAll(participantList);
        chevalRepository.saveAll(chevalList);
        equipeRepository.saveAll(equipeList);
        barilRepository.save(baril);
        tourRepository.save(tour);
        competitionRepository.saveAll(competitionList);

    }

    private Organisation getOrganisation() {
        return new Organisation("ccra@gmail.com", "Password1", "CCRA", "450-124-6891");
    }

    private List<Cheval> getChevalList() {
        Cheval cheval1 = new Cheval("Alfred", "Hongre", true, true, "1234", LocalDate.of(2006, 5, 10), "John", "Nany", "Canada", "Alberta");
        cheval1.setOwner(participantList.get(0));
        Cheval cheval2 = new Cheval("Bob", "Hongre", false, false, null, null, null, null, null, null);
        cheval2.setOwner(participantList.get(0));
        Cheval cheval3 = new Cheval("johny", "Hongre", false, false, null, null, null, null, null, null);
        cheval2.setOwner(participantList.get(0));

        return List.of(cheval1, cheval2, cheval3);
    }

    private List<Participant> getParticipantList() {
        Participant participant1 = new Participant("jeremie@gmail.com", "Password1", "Munger", "Jeremie", LocalDate.of(2000, 4, 10), "438-692-7859");
        Participant participant2 = new Participant("jimmy@gmail.com", "Password1", "Monny", "Jimmy", LocalDate.of(1995, 7, 30), "445-894-7563");
        Participant participant3 = new Participant("marcel@gmail.com", "Password1", "McMaffin", "Marcel", LocalDate.of(1995, 7, 30), "445-894-7563");

        return List.of(participant1, participant2, participant3);
    }

    private List<Equipe> getEquipeList() {
        Equipe equipe1 = new Equipe(participantList.get(0), chevalList.get(0));
        equipe1.setTemps("15,656");
        Equipe equipe2 = new Equipe(participantList.get(1), chevalList.get(1));
        Equipe equipe3 = new Equipe(participantList.get(2), chevalList.get(2));

        return List.of(equipe1, equipe2, equipe3);
    }

    private Baril getBaril() {
        Baril baril1 = new Baril(3, 3000, 5.0);
        baril1.setInscriptionList(equipeList);

        return baril1;
    }

    private Tour getTour() {
        Tour tour1 = new Tour(2, 2500, 5.0);
        tour1.setInscriptionList(equipeList);

        return tour1;
    }

    private AllerRetour getAllerRetour() {
        AllerRetour allerRetour1 = new AllerRetour(2, 500, 5.0);
        allerRetour1.setInscriptionList(equipeList);
        allerRetour1.setOrdreDePassage(equipeList);
        allerRetour1.setClassement(List.of(equipeList.get(0)));

        return allerRetour1;
    }

    private List<Competition> getCompetitionList() {
        Competition competition1 = new Competition("Open de Saint-Jean", "123 rue principal Saint-Jean", LocalDate.now());
        competition1.setOrganisation(organisation);
        competition1.setBaril(baril);
        competition1.setTour(tour);
        competition1.setAllerRetour(allerRetour);
        Competition competition2 = new Competition("Open de Saint-Luc", "123 rue principal Saint-Luc", LocalDate.now().plusDays(7));
        competition2.setOrganisation(organisation);
        Competition competition3 = new Competition("Open de Saint-Alfa", "123 rue principal Saint-Alfa", LocalDate.now().plusDays(20));
        competition3.setOrganisation(organisation);

        return List.of(competition1, competition2, competition3);
    }
}