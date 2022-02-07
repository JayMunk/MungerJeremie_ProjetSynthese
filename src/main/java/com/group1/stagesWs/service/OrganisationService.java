package com.group1.stagesWs.service;

import com.group1.stagesWs.repositories.OrganisationRepository;
import org.springframework.stereotype.Service;

@Service
public class OrganisationService {
    private final OrganisationRepository organisationRepository;

    public OrganisationService(OrganisationRepository organisationRepository) {
        this.organisationRepository = organisationRepository;
    }
}
