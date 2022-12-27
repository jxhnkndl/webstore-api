DELETE FROM product;
DELETE FROM category;
DELETE FROM tag;

INSERT INTO category (category_name)
VALUES
  ('apparel'),
  ('records'),
  ('stickers');

INSERT INTO tag (tag_name)
VALUES
  ('shirts'),
  ('hoodies'),
  ('hats'),
  ('limited'),
  ('sale');

INSERT INTO product (product_name, price, stock, category_id)
VALUES
  ('black tee', 25.00, 10, 1),
  ('red tee', 25.00, 10, 1),
  ('green beanie', 20.00, 20, 1),
  ('battle hymn', 15.00, 30, 2),
  ('fiction fever', 10.00, 10, 2),
  ('hey summer rectangle', 5.00, 10, 3),
  ('logo circle', 5.00, 10, 3);