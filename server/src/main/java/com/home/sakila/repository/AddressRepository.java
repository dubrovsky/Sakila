package com.home.sakila.repository;

import com.home.sakila.domain.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author p.dzeviarylin
 */
@Repository
public interface AddressRepository  extends JpaRepository<Address, Short> {
}
