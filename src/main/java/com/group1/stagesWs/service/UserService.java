package com.group1.stagesWs.service;

import com.group1.stagesWs.model.User;
import com.group1.stagesWs.repositories.OrganisationRepository;
import com.group1.stagesWs.repositories.ParticipantRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final OrganisationRepository organisationRepository;
    private final ParticipantRepository participantRepository;

    public UserService(OrganisationRepository organisationRepository, ParticipantRepository participantRepository) {
        this.organisationRepository = organisationRepository;
        this.participantRepository = participantRepository;
    }

    public Optional<User> login(String email, String pwd) {
        if (participantRepository.findParticipantByCourrielIgnoreCase(email) != null) {
            return Optional.of(
                    participantRepository.findParticipanByCourrielIgnoreCaseAndPassword(email, pwd));
        }
        if (organisationRepository.findOrganisationByCourrielIgnoreCase(email) != null) {
            return Optional.of(
                    organisationRepository.findOrganisationByCourrielIgnoreCaseAndPassword(email, pwd));
        }
        return Optional.empty();
    }
}
