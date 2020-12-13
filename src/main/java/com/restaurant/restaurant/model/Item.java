package com.restaurant.restaurant.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Item {

    private Integer item_id;
    private Boolean selected;
    private String item_name;
    private String item_category;
    private String item_Description;
    private Float price;
    private String item_extra_description;
    private Float item_extra_price;
    private Float item_large_price;
    private Float item_small_price;
    private Float item_family_price;

    public Item() {
    }

    public Item(@JsonProperty("selected") Boolean selected,
                @JsonProperty("name") String item_name,
                @JsonProperty("category") String item_category,
                @JsonProperty("description") String item_Description,
                @JsonProperty("price") Float price,
                @JsonProperty("extra_description") String item_extra_description,
                @JsonProperty("extra_price") Float item_extra_price,
                @JsonProperty("large_price") Float item_large_price,
                @JsonProperty("small_price") Float item_small_price,
                @JsonProperty("family_price") Float item_family_price) {

        this.setSelected(selected);
        this.setItem_name(item_name);
        this.setItem_category(item_category);
        this.setItem_Description(item_Description);
        this.setPrice(price);
        this.setItem_extra_description(item_extra_description);
        this.setItem_extra_price(item_extra_price);
        this.setItem_large_price(item_large_price);
        this.setItem_small_price(item_small_price);
        this.setItem_family_price(item_family_price);
    }

    public Integer getItem_id() {
        return item_id;
    }

    public void setItem_id(Integer item_id) {
        this.item_id = item_id;
    }

    public Boolean getSelected() {
        return selected;
    }

    public void setSelected(Boolean selected) {
        this.selected = selected;
    }

    public String getItem_name() {
        return item_name;
    }

    public void setItem_name(String item_name) {
        this.item_name = item_name;
    }

    public String getItem_category() {
        return item_category;
    }

    public void setItem_category(String item_category) {
        this.item_category = item_category;
    }

    public String getItem_Description() {
        return item_Description;
    }

    public void setItem_Description(String item_Description) {
        this.item_Description = item_Description;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getItem_extra_description() {
        return item_extra_description;
    }

    public void setItem_extra_description(String item_extra_description) {
        this.item_extra_description = item_extra_description;
    }

    public Float getItem_extra_price() {
        return item_extra_price;
    }

    public void setItem_extra_price(Float item_extra_price) {
        this.item_extra_price = item_extra_price;
    }

    public Float getItem_large_price() {
        return item_large_price;
    }

    public void setItem_large_price(Float item_large_price) {
        this.item_large_price = item_large_price;
    }

    public Float getItem_small_price() {
        return item_small_price;
    }

    public void setItem_small_price(Float item_small_price) {
        this.item_small_price = item_small_price;
    }

    public Float getItem_family_price() {
        return item_family_price;
    }

    public void setItem_family_price(Float item_family_price) {
        this.item_family_price = item_family_price;
    }
}
