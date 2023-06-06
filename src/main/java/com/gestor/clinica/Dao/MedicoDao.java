package com.gestor.clinica.Dao;

import com.gestor.clinica.Models.Medico;

import java.util.List;

public interface MedicoDao {
    
    List<Medico> getMedicos();

    Medico obtenerMedicoPorId(Long id);

    void registrarMedico(Medico medico);

    void eliminarMedico(Long id);

    void actualizarMedico(Long id, Medico medico);

}
