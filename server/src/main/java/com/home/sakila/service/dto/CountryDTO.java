package com.home.sakila.service.dto;

import java.util.HashSet;
import java.util.Set;

/**
 * @author p.dzeviarylin
 */
public class CountryDTO {

	private Short countryId;
	private String country;
	private Set<CountryCityDTO> cities = new HashSet<>(0);

	public Short getCountryId() {
		return countryId;
	}

	public void setCountryId(Short countryId) {
		this.countryId = countryId;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Set<CountryCityDTO> getCities() {
		return cities;
	}

	public void setCities(Set<CountryCityDTO> cities) {
		this.cities = cities;
	}
}
