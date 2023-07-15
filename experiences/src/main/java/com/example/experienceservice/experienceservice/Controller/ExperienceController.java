package com.example.experienceservice.experienceservice.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.experienceservice.experienceservice.Entity.Experience;
import com.example.experienceservice.experienceservice.Service.ExperienceService;



@RestController
@CrossOrigin(origins = "*")

public class ExperienceController {

   
    @Autowired
   private ExperienceService experienceService;

    @GetMapping("/experience")
    public List<Experience> getExperiences()
    {
        return experienceService.getExperiences();
    }
    
    @GetMapping("/experience/{id}")
     public Experience getExperienceById(@PathVariable("id") Long id)
    { 
       return experienceService.getExperienceById(id);
    }

  
    @PostMapping("/experience")
    public Experience saveExperienceById( @RequestBody Experience experience)
    {
        return experienceService.saveExperience(experience); 
    }

    @DeleteMapping("/experience/{id}")
    public String deleteUsingId(@PathVariable("id") Long id)
    {
        return experienceService.deleteUsingId(id);
    }
    @PatchMapping("/experience/{id}")
    public String updateUsingId(@PathVariable("id") Long id,@RequestBody Experience experience)
    {
        return experienceService.updateUsingId(id,experience);
    }

}