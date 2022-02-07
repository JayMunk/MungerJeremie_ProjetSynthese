package com.group1.stagesWs.service;

import com.group1.stagesWs.model.Organisation;
import com.group1.stagesWs.repositories.OrganisationRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrganisationService {
    private final OrganisationRepository organisationRepository;

    public OrganisationService(OrganisationRepository organisationRepository) {
        this.organisationRepository = organisationRepository;
    }

    public Optional<Organisation> addOrganisation(Organisation organisation) {
        return Optional.of(organisationRepository.save(organisation));
    }
}
