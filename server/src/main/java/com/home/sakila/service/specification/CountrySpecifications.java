package com.home.sakila.service.specification;

import com.home.sakila.domain.Country;
import com.home.sakila.domain.Country_;
import org.springframework.data.jpa.domain.Specification;

/**
 * @author p.dzeviarylin
 */
public class CountrySpecifications {

	public static Specification<Country> fetch() {
		return (Specification<Country>) (root, query, builder) -> {
			root.fetch(Country_.cities);
			query.distinct(true);
			return builder.conjunction();
		};
	}
}
