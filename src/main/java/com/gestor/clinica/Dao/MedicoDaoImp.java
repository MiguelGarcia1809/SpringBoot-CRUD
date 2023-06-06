package com.gestor.clinica.Dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gestor.clinica.Models.Medico;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class MedicoDaoImp implements MedicoDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    @Transactional
    public List<Medico> getMedicos() {
        String query = "FROM Medico";
        return entityManager.createQuery(query, Medico.class).getResultList();
    }

    @Override
    public Medico obtenerMedicoPorId(Long id){
        return entityManager.find(Medico.class, id);
    }

    @Override
    public void registrarMedico(Medico medico) {
        entityManager.persist(medico);
    }

    @Override
    public void eliminarMedico(Long id) {
        Medico medico = entityManager.find(Medico.class, id);
        entityManager.remove(medico);
    }

    @Override
    public void actualizarMedico(Long id, Medico medico) {
        Medico medicoActual = entityManager.find(Medico.class, id);
        medicoActual.actualizarAtributos(medico);
    }

}
