SELECT 
p.product_name,
p.product_header,
p.product_description,
p.product_price,
array[[p.product_icon1_img, p.product_icon1_tag], [p.product_icon2_img, p.product_icon2_tag], [p.product_icon3_img, p.product_icon3_tag]] as icons,
array_agg(array[r.product_img, v.product_type_variation]) as img_to_type
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
p.product_icon1_img, 
p.product_icon1_tag,
p.product_icon2_img, 
p.product_icon2_tag,
p.product_icon3_img, 
p.product_icon3_tag