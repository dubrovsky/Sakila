package com.home.sakila.service.mapper;

import java.util.List;

/**
 * @author p.dzeviarylin
 */
public interface EntityMapper <D, E> {

	E toEntity(D dto);

	D toDto(E entity);

	List<E> toEntity(List<D> dtoList);

	List <D> toDto(List<E> entityList);
}
