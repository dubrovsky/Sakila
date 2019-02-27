package com.home.sakila.service.mapper;

import com.home.sakila.domain.City;
import com.home.sakila.service.dto.CityDTO;
import org.mapstruct.Mapper;

/**
 * @author p.dzeviarylin
 */
@Mapper(componentModel = "spring")
public interface CityMapper extends EntityMapper<CityDTO, City>{
}
