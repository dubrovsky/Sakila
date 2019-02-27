package com.home.sakila.service;

import com.home.sakila.repository.CityRepository;
import com.home.sakila.service.dto.CityDTO;
import com.home.sakila.service.mapper.CityMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.home.sakila.service.specification.CitySpecifications.fetch;

/**
 * @author p.dzeviarylin
 */
@Service
@Transactional
public class CityService {

	private final CityRepository cityRepository;

	private final CityMapper cityMapper;

	public CityService(CityRepository cityRepository, CityMapper cityMapper) {
		this.cityRepository = cityRepository;
		this.cityMapper = cityMapper;
	}

	@Transactional(readOnly = true)
	public List<CityDTO> findAll() {
		return cityMapper.toDto(cityRepository.findAll(fetch()));
	}
}
