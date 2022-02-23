package com.group1.stagesWs.repositories;

import com.group1.stagesWs.model.Organisation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrganisationRepository extends JpaRepository<Organisation, Integer> {

    Organisation findOrganisationByCourrielIgnoreCase(String courriel);

    Organisation findOrganisationByCourrielIgnoreCaseAndPassword(String email, String pwd);
}
