package com.badoulahi.controller;

import com.badoulahi.dao.IVille;
import com.badoulahi.entities.Ville;
import com.badoulahi.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class VilleController {

    @Autowired
    private IVille villeDao ;

    @GetMapping("/villes")
    public List<Ville> getAllVilles()
    {
        return villeDao.findAll() ;
    }

    @GetMapping("/villes/{id}")
    public ResponseEntity<Ville> getVille(@PathVariable int id)
    {
        Ville ville = villeDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("Ville non trouvée ")) ;
        return ResponseEntity.ok(ville) ;
    }

    @PostMapping("/villes")
    public Ville createVille(@RequestBody Ville ville)
    {
        if(villeDao.getVilleByNom(ville.getNom()) == null) {
            return villeDao.save(ville);
        }
        else
        {
            return null ;
        }
    }

    @PutMapping("villes/{id}")
    public ResponseEntity<Ville> updateVille(@PathVariable int id, @RequestBody Ville villeupdate)
    {
        Ville ville = villeDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("Ville non trouvée")) ;
        ville.setNom(villeupdate.getNom());
       // ville.setEtablissements(villeupdate.getEtablissements());

        villeDao.save(ville) ;

        return ResponseEntity.ok(ville) ;
    }

    @DeleteMapping("/villes/{id}")
    public ResponseEntity<Ville> deleteVille(@PathVariable int id)
    {
        Ville villeDelete = villeDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("Ville non trouvée")) ;
        villeDao.delete(villeDelete);
        return ResponseEntity.ok(villeDelete) ;
    }
}
