package com.badoulahi.dao;

import com.badoulahi.entities.Enseignant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEnseignant extends JpaRepository<Enseignant, Integer> {
}
