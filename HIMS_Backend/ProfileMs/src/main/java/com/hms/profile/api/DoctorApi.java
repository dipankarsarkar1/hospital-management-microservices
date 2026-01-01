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

import com.hms.profile.dto.DoctorDTO;
import com.hms.profile.exception.HMSException;
import com.hms.profile.service.DoctorService;

@RestController
@RequestMapping("profile/doctor")
public class DoctorApi {

	@Autowired
	private DoctorService DoctorService;
	
	@PostMapping("/add")
	public ResponseEntity<Long> addDoctor(@RequestBody DoctorDTO DoctorDTO) throws HMSException{
		return new ResponseEntity<>(DoctorService.addDoctor(DoctorDTO), HttpStatus.CREATED);
	}
	
	@GetMapping("/get/id")
	public ResponseEntity<DoctorDTO> getDoctorById(@PathVariable Long id) throws HMSException{
		return new ResponseEntity<>(DoctorService.getDoctorById(id),HttpStatus.OK);
	}
}
