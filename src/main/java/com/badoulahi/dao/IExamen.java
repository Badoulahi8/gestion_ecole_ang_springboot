package com.badoulahi.dao;

import com.badoulahi.entities.Examen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IExamen extends JpaRepository<Examen, Integer> {
}
