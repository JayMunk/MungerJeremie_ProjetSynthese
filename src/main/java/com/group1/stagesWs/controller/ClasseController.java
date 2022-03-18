package com.group1.stagesWs.controller;

import com.group1.stagesWs.model.AllerRetour;
import com.group1.stagesWs.model.Baril;
import com.group1.stagesWs.model.Tour;
import com.group1.stagesWs.service.ClasseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/classe")
public class ClasseController {

    Logger logger = LoggerFactory.getLogger(ClasseController.class);

    private final ClasseService classeService;

    public ClasseController(ClasseService classeService) {
        this.classeService = classeService;
    }

    @PostMapping(path = "/AllerRetour/{competitionId}")
    public ResponseEntity<AllerRetour> createAllerRetourClasse(@RequestBody AllerRetour classe, @PathVariable("competitionId") int competitionId) {
        logger.info("post - createAllerRetourClasse " + classe + "|| id " + competitionId);
        return classeService.createAllerRetourClasse(classe, competitionId)
                .map(classe1 -> ResponseEntity.status(HttpStatus.CREATED).body(classe1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @PostMapping(path = "/Baril/{competitionId}")
    public ResponseEntity<Baril> createBarilClasse(@RequestBody Baril classe, @PathVariable("competitionId") int competitionId) {
        logger.info("post - createBarilClasse " + classe + "|| id " + competitionId);
        return classeService.createBarilClasse(classe, competitionId)
                .map(classe1 -> ResponseEntity.status(HttpStatus.CREATED).body(classe1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @PostMapping(path = "/Tour/{competitionId}")
    public ResponseEntity<Tour> createTourClasse(@RequestBody Tour classe, @PathVariable("competitionId") int competitionId) {
        logger.info("post - createTourClasse " + classe + "|| id " + competitionId);
        return classeService.createTourClasse(classe, competitionId)
                .map(classe1 -> ResponseEntity.status(HttpStatus.CREATED).body(classe1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @PostMapping(path = "/inscrireAllerRetour/{chevalId}/{courriel}/{classeId}")
    public ResponseEntity<AllerRetour> sinscrireAllerRetour(@PathVariable("chevalId") int chevalId, @PathVariable("courriel") String courriel, @PathVariable("classeId") int classeId) {
        logger.info("post - sinscrireAllerRetour " + chevalId + "|| courriel " + courriel+"|| id " + classeId);
        return classeService.sinscrireAllerRetour(chevalId, courriel, classeId)
                .map(classe1 -> ResponseEntity.status(HttpStatus.CREATED).body(classe1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @PostMapping(path = "/inscrireBaril/{chevalId}/{courriel}/{classeId}")
    public ResponseEntity<Baril> sinscrireBaril(@PathVariable("chevalId") int chevalId, @PathVariable("courriel") String courriel, @PathVariable("classeId") int classeId) {
        logger.info("post - sinscrireBaril " + chevalId + "|| courriel " + courriel+"|| id " + classeId);
        return classeService.sinscrireBaril(chevalId, courriel, classeId)
                .map(classe1 -> ResponseEntity.status(HttpStatus.CREATED).body(classe1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @PostMapping(path = "/inscrireTour/{chevalId}/{courriel}/{classeId}")
    public ResponseEntity<Tour> sinscrireTour(@PathVariable("chevalId") int chevalId, @PathVariable("courriel") String courriel, @PathVariable("classeId") int classeId) {
        logger.info("post - sinscrireTour " + chevalId + "|| courriel " + courriel+"|| id " + classeId);
        return classeService.sinscrireTour(chevalId, courriel, classeId)
                .map(classe1 -> ResponseEntity.status(HttpStatus.CREATED).body(classe1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }
}
