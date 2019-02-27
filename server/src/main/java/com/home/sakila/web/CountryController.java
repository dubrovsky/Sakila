package com.home.sakila.web;

import com.home.sakila.service.CountryService;
import com.home.sakila.service.dto.CountryDTO;
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
public class CountryController {

	private final CountryService countryService;

	public CountryController(CountryService countryService) {
		this.countryService = countryService;
	}

	@GetMapping("/countries")
	public ResponseEntity<List<CountryDTO>> getAll() {
		return ResponseEntity.ok().body(countryService.findAll());
	}
}
