package com.group1.stagesWs.service;

import com.group1.stagesWs.model.Competition;
import com.group1.stagesWs.model.Organisation;
import com.group1.stagesWs.repositories.CompetitionRepository;
import com.group1.stagesWs.repositories.OrganisationRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class CompetitionService {

    private final CompetitionRepository competitionRepository;
    private final OrganisationRepository organisationRepository;

    public CompetitionService(CompetitionRepository competitionRepository, OrganisationRepository organisationRepository) {
        this.competitionRepository = competitionRepository;
        this.organisationRepository = organisationRepository;
    }

    public Optional<Competition> createCompetition(Competition competition, String courriel) {
        Organisation organisation = organisationRepository.findOrganisationByCourrielIgnoreCase(courriel);
        competition.setOrganisation(organisation);
        return Optional.of(competitionRepository.save(competition));
    }

    public List<Competition> getCompetitionsByOrganisationEmail(String organisationEmail) {
        return competitionRepository.findAllByOrganisationCourrielIgnoreCase(organisationEmail);
    }

    public List<Competition> getCompetitionsByDate(LocalDate dateDebut, LocalDate dateFin) {
        return competitionRepository.findByDateBetween(dateDebut, dateFin);
    }
}
