package com.group1.stagesWs.controller;

import com.group1.stagesWs.model.Cheval;
import com.group1.stagesWs.service.ChevalService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/cheval")
public class ChevalController {

    Logger logger = LoggerFactory.getLogger(ChevalController.class);

    private final ChevalService chevalService;

    public ChevalController(ChevalService chevalService) {
        this.chevalService = chevalService;
    }

    @PostMapping(path = "/{courriel}")
    public ResponseEntity<Cheval> createCheval(@RequestBody Cheval cheval, @PathVariable("courriel") String courriel) {
        logger.info("post - createCheval " + cheval);
        return chevalService
                .createCheval(cheval, courriel)
                .map(cheval1 -> ResponseEntity.status(HttpStatus.CREATED).body(cheval1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }
}
