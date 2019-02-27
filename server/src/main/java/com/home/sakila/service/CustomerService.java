package com.home.sakila.service;

import com.home.sakila.domain.Address;
import com.home.sakila.domain.Customer;
import com.home.sakila.repository.AddressRepository;
import com.home.sakila.repository.CustomerRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static com.home.sakila.service.specification.CustomerSpecifications.*;
import static org.springframework.data.jpa.domain.Specification.where;

@Service
@Transactional
public class CustomerService {

	private final CustomerRepository customerRepository;
	private final AddressRepository addressRepository;

	public CustomerService(CustomerRepository customerRepository, AddressRepository addressRepository) {
		this.customerRepository = customerRepository;
		this.addressRepository = addressRepository;
	}

	@Transactional(readOnly = true)
	public Page<Customer> findPage(Pageable pageable, String filter) {
		/*final Page<Customer> customerPage = customerRepository.findAll(createSpecification(filter), normalize(pageable));
		return customerPage.map(customerMapper::toDto);*/
		return customerRepository.findAll(createSpecification(filter), normalize(pageable));
	}

	@Transactional(readOnly = true)
	public Optional<Customer> findOne(Short id) {
		return customerRepository.findOne(where(findOneById(id)).and(fetch()));
	}


	private Specification<Customer> createSpecification(String filter) {
//		Specification<Customer> specification = (Specification<Customer>) (root, query, criteriaBuilder) -> null;
		Specification<Customer> specification = fetch();
		if (filter != null && !filter.isEmpty()) {
			specification = filter(filter);
		}
		return specification;
	}


	private Pageable normalize(Pageable pageable) {
		final Sort.Order sort = pageable.getSort().iterator().next();
		String property = sort.getProperty();
		switch (sort.getProperty()) {
			case "address":
				property = "address.address";
				break;
			case "postalCode":
				property = "address.postalCode";
				break;
			case "phone":
				property = "address.phone";
				break;
			case "city":
				property = "address.city.city";
				break;
			case "country":
				property = "address.city.country.country";
				break;
			case "storeId":
				property = "store.storeId";
				break;

		}
		return PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), new Sort(sort.getDirection(), property));
	}

	public Customer save(Customer customer) {
		return customerRepository.save(customer);
	}

	public void deleteById(Short id) {
		final Customer customer = customerRepository.getOne(id);
		customerRepository.delete(customer);
		addressRepository.delete(customer.getAddress());
	}

	public Customer create(Customer customer) {
		final Address address = addressRepository.save(customer.getAddress());
		customer.setAddress(address);
		return customerRepository.save(customer);
	}
}
