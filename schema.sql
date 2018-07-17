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

CREATE TABLE Products (
    /* Product ID */
    product_id SERIAL PRIMARY KEY
)