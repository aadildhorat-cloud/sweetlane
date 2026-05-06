/**
🍫 Sweet Lane - Centralized Product Data & Utilities
📁 Recommended Path: /sweetlane/js/products-sweetlane.js
🔗 Usage: Include this exact script on BOTH Hive Times & Sweet Lane pages.
✅ Edit the RAW_PRODUCTS array below → Auto-syncs across all linked sites.
*/
(function () {
  // 📌 ASSET CONFIGURATION
  const CONFIG = {
  basePath: "/sweetlane/",           // ✅ Root path to your site section
  imageDir: "images/",                // ✅ Relative to basePath → /sweetlane/images/
  fallbackImage: "images/milkshakes.jpg", // ✅ Fallback if product image missing
  businessName: "Sweet Lane",
  businessLogo: "images/sweetlane-logo.png"
};

  // 📦 RAW PRODUCT DATA - ✏️ EDIT THIS ARRAY TO UPDATE EVERYWHERE
  const RAW_PRODUCTS = [
    // === 🥤 MILKSHAKES - PREMIUM ===
    { id: "milkshake-premium-burfee", name: "Premium Milkshake - Burfee (350ml)", price: 55.00, category: "milkshakes-premium", description: "Premium Burfee flavored milkshake - 350ml", badge: "✨ Premium", image: "images/milkshakespremium.jpg" },
    { id: "milkshake-premium-lotus", name: "Premium Milkshake - Lotus Cookie Butter (350ml)", price: 55.00, category: "milkshakes-premium", description: "Premium Lotus Cookie Butter milkshake - 350ml", badge: "✨ Premium", image: "images/milkshakespremium.jpg" },
    { id: "milkshake-premium-falooda", name: "Premium Milkshake - Falooda (350ml)", price: 55.00, category: "milkshakes-premium", description: "Premium Falooda milkshake - 350ml", badge: "🔥 Popular", image: "images/milkshakespremium.jpg" },
    { id: "milkshake-premium-chilledchai", name: "Premium Milkshake - Chilled Chai (350ml)", price: 55.00, category: "milkshakes-premium", description: "Premium Chilled Chai milkshake - 350ml", badge: "✨ Premium", image: "images/milkshakespremium.jpg" },
    { id: "milkshake-premium-bluesky", name: "Premium Milkshake - Blue Sky (350ml)", price: 55.00, category: "milkshakes-premium", description: "Premium Blue Sky milkshake - 350ml", badge: "✨ Premium", image: "images/milkshakespremium.jpg" },
    { id: "milkshake-premium-blueberry", name: "Premium Milkshake - Blueberry Cheesecake (350ml)", price: 55.00, category: "milkshakes-premium", description: "Premium Blueberry Cheesecake milkshake - 350ml", badge: "✨ Premium", image: "images/milkshakespremium.jpg" },
    { id: "milkshake-premium-bounty", name: "Premium Milkshake - Bounty (350ml)", price: 55.00, category: "milkshakes-premium", description: "Premium Bounty milkshake - 350ml", badge: "✨ Premium", image: "images/milkshakespremium.jpg" },
    { id: "milkshake-premium-turkish", name: "Premium Milkshake - Turkish Delight (350ml)", price: 55.00, category: "milkshakes-premium", description: "Premium Turkish Delight milkshake - 350ml", badge: "✨ Premium", image: "images/milkshakespremium.jpg" },
    { id: "milkshake-premium-1litre", name: "Premium Milkshake (1 Litre)", price: 110.00, category: "milkshakes-premium", description: "Premium milkshake - 1 Litre. Choose from: Burfee, Lotus Cookie Butter, Falooda, Chilled Chai, Blue Sky, Blueberry Cheesecake, Bounty, Turkish Delight", badge: "📦 Large Size", image: "images/milkshakespremium.jpg" },

    // === 🥤 MILKSHAKES - REGULAR ===
    { id: "milkshake-regular-chocolate", name: "Regular Milkshake - Chocolate (350ml)", price: 45.00, category: "milkshakes-regular", description: "Regular Chocolate milkshake - 350ml", badge: "", image: "https://image.qwenlm.ai/public_source/..." },
    { id: "milkshake-regular-coffee", name: "Regular Milkshake - Coffee (350ml)", price: 45.00, category: "milkshakes-regular", description: "Regular Coffee milkshake - 350ml", badge: "", image: "https://image.qwenlm.ai/public_source/..." },
    { id: "milkshake-regular-bluebubblegum", name: "Regular Milkshake - Blue Bubblegum (350ml)", price: 45.00, category: "milkshakes-regular", description: "Regular Blue Bubblegum milkshake - 350ml", badge: "", image: "https://image.qwenlm.ai/public_source/..." },
    { id: "milkshake-regular-cottoncandy", name: "Regular Milkshake - Cotton Candy (350ml)", price: 45.00, category: "milkshakes-regular", description: "Regular Cotton Candy milkshake - 350ml", badge: "", image: "https://image.qwenlm.ai/public_source/..." },
    { id: "milkshake-regular-pinkcoconut", name: "Regular Milkshake - Pink Coconut (350ml)", price: 45.00, category: "milkshakes-regular", description: "Regular Pink Coconut milkshake - 350ml", badge: "", image: "https://image.qwenlm.ai/public_source/..." },
    { id: "milkshake-regular-strawberries", name: "Regular Milkshake - Strawberries & Cream (350ml)", price: 45.00, category: "milkshakes-regular", description: "Regular Strawberries & Cream milkshake - 350ml", badge: "", image: "https://image.qwenlm.ai/public_source/..." },
    { id: "milkshake-regular-lime", name: "Regular Milkshake - Lime (350ml)", price: 45.00, category: "milkshakes-regular", description: "Regular Lime milkshake - 350ml", badge: "", image: "https://image.qwenlm.ai/public_source/..." },
    { id: "milkshake-regular-saltedcaramel", name: "Regular Milkshake - Salted Caramel (350ml)", price: 45.00, category: "milkshakes-regular", description: "Regular Salted Caramel milkshake - 350ml", badge: "", image: "https://image.qwenlm.ai/public_source/..." },
    { id: "milkshake-regular-liquorice", name: "Regular Milkshake - Liquorice Twist (350ml)", price: 45.00, category: "milkshakes-regular", description: "Regular Liquorice Twist milkshake - 350ml", badge: "", image: "https://image.qwenlm.ai/public_source/..." },
    { id: "milkshake-regular-bubblemint", name: "Regular Milkshake - Bubblemint (350ml)", price: 45.00, category: "milkshakes-regular", description: "Regular Bubblemint milkshake - 350ml", badge: "", image: "https://image.qwenlm.ai/public_source/..." },
    { id: "milkshake-regular-1litre", name: "Regular Milkshake (1 Litre)", price: 80.00, category: "milkshakes-regular", description: "Regular milkshake - 1 Litre. Choose from: Chocolate, Coffee, Blue Bubblegum, Cotton Candy, Pink Coconut, Strawberries & Cream, Lime, Salted Caramel, Liquorice Twist, Bubblemint", badge: "📦 Large Size", image: "images/milkshakes" },

    // === 🥛 MILK SHOTS ===
    { id: "milkshot", name: "Milk Shot", price: 20.00, category: "milk-shots", description: "Delicious milk shot. Flavours: Burfee, Falooda, Chilled Chai, Blue Sky, Blueberry Cheesecake, Bounty, Turkish Delight, Chocolate, Coffee, Blue Bubblegum, Cotton Candy, Strawberries & Cream, Pink Coconut, Lime, Salted Caramel, Liquorice Twist, Bubblemint", badge: "🔥 Popular", image: "images/milkshots.jpg" },

    // === 🍭 MILK LOLLIES ===
    { id: "milk-lollies", name: "Milk Lollies (Bag of 12)", price: 90.00, category: "milk-lollies", description: "Delicious milk lollies. Bag of 12 pieces. Various flavours available.", badge: "👨‍👩‍👧‍👦 Family Pack", image: "images/milklollies.jpg" },

    // === 🍮 RASMALAI ===
    { id: "rasmalai-individual", name: "Rasmalai Individual Jar", price: 50.00, category: "rasmalai", description: "Individual serving of Rasmalai in a jar. Perfect for one person.", badge: "", image: "images/rasmalai.jpg" },

    // === 🍪 NAAN KHATAI ===
    { id: "naan-khatai", name: "Naan Khatai (Pack of 12)", price: 110.00, category: "naan-khatai", description: "Traditional Indian shortbread cookies. Pack of 12 pieces.", badge: "🌟 Traditional", image: "images/naankatai.jpg" },

    // === 🌰 GOURMET DATES ===
    { id: "gourmet-dates-sesame", name: "Gourmet Dates - Sesame Coated", price: 180.00, category: "gourmet-dates", description: "Premium gourmet dates coated with sesame. Dozen (12 pieces).", badge: "✨ Premium", image: "images/gourmetdates.jpg" },
    { id: "gourmet-dates-coconut", name: "Gourmet Dates - Coconut Coated", price: 180.00, category: "gourmet-dates", description: "Premium gourmet dates coated with coconut. Dozen (12 pieces).", badge: "", image: "images/gourmetdates.jpg" },
    { id: "gourmet-dates-pista", name: "Gourmet Dates - Sliced Pista", price: 180.00, category: "gourmet-dates", description: "Premium gourmet dates topped with sliced pistachios. Dozen (12 pieces).", badge: "🌟 Popular", image: "images/gourmetdates.jpg" },
    { id: "gourmet-dates-mixednuts", name: "Gourmet Dates - Mixed Nuts", price: 180.00, category: "gourmet-dates", description: "Premium gourmet dates topped with mixed nuts. Dozen (12 pieces).", badge: "", image: "images/gourmetdates.jpg" },
    { id: "gourmet-dates-cashew", name: "Gourmet Dates - Whole Cashews", price: 180.00, category: "gourmet-dates", description: "Premium gourmet dates topped with whole cashews. Dozen (12 pieces).", badge: "✨ Premium", image: "images/gourmetdates.jpg" },
    { id: "gourmet-dates-turkish", name: "Gourmet Dates - Turkish Delight", price: 180.00, category: "gourmet-dates", description: "Premium gourmet dates filled with Turkish delight. Dozen (12 pieces).", badge: "", image: "images/gourmetdates.jpg" },
    { id: "gourmet-dates-nougat", name: "Gourmet Dates - Nougat", price: 180.00, category: "gourmet-dates", description: "Premium gourmet dates filled with nougat. Dozen (12 pieces).", badge: "", image: "images/gourmetdates.jpg" },
    { id: "gourmet-dates-choc-pista", name: "Gourmet Dates - Chocolate Covered (Pista Sprinkle)", price: 180.00, category: "gourmet-dates", description: "Premium gourmet dates covered in chocolate with almond inside and pista sprinkle. Dozen (12 pieces).", badge: "🍫 Chocolate", image: "images/gourmetdates.jpg" },
    { id: "gourmet-dates-whitechoc-rose", name: "Gourmet Dates - White Chocolate (Rose Petals)", price: 180.00, category: "gourmet-dates", description: "Premium gourmet dates covered in white chocolate with almond inside and rose petals sprinkle. Dozen (12 pieces).", badge: "🌹 Elegant", image: "images/gourmetdates.jpg" },
    { id: "gourmet-dates-bounty", name: "Gourmet Dates - Bounty (Dipped)", price: 180.00, category: "gourmet-dates", description: "Premium gourmet dates dipped Bounty style. Dozen (12 pieces).", badge: "", image: "images/gourmetdates.jpg" },
    { id: "gourmet-dates-lotus", name: "Gourmet Dates - Lotus Biscoff Filling", price: 180.00, category: "gourmet-dates", description: "Premium gourmet dates filled with Lotus Biscoff. Dozen (12 pieces).", badge: "🔥 Popular", image: "images/gourmetdates.jpg" },
    { id: "gourmet-dates-dubai", name: "Gourmet Dates - Viral Dubai Filling", price: 180.00, category: "gourmet-dates", description: "Premium gourmet dates with viral Dubai filling. Dozen (12 pieces).", badge: "🔥 Trending", image: "images/gourmetdates.jpg" },

    // === 🥛 KHEER ===
    { id: "kheer", name: "Kheer", price: 130.00, category: "kheer", description: "Premium rice pudding (Kheer) - R130 per litre. Rich and creamy traditional dessert.", badge: "🌟 Premium", image: "images/kheer.jpg" }
  ];

  // 🔄 Process & Attach Metadata
  const PROCESSED = RAW_PRODUCTS.map(product => ({
    ...product,
    image: product.image || `${CONFIG.basePath}${CONFIG.imageDir}/${product.id}.jpg`,
    imageFallback: `${CONFIG.basePath}${CONFIG.fallbackImage}`,
    businessName: product.businessName || CONFIG.businessName,
    businessLogo: `${CONFIG.basePath}${CONFIG.fallbackImage}`,
    categorySlug: product.category.trim().toLowerCase()
  }));

  // 🌐 Global Export
  window.SWEET_LANE_PRODUCTS = PROCESSED;
  window.SWEETLANE_DATA = PROCESSED;

  // 🛠️ Utility API
  window.SweetLaneProducts = {
    getAll: () => window.SWEET_LANE_PRODUCTS,
    getById: (id) => window.SWEET_LANE_PRODUCTS.find(p => p.id === id),
    getByCategory: (category) => window.SWEET_LANE_PRODUCTS.filter(p => p.categorySlug === category.toLowerCase()),
    
    renderCard: (p) => `
      <article class="product-card" 
               data-id="${p.id}" 
               data-category="${p.categorySlug}" 
               data-price="${p.price}">
        
        <div class="product-image-wrap" onclick="openProductModal('${p.id}')">
          <img 
            src="${p.image}" 
            alt="${p.name}" 
            loading="lazy" 
            class="product-image"
            onerror="this.src='${p.imageFallback}'">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        </div>
        
        <div class="product-info">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-description">${p.description}</p>
          <div class="product-price">R${p.price.toFixed(2)}</div>
          
          <button 
            class="add-to-cart-btn" 
            onclick="event.stopPropagation(); cart.addToCart({
              id: '${p.id}', 
              name: '${p.name}', 
              price: ${p.price}, 
              quantity: 1, 
              image: '${p.image}',
              businessName: '${p.businessName}',
              businessLogo: '${p.businessLogo}'
            }); showToast('✅ ${p.name} added to cart!');">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </article>
    `,
    
    getWhatsAppLink: (product, phoneNumber = "27836120605") => {
      const msg = encodeURIComponent(
        `Hi! I'd like to order from Sweet Lane:\n\n` +
        `🍫 *${product.name}*\n` +
        `💰 Price: R${product.price.toFixed(2)}\n` +
        `📝 ${product.description}\n\n` +
        `Please confirm availability. Thank you!`
      );
      return `https://wa.me/${phoneNumber}?text=${msg}`;
    }
  };

  // 📊 Dev Console
  console.group("🍫 Sweet Lane Products Synced");
  console.log(`✅ ${PROCESSED.length} products loaded`);
  const grouped = {};
  PROCESSED.forEach(p => {
    grouped[p.categorySlug] = grouped[p.categorySlug] || [];
    grouped[p.categorySlug].push(p.name);
  });
  Object.entries(grouped).forEach(([cat, items]) => 
    console.log(`📁 ${cat}: ${items.length} item(s)`)
  );
  console.groupEnd();
})();