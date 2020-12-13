package com.restaurant.restaurant.model;

public class User {

    private Integer user_id;
    private String first_name;
    private String last_name;
    private String user_name;
    private String user_pwd;
    private String user_email;
    private String user_address;
    private String user_contactNo;
    private UserType user_type;

    public User() {
    }

    public User(Integer user_id, String first_name,
                String last_name, String user_name,
                String user_pwd, String user_email,
                String user_address, String user_contactNo,
                UserType user_type) {
        this.user_id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.user_name = user_name;
        this.user_pwd = user_pwd;
        this.user_email = user_email;
        this.user_address = user_address;
        this.user_contactNo = user_contactNo;
        this.user_type = user_type;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_pwd() {
        return user_pwd;
    }

    public void setUser_pwd(String user_pwd) {
        this.user_pwd = user_pwd;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getUser_address() {
        return user_address;
    }

    public void setUser_address(String user_address) {
        this.user_address = user_address;
    }

    public String getUser_contactNo() {
        return user_contactNo;
    }

    public void setUser_contactNo(String user_contactNo) {
        this.user_contactNo = user_contactNo;
    }

    public UserType getUser_type() {
        return user_type;
    }

    public void setUser_type(UserType user_type) {
        this.user_type = user_type;
    }

    enum UserType {
        CUSTOMER , ADMIN
    }
}
