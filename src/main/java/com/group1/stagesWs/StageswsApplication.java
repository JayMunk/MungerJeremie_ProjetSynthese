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
    private final AllerRetourRepository allerRetourRepository;
    private final TourRepository tourRepository;
    private final ChevalRepository chevalRepository;
    private final EquipeRepository equipeRepository;

    public StageswsApplication(OrganisationRepository organisationRepository, ParticipantRepository participantRepository, CompetitionRepository competitionRepository, BarilRepository barilRepository, AllerRetourRepository allerRetourRepository, TourRepository tourRepository, ChevalRepository chevalRepository, EquipeRepository equipeRepository) {
        this.organisationRepository = organisationRepository;
        this.participantRepository = participantRepository;
        this.competitionRepository = competitionRepository;
        this.barilRepository = barilRepository;
        this.allerRetourRepository = allerRetourRepository;
        this.tourRepository = tourRepository;
        this.chevalRepository = chevalRepository;
        this.equipeRepository = equipeRepository;
    }


    public static void main(String[] args) {
        SpringApplication.run(StageswsApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        Organisation org = new Organisation("ccra@gmail.com", "Password1", "CCRA", "450-124-6891");
        organisationRepository.save(org);

        Participant parti = new Participant("jeremie@gmail.com", "Password1", "Munger", "Jeremie", LocalDate.of(2000, 4, 10), "438-692-7859");
        participantRepository.save(parti);

        Cheval cheval1 = new Cheval("Alfred", "Hongre", true, true, "1234", LocalDate.of(2006, 5, 10), "John", "Nany", "Canada", "Alberta");
        cheval1.setOwner(parti);
        Cheval cheval2 = new Cheval("Bob", "Hongre", false, false, null, null, null, null, null, null);
        cheval2.setOwner(parti);
        Cheval cheval3 = new Cheval("johny", "Hongre", false, false, null, null, null, null, null, null);
        cheval2.setOwner(parti);
        chevalRepository.saveAll(List.of(cheval1, cheval2, cheval3));

        Baril baril1 = new Baril(3, 3000, 5.0);
        barilRepository.save(baril1);

        Tour tour1 = new Tour(2, 2500, 5.0);
        tourRepository.save(tour1);

        Equipe equipe1 = new Equipe(parti, cheval1);
        Equipe equipe2 = new Equipe(parti, cheval2);
        Equipe equipe3 = new Equipe(parti, cheval3);
        equipeRepository.saveAll(List.of(equipe1, equipe2, equipe3));

        AllerRetour allerRetour1 = new AllerRetour(2, 500, 5.0);
        allerRetour1.setInscriptionList(List.of(equipe1, equipe2, equipe3));
        allerRetourRepository.save(allerRetour1);

        Competition competition1 = new Competition("Open de Saint-Jean", "123 rue principal Saint-Jean", LocalDate.now());
        competition1.setOrganisation(org);
        competition1.setBaril(baril1);
        competition1.setTour(tour1);
        competition1.setAllerRetour(allerRetour1);
        Competition competition2 = new Competition("Open de Saint-Luc", "123 rue principal Saint-Luc", LocalDate.now().plusDays(7));
        competition2.setOrganisation(org);
        Competition competition3 = new Competition("Open de Saint-Alfa", "123 rue principal Saint-Alfa", LocalDate.now().plusDays(20));
        competition3.setOrganisation(org);
        competitionRepository.saveAll(List.of(competition1, competition2, competition3));

    }
}
