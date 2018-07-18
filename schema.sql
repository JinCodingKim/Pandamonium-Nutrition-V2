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
    country VARCHAR(75)
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
    product_header VARCHAR(100),
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
    /* Product Price */
    product_price FLOAT(2)
)
INSERT INTO products (
category_id, 
product_name, 
product_header, 
product_description, 
product_icon1_img,
product_icon1_tag,
product_icon2_img,
product_icon2_tag,
product_icon3_img,
product_icon3_tag,
product_price
)
VALUES 
(1, 'Panda', 'Panda: Create Pandamonium In The Gym', 'At Pandamonium Sports Nutrition, our mission is to fuel your inner rage and bring out your infinite potential, and in doing-so, help you achieve your goals in the most efficient way possible. Today, majority of these so-called “supplement companies” claim to have the next greatest pre-workout supplement that will change your workouts, while they hide behind proprietary blends that contain humdrum generic ingredients, and ineffective dosage. We are proud to present our fully-disclosed, clinical and scientifically-researched ingredients at fully-effective doses. 14 fully disclosed ingredients at the clinical and scientifically-researched dosages. It is time to take your workouts to the next level. Take Panda and cause a pandamonium within the gym - hitting the weights with the intensity and focus you have never experienced before. It’s time you break through your plateaus and reignite your passion for fitness. Panda was formulated to perfection, created without cutting any corners or costs; featuring premier patented and trademarked ingredients joined with clinical dosages of essential ingredienty. Panda is the answer you have been looking for.',
'https://image.ibb.co/bF4RfS/Explosive.png', 'Explosive Energy',
'https://image.ibb.co/hwjEZn/Muscle.png', 'Vein Splitting Pumps',
'https://image.ibb.co/dspWEn/Focus.png', 'Laser Focus', 39.99),
(2, 'Bambu Juice', 'Bambu Juice: Feed The Pandamonium', 'Bambu Juice was formulated to define what elite amino product should be. With the most comprehensive formula to keep your energy and muscle endurance at its peak throughout your workout. Bambu Juice features a massive 8 grams of branch chain amino acids at the research-proven 2:1:1 ratio in the form of Instaminos®. Bambu Juice is packed with whopping doses of Theacrine - to decrease muscle fatigue - in the form of Teacrine®, and L-Carnitine - to convert fat to metabolic energy - in the form of Carnipure®. To finish it off, Bambu Juice contains enough electrolytes to keep you hydrated all day long and at your best. Take Bambu Juice to keep your pandamonium to last longer!',
'https://image.ibb.co/j54yun/Aminos.png', '8 grams InstAminos',
'https://image.ibb.co/d2Zyun/Sustain.png', 'Muscle Endurance',
'https://image.ibb.co/igMp0S/Repair.png', 'Muscle Repair', 26.49),
(3, 'Shredded Panda', 'Shredded Panda: Lose The Fluff', 'For many, losing weight and dropping body fat can be one of the most difficult tasks out there. Excluding the strange few that actually enjoy cardiovascular activities, such as running on the treadmill, you know that each and every minute of it feels endless, and while the fact seems to never go away. Well, it is time to reap the benefits of all that hard work, by supplementing it with the premium lipolytic fat burner Shredded Panda. Featuring premium dosages of Carnipure® - the patented form of L-Carnitine, which converts fat to metabolic energy, and LEANGBB®, the patented form of Gamma butyrobetaine estyl ester chloride - the precursor to the fat burning L-Carnitine. Burn and mobilize fat to shape your ideal physique.',
'https://image.ibb.co/kPqtS7/Torch_Fat.png', 'Torch Fat',
'https://image.ibb.co/dspWEn/Focus.png', 'Laser Focus',
'https://image.ibb.co/eTRp0S/Extreme_Energy.png', 'Extreme Energy', 49.99),
(4, 'All The Whey', 'All The Whey: Recharge And Repair', 'All The Whey contains what every comprehensive and high-quality protein should contain to optimize the body for its next pandamonium. All The Whey contains Hydrolysed Whey, Whey Isolate, and Whey Concentrate to cover all three stages of absorption - from rapid to moderate, to optimize muscle repair time. All The Whey is a true premium post-workout blend, as it also packs Fibersol®-2, the digestion-resistant maltodextrin that acts as a low-calorie bulking agent containing 90 percent dietary fiber. To finish it off, All The Whey contains Ignitor® to utilize energy to burn fat. Athletes know the importance of using high-quality protein to either jumpstart their morning, or to provide a complete post workout meal. All The Whey checks off what every premium whey supplement should be - and then some! No corners were cut formulating this complete supplement. It has also been through multiple flavor tests to finalize with phenomenal flavors for your tastebuds. All The Whey covers all bases with precision and accuracy to help your body efficiently use its anabolic stage.',
'https://image.ibb.co/dDzRfS/25g_Protein.png', 'High Quality Protein Blend',
'https://image.ibb.co/hFRiS7/Lactose_Free.png', 'Lactose Free',
'https://image.ibb.co/caEgEn/Sustained_Release.png', 'Sustained Release', 56.99),
(5, 'Pandamonium T-Shirt', 'Pandamonium T-Shirt: High Performance White T-Shirt', 'This t-shirt was created with the what we believed to create optimum performance. The Pandamonium t-shirt fabric feels crazy smooth and soft. It is crafted with scalloped bottoms and 100% premium cotton. Can not go wrong with this shirt.',
'', '',
'', '',
'', '', 19.99),
(6, 'Pandamonium Hoodie', 'Pandamonium Hoodie: Not Your Average', 'This hoodie was created to be form fitted. There is nothing loose about this hoodie. It will wrap around your physique, and let people get an idea of how jacked you really are, without you having to take off your shirt. Show off without showing off.',
'', '',
'', '',
'', '', 49.99),
(7, 'Panda Shaker', 'Panda Shaker: Quality Bottle', 'Quality Pandamonium blender bottle with wite mouth and ergonomic flip cap! Product features: patented BlenderBall®, carrying loop, leak-proof seal, emboassed ounce and milliliter markings, BPA and Phthalate free! Get one and start shaking!',
'', '',
'', '',
'', '', 6.99)

/* Provides Products Table with a category and its type */
CREATE TABLE ProductCategories (
    /* Product Category Type ID */
    category_id SERIAL PRIMARY KEY,
    /* Product Category: Supplement or Gear  */
    product_category VARCHAR(15),
    /* Product Type: (ex: pre, pump, bcaa, amino, whey, blend, casein, burner, tshirt, longshirt, hoodie, shaker ) */
    product_type VARCHAR(15)
)
INSERT INTO productcategories (product_category, product_type) 
VALUES 
1 ('supplement', 'pre'),
2 ('supplement', 'amino acid'),
3 ('supplement', 'fat burner'),
4 ('supplement', 'whey protein'),
5 ('gear', 'shirt'),
6 ('gear', 'hoodie'),
7 ('gear', 'blender bottle')

/* Provides relationship between flavors or sizes (variations) and product types */
CREATE TABLE ProductcategoriesVariationsRef (
    /* Product Category Type ID */
    category_id INTEGER REFERENCES productcategories(category_id),
    /* Product Type Variation ID */
    variation_id INTEGER REFERENCES producttypevariations(variation_id),
    /* Product Image */
    product_img TEXT
)
INSERT INTO productcategoriesvariationsref (category_id, variation_id, product_img) 
VALUES 
(1, 7, 'https://image.ibb.co/ny4gPG/pre_cc.png'),
(1, 8, 'https://image.ibb.co/jO7Pdb/pre_bc.png'),
(2, 3, 'https://image.ibb.co/nNS7yb/intra_kk.png'),
(2, 4, 'https://image.ibb.co/nNS7yb/intra_kk.png'),
(3, 1, 'https://image.ibb.co/d2ey4G/fat_burner.png'),
(3, 2, 'https://image.ibb.co/d2ey4G/fat_burner.png'),
(4, 5, 'https://image.ibb.co/iNrT4G/protein_bm.png'),
(4, 6, 'https://image.ibb.co/mAvo4G/protein_cr.png'),
(5, 9, 'https://image.ibb.co/hfJV4G/white_t.png'),
(5, 10, 'https://image.ibb.co/hfJV4G/white_t.png'),
(5, 11, 'https://image.ibb.co/hfJV4G/white_t.png'),
(6, 9, 'https://image.ibb.co/cirHjG/black_h.png'),
(6, 10, 'https://image.ibb.co/cirHjG/black_h.png'),
(6, 11, 'https://image.ibb.co/cirHjG/black_h.png'),
(7, 12, 'https://image.ibb.co/hkqhWw/shaker.png')

/* Provides product flavors or sizes (variations) */
CREATE TABLE ProductTypeVariations (
    /* Product Type Variation ID */
    variation_id SERIAL PRIMARY KEY,
    /* Product Flavor for Supplement or Size for Gear */
    product_type_variation VARCHAR(30)
)
INSERT INTO producttypevariations (product_type_variation) 
VALUES 
1 ('60 Tablets'),
2 ('120 Tablets'),
3 ('Kane Kraze'),
4 ('Taro Swirl'),
5 ('Blubery Muffin'),
6 ('Cinnaroll'),
7 ('Cotton Candy'),
8 ('Black Cherry'),
9 ('Small'),
10 ('Medium'),
11 ('Large'),
12 ('28 Oz.')