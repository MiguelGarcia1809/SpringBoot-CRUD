package com.gestor.clinica.Models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "medico")
public class Medico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "id_medico")
    private long id_medico;

    @Getter @Setter @Column(name = "nombre")
    private String nombre;

    @Getter @Setter @Column(name = "apellido")
    private String apellido;

    @Getter @Setter @Column(name = "especialidad")
    private String especialidad;

    @Getter @Setter @Column(name = "direccion")
    private String direccion;

    @Getter @Setter @Column(name = "telefono")
    private String telefono;

    @Getter @Setter @Column(name = "email")
    private String email;

    public void actualizarAtributos(Medico medicoActualizado) {
        setNombre(medicoActualizado.getNombre());
        setApellido(medicoActualizado.getApellido());
        setEspecialidad(medicoActualizado.getEspecialidad());
        setDireccion(medicoActualizado.getDireccion());
        setTelefono(medicoActualizado.getTelefono());
        setEmail(medicoActualizado.getEmail());
    }
}
