package com.group1.stagesWs;

import com.group1.stagesWs.model.Organisation;
import com.group1.stagesWs.model.Participant;
import com.group1.stagesWs.repositories.OrganisationRepository;
import com.group1.stagesWs.repositories.ParticipantRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDate;


@SpringBootApplication
public class StageswsApplication implements CommandLineRunner {

    private final OrganisationRepository organisationRepository;
    private final ParticipantRepository participantRepository;

    public StageswsApplication(OrganisationRepository organisationRepository, ParticipantRepository participantRepository) {
        this.organisationRepository = organisationRepository;
        this.participantRepository = participantRepository;
    }


    public static void main(String[] args) {
        SpringApplication.run(StageswsApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        Organisation org = new Organisation("ccra@gmail.com", "Password1", "CCRA", "450-124-6891");
        organisationRepository.save(org);

        Participant parti = new Participant("jeremie@gmail.com", "Password1", "Jeremie", LocalDate.of(2000, 4, 10), "438-692-7859");
        participantRepository.save(parti);
    }
}
