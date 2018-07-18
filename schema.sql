CREATE TABLE Customers (
    /* Customer ID */
    cust_id SERIAL PRIMARY KEY,
    /* Guest or Member */
    cust_type VARCHAR(10),
    /* Auth0 ID */
    auth_id VARCHAR(150),
    /* Name of customer */
    cust_first VARCHAR(50),
    cust_last VARCHAR(50),
    /* Email of customer */
    cust_email VARCHAR(50),
    /* Image of customer */
    cust_img TEXT
)

/* Customers to Addresses Reference Table */
CREATE TABLE CustomerAddressRef (
    /* Customer ID */
    cust_id INTEGER REFERENCES customers(cust_id),
    /* Address ID */
    address_id INTEGER REFERENCES addresses(address_id)
)

CREATE TABLE Addresses (
    /* Address ID */
    address_id SERIAL PRIMARY KEY,
    /* Address Type: Billing or Shipping */
    address_type VARCHAR(10),
    /* Address Information */
    address_line_1 TEXT,
    address_line_2 TEXT,
    address_line_3 TEXT,
    city VARCHAR(200),
    state VARCHAR(100),
    postal_code VARCHAR(35),
    country VARCHAR(75),
)


/* Store Products General Table */
CREATE TABLE Products (
    /* Product ID */
    product_id SERIAL PRIMARY KEY,
    /* Product Category ID */
    category_id INTEGER REFERENCES productcategories(category_id),
    /* Product Name */
    product_name VARCHAR(30),
    /* Product Header */
    product_header VARCHAR(50),
    /* Product Description */
    product_description TEXT,
    /* Product Icon1 */
    product_icon1_img TEXT, 
    /* Icon1 Tag */
    product_icon1_tag VARCHAR(30),
    /* Product Icon2 */
    product_icon2_img TEXT, 
    /* Icon2 Tag */
    product_icon2_tag VARCHAR(30),
    /* Product Icon3 */
    product_icon3_img TEXT, 
    /* Icon3 Tag */
    product_icon3_tag VARCHAR(30),
    /* Product Image */
    product_img TEXT,
    /* Product Price */
    product_price FLOAT(2)
)


/* Provides Products Table with 1 or 2 ID for Supplement or Gear */
CREATE TABLE ProductCategories (
    /* Product Category ID */
    category_id SERIAL PRIMARY KEY,
    /* Product Category: Supplement or Gear */
    product_category VARCHAR(15)
)

/* Takes in a Category ID as a foreign key and provides it a category type */
CREATE TABLE ProductCategoryTypes (
    /* Product Category Type ID */
    type_id SERIAL PRIMARY KEY,
    /* Product Category ID */
    category_id INTEGER REFERENCES productcategories(category_id),
    /* Product Type: (ex: pre, pump, bcaa, amino, whey, blend, casein, burner, tshirt, longshirt, hoodie, shaker ) */
    product_type VARCHAR(15)
)

/* Provides relationship between flavors or sizes (variations) and product types */
CREATE TABLE ProductTypesVariationsRef (
    /* Product Category Type ID */
    type_id INTEGER REFERENCES productcategorytypes(type_id),
    /* Product Type Variation ID */
    variation_id INTEGER REFERENCES producttypevariations(variation_id)
)

/* Provides product flavors or sizes (variations) */
CREATE TABLE ProductTypeVariations (
    /* Product Type Variation ID */
    variation_id SERIAL PRIMARY KEY,
    /* Product Flavor for Supplement or Size for Gear */
    product_type_variation VARCHAR(30)
)