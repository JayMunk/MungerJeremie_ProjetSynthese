package com.group1.stagesWs.service;

import com.group1.stagesWs.model.Cheval;
import com.group1.stagesWs.model.Participant;
import com.group1.stagesWs.repositories.ChevalRepository;
import com.group1.stagesWs.repositories.ParticipantRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ChevalService {

    private final ChevalRepository chevalRepository;
    private final ParticipantRepository participantRepository;

    public ChevalService(ChevalRepository chevalRepository, ParticipantRepository participantRepository) {
        this.chevalRepository = chevalRepository;
        this.participantRepository = participantRepository;
    }

    public Optional<Cheval> createCheval(Cheval cheval, String courriel) {
        Participant participant = participantRepository.findParticipantByCourrielIgnoreCase(courriel);
        cheval.setOwner(participant);
        return Optional.of(chevalRepository.save(cheval));
    }
}
