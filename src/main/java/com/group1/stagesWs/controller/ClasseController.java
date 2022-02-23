package com.group1.stagesWs.controller;

import com.group1.stagesWs.model.AllerRetour;
import com.group1.stagesWs.model.Baril;
import com.group1.stagesWs.model.Classe;
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

    @PostMapping(path = "/AllerRetour")
    public ResponseEntity<AllerRetour> createAllerRetourClasse(@RequestBody Classe classe) {
        logger.info("post - createAllerRetourClasse " + classe);
        return classeService.createAllerRetourClasse(classe)
                .map(classe1 -> ResponseEntity.status(HttpStatus.CREATED).body(classe1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @PostMapping(path = "/Baril")
    public ResponseEntity<Baril> createBarilClasse(@RequestBody Classe classe) {
        logger.info("post - createBarilClasse " + classe);
        return classeService.createBarilClasse(classe)
                .map(classe1 -> ResponseEntity.status(HttpStatus.CREATED).body(classe1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @PostMapping(path = "/Tour")
    public ResponseEntity<Tour> createTourClasse(@RequestBody Classe classe) {
        logger.info("post - createTourClasse " + classe);
        return classeService.createTourClasse(classe)
                .map(classe1 -> ResponseEntity.status(HttpStatus.CREATED).body(classe1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }
}
