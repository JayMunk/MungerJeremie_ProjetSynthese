package com.group1.stagesWs.repositories;

import com.group1.stagesWs.model.Baril;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BarilRepository extends JpaRepository<Baril, Integer> {

    Baril findById(int id);
}
