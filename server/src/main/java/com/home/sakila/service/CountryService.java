package com.home.sakila.service;

import com.home.sakila.repository.CountryRepository;
import com.home.sakila.service.dto.CountryDTO;
import com.home.sakila.service.mapper.CountryMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.home.sakila.service.specification.CountrySpecifications.fetch;

/**
 * @author p.dzeviarylin
 */
@Service
@Transactional
public class CountryService {

	private final CountryRepository countryRepository;

	private final CountryMapper countryMapper;

	public CountryService(CountryRepository countryRepository, CountryMapper countryMapper) {
		this.countryRepository = countryRepository;
		this.countryMapper = countryMapper;
	}

	@Transactional(readOnly = true)
	public List<CountryDTO> findAll() {
		return countryMapper.toDto(countryRepository.findAll(fetch()));
	}
}
