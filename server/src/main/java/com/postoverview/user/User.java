package com.postoverview.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.postoverview.user.attributes.Address;
import com.postoverview.user.attributes.Company;

public class User {
    private Long id;
    private String name;
    @JsonProperty("username")
    private String userName;
    private String email;
    private Address address;
    private String phone;
    @JsonProperty("website")
    private String webSite;
    private Company company;

    public User(Long id, String name, String userName, String email, Address address, String phone, String webSite, Company company) {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.webSite = webSite;
        this.company = company;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUserName() {
        return userName;
    }

    public String getEmail() {
        return email;
    }

    public Address getAddress() {
        return address;
    }

    public String getPhone() {
        return phone;
    }

    public String getWebSite() {
        return webSite;
    }

    public Company getCompany() {
        return company;
    }
}
