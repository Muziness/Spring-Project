CREATE TABLE Items (
    item_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(100) NOT NULL,
    item_category VARCHAR(100),
    item_descrip VARCHAR(100),
    item_price FLOAT(11),
    item_extra_descrip VARCHAR(100),
    item_extra_price FLOAT(11),
    item_large_price FLOAT(11),
    item_small_price FLOAT(11),
    item_family_price FLOAT(11),
    selected boolean NOT NULL DEFAULT false
);