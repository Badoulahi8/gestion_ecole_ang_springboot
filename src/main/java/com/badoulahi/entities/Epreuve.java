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
public class Epreuve implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 10, unique = true)
    private String code ;

    @Column
    private int coefficient ;

    @Column(length = 40, unique = true)
    private String nom ;

    @ManyToMany(mappedBy = "epreuves")
    private List<Examen> examens = new ArrayList<Examen>() ;

    @OneToMany(mappedBy = "epreuve", cascade=CascadeType.ALL)
    private List<Note> notes = new ArrayList<Note>();

}
