package com.badoulahi.dao;

import com.badoulahi.entities.Etablissement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEtablissement extends JpaRepository<Etablissement, Integer> {
}
