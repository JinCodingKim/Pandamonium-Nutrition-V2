SELECT 
p.product_name as name,
p.product_header as header,
p.product_description as description,
p.product_price as price,
c.product_type as itemtype,
c.product_category as category,
array[[p.product_icon1_img, p.product_icon1_tag], [p.product_icon2_img, p.product_icon2_tag], [p.product_icon3_img, p.product_icon3_tag]] as icons,
array_agg(DISTINCT(r.product_img)) as images,
array_agg(v.product_type_variation) as variations
FROM products p
JOIN productcategories c
ON p.category_id = c.category_id
JOIN productcategoriesvariationsref r
ON c.category_id = r.category_id
JOIN producttypevariations v
ON r.variation_id = v.variation_id
WHERE p.product_name = $1
GROUP BY 
p.product_name,
p.product_header,
p.product_description,
p.product_price,
c.product_type,
c.product_category,
p.product_icon1_img, 
p.product_icon1_tag,
p.product_icon2_img, 
p.product_icon2_tag,
p.product_icon3_img, 
p.product_icon3_tag