package com.restaurant.restaurant.service;

import com.restaurant.restaurant.dao.ItemDao;
import com.restaurant.restaurant.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {
    private final ItemDao itemDao;

    @Autowired
    public ItemService(@Qualifier("mysql") ItemDao itemDao) {
        this.itemDao = itemDao;
    }

    public int addItem(Item item){
        return itemDao.insertItem(item);
    }

    public int selectItem(int id, boolean select){ return itemDao.selectItemById(id, select); }

    public List<Item> getAllItems(){ return itemDao.selectAllItems(); }

    public List<Item> getAllSelectedItems(boolean selected){
        return  itemDao.selectedItems(selected);
    }

    public List<Item> getAllItemsByCategory(String category){ return itemDao.selectByCategory(category); }
}
