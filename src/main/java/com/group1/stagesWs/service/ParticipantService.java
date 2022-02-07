package com.group1.stagesWs.service;

import com.group1.stagesWs.model.Participant;
import com.group1.stagesWs.repositories.ParticipantRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ParticipantService {

    private final ParticipantRepository participantRepository;

    public ParticipantService(ParticipantRepository participantRepository) {
        this.participantRepository = participantRepository;
    }

    public Optional<Participant> addParticipant(Participant participant) {
        return Optional.of(participantRepository.save(participant));
    }
}
