package com.group1.stagesWs.controller;

import com.group1.stagesWs.model.Organisation;
import com.group1.stagesWs.service.OrganisationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/organisation")
public class OrganisationController {

    Logger logger = LoggerFactory.getLogger(OrganisationController.class);

    private final OrganisationService organisationService;

    public OrganisationController(OrganisationService organisationService) {
        this.organisationService = organisationService;
    }

    @PostMapping(path = "/organisation")
    public ResponseEntity<Organisation> createEtudiant(@RequestBody Organisation organisation) {
        logger.info("post - createOrganisation " + organisation);
        return organisationService
                .addOrganisation(organisation)
                .map(organisation1 -> ResponseEntity.status(HttpStatus.CREATED).body(organisation1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }
}
