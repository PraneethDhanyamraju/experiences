package com.example.experienceservice.experienceservice.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@AllArgsConstructor
@NoArgsConstructor
@Data
@SequenceGenerator(name="my_seq",sequenceName="MY_SEQ", allocationSize=1)
@Entity
public class Experience {
    @Id
    @GeneratedValue(generator="my_seq")
    private Long id;
    private String title; 
    private String date;
    private String source;
    private String destination;
    private String number;
    private String cost;
     @Column(length = 2000)
    private String itenary;
    @Column(length = 2000)
    private String experience;
    @Column(length = 2000)

    private String suggestions;


  
    
    

}
