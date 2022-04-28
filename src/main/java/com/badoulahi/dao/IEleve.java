package com.badoulahi.dao;

import com.badoulahi.entities.Eleve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEleve extends JpaRepository<Eleve, Integer> {
}
