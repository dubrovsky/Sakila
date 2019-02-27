package com.home.sakila.web;

import com.home.sakila.domain.Customer;
import com.home.sakila.service.CustomerService;
import com.home.sakila.web.util.ResponseUtil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class CustomerController {

	private final CustomerService customerService;

	public CustomerController(CustomerService customerService) {
		this.customerService = customerService;
	}

	@GetMapping("/customers/page")
	public ResponseEntity<Page<Customer>> getPage(Pageable pageable, String filter) {
		final Page<Customer> customersPage = customerService.findPage(pageable, filter);
		return ResponseEntity.ok().body(customersPage);
	}

	@GetMapping("/customers/{id}")
	public ResponseEntity<Customer> getAddress(@PathVariable Short id) {
		Optional<Customer> customer = customerService.findOne(id);
		return ResponseUtil.wrapOrNotFound(customer);
	}

	@PostMapping("/customers")
	public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
		Customer result = customerService.create(customer);
		return ResponseEntity.ok().body(result);
	}

	@PutMapping("/customers")
	public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer) {
		Customer result = customerService.save(customer);
		return ResponseEntity.ok().body(result);
	}

	@DeleteMapping("/customers/{id}")
	public ResponseEntity<Void> deleteCustomer(@PathVariable Short id) {
		customerService.deleteById(id);
		return ResponseEntity.ok().build();
	}
}
