package com.example.experienceservice.experienceservice.Service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.experienceservice.experienceservice.Entity.Experience;
import com.example.experienceservice.experienceservice.Repository.ExperienceRepository;

@Service
public class ExperienceService {

    @Autowired
    private ExperienceRepository experienceRepository;

    public List<Experience> getExperiences()
    {
       return  experienceRepository.findAll();
    }
    
    public Experience getExperienceById(Long id)

    {
     return experienceRepository.findById(id).get();   
    }
    
    public Experience saveExperience(Experience experience)
    {
        
       return experienceRepository.save(experience); 
        
    }
    public String deleteUsingId(Long id)
    {

        experienceRepository.deleteById(id);
        return "Done";
        
    }
    public String updateUsingId(@PathVariable("id") Long id,Experience experience)
    {
        Experience exp=experienceRepository.findById(id).get();
      
    exp.setCost(experience.getCost());
     exp.setDate(experience.getDate());
     exp.setDestination(experience.getDestination());
     exp.setSource(experience.getSource());
      exp.setExperience(experience.getExperience());   
      exp.setItenary(experience.getItenary());
      exp.setNumber(experience.getNumber());
      exp.setSuggestions(experience.getSuggestions());
       exp.setTitle(experience.getTitle());
       experienceRepository.save(exp);
        return "Updated..";
        }
        
    

}
