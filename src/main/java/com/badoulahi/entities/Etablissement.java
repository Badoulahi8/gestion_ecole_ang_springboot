package com.badoulahi.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Etablissement implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 10, unique = true)
    private String code ;

    @Column(length = 40, unique = true)
    private String nom ;

    @Column(length = 50)
    private String adresse ;


    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Ville ville = new Ville() ;

    @OneToMany(mappedBy = "etablissement", cascade=CascadeType.ALL)
    private List<Eleve> eleves = new ArrayList<Eleve>();

    @OneToMany(mappedBy = "etablissement", cascade=CascadeType.ALL)
    private List<Enseignant> enseignants = new ArrayList<Enseignant>();
}
