package com.home.sakila.service.dto;

/**
 * @author p.dzeviarylin
 */
public class CityCountryDTO {

	private Short countryId;
	private String country;

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
}
