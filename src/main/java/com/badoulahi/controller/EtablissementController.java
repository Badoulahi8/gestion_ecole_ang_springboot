package com.badoulahi.controller;

import com.badoulahi.dao.IEtablissement;
import com.badoulahi.dao.IVille;
import com.badoulahi.entities.Etablissement;
import com.badoulahi.entities.Ville;
import com.badoulahi.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class EtablissementController {

    @Autowired
    private IEtablissement etablissementDao ;
    @Autowired
    private IVille villeDao ;

    @GetMapping("/etablissements")
    private List<Etablissement> getAllEtablissement()
    {
        return etablissementDao.findAll() ;
        //return etablissementDao.getEtablissementExceptId(15) ;
    }

    @GetMapping("/etablissements/{id}")
    private ResponseEntity<Etablissement> getEtablissement(@PathVariable int id)
    {
        Etablissement etablissement = etablissementDao.findById(id).orElseThrow( ()-> new ResourceNotFoundException("Etablissement non trouve")) ;
        return ResponseEntity.ok(etablissement) ;
    }

    @PostMapping("/etablissements/{idVille}")
    private ResponseEntity<Etablissement> createEtablissement(@RequestBody Etablissement etablissement, @PathVariable(value = "idVille") int idVille)
    {
        Etablissement etablissementSave = villeDao.findById(idVille).map(ville -> {
            etablissement.setVille(ville);
            return etablissementDao.save(etablissement);
        }).orElseThrow(() -> new ResourceNotFoundException("Ville non trouvée avec l'id " + idVille));
        return new ResponseEntity<Etablissement>(etablissementSave, HttpStatus.CREATED);
    }

    @DeleteMapping("/etablissements/{id}")
    private ResponseEntity<Etablissement> deleteEtablissement(@PathVariable int id)
    {
        Etablissement etablissement = etablissementDao.findById(id).orElseThrow( ()-> new ResourceNotFoundException("Etablissement non trouve")) ;
        etablissementDao.delete(etablissement);
        return ResponseEntity.ok(etablissement) ;
    }
}