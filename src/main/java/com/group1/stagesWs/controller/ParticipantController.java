package com.group1.stagesWs.controller;

import com.group1.stagesWs.model.Participant;
import com.group1.stagesWs.service.ParticipantService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/participant")
public class ParticipantController {

    Logger logger = LoggerFactory.getLogger(ParticipantController.class);

    private final ParticipantService participantService;

    public ParticipantController(ParticipantService participantService) {
        this.participantService = participantService;
    }

    @PostMapping(path = "/participant")
    public ResponseEntity<Participant> createEtudiant(@RequestBody Participant participant) {
        logger.info("post - createParticipant " + participant);
        return participantService
                .addParticipant(participant)
                .map(participant1 -> ResponseEntity.status(HttpStatus.CREATED).body(participant1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }
}
