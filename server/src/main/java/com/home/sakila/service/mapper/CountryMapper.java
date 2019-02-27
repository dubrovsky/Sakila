package com.home.sakila.service.mapper;

import com.home.sakila.domain.Country;
import com.home.sakila.service.dto.CountryDTO;
import org.mapstruct.Mapper;

/**
 * @author p.dzeviarylin
 */
@Mapper(componentModel = "spring")
public interface CountryMapper extends EntityMapper<CountryDTO, Country>{
}
