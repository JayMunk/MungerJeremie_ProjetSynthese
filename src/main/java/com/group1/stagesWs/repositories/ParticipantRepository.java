package com.group1.stagesWs.repositories;

import com.group1.stagesWs.model.Participant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParticipantRepository extends JpaRepository<Participant, Integer> {

    Participant findParticipantByCourrielIgnoreCase(String email);

    Participant findParticipanByCourrielIgnoreCaseAndPassword(String email, String pwd);
}
