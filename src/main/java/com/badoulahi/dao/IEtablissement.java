package com.badoulahi.dao;

import com.badoulahi.entities.Etablissement;
import com.badoulahi.entities.Ville;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IEtablissement extends JpaRepository<Etablissement, Integer> {

    @Query("SELECT e FROM Etablissement e WHERE e.id<>:id")
    public List<Etablissement> getEtablissementExceptId(@Param("id") int id) ;
}
