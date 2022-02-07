package com.group1.stagesWs.service;

import com.group1.stagesWs.repositories.ParticipantRepository;
import org.springframework.stereotype.Service;

@Service
public class ParticipantService {

    private final ParticipantRepository participantRepository;

    public ParticipantService(ParticipantRepository participantRepository) {
        this.participantRepository = participantRepository;
    }
}
