db.products.insertMany([
// make up :
{ name: "Foundation", description: "Liquid foundation for flawless coverage", price: 25, inStock: true , category: "Makeup" },
{ name: "Lipstick", description: "Matte lipstick in various shades", price: 15, inStock: true ,category: "Makeup" },
{ name: "Moisturizer", description: "Hydrating facial moisturizer", price: 20, inStock: true, category: "Skincare" },
{ name: "Eyeliner", description: "Waterproof liquid eyeliner", price: 10, inStock: true, category: "Makeup" },
{ name: "Mascara", description: "Volumizing mascara for fuller lashes", price: 45, inStock: true, category: "Makeup"},
{ name: "Blush", description: "Powder blush for a natural flush", price: 20, inStock: true, category: "Makeup" },
{ name: "Eyeshadow Palette", description: "12-color eyeshadow palette with matte and shimmer shades",price: 30,inStock: true,category: "Makeup"},
// face care products:
{ name: "Moisturizer", description: "Hydrating moisturizer for all skin types", price: 22, inStock: true, category: "Face Care"},
{ name: "Facial Cleanser",description: "Gentle facial cleanser for daily use", price: 15, inStock: true,category: "Face Care" },
{ name: "Serum", description: "Vitamin C serum for brightening skin", price: 30, inStock: true, category: "Face Care" },
{ "name": "Sunscreen", "description": "SPF 50 sunscreen for UV protection", "price": 18, "inStock": true, "category": "Face Care" },
// hair care products:
{ "name": "Shampoo", "description": "Nourishing shampoo for all hair types", "price": 22, "inStock": true,  "category": "Hair Care"},
{ "name": "Conditioner", "description": "Moisturizing conditioner for smooth hair", "price": 15, "inStock": true, "category": "Hair Care" },
{ "name": "Hair Serum", "description": "Anti-frizz hair serum for shiny hair", "price": 20, "inStock": true, "category": "Hair Care" },
{"name": "Hair Mask", "description": "Deep conditioning hair mask for damaged hair", "price": 25, "inStock": false, "category": "Hair Care" },
{"name": "Heat Protectant Spray","description": "Heat protectant spray for styling", "price": 18,"inStock": true,"category": "Hair Care"},
// nails care products:
{ "name": "Nail Polish", "description": "Long-lasting nail polish available in various colors", "price": 10, "inStock": true, "category": "Nails" },
{ "name": "Nail File", "description": "Glass nail file for gentle filing", "price": 5, "inStock": true, "category": "Nails" },
{ "name": "Nail Clipper", "description": "Ergonomic stainless steel nail clipper", "price": 8, "inStock": true, "category": "Nails" },
{ "name": "Base Coat", "description": "Protective base coat for nail polish", "price": 12, "inStock": true, "category": "Nails" },
{ "name": "Top Coat","description": "Glossy top coat for a long-lasting finish", "price": 12, "inStock": true,"category": "Nails"},
//body care products:
{"name": "Body Wash","description": "Refreshing body wash with natural extracts","price": 10,"inStock": true,"category": "Body Care"},
{"name": "Body Lotion","description": "Moisturizing body lotion for smooth skin", "price": 12, "inStock": true,"category": "Body Care"},
{"name": "Body Scrub","description": "Exfoliating body scrub with sea salt", "price": 15,"inStock": true,"category": "Body Care"},
{"name": "Deodorant", "description": "Aluminum-free deodorant for all-day freshness", "price": 18,"inStock": true,"category": "Body Care"},
{"name": "Body Oil","description": "Nourishing body oil for radiant skin","price": 20,"inStock": true,"category": "Body Care"},
//body vitamines:
{"name": "Vitamin A","description": "Helps with eyesight and keeps skin healthy","price": 10,"inStock": true,"category": "Vitamins"},
{"name": "Vitamin C","description": "Helps heal wounds and boosts the immune system","price": 12,"inStock": true,"category": "Vitamins"},
{"name": "Vitamin D","description": "Strengthens bones by helping the body use calcium","price": 15,"inStock": true,"category": "Vitamins"},
{"name": "Vitamin E", "description": "Protects cells from damage and keeps skin healthy","price": 20,"inStock": true,"category": "Vitamins"},
{"name": "B Vitamins","description": "Includes B2 (riboflavin), B6, B12, biotin, and folic acid, which help convert food into energy","price": 25,"inStock": true, "category": "Vitamins"},
{ "name": "Biotin (Vitamin B7)", "description": "Supports hair growth and strengthens hair", "price": 10, "inStock": true, "category": "Hair Vitamins" },
{ "name": "Zinc", "description": "Prevents hair loss and supports hair repair", "price": 20, "inStock": true, "category": "Hair Vitamins" },
// hair growth products:
{ "name": "Mystic Complex Vital Ampoules", "description": "For hair loss and thinning, with biotin and tocopherol", "price": 25, "inStock": true, "category": "Hair Growth Ampoules" },
{ "name": "ANP® 2+ Anti Hair Loss Ampoules", "description": "Stimulates hair growth and reduces hair loss", "price": 30, "inStock": true, "category": "Hair Growth Ampoules" },
{ "name": "Top Hair Treatment Ampoules", "description": "Promotes fuller, thicker hair with vitamin B6 and Procapil®", "price": 35, "inStock": true, "category": "Hair Growth Ampoules" },
{ "name": "Salerm Vegetable Placenta Restructurer", "description": "Intensive hair lotion for hair strength and growth", "price": 20, "inStock": true, "category": "Hair Growth Ampoules" },
{"name": "Royal Placenta Hair Lotion","description": "Revitalizing treatment for hair loss and thinning","price": 22, "inStock": true,"category": "Hair Growth Ampoules"},
//perfumes:
{ "name": "Eau de Parfum", "description": "A luxurious blend of floral and woody notes", "price": 80, "inStock": true, "category": "Perfume" },
{ "name": "Eau de Toilette", "description": "A fresh and vibrant fragrance with citrus undertones", "price": 60, "inStock": true, "category": "Perfume" },
{ "name": "Cologne", "description": "A classic and masculine scent with spicy and leathery notes", "price": 55, "inStock": true, "category": "Perfume" },
{ "name": "Perfume Oil", "description": "Highly concentrated fragrance oil for a long-lasting scent", "price": 90, "inStock": true, "category": "Perfume" },
{ "name": "Body Mist", "description": "A light and refreshing body mist with a hint of vanilla", "price": 25, "inStock": true,"category": "Perfume"},
//hair colors:
{ "name": "Permanent Hair Color", "description": "Long-lasting hair color with deep conditioning", "price": 15, "inStock": true, "category": "Hair Color" },
{ "name": "Semi-Permanent Hair Color", "description": "Vibrant color that gradually fades over time", "price": 12, "inStock": true, "category": "Hair Color" },
{ "name": "Root Touch-Up", "description": "Quick and easy solution to cover roots", "price": 10, "inStock": true, "category": "Hair Color" },
{ "name": "Hair Color Spray", "description": "Temporary hair color spray for bold looks", "price": 8, "inStock": true, "category": "Hair Color" },
{ "name": "Highlighting Kit","description": "Complete kit for creating natural highlights","price": 20, "inStock": true, "category": "Hair Color"},
//make up brushes:
{ "name": "Foundation Brush", "description": "Flat, dense brush for smooth foundation application", "price": 15, "inStock": true, "category": "Makeup Brushes" },
{ "name": "Powder Brush", "description": "Large, fluffy brush for applying loose or pressed powder", "price": 12, "inStock": true, "category": "Makeup Brushes" },
{ "name": "Blush Brush", "description": "Angled brush for precise blush application on cheeks", "price": 10, "inStock": true, "category": "Makeup Brushes" },
{ "name": "Eyeshadow Brush", "description": "Soft, tapered brush for blending eyeshadow", "price": 8, "inStock": true, "category": "Makeup Brushes" },
{ "name": "Lip Brush","description": "Fine-tipped brush for precise lipstick application","price": 7, "inStock": true,"category": "Makeup Brushes"},
// hair oiles:
{ "name": "Coconut Oil", "description": "Moisturizing coconut oil for deep conditioning", "price": 12, "inStock": true, "category": "Hair Oil" },
{ "name": "Argan Oil", "description": "Nourishing argan oil for smooth and shiny hair", "price": 18, "inStock": true, "category": "Hair Oil" },
{ "name": "Jojoba Oil", "description": "Lightweight jojoba oil for scalp health and hydration", "price": 20, "inStock": true, "category": "Hair Oil" },
{ "name": "Almond Oil", "description": "Vitamin-rich almond oil for soft and silky hair","price": 14, "inStock": true, "category": "Hair Oil"},
//hairdressing equipment:                 matriel de coiffure:
{ "name": "Hair Dryer", "description": "Professional-grade hair dryer with multiple heat settings", "price": 50, "inStock": true, "category": "Hairdressing Equipment" },
{ "name": "Flat Iron", "description": "Ceramic flat iron for smooth and straight hair", "price": 45, "inStock": true, "category": "Hairdressing Equipment" },
{ "name": "Curling Iron", "description": "Tourmaline curling iron for defined curls", "price": 40, "inStock": true, "category": "Hairdressing Equipment" },
{ "name": "Hair Clippers", "description": "Electric hair clippers with adjustable blade settings", "price": 35, "inStock": true, "category": "Hairdressing Equipment" },
{"name": "Hair Brushes Set","description": "Set of various hair brushes for different styling needs","price": 25,"inStock": true, "category": "Hairdressing Equipment"},
//nail dressing equipment:
{"name": "Nail Drill","description": "Electric nail drill for professional nail shaping and filing","price": 35,"inStock": true,"category": "Nail Dressing Equipment"},
{ "name": "UV/LED Nail Lamp", "description": "Fast-drying UV/LED lamp for curing gel nails", "price": 40,"inStock": true,"category": "Nail Dressing Equipment"},
{"name": "Cuticle Pusher","description": "Stainless steel cuticle pusher for precise cuticle care", "price": 10, "inStock": true,"category": "Nail Dressing Equipment"},
{ "name": "Nail Buffer", "description": "Four-sided nail buffer for a smooth and shiny finish", "price": 5, "inStock": true,"category": "Nail Dressing Equipment"},
{"name": "Manicure Set","description": "Complete manicure set with scissors, clippers, and files", "price": 20,"inStock": true,"category": "Nail Dressing Equipment"},
//





























]) 

    






  