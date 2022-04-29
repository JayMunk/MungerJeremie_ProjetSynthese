package com.group1.stagesWs.controller;

import com.group1.stagesWs.model.*;
import com.group1.stagesWs.service.ClasseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
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

    @GetMapping("/getOrdreAllerRetour/{classeId}")
    public ResponseEntity<List<Equipe>> getOrdreAllerRetour(@PathVariable("classeId") int classeId) {
        logger.info("get - getOrdreAllerRetour " + classeId);
        return ResponseEntity.ok(classeService.getOrdreAllerRetour(classeId));
    }

    @GetMapping("/getOrdreBaril/{classeId}")
    public ResponseEntity<List<Equipe>> getOrdreBaril(@PathVariable("classeId") int classeId) {
        logger.info("get - getOrdreBaril " + classeId);
        return ResponseEntity.ok(classeService.getOrdreBaril(classeId));
    }

    @GetMapping("/getOrdreTour/{classeId}")
    public ResponseEntity<List<Equipe>> getOrdreTour(@PathVariable("classeId") int classeId) {
        logger.info("get - getOrdreTour " + classeId);
        return ResponseEntity.ok(classeService.getOrdreTour(classeId));
    }

    @GetMapping("/getResultatAllerRetour/{classeId}")
    public ResponseEntity<List<Equipe>> getResultatAllerRetour(@PathVariable("classeId") int classeId) {
        logger.info("get - getOrdreAllerRetour " + classeId);
        return ResponseEntity.ok(classeService.getResultatAllerRetour(classeId));
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

    @GetMapping("/getEquipeActuelParticipantAllerRetour/{classeId}/{equipeId}")
    public ResponseEntity<Participant> getEquipeActuelParticipantAllerRetour(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getEquipeActuelParticipantAllerRetour " + classeId + ", " + equipeId);
        return ResponseEntity.ok(classeService.getEquipeActuelParticipantAllerRetour(classeId, equipeId));
    }

    @GetMapping("/getEquipeActuelParticipantBaril/{classeId}/{equipeId}")
    public ResponseEntity<Participant> getEquipeActuelParticipantBaril(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getEquipeActuelParticipantBaril " + classeId + ", " + equipeId);
        return ResponseEntity.ok(classeService.getEquipeActuelParticipantBaril(classeId, equipeId));
    }

    @GetMapping("/getEquipeActuelParticipantTour/{classeId}/{equipeId}")
    public ResponseEntity<Participant> getEquipeActuelParticipantTour(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getEquipeActuelParticipantTour " + classeId + ", " + equipeId);
        return ResponseEntity.ok(classeService.getEquipeActuelParticipantTour(classeId, equipeId));
    }

    @GetMapping("/getEquipeActuelChevalAllerRetour/{classeId}/{equipeId}")
    public ResponseEntity<Cheval> getEquipeActuelChevalAllerRetour(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getEquipeActuelChevalAllerRetour " + classeId + ", " + equipeId);
        return ResponseEntity.ok(classeService.getEquipeActuelChevalAllerRetour(classeId, equipeId));
    }

    @GetMapping("/getEquipeActuelChevalBaril/{classeId}/{equipeId}")
    public ResponseEntity<Cheval> getEquipeActuelChevalBaril(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getEquipeActuelChevalBaril " + classeId + ", " + equipeId);
        return ResponseEntity.ok(classeService.getEquipeActuelChevalBaril(classeId, equipeId));
    }

    @GetMapping("/getEquipeActuelChevalTour/{classeId}/{equipeId}")
    public ResponseEntity<Cheval> getEquipeActuelChevalTour(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getEquipeActuelChevalTour " + classeId + ", " + equipeId);
        return ResponseEntity.ok(classeService.getEquipeActuelChevalTour(classeId, equipeId));
    }

    @GetMapping("/getOrdreListParticipantAllerRetour/{classeId}/{equipeId}")
    public ResponseEntity<List<Participant>> getOrdreListParticipantAllerRetour(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getOrdreListParticipantAllerRetour " + classeId + ", " + equipeId);
        return ResponseEntity.ok(classeService.getOrdreListParticipantAllerRetour(classeId, equipeId));
    }

    @GetMapping("/getOrdreListParticipantBaril/{classeId}/{equipeId}")
    public ResponseEntity<List<Participant>> getOrdreListParticipantBaril(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getOrdreListParticipantAllerRetour " + classeId + ", " + equipeId);
        return ResponseEntity.ok(classeService.getOrdreListParticipantBaril(classeId, equipeId));
    }

    @GetMapping("/getOrdreListParticipantTour/{classeId}/{equipeId}")
    public ResponseEntity<List<Participant>> getOrdreListParticipantTour(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getOrdreListParticipantTour " + classeId + ", " + equipeId);
        return ResponseEntity.ok(classeService.getOrdreListParticipantTour(classeId, equipeId));
    }

    @GetMapping("/getOrdreListChevalAllerRetour/{classeId}/{equipeId}")
    public ResponseEntity<List<Cheval>> getOrdreListChevalAllerRetour(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getOrdreListChevalAllerRetour " + classeId + ", " + equipeId);
        return ResponseEntity.ok(classeService.getOrdreListChevalAllerRetour(classeId, equipeId));
    }

    @GetMapping("/getOrdreListChevalBaril/{classeId}/{equipeId}")
    public ResponseEntity<List<Cheval>> getOrdreListChevalBaril(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getOrdreListChevalBaril " + classeId + ", " + equipeId);
        return ResponseEntity.ok(classeService.getOrdreListChevalBaril(classeId, equipeId));
    }

    @GetMapping("/getOrdreListChevalTour/{classeId}/{equipeId}")
    public ResponseEntity<List<Cheval>> getOrdreListChevalTour(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getOrdreListChevalAllerRetour " + classeId + ", " + equipeId);
        return ResponseEntity.ok(classeService.getOrdreListChevalTour(classeId, equipeId));
    }

    @GetMapping("/getResultatListParticipantAllerRetour/{classeId}")
    public ResponseEntity<List<Participant>> getResultatListParticipantAllerRetour(@PathVariable("classeId") int classeId) {
        logger.info("get - getResultatListParticipantAllerRetour " + classeId);
        return ResponseEntity.ok(classeService.getResultatListParticipantAllerRetour(classeId));
    }

    @GetMapping("/getResultatListParticipantBaril/{classeId}")
    public ResponseEntity<List<Participant>> getResultatListParticipantBaril(@PathVariable("classeId") int classeId) {
        logger.info("get - getResultatListParticipantBaril " + classeId);
        return ResponseEntity.ok(classeService.getResultatListParticipantBaril(classeId));
    }

    @GetMapping("/getResultatListParticipantTour/{classeId}")
    public ResponseEntity<List<Participant>> getResultatListParticipantTour(@PathVariable("classeId") int classeId) {
        logger.info("get - getResultatListParticipantTour " + classeId);
        return ResponseEntity.ok(classeService.getResultatListParticipantTour(classeId));
    }

    @GetMapping("/getResultatListChevalAllerRetour/{classeId}")
    public ResponseEntity<List<Cheval>> getResultatListChevalAllerRetour(@PathVariable("classeId") int classeId) {
        logger.info("get - getResultatListChevalAllerRetour " + classeId);
        return ResponseEntity.ok(classeService.getResultatListChevalAllerRetour(classeId));
    }

    @GetMapping("/getResultatListChevalBaril/{classeId}")
    public ResponseEntity<List<Cheval>> getResultatListChevalBaril(@PathVariable("classeId") int classeId) {
        logger.info("get - getResultatListChevalBaril " + classeId);
        return ResponseEntity.ok(classeService.getResultatListChevalBaril(classeId));
    }

    @GetMapping("/getResultatListChevalTour/{classeId}")
    public ResponseEntity<List<Cheval>> getResultatListChevalTour(@PathVariable("classeId") int classeId) {
        logger.info("get - getResultatListChevalTour " + classeId);
        return ResponseEntity.ok(classeService.getResultatListChevalTour(classeId));
    }

    @GetMapping("/getResultatListTempsAllerRetour/{classeId}")
    public ResponseEntity<List<String>> getResultatListTempsAllerRetour(@PathVariable("classeId") int classeId) {
        logger.info("get - getResultatListTempsAllerRetour " + classeId);
        return ResponseEntity.ok(classeService.getResultatListTempsAllerRetour(classeId));
    }

    @GetMapping("/getResultatListTempsBaril/{classeId}")
    public ResponseEntity<List<String>> getResultatListTempsBaril(@PathVariable("classeId") int classeId) {
        logger.info("get - getResultatListTempsBaril " + classeId);
        return ResponseEntity.ok(classeService.getResultatListTempsBaril(classeId));
    }

    @GetMapping("/getResultatListTempsTour/{classeId}")
    public ResponseEntity<List<String>> getResultatListTempsTour(@PathVariable("classeId") int classeId) {
        logger.info("get - getResultatListTempsTour " + classeId);
        return ResponseEntity.ok(classeService.getResultatListTempsTour(classeId));
    }

    @GetMapping("/getResultatListAllerRetour/{classeId}")
    public ResponseEntity<List<EquipeAfficher>> getResultatListAllerRetour(@PathVariable("classeId") int classeId) {
        logger.info("get - getResultatListTempsTour " + classeId);
        return ResponseEntity.ok(classeService.getResultatListAllerRetour(classeId));
    }

    @GetMapping("/getOrdreListAllerRetour/{classeId}/{equipeId}")
    public ResponseEntity<List<EquipeAfficher>> getOrdreListAllerRetour(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getResultatListTempsTour " + classeId);
        return ResponseEntity.ok(classeService.getOrdreListAllerRetour(classeId, equipeId));
    }
    @GetMapping("/getEquipeActuelAllerRetour/{classeId}/{equipeId}")
    public ResponseEntity <EquipeAfficher> getEquipeActuelAllerRetour(@PathVariable("classeId") int classeId, @PathVariable("equipeId") int equipeId) {
        logger.info("get - getEquipeActuelAllerRetour " + classeId);
        return ResponseEntity.ok(classeService.getEquipeActuelAllerRetour(classeId, equipeId));
    }
}