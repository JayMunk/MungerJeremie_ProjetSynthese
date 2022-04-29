package com.group1.stagesWs.controller;

import com.group1.stagesWs.model.AllerRetour;
import com.group1.stagesWs.model.Baril;
import com.group1.stagesWs.model.EquipeAfficher;
import com.group1.stagesWs.model.Tour;
import com.group1.stagesWs.service.ClasseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        logger.info("post - sinscrireAllerRetour " + chevalId + "|| courriel " + courriel + "|| id " + classeId);
        return classeService.sinscrireAllerRetour(chevalId, courriel, classeId)
                .map(classe1 -> ResponseEntity.status(HttpStatus.CREATED).body(classe1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @PostMapping(path = "/inscrireBaril/{chevalId}/{courriel}/{classeId}")
    public ResponseEntity<Baril> sinscrireBaril(@PathVariable("chevalId") int chevalId, @PathVariable("courriel") String courriel, @PathVariable("classeId") int classeId) {
        logger.info("post - sinscrireBaril " + chevalId + "|| courriel " + courriel + "|| id " + classeId);
        return classeService.sinscrireBaril(chevalId, courriel, classeId)
                .map(classe1 -> ResponseEntity.status(HttpStatus.CREATED).body(classe1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @PostMapping(path = "/inscrireTour/{chevalId}/{courriel}/{classeId}")
    public ResponseEntity<Tour> sinscrireTour(@PathVariable("chevalId") int chevalId, @PathVariable("courriel") String courriel, @PathVariable("classeId") int classeId) {
        logger.info("post - sinscrireTour " + chevalId + "|| courriel " + courriel + "|| id " + classeId);
        return classeService.sinscrireTour(chevalId, courriel, classeId)
                .map(classe1 -> ResponseEntity.status(HttpStatus.CREATED).body(classe1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @PostMapping(path = "/genererOrdreAllerRetour/{classeId}")
    public ResponseEntity<AllerRetour> genererOrdreAllerRetour(@PathVariable("classeId") int classeId) {
        logger.info("post - id " + classeId);
        return classeService.genererOrdreAllerRetour(classeId)
                .map(classe1 -> ResponseEntity.status(HttpStatus.CREATED).body(classe1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @PostMapping(path = "/genererOrdreBaril/{classeId}")
    public ResponseEntity<Baril> genererOrdreBaril(@PathVariable("classeId") int classeId) {
        logger.info("post - id " + classeId);
        return classeService.genererOrdreBaril(classeId)
                .map(classe1 -> ResponseEntity.status(HttpStatus.CREATED).body(classe1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @PostMapping(path = "/genererOrdreTour/{classeId}")
    public ResponseEntity<Tour> genererOrdreTour(@PathVariable("classeId") int classeId) {
        logger.info("post - id " + classeId);
        return classeService.genererOrdreTour(classeId)
                .map(classe1 -> ResponseEntity.status(HttpStatus.CREATED).body(classe1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @GetMapping("/getEquipeActuelIdAllerRetour/{classeId}")
    public ResponseEntity<Integer> getEquipeActuelIdAllerRetour(@PathVariable("classeId") int classeId) {
        logger.info("get - getEquipeActuelIdAllerRetour " + classeId);
        return ResponseEntity.ok(classeService.getEquipeActuelIdAllerRetour(classeId));
    }

    @GetMapping("/getEquipeActuelIdBaril/{classeId}")
    public ResponseEntity<Integer> getEquipeActuelIdBaril(@PathVariable("classeId") int classeId) {
        logger.info("get - getEquipeActuelIdBaril " + classeId);
        return ResponseEntity.ok(classeService.getEquipeActuelIdBaril(classeId));
    }

    @GetMapping("/getEquipeActuelIdTour/{classeId}")
    public ResponseEntity<Integer> getEquipeActuelIdTour(@PathVariable("classeId") int classeId) {
        logger.info("get - getEquipeActuelIdTour " + classeId);
        return ResponseEntity.ok(classeService.getEquipeActuelIdTour(classeId));
    }


    @GetMapping("/getResultatListAllerRetour/{classeId}")
    public ResponseEntity<List<EquipeAfficher>> getResultatListAllerRetour(@PathVariable("classeId") int classeId) {
        logger.info("get - getResultatListAllerRetour " + classeId);
        return ResponseEntity.ok(classeService.getResultatListAllerRetour(classeId));
    }

    @GetMapping("/getResultatListBaril/{classeId}")
    public ResponseEntity<List<EquipeAfficher>> getResultatListBaril(@PathVariable("classeId") int classeId) {
        logger.info("get - getResultatListBaril " + classeId);
        return ResponseEntity.ok(classeService.getResultatListBaril(classeId));
    }

    @GetMapping("/getResultatListTour/{classeId}")
    public ResponseEntity<List<EquipeAfficher>> getResultatListTour(@PathVariable("classeId") int classeId) {
        logger.info("get - getResultatListTour " + classeId);
        return ResponseEntity.ok(classeService.getResultatListTour(classeId));
    }

    @GetMapping("/getOrdreListAllerRetour/{classeId}/{equipeId}")
    public ResponseEntity<List<EquipeAfficher>> getOrdreListAllerRetour(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getOrdreListAllerRetour " + classeId);
        return ResponseEntity.ok(classeService.getOrdreListAllerRetour(classeId, equipeId));
    }

    @GetMapping("/getOrdreListBaril/{classeId}/{equipeId}")
    public ResponseEntity<List<EquipeAfficher>> getOrdreListBaril(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getOrdreListBaril " + classeId);
        return ResponseEntity.ok(classeService.getOrdreListBaril(classeId, equipeId));
    }

    @GetMapping("/getOrdreListTour/{classeId}/{equipeId}")
    public ResponseEntity<List<EquipeAfficher>> getOrdreListTour(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getOrdreListTour " + classeId);
        return ResponseEntity.ok(classeService.getOrdreListTour(classeId, equipeId));
    }

    @GetMapping("/getEquipeActuelAllerRetour/{classeId}/{equipeId}")
    public ResponseEntity<EquipeAfficher> getEquipeActuelAllerRetour(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getEquipeActuelAllerRetour " + classeId);
        return ResponseEntity.ok(classeService.getEquipeActuelAllerRetour(classeId, equipeId));
    }

    @GetMapping("/getEquipeActuelBaril/{classeId}/{equipeId}")
    public ResponseEntity<EquipeAfficher> getEquipeActuelBaril(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getEquipeActuelBaril " + classeId);
        return ResponseEntity.ok(classeService.getEquipeActuelBaril(classeId, equipeId));
    }

    @GetMapping("/getEquipeActuelTour/{classeId}/{equipeId}")
    public ResponseEntity<EquipeAfficher> getEquipeActuelTour(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getEquipeActuelTour " + classeId);
        return ResponseEntity.ok(classeService.getEquipeActuelTour(classeId, equipeId));
    }
}