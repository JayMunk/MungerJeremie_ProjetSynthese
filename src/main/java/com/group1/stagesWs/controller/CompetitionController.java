package com.group1.stagesWs.controller;

import com.group1.stagesWs.model.Competition;
import com.group1.stagesWs.service.CompetitionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/competition")
public class CompetitionController {

    Logger logger = LoggerFactory.getLogger(CompetitionController.class);

    private final CompetitionService competitionService;

    public CompetitionController(CompetitionService competitionService) {
        this.competitionService = competitionService;
    }

    @PostMapping(path = "/{courriel}")
    public ResponseEntity<Competition> createCompetition(@RequestBody Competition competition, @PathVariable("courriel") String courriel) {
        logger.info("post - createCompetition " + competition + courriel);
        return competitionService
                .createCompetition(competition, courriel)
                .map(competition1 -> ResponseEntity.status(HttpStatus.CREATED).body(competition1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @GetMapping("/competitions/{courriel}")
    public ResponseEntity<List<Competition>> getCompetitionsByOrganisationEmail(@PathVariable("courriel") String organisationEmail) {
        return ResponseEntity.ok(competitionService.getCompetitionsByOrganisationEmail(organisationEmail));
    }

    @GetMapping("/competitionsByDateWeek/{dateDebut}")
    public ResponseEntity<List<Competition>> competitionsByDateWeek(@PathVariable("dateDebut") String dateDebutString) {
        logger.info("get - getCompetitionsByDateWeek " + dateDebutString);
        LocalDate dateDebut = LocalDate.parse(dateDebutString);
        LocalDate dateFin = dateDebut.plusDays(7);
        return ResponseEntity.ok(competitionService.getCompetitionsByDate(dateDebut, dateFin));
    }

    @GetMapping("/competitionsByDateMonth/{dateDebut}")
    public ResponseEntity<List<Competition>> competitionsByDateMonth(@PathVariable("dateDebut") String dateDebutString) {
        logger.info("get - getCompetitionsByDateMonth " + dateDebutString);
        LocalDate dateDebut = LocalDate.parse(dateDebutString);
        LocalDate dateFin = dateDebut.plusMonths(1);
        return ResponseEntity.ok(competitionService.getCompetitionsByDate(dateDebut, dateFin));
    }
}
