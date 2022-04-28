package com.badoulahi.controller;

import com.badoulahi.dao.IEpreuve;
import com.badoulahi.dao.IVille;
import com.badoulahi.entities.Epreuve;
import com.badoulahi.entities.Ville;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class EpreuveController {

    @Autowired
    private IEpreuve epreuveDao;

    @GetMapping("/epreuves")
    public List<Epreuve> getAllEpreuves() {
        return epreuveDao.findAll();
    }
}
