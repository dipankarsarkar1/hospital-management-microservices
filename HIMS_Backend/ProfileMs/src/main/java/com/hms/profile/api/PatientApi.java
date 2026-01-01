package com.hms.profile.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.profile.dto.PatientDTO;
import com.hms.profile.exception.HMSException;
import com.hms.profile.service.PatientService;

@RestController
@RequestMapping("profile/patient")
public class PatientApi {

	@Autowired
	private PatientService patientService;
	
	@PostMapping("/add")
	public ResponseEntity<Long> addPatient(@RequestBody PatientDTO patientDTO) throws HMSException{
		return new ResponseEntity<>(patientService.addPatient(patientDTO), HttpStatus.CREATED);
	}
	
	@GetMapping("/get/id")
	public ResponseEntity<PatientDTO> getPatientById(@PathVariable Long id) throws HMSException{
		return new ResponseEntity<>(patientService.getPatientById(id),HttpStatus.OK);
	}
	
	
}
