package com.badoulahi.controller;

import com.badoulahi.dao.IEleve;
import com.badoulahi.entities.Eleve;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class EleveController {

    @Autowired
    private IEleve eleveDao;

    @GetMapping("/eleves")
    public List<Eleve> getAllEleves() {
        return eleveDao.findAll();
    }
}