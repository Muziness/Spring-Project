package com.restaurant.restaurant.dao;

import com.restaurant.restaurant.model.Item;

import java.util.List;

public interface ItemDao {

    int insertItem(Item item);

    int selectItemById(int id, boolean select);

    List<Item> selectAllItems();

    List<Item> selectedItems(boolean selected);

    List<Item> selectByCategory(String category);
}
