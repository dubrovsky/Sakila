package com.home.sakila.service.mapper;

import com.home.sakila.domain.Customer;
import com.home.sakila.service.dto.CustomerDTO;
import org.mapstruct.Mapper;

/**
 * @author p.dzeviarylin
 */
@Mapper(componentModel = "spring")
public interface CustomerMapper extends EntityMapper<CustomerDTO, Customer>{
}
