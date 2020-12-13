package com.restaurant.restaurant.dao;

import com.restaurant.restaurant.model.Item;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ItemRowMapper implements RowMapper<Item> {
    public Item mapRow(ResultSet rs, int rowNum) throws SQLException{
        Item item = new Item();
        item.setItem_id(rs.getInt("item_id"));
        item.setItem_name(rs.getString("item_name"));
        item.setItem_category(rs.getString("item_category"));
        item.setItem_Description(rs.getString("item_descrip"));
        item.setPrice(rs.getFloat("item_price"));
        item.setItem_extra_description(rs.getString("item_extra_descrip"));
        item.setItem_extra_price(rs.getFloat("item_extra_price"));
        item.setItem_large_price(rs.getFloat("item_large_price"));
        item.setItem_small_price(rs.getFloat("item_small_price"));
        item.setItem_family_price(rs.getFloat("item_family_price"));
        item.setSelected(rs.getBoolean("selected"));
        return item;
    }
}
