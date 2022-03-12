package com.group1.stagesWs.repositories;

import com.group1.stagesWs.model.Cheval;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChevalRepository extends JpaRepository<Cheval, Integer> {


    List<Cheval> findAllByOwnerCourriel(String courriel);
}
