package com.hms.profile.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.profile.dto.PatientDTO;
import com.hms.profile.exception.HMSException;
import com.hms.profile.repository.PatientRepository;

@Service
public class PatientServiceImpl implements PatientService {
	
	@Autowired
	private PatientRepository patientRepository; 

	@Override
	public Long addPatient(PatientDTO patientDTO) throws HMSException {
		if ((patientDTO.getEmail() != null &&
		        patientRepository.findByEmail(patientDTO.getEmail().trim().toLowerCase()).isPresent())
		    || (patientDTO.getAadharNo() != null &&
		        patientRepository.findByAadharNo(patientDTO.getAadharNo().trim()).isPresent())) {

		    throw new HMSException("PATIENT_ALREADY_EXISTS");
		}

		return patientRepository.save(patientDTO.toEntity()).getId();
	}

	@Override
	public PatientDTO getPatientById(Long id) throws HMSException {
		return patientRepository.findById(id).orElseThrow(()-> new HMSException("PATIENT_NOT_FOUND")).toDTO();
	}

}
