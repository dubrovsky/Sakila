package com.home.sakila.web;

import com.home.sakila.service.CityService;
import com.home.sakila.service.dto.CityDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author p.dzeviarylin
 */
@RestController
@RequestMapping("/api")
public class CityController {

	private final CityService cityService;

	public CityController(CityService cityService) {
		this.cityService = cityService;
	}

	@GetMapping("/cities")
	public ResponseEntity<List<CityDTO>> getAll() {
		return ResponseEntity.ok().body(cityService.findAll());
	}
}
