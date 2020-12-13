package com.restaurant.restaurant.dao;

import com.restaurant.restaurant.model.Item;
import org.flywaydb.core.internal.jdbc.JdbcTemplate;
import org.flywaydb.core.internal.jdbc.RowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("mysql")
public class ItemDataAccessService implements ItemDao {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Autowired
    public ItemDataAccessService(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    @Override
    public int insertItem(Item item) {
        String sql = "" +
                "INSERT INTO Items (" +
                " item_name, " +
                " item_category, " +
                " item_descrip, " +
                " item_price, " +
                " item_extra_descrip, " +
                " item_extra_price, " +
                " item_large_price, " +
                " item_small_price, " +
                " item_family_price, " +
                " selected) " +
                "VALUES (:item_name, :item_category, :item_descrip, :item_price, :item_extra_descrip, :item_extra_price, :item_large_price, :item_small_price, :item_family_price, :selected)";
        KeyHolder holder = new GeneratedKeyHolder();
        SqlParameterSource parameters = new MapSqlParameterSource()
                .addValue("item_name", item.getItem_name())
                .addValue("item_category", item.getItem_category())
                .addValue("item_descrip", item.getItem_Description())
                .addValue("item_price", item.getPrice())
                .addValue("item_extra_descrip", item.getItem_extra_description())
                .addValue("item_extra_price", item.getItem_extra_price())
                .addValue("item_large_price", item.getItem_large_price())
                .addValue("item_small_price", item.getItem_small_price())
                .addValue("item_family_price", item.getItem_family_price())
                .addValue("selected", item.getSelected());
        return namedParameterJdbcTemplate.update(sql, parameters, holder);

    }

    @Override
    public int selectItemById(int id, boolean select) {
        String sql = "" +
                "UPDATE Items " +
                " SET selected = :select " +
                " WHERE item_id = :id";
        SqlParameterSource params = new MapSqlParameterSource()
                .addValue("select", select)
                .addValue("id", id);
        return namedParameterJdbcTemplate.update(sql, params);
    }

    @Override
    public List<Item> selectAllItems() {
        String sql = "" +
                "SELECT " +
                " item_id, " +
                " item_name, " +
                " item_category, " +
                " item_descrip, " +
                " item_price, " +
                " item_extra_descrip, " +
                " item_extra_price, " +
                " item_large_price, " +
                " item_small_price, " +
                " item_family_price, " +
                " selected " +
                " FROM Items";

        return namedParameterJdbcTemplate.query(sql, new ItemRowMapper());
    }

    @Override
    public List<Item> selectedItems(boolean selected) {
        String sql = "" +
                "SELECT " +
                " item_id, " +
                " item_name, " +
                " item_category, " +
                " item_descrip, " +
                " item_price, " +
                " item_extra_descrip, " +
                " item_extra_price, " +
                " item_large_price, " +
                " item_small_price, " +
                " item_family_price, " +
                " selected " +
                " FROM Items WHERE selected = :selected";
        return namedParameterJdbcTemplate.query(sql,
                new MapSqlParameterSource("selected", selected),
                new ItemRowMapper());
    }

    @Override
    public List<Item> selectByCategory(String category) {
        String sql = "" +
                "SELECT " +
                " item_id, " +
                " item_name, " +
                " item_category, " +
                " item_descrip, " +
                " item_price, " +
                " item_extra_descrip, " +
                " item_extra_price, " +
                " item_large_price, " +
                " item_small_price, " +
                " item_family_price, " +
                " selected " +
                " FROM Items WHERE item_category = :category";
        return namedParameterJdbcTemplate.query(sql,
                new MapSqlParameterSource("category", category),
                new ItemRowMapper());
    }


}
