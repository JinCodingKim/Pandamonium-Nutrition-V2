SELECT DISTINCT ON (p.product_name) p.product_id, p.product_name, p.product_price, r.product_img
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