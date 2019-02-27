package com.home.sakila.service;

import com.home.sakila.domain.Store;
import com.home.sakila.repository.StoreRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author p.dzeviarylin
 */
@Service
@Transactional
public class StoreService {

	private final StoreRepository storeRepository;

	public StoreService(StoreRepository storeRepository) {
		this.storeRepository = storeRepository;
	}

	@Transactional(readOnly = true)
	public List<Store> findAll() {
		return storeRepository.findAll();
	}
}
