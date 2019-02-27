package com.home.sakila.service.specification;

import com.home.sakila.domain.City;
import com.home.sakila.domain.City_;
import org.springframework.data.jpa.domain.Specification;

/**
 * @author p.dzeviarylin
 */
public class CitySpecifications {

	public static Specification<City> fetch() {
		return (Specification<City>) (root, query, builder) -> {
			root.fetch(City_.country);
			return builder.conjunction();
		};
	}
}
