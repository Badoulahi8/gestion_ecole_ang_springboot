package com.badoulahi.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Eleve implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 10, unique = true)
    private String numero ;

    @Column(length = 40)
    private String prenom ;

    @Column(length = 30)
    private String nom ;

    @Temporal(TemporalType.DATE)
    private Date dateNais ;

    @Column
    private int statut ;

    @ManyToOne(fetch = FetchType.EAGER)
    private Etablissement etablissement = new Etablissement() ;

    @ManyToOne(fetch = FetchType.EAGER)
    private Examen examen = new Examen();

    @OneToMany(mappedBy = "eleve", cascade=CascadeType.ALL)
    private List<Note> notes = new ArrayList<Note>();


}
