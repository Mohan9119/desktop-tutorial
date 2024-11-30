package com.example.datajpa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {
	@Autowired
	private PersonRepository personRepository;
	
	// create & update
	public Person save(Person person)
	{
		return personRepository.save(person);
		
	}
	
	//read
	public Iterable<Person>list()
	{
		return personRepository.findAll();
		
	}
	
	//read
	public Person read(Integer id)
	{
		return personRepository.findById(id).get();
		
	}
	
	//delete
	public Integer delete(Integer id)
	{
		personRepository.deleteById(id);
		return id;
	}
	

}
