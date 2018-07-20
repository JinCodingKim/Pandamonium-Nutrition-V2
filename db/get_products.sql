SELECT 
c.product_category, 
p.product_id, 
p.product_name, 
p.product_price, 
array_agg(DISTINCT(r.product_img)) AS img_list
FROM products p
JOIN productcategories c 
ON p.category_id = c.category_id
JOIN productcategoriesvariationsref r
ON c.category_id = r.category_id
WHERE
    CASE
        WHEN NULLIF($1,'undefined') IS NULL THEN c.product_category IS NOT NULL
        ELSE c.product_category = $1
    END
GROUP BY c.product_category, p.product_id, p.product_name, p.product_price