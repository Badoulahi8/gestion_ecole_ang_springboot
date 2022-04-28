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
public class Enseignant implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 10, unique = true)
    private String code ;

    @Column(length = 50)
    private String prenom ;

    @Column(length = 30)
    private String nom ;

    @Column(length = 60)
    private String adresse ;

    @Column(length = 20, unique = true)
    private String telephone ;

    @ManyToOne(fetch = FetchType.EAGER)
    private Etablissement etablissement = new Etablissement() ;

   @ManyToMany(mappedBy = "enseignants")
    private List<Examen> examens = new ArrayList<Examen>() ;
}
