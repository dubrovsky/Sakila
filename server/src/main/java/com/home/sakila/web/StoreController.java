package com.home.sakila.web;

import com.home.sakila.domain.Store;
import com.home.sakila.service.StoreService;
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
public class StoreController {

	private final StoreService storeService;

	public StoreController(StoreService storeService) {
		this.storeService = storeService;
	}

	@GetMapping("/stores")
	public ResponseEntity<List<Store>> getAll() {
		return ResponseEntity.ok().body(storeService.findAll());
	}
}
