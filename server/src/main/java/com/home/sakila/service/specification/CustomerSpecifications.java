package com.home.sakila.service.specification;

import com.home.sakila.domain.Address;
import com.home.sakila.domain.Address_;
import com.home.sakila.domain.City;
import com.home.sakila.domain.City_;
import com.home.sakila.domain.Country;
import com.home.sakila.domain.Country_;
import com.home.sakila.domain.Customer;
import com.home.sakila.domain.Customer_;
import com.home.sakila.domain.Store;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

/**
 * @author p.dzeviarylin
 */
public class CustomerSpecifications {

	public static Specification<Customer> findOneById(Short id) {
		return (root, criteriaQuery, builder) -> builder.equal(root.get(Customer_.customerId), id);
	}

	public static Specification<Customer> fetch() {
		return (Specification<Customer>) (root, query, builder) -> {
			if (!isCountQuery(query)) {
				root.fetch(Customer_.store);
				root.fetch(Customer_.address).fetch(Address_.city).fetch(City_.country);
			}
			return builder.conjunction();
		};
	}

	private static boolean isCountQuery(CriteriaQuery<?> query) {
		return Long.class == query.getResultType() || long.class == query.getResultType();
	}


	public static Specification<Customer> filter(String filter) {
		return (Specification<Customer>) (root, query, builder) -> {
			final List<Predicate> predicates = new ArrayList<>();
			String criteria = ("%" + filter + "%").toLowerCase();

			predicates.add(builder.like(builder.lower(root.get(Customer_.firstName)), criteria));
			predicates.add(builder.like(builder.lower(root.get(Customer_.lastName)), criteria));

			@SuppressWarnings("unchecked")
			final Join<Customer, Store> storeJoin = isCountQuery(query) ? root.join(Customer_.store) : (Join<Customer, Store>) root.fetch(Customer_.store);
			/*if(filter.chars().allMatch( Character::isDigit)){
				predicates.add(builder.equal(storeJoin.get(Store_.storeId), criteria));
			}*/

			@SuppressWarnings("unchecked")
			final Join<Customer, Address> addressJoin = isCountQuery(query) ? root.join(Customer_.address) : (Join<Customer, Address>) root.fetch(Customer_.address);
			predicates.add(builder.like(builder.lower(addressJoin.get(Address_.address)), criteria));
			predicates.add(builder.like(builder.lower(addressJoin.get(Address_.postalCode)), criteria));
			predicates.add(builder.like(builder.lower(addressJoin.get(Address_.phone)), criteria));

			@SuppressWarnings("unchecked")
			final Join<Address, City> cityJoin = isCountQuery(query) ? addressJoin.join(Address_.city) : (Join<Address, City>) addressJoin.fetch(Address_.city);
			predicates.add(builder.like(builder.lower(cityJoin.get(City_.city)), criteria));

			@SuppressWarnings("unchecked")
			final Join<City, Country> countryJoin = isCountQuery(query) ? cityJoin.join(City_.country) : (Join<City, Country>) cityJoin.fetch(City_.country);
			predicates.add(builder.like(builder.lower(countryJoin.get(Country_.country)), criteria));

			return builder.or(predicates.toArray(new Predicate[0]));
		};
	}
}
