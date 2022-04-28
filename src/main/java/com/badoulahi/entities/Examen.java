package com.badoulahi.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Examen implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 10, unique = true)
    private String code ;

    @Column(length = 60)
    private String nom ;

    @Column
    private int annee ;

    @ManyToMany(fetch = FetchType.EAGER)
    private List<Epreuve> epreuves = new ArrayList<Epreuve>();

    @OneToMany(mappedBy = "examen", cascade=CascadeType.ALL)
    private List<Note> notes = new ArrayList<Note>();

    @ManyToMany
    private List<Enseignant> enseignants = new ArrayList<Enseignant>() ;

    @OneToMany(mappedBy = "examen", cascade = CascadeType.ALL)
    private List<Eleve> eleves = new ArrayList<Eleve>() ;
}
