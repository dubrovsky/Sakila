package com.home.sakila.service.dto;

/**
 * @author p.dzeviarylin
 */
public class CustomerDTO {

	private Short customerId;
	private AddressDTO address;
	private String firstName;
	private String lastName;
	private String email;
	private boolean active;

	public Short getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Short customerId) {
		this.customerId = customerId;
	}

	public AddressDTO getAddress() {
		return address;
	}

	public void setAddress(AddressDTO address) {
		this.address = address;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
}
