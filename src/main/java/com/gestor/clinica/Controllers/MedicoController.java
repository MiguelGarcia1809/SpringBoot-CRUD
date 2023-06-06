package com.gestor.clinica.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.gestor.clinica.Dao.MedicoDao;
import com.gestor.clinica.Models.Medico;

@RestController
@RequestMapping(value = "medicosApi")
public class MedicoController {
    
    @Autowired
    private MedicoDao medicodao;

    @GetMapping
    public List<Medico> getMedicos(){
        return medicodao.getMedicos();
    }

    @GetMapping(value = "{id}")
    public Medico obtenerMedicoPorId(@PathVariable Long id){
        return medicodao.obtenerMedicoPorId(id);
    }

    @PostMapping
    public void registrarMedico(@RequestBody Medico medico){
        medicodao.registrarMedico(medico);
    }

    @DeleteMapping(value = "{id}")
    public void eliminarMedico(@PathVariable Long id){
        medicodao.eliminarMedico(id);
    }

    @PutMapping(value = "{id}")
    public void actualizarMedico(@PathVariable Long id, @RequestBody Medico medicoActualizado){
        medicodao.actualizarMedico(id,medicoActualizado);
    }
}
