package com.badoulahi.dao;

import com.badoulahi.entities.Epreuve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEpreuve extends JpaRepository<Epreuve, Integer> {
}
