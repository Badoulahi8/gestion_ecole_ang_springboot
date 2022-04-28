package com.badoulahi.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Note implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private double note ;

    @ManyToOne(fetch = FetchType.EAGER)
    private Eleve eleve = new Eleve() ;

    @ManyToOne(fetch = FetchType.EAGER)
    private Examen examen = new Examen() ;

    @ManyToOne(fetch = FetchType.EAGER)
    private Epreuve epreuve = new Epreuve() ;


}
