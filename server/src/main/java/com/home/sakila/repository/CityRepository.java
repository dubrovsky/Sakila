package com.home.sakila.repository;

import com.home.sakila.domain.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

/**
 * @author p.dzeviarylin
 */
@Repository
public interface CityRepository extends JpaRepository<City, Short>, JpaSpecificationExecutor<City> {
}
