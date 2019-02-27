package com.home.sakila.repository;

import com.home.sakila.domain.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author p.dzeviarylin
 */
@Repository
public interface StoreRepository extends JpaRepository<Store, Byte> {
}
