package com.home.sakila.service.dto;

/**
 * @author p.dzeviarylin
 */
public class CityDTO {

	private Short cityId;
	private CityCountryDTO country;
	private String city;

	public Short getCityId() {
		return cityId;
	}

	public void setCityId(Short cityId) {
		this.cityId = cityId;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public CityCountryDTO getCountry() {
		return country;
	}

	public void setCountry(CityCountryDTO country) {
		this.country = country;
	}
}
