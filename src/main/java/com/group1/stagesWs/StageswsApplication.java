package com.group1.stagesWs;

import com.group1.stagesWs.model.Competition;
import com.group1.stagesWs.model.Organisation;
import com.group1.stagesWs.model.Participant;
import com.group1.stagesWs.repositories.CompetitionRepository;
import com.group1.stagesWs.repositories.OrganisationRepository;
import com.group1.stagesWs.repositories.ParticipantRepository;
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

    public StageswsApplication(OrganisationRepository organisationRepository, ParticipantRepository participantRepository, CompetitionRepository competitionRepository) {
        this.organisationRepository = organisationRepository;
        this.participantRepository = participantRepository;
        this.competitionRepository = competitionRepository;
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

        Competition competition1 = new Competition("Open de Saint-Jean", "123 rue principal Saint-Jean", LocalDate.of(2022, 2, 25));
        competition1.setOrganisation(org);
        Competition competition2 = new Competition("Open de Saint-Luc", "123 rue principal Saint-Luc", LocalDate.of(2022, 3, 4));
        competition2.setOrganisation(org);
        Competition competition3 = new Competition("Open de Saint-Alfa", "123 rue principal Saint-Alfa", LocalDate.of(2022, 3, 25));
        competition3.setOrganisation(org);
        competitionRepository.saveAll(List.of(competition1, competition2, competition3));
    }
}
