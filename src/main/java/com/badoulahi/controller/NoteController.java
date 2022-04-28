package com.badoulahi.controller;

import com.badoulahi.dao.IExamen;
import com.badoulahi.dao.INote;
import com.badoulahi.entities.Examen;
import com.badoulahi.entities.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class NoteController {

    @Autowired
    private INote noteDao;

    @GetMapping("/notes")
    public List<Note> getAllNotes() {
        return noteDao.findAll();
    }
}
