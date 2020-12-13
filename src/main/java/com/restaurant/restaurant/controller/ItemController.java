package com.restaurant.restaurant.controller;

import com.restaurant.restaurant.model.Item;
import com.restaurant.restaurant.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/Item")
@RestController
public class ItemController {
    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @PostMapping
    public void addItem(@RequestBody Item item){
        itemService.addItem(item);
    }

    @CrossOrigin
    @GetMapping("/allItems")
    public List<Item> getAllItems(){
        return itemService.getAllItems();
    }

    @GetMapping("/allItems/{category}")
    public List<Item> getAllItemsByCategory(@PathVariable("category") String category){ return itemService.getAllItemsByCategory(category); }

    @GetMapping("/{selected}")
    public List<Item> getAllSelectedItems(@PathVariable("selected") boolean selected){ return itemService.getAllSelectedItems(selected); }

    @PostMapping("/Select/{id}")
    public void selectItem(@PathVariable("id") int id){ itemService.selectItem(id, true); }

    @PostMapping("/remove/{id}")
    public void removeItem(@PathVariable("id") int id){ itemService.selectItem(id, false); }
}
