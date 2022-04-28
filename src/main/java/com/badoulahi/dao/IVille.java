package com.badoulahi.dao;

import com.badoulahi.entities.Ville;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IVille extends JpaRepository<Ville, Integer> {

    @Query("SELECT v FROM Ville v WHERE v.nom=:nom")
    public Ville getVilleByNom(@Param("nom") String nom) ;

}
