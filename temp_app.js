(function () {
  'use strict';

  var page = document.body.dataset.page || 'home';
  var headerMount = document.querySelector('[data-site-header]');
  var footerMount = document.querySelector('[data-site-footer]');

  var links = {
    floor: 'floor-coating.html',
    line: 'line-marking.html',
    projectors: 'projectors.html',
    tape: 'line-marking-tape.html',
    pricing: 'pricing.html'
  };

  if (headerMount) {
    headerMount.innerHTML = [
      '<a class="skip-link" href="#main">Skip to content</a>',
      '<header class="site-header">',
        '<div class="utility"><div class="shell utility__inner">',
          '<div class="utility__links">',
            '<a href="about.html">About Us</a>',
            '<div class="learning-menu">',
              '<button type="button" aria-expanded="false">Learning Centre</button>',
              '<div class="submenu">',
                '<a href="learning.html#articles">Articles</a>',
                '<a href="case-studies.html">Case studies</a>',
                '<a href="video-gallery.html">Videos</a>',
              '</div>',
            '</div>',
            '<a href="samples.html">Free Tape Samples</a>',
          '</div>',
          '<div class="utility__contact">',
            '<a href="tel:1300590505">1300 590 505</a>',
            '<a href="mailto:enquiries@cotewell.com.au">enquiries@cotewell.com.au</a>',
          '</div>',
        '</div></div>',
        '<div class="shell main-nav">',
          '<a class="brand" href="index.html" aria-label="Cotewell home"><img src="assets/media/cotewell-logo.jpeg" alt="Cotewell"></a>',
          '<nav class="primary" id="primary-menu" aria-label="Primary navigation">',
            navLink('floor', 'Floor Coating'),
            navLink('line', 'Line Marking'),
            navLink('projectors', 'Projectors'),
            navLink('tape', 'Line Marking Tape'),
            navLink('pricing', 'Pricing'),
          '</nav>',
          '<div class="nav-actions">',
            '<a class="cart-link" href="#cart" aria-label="View cart"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.4L21 7H7"/><circle cx="10" cy="20" r="1.25"/><circle cx="18" cy="20" r="1.25"/></svg><span>Cart</span><b data-cart-count>0</b></a>',
            '<a class="btn btn--red" href="quote.html">Request a Quote</a>',
          '</div>',
          '<button class="menu-toggle" type="button" aria-controls="primary-menu" aria-expanded="false">Menu</button>',
        '</div>',
      '</header>'
    ].join('');
  }

  if (footerMount) {
    var showCtaBand = (page !== 'quote' && page !== 'home' && page !== 'line');
    var ctaBandHtml = showCtaBand ? [
      '<section class="cta-band"><div class="shell cta-band__inner">',
        '<h2>Tell us what your floor needs to do.</h2>',
        '<a class="btn btn--dark btn--large" href="quote.html">Request a Quote <span aria-hidden="true">↗</span></a>',
      '</div></section>'
    ].join('') : '';

    footerMount.innerHTML = [
      ctaBandHtml,
      '<footer class="site-footer">',
        '<nav class="footer-services" aria-label="Services"><div class="shell footer-services__inner">',
          '<a href="floor-coating.html">Floor Coating</a>',
          '<a href="line-marking.html">Line Marking</a>',
          '<a href="projectors.html">Projectors</a>',
          '<a href="line-marking-tape.html">Line Marking Tape</a>',
          '<a href="pricing.html">Pricing</a>',
        '</div></nav>',
        '<div class="shell footer-main">',
          '<div class="footer-brand">',
            '<img src="assets/media/cotewell-logo.jpeg" alt="Cotewell">',
            '<p>Industrial floors, markings and visual safety systems across Australia.</p>',
          '</div>',
          '<div class="footer-col"><h3>About Us</h3><a href="about.html#team">Our team</a><a href="about.html#approach">How we work</a><a href="quote.html">Request a Quote</a></div>',
          '<div class="footer-col"><h3>Learning Centre</h3><a href="learning.html#articles">Articles</a><a href="case-studies.html">Case studies</a><a href="video-gallery.html">Videos</a></div>',
          '<div class="footer-col"><h3>Free Tape Samples</h3><a href="samples.html">Request samples</a><a href="tel:1300590505">1300 590 505</a><a href="mailto:enquiries@cotewell.com.au">Email us</a></div>',
        '</div>',
        '<div class="footer-bottom"><div class="shell footer-bottom__inner"><span>Copyright 2026 © Cotewell</span><span><a href="#">Privacy Policy</a> · <a href="#">Terms of Use</a></span></div></div>',
      '</footer>'
    ].join('');
  }

  function navLink(key, label) {
    return '<a href="' + links[key] + '"' + (page === key ? ' aria-current="page"' : '') + '>' + label + '</a>';
  }

  if (page === 'home') {
    document.querySelectorAll('img[src*="assets/media/partner-logos"]').forEach(function (logo) {
      var logoFile = logo.getAttribute('src').split('/').pop().replace(/\.(jpe?g|png)$/i, '.png');
      logo.src = 'assets/img/logos-dark/' + logoFile;
      logo.classList.remove('logo--dark', 'case-study-logo--dark');
    });
    document.querySelectorAll('.home-cases a[href*="cotewell.com.au/video-gallery"]').forEach(function (link) {
      link.href = 'video-gallery.html';
      link.removeAttribute('target');
      link.removeAttribute('rel');
    });
  }

  document.querySelectorAll('a[href="learning.html#case-studies"]').forEach(function (link) { link.href = 'case-studies.html'; });
  document.querySelectorAll('a[href="learning.html#videos"], a[href="https://cotewell.com.au/video-gallery/"]').forEach(function (link) {
    link.href = 'video-gallery.html';
    link.removeAttribute('target');
    link.removeAttribute('rel');
  });

  var menuButton = document.querySelector('.menu-toggle');
  var primary = document.querySelector('.primary');
  if (menuButton && primary) {
    menuButton.addEventListener('click', function () {
      var open = primary.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? 'Close' : 'Menu';
      document.body.classList.toggle('menu-open', open);
    });
  }

  var learningButton = document.querySelector('.learning-menu > button');
  if (learningButton) {
    learningButton.addEventListener('click', function () {
      learningButton.setAttribute('aria-expanded', learningButton.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    });
  }

  var siteHeader = headerMount;
  var lastScrollY = window.scrollY;
  function updateStickyHeader() {
    var nextScrollY = window.scrollY;
    var scrollingDown = nextScrollY > lastScrollY && nextScrollY > 180;
    if (siteHeader && !document.body.classList.contains('menu-open')) {
      siteHeader.classList.toggle('is-hidden', scrollingDown);
      // Separate thresholds prevent the height change from repeatedly crossing
      // the same scroll boundary and making nearby product controls jump.
      var compact = siteHeader.classList.contains('is-compact');
      siteHeader.classList.toggle('is-compact', compact ? nextScrollY > 10 : nextScrollY > 80);
    }
    lastScrollY = nextScrollY;
  }
  window.addEventListener('scroll', updateStickyHeader, { passive: true });

  // Product copy, options and gallery references checked in Chrome on 10 September 2026.
  var products = [
    {
      "slug": "angle-shape",
      "group": "shapes",
      "name": "MightyLine 5S Angle Shape",
      "image": "angle-shape-yellow.png",
      "price": "8.50",
      "colours": [
        "Yellow",
        "Green",
        "Red",
        "White",
        "Black",
        "Blue",
        "Orange"
      ],
      "widths": [
        "50mm",
        "75mm"
      ],
      "description": "Durable corner markers for pallet bays, storage locations and equipment zones. Create clear 5S layouts using less material than full floor outlines.",
      "gallery": [
        "angle-shape-yellow.png",
        "angle-shape-blue.png",
        "angle-shape-red.png",
        "angle-shape-orange.png",
        "angle-shape-green.png",
        "angle-shape-black.png",
        "angle-shape-white.png"
      ],
      "features": [
        "Heavy-duty construction withstands industrial wheeled traffic",
        "Quick peel-and-stick installation with no production downtime",
        "Defines bay corners using less material than complete boxes",
        "Easy to clean, replace or reposition as layouts change",
        "3-year warranty"
      ],
      "limitations": [
        "For internal use only",
        "Apply to a clean, dry, oil-free surface, not over existing paint or tape",
        "Surface preparation is essential for maximum adhesion",
        "Wheel spinning, sharp turning and dragged equipment may cause damage",
        "Dimensions: 152 × 50mm or 152 × 75mm"
      ],
      "applications": "Pallet bays · Storage locations · Equipment parking · Workstations · Pick and pack areas · Production zones · Manufacturing · Distribution centres",
      "sourceGallery": [
        "2020/06/angle-shape-yellow.png",
        "2020/06/angle-shape-blue.png",
        "2020/06/angle-shape-red.png",
        "2020/06/angle-shape-orange.png",
        "2020/06/angle-shape-green.png",
        "2020/06/angle-shape-black.png",
        "2020/06/angle-shape-white.png"
      ]
    },
    {
      "slug": "mightyline-tape",
      "group": "tape",
      "name": "MightyLine Marking Tape",
      "image": "tape-yellow-both.png",
      "price": "269.00",
      "colours": [
        "Yellow",
        "Green",
        "Red",
        "White",
        "Black",
        "Blue",
        "Gray",
        "Clear",
        "Purple",
        "Orange",
        "Brown",
        "Diagonal Black/White",
        "Diagonal Red/White",
        "Diagonal Black/Yellow"
      ],
      "widths": [
        "50mm",
        "100mm"
      ],
      "description": "Premium 1.3mm floor tape for heavy forklift and industrial wheeled traffic. Bevelled edges, quick installation and low maintenance make it a flexible alternative to painted lines.",
      "gallery": [
        "tape-yellow-both.png",
        "tape-red-both.png",
        "tape-white-both.png",
        "tape-blue-both.png",
        "tape-black-both.png",
        "tape-orange-both.png",
        "tape-striped-both.png",
        "tape-green-both.png",
        "Factory-Line-Marking-QLD-1.jpg",
        "shared-image-17-1.jpg"
      ],
      "features": [
        "1.3mm thick, up to seven times thicker than many standard floor tapes",
        "Withstands heavy industrial forklift and wheeled traffic",
        "Bevelled edges minimise lifting and provide a smooth transition",
        "DIY peel-and-stick installation with no production downtime",
        "Removes with minimal residue; damaged sections are easy to repair",
        "Up to 60% lower ongoing maintenance than painted line marking",
        "Smooth, easy-to-clean surface",
        "Suitable for pharmaceutical and food production environments, with no contamination during installation",
        "3-year limited adhesion warranty",
        "Custom shapes, barcodes and symbols available on request"
      ],
      "limitations": [
        "For internal applications above 10°C only",
        "Apply to a clean, dry, oil-free surface, not over existing paint or tape",
        "Do not apply lengthways over floor joints",
        "Not recommended for rough, damaged or uneven concrete",
        "Continuous pallet dragging and heavy wheel spinning may reduce lifespan",
        "Warranty does not cover damage",
        "30m rolls; 50mm and 100mm widths"
      ],
      "applications": "Pedestrian walkways · Forklift routes · Pallet bays · Equipment parking · Material storage · Workstations · Production lines · Keep-clear areas · Safety and exclusion zones",
      "sourceGallery": [
        "2019/07/tape-yellow-both.png",
        "2019/07/tape-red-both.png",
        "2019/07/tape-white-both.png",
        "2019/07/tape-blue-both.png",
        "2020/06/tape-black-both.png",
        "2020/06/tape-orange-both.png",
        "2019/07/tape-striped-both.png",
        "2019/07/tape-green-both.png",
        "2022/04/Factory-Line-Marking-QLD-1.jpg",
        "2025/10/shared-image-17-1.jpg"
      ]
    },
    {
      "slug": "small-footprints",
      "group": "shapes",
      "name": "MightyLine Small Footprints (Pair)",
      "image": "footprint-shape-yellow.png",
      "price": "14.70",
      "colours": [
        "Yellow",
        "Green",
        "Red",
        "Blue",
        "Orange"
      ],
      "widths": [
        "241 × 89mm (pair)"
      ],
      "description": "Highly visible footprints guide pedestrians along designated routes and separate pedestrian movement from operational areas. Supplied as a pair, each footprint is 241 × 89mm.",
      "gallery": [
        "footprint-shape-yellow.png",
        "footprint-shape-red.png",
        "footprint-shape-orange.png",
        "footprint-shape-green.png",
        "footprint-shape-blue.png"
      ],
      "features": [
        "Durable industrial construction with a highly visible footprint design",
        "Quick peel-and-stick installation with no production downtime",
        "Clearly identifies pedestrian routes",
        "Easy to clean, replace or reposition",
        "Supports Lean and 5S visual management"
      ],
      "limitations": [
        "For internal use only",
        "Apply to a clean, dry, oil-free surface, not over existing paint or tape",
        "Surface preparation is essential for maximum adhesion",
        "Heavy wheel spinning, sharp turning or dragged equipment may cause damage"
      ],
      "applications": "Pedestrian walkways · Warehouse aisles · Safe routes · Production areas · Pick and pack zones · Manufacturing · Distribution centres",
      "sourceGallery": [
        "2020/06/footprint-shape-yellow.png",
        "2020/06/footprint-shape-red.png",
        "2020/06/footprint-shape-orange.png",
        "2020/06/footprint-shape-green.png",
        "2020/06/footprint-shape-blue.png"
      ]
    },
    {
      "slug": "external-tape",
      "group": "external",
      "name": "Cotewell External Line Marking Tape",
      "image": "Cotewell-External-Tape-Yellow.png",
      "price": "259.00",
      "colours": [
        "Yellow",
        "Green",
        "Red",
        "White",
        "Blue"
      ],
      "widths": [
        "25m roll"
      ],
      "description": "Weather-resistant floor tape for outdoor asphalt and concrete. Built for rain, UV exposure and heavy pedestrian traffic, it creates visible, flexible layouts without painted lines.",
      "gallery": [
        "Cotewell-External-Tape-Yellow.png",
        "External-Tape-scaled.jpg",
        "External-Tape-Crossing-scaled.jpg",
        "External-Green-Red-scaled.jpg"
      ],
      "features": [
        "Designed for outdoor asphalt and concrete",
        "1.3mm thick, up to seven times thicker than standard tapes and paint",
        "P5 slip-rated surface",
        "Highly reflective for low-light and night-time visibility",
        "Weather and UV resistant",
        "Peel-and-stick installation with no production downtime",
        "Easy to remove, replace or cut to custom lengths and shapes",
        "3-year warranty"
      ],
      "limitations": [
        "For external use only",
        "Surface preparation is essential for adhesion and lifespan",
        "Do not apply over paint, tape or contaminated surfaces",
        "Not suitable for loose, damaged or heavily textured surfaces",
        "Heavy turning, wheel spinning and dragged equipment may reduce lifespan",
        "25m roll; confirm width when ordering"
      ],
      "applications": "Hazards and exclusion zones · Keep-clear areas · Emergency access · Forklift routes · Vehicle lanes · Shared traffic zones · Fire equipment boundaries · Walkways · Storage bays · Loading areas",
      "sourceGallery": [
        "2022/06/Cotewell-External-Tape-Yellow.png",
        "2022/07/External-Tape-scaled.jpg",
        "2022/07/External-Tape-Crossing-scaled.jpg",
        "2022/07/External-Green-Red-scaled.jpg"
      ]
    },
    {
      "slug": "freezer-footprints",
      "group": "shapes",
      "name": "Mighty Line X-Treme Freezer Small Footprints (Pair)",
      "image": "footprint-shape-yellow.png",
      "price": "20.00",
      "colours": [
        "Yellow",
        "Red",
        "White"
      ],
      "widths": [
        "241 × 89mm (pair)"
      ],
      "description": "Freezer-grade footprints guide pedestrians through cold rooms and freezer facilities. Designed for sub-zero environments where standard floor markings can fail.",
      "gallery": [
        "footprint-shape-yellow.png",
        "footprint-shape-red.png",
        "footprint-shape-white.png"
      ],
      "features": [
        "Designed for freezer and cold room environments",
        "Highly visible footprint design",
        "Excellent adhesion in sub-zero temperatures",
        "Quick peel-and-stick installation",
        "Reinforces designated walkways; easy to replace when layouts change"
      ],
      "limitations": [
        "For indoor freezer and cold room applications only",
        "Surface must be clean, dry and free from contaminants",
        "Dragging pallets or equipment over the footprints may reduce lifespan",
        "Each footprint is 241mm long and 89mm wide"
      ],
      "applications": "Cold rooms · Freezer facilities · Food processing · Distribution centres · Warehouse walkways · Pedestrian routes · Pick and pack areas · Chilled storage",
      "sourceGallery": [
        "2020/06/footprint-shape-yellow.png",
        "2020/06/footprint-shape-red.png",
        "2020/06/footprint-shape-white.png"
      ]
    },
    {
      "slug": "arrow",
      "group": "shapes",
      "name": "MightyLine 5S Arrow",
      "image": "arrow-shape-blue.png",
      "price": "12.50",
      "colours": [
        "Blue",
        "Green",
        "Red",
        "Yellow",
        "Orange"
      ],
      "widths": [
        "254 × 152mm"
      ],
      "description": "Heavy-duty directional arrows create clear routes for pedestrians and vehicles. Reinforce traffic flow and support a safer, more organised 5S workplace.",
      "gallery": [
        "arrow-shape-blue.png",
        "arrow-shape-orange.png",
        "arrow-shape-green.png",
        "arrow-shape-yellow.png",
        "arrow-shape-red.png"
      ],
      "features": [
        "Highly visible directional arrow",
        "Heavy-duty construction withstands industrial wheeled traffic",
        "Quick peel-and-stick installation with no production downtime",
        "Durable, easy-to-clean surface",
        "Reinforces traffic flow and visual management",
        "Easy to replace or reposition"
      ],
      "limitations": [
        "For internal use only",
        "Apply to a clean, dry, oil-free surface, not over paint or tape",
        "Surface preparation is essential for maximum adhesion",
        "Wheel spinning, sharp turning or dragged equipment may cause damage",
        "254mm long and 152mm wide"
      ],
      "applications": "Forklift routes · Pedestrian walkways · Warehouse aisles · One-way systems · Loading and dispatch · Manufacturing · Distribution centres",
      "sourceGallery": [
        "2020/06/arrow-shape-blue.png",
        "2020/06/arrow-shape-orange.png",
        "2020/06/arrow-shape-green.png",
        "2020/06/arrow-shape-yellow.png",
        "2020/06/arrow-shape-red.png"
      ]
    },
    {
      "slug": "warning-forklift",
      "group": "signs",
      "name": "MightyLine Floor Sticker “Warning Forklift Traffic”",
      "image": "warning-forklift-sticker.png",
      "price": "195.00",
      "colours": [
        "As shown"
      ],
      "widths": [
        "Confirm size with Cotewell"
      ],
      "description": "A bold floor-level warning that alerts pedestrians to forklift activity ahead. Reinforce safe behaviour and improve awareness in shared warehouse traffic areas.",
      "gallery": [
        "warning-forklift-sticker.png"
      ],
      "features": [
        "Highly visible forklift warning alerts approaching pedestrians",
        "Durable industrial construction",
        "Quick peel-and-stick installation with no production downtime",
        "Easy-to-clean surface"
      ],
      "limitations": [
        "For internal use on smooth, sound floors",
        "Apply to a clean, dry, oil-free surface",
        "Heavy wheel turning, pallet dragging or scraping may cause damage",
        "Do not apply over existing tape or damaged coatings",
        "Position clearly for approaching pedestrians",
        "Confirm dimensions with Cotewell before ordering"
      ],
      "applications": "Forklift crossings · Pedestrian and forklift intersections · Warehouse aisles · Loading and dispatch · Manufacturing · High-traffic warehouse areas",
      "sourceGallery": [
        "2020/06/warning-forklift-sticker.png"
      ]
    },
    {
      "slug": "freezer-tape",
      "group": "tape",
      "name": "MightyLine X-treme Freezer Tape",
      "image": "tape-white-both.png",
      "price": "417.00",
      "colours": [
        "White",
        "Red",
        "Yellow"
      ],
      "widths": [
        "50mm",
        "100mm"
      ],
      "description": "Freezer-grade adhesive and durable 1.3mm construction provide reliable floor markings in cold rooms and freezer warehouses, performing at temperatures as low as −29°C.",
      "gallery": [
        "tape-white-both.png",
        "tape-red-both.png",
        "tape-yellow-both.png",
        "Food-Processing-Line-Marking-VIC.jpg"
      ],
      "features": [
        "Designed for temperatures as low as −29°C",
        "1.3mm thick, up to seven times thicker than many standard floor tapes",
        "Freezer-grade adhesive withstands heavy industrial wheeled traffic",
        "Bevelled edges provide a smooth transition",
        "Peel-and-stick installation with no special equipment or production downtime",
        "Easy to remove with minimal residue; cut to any length",
        "Smooth, easy-to-clean surface",
        "Suitable for pharmaceutical and food processing environments",
        "2-year limited warranty"
      ],
      "limitations": [
        "Install at ambient temperatures between −29°C and +10°C",
        "Surface must be clean, dry, oil-free and free from contaminants",
        "Do not apply over paint, tape or lengthways over floor joints",
        "Heavy wheel spinning, pallet dragging and abrasion may reduce lifespan",
        "Warranty does not cover misuse or incorrect installation",
        "30m rolls; 50mm and 100mm widths"
      ],
      "applications": "Cold rooms · Freezer warehouses · Food processing · Chilled storage · Distribution centres · Walkways · Forklift lanes · Storage locations · Pick and pack areas",
      "sourceGallery": [
        "2019/07/tape-white-both.png",
        "2019/07/tape-red-both.png",
        "2019/07/tape-yellow-both.png",
        "2022/04/Food-Processing-Line-Marking-VIC.jpg"
      ]
    },
    {
      "slug": "lean-line-570",
      "group": "tape",
      "name": "Lean Line 570 Floor Marking Tape – 50mm x 30m Roll",
      "image": "Lean-Line-570-No-BG-Yellow.png",
      "price": "79.00",
      "colours": [
        "Yellow",
        "Diagonal Green/White",
        "Diagonal Orange/Black",
        "Green",
        "Red",
        "White",
        "Black",
        "Blue",
        "Orange",
        "Diagonal Black/White",
        "Diagonal Red/White",
        "Diagonal Black/Yellow"
      ],
      "widths": [
        "50mm × 30m"
      ],
      "description": "A fast, flexible floor tape for low-traffic indoor visual management. Define work areas, walkways, storage locations and equipment zones without the mess or downtime of painted lines.",
      "gallery": [
        "Lean-Line-570-No-BG-Yellow.png",
        "Lean-Line-570-No-BG-Yellow-Black.png",
        "Lean-Line-570-No-BG-Orange.png",
        "Lean-Line-570-No-BG-Black.png",
        "Lean-Line-570-No-BG-Red-.png",
        "Lean-Line-570-No-BG-Blue.png",
        "Lean-Line-570-No-BG-Green-.png",
        "Lean-Line-570-No-BG-Red-White.png",
        "Lean-Line-570-No-BG-White.png"
      ],
      "features": [
        "0.5mm thick with square-cut edges",
        "Quick peel-and-stick installation with no production downtime",
        "1-year warranty",
        "Suitable for pharmaceutical and food production environments without installation contamination",
        "Easy-to-clean surface and bright colours",
        "Easy to replace as layouts change"
      ],
      "limitations": [
        "For indoor applications above 10°C",
        "Apply to a clean, dry, oil-free surface",
        "Not recommended for rough, damaged or porous concrete",
        "Do not apply over paint, tape or lengthways over floor joints",
        "Heavy forklift turning and pallet dragging may reduce lifespan",
        "Warranty does not cover damage",
        "Cut to any length; 50mm × 30m rolls",
        "Confirm suitability for your site's traffic before ordering"
      ],
      "applications": "Walkways · Storage locations · Pallet bays · Equipment parking · Production lines · Workstations",
      "sourceGallery": [
        "2023/02/Lean-Line-570-No-BG-Yellow.png",
        "2023/02/Lean-Line-570-No-BG-Yellow-Black.png",
        "2023/02/Lean-Line-570-No-BG-Orange.png",
        "2023/02/Lean-Line-570-No-BG-Black.png",
        "2023/02/Lean-Line-570-No-BG-Red-.png",
        "2023/02/Lean-Line-570-No-BG-Blue.png",
        "2023/02/Lean-Line-570-No-BG-Green-.png",
        "2023/02/Lean-Line-570-No-BG-Red-White.png",
        "2023/02/Lean-Line-570-No-BG-White.png"
      ]
    },
    {
      "slug": "t-shape",
      "group": "shapes",
      "name": "MightyLine 5S T Shape",
      "image": "t-shape-yellow.png",
      "price": "8.50",
      "colours": [
        "Yellow",
        "Green",
        "Red",
        "White",
        "Black",
        "Blue",
        "Orange"
      ],
      "widths": [
        "50mm",
        "75mm"
      ],
      "description": "Durable T-shaped markers define adjoining pallet bays, storage locations and work areas without complete floor outlines. Maintain clear, consistent layouts across busy industrial workplaces.",
      "gallery": [
        "t-shape-yellow.png",
        "t-shape-green.png",
        "t-shape-orange.png",
        "t-shape-red.png",
        "t-shape-blue.png",
        "t-shape-black.png",
        "t-shape-white.png"
      ],
      "features": [
        "Heavy-duty construction withstands industrial wheeled traffic",
        "Creates multiple adjoining pallet or storage bays",
        "Quick peel-and-stick installation with no production downtime",
        "Highly visible, easy-to-clean surface",
        "Easy to replace or reposition as layouts change",
        "Supports Lean Manufacturing and 5S organisation"
      ],
      "limitations": [
        "For internal use only",
        "Apply to a clean, dry, oil-free surface, not over existing paint or tape",
        "Surface preparation is essential for maximum adhesion",
        "Wheel spinning, sharp turning and dragged equipment may cause damage",
        "Ideal for adjoining bays with a shared boundary point",
        "50mm and 75mm widths"
      ],
      "applications": "Pallet bays · Storage locations · Equipment parking · Workstations · Pick and pack areas · Production zones · Warehouses · Manufacturing · Lean and 5S workplaces",
      "sourceGallery": [
        "2020/06/t-shape-yellow.png",
        "2020/06/t-shape-green.png",
        "2020/06/t-shape-orange.png",
        "2020/06/t-shape-red.png",
        "2020/06/t-shape-blue.png",
        "2020/06/t-shape-black.png",
        "2020/06/t-shape-white.png"
      ]
    },
    {
      "slug": "keep-clear",
      "group": "signs",
      "name": "MightyLine Floor Sticker “Keep Clear Do Not Block”",
      "image": "Keep-Clear-Sticker.png",
      "price": "195.00",
      "colours": [
        "As shown"
      ],
      "widths": [
        "610mm wide"
      ],
      "description": "An industrial-strength floor sticker for medium traffic. Keep emergency exits, electrical switchboards, fire equipment and access areas clear with an immediate, easy-to-read reminder.",
      "gallery": [
        "Keep-Clear-Sticker.png"
      ],
      "features": [
        "Highly visible Keep Clear / Do Not Block message",
        "Quick peel-and-stick installation",
        "Durable laminated finish",
        "Reinforces safety procedures and reduces repeated verbal reminders",
        "Professional, easy-to-read design for indoor industrial environments"
      ],
      "limitations": [
        "For internal use only",
        "Not recommended for rough, damaged or uneven surfaces",
        "Excessive forklift traffic and dragged objects may reduce lifespan",
        "Apply to a clean, dry surface for maximum adhesion",
        "610mm wide"
      ],
      "applications": "Emergency exits · Fire extinguishers and hose reels · Electrical switchboards · First aid stations · Safety equipment · Access panels · Walkways",
      "sourceGallery": [
        "2026/04/Keep-Clear-Sticker.png"
      ]
    },
    {
      "slug": "lean-line-960",
      "group": "tape",
      "name": "Lean Line 960 Floor Marking Tape – 50mm x 30m Roll",
      "image": "Lean-Line-960-No-BG-Yellow.png",
      "price": "169.00",
      "colours": [
        "Yellow",
        "Diagonal Green/White",
        "Diagonal Orange/Black",
        "Green",
        "Red",
        "White",
        "Black",
        "Blue",
        "Orange",
        "Diagonal Black/White",
        "Diagonal Red/White",
        "Diagonal Black/Yellow"
      ],
      "widths": [
        "50mm × 30m"
      ],
      "description": "Durable, flexible floor tape for medium-traffic workplaces. Mark walkways, storage areas and workstations with no curing time, and update layouts as operations change.",
      "gallery": [
        "Lean-Line-960-No-BG-Yellow.png",
        "Lean-Line-960-No-BG-White.png",
        "Lean-Line-960-No-BG-Red-.png",
        "Lean-Line-960-No-BG-Blue.png",
        "Lean-Line-960-No-BG-Black.png",
        "Lean-Line-960-No-BG-Orange.png",
        "Lean-Line-960-No-BG-Green.png",
        "Lean-Line-960-No-BG-Black-White.png",
        "Lean-Line-960-No-BG-Black-Orange.png",
        "Lean-Line-570-No-BG-Yellow-Black.png",
        "Lean-Line-960-No-BG-Red-White.png",
        "Lean-Line-960-No-BG-Green-White.png"
      ],
      "features": [
        "0.9mm thick for medium-traffic applications",
        "Quick peel-and-stick installation with no production downtime",
        "Easy to remove or replace as layouts change",
        "2-year warranty",
        "Smooth, easy-to-clean surface",
        "Suitable for pharmaceutical and food production environments",
        "Square-cut edges"
      ],
      "limitations": [
        "For internal use above 10°C",
        "Apply to clean, dry, oil-free surfaces",
        "Do not apply over paint, tape or lengthways across floor joints",
        "Heavy forklift traffic and constant pallet dragging may reduce lifespan",
        "Warranty does not cover damage",
        "50mm × 30m rolls"
      ],
      "applications": "Walkways · Storage locations · Workstation boundaries · Equipment storage · Medium foot traffic and light wheeled traffic",
      "sourceGallery": [
        "2023/02/Lean-Line-960-No-BG-Yellow.png",
        "2023/02/Lean-Line-960-No-BG-White.png",
        "2023/02/Lean-Line-960-No-BG-Red-.png",
        "2023/02/Lean-Line-960-No-BG-Blue.png",
        "2023/02/Lean-Line-960-No-BG-Black.png",
        "2023/02/Lean-Line-960-No-BG-Orange.png",
        "2023/02/Lean-Line-960-No-BG-Green.png",
        "2023/02/Lean-Line-960-No-BG-Black-White.png",
        "2023/02/Lean-Line-960-No-BG-Black-Orange.png",
        "2023/02/Lean-Line-570-No-BG-Yellow-Black.png",
        "2023/02/Lean-Line-960-No-BG-Red-White.png",
        "2023/02/Lean-Line-960-No-BG-Green-White.png"
      ]
    },
    {
      "slug": "external-angle",
      "group": "external",
      "name": "Cotewell External 5S Angle Shape Floor Tape",
      "image": "Yellow-External-Tape-5S-Angle-e1788241377701.png",
      "price": "8.50",
      "colours": [
        "Yellow",
        "Green",
        "Red",
        "White",
        "Blue"
      ],
      "widths": [
        "50mm",
        "75mm"
      ],
      "description": "Weather-resistant corner markers identify pallet bays, storage locations and equipment zones outdoors. Create organised layouts that withstand UV exposure and the elements.",
      "gallery": [
        "Yellow-External-Tape-5S-Angle-e1788241377701.png",
        "Blue-External-Tape-5S-Angle.png",
        "Red-External-Tape-5S-Angle.png",
        "White-External-Tape-5S-Angle.png",
        "Green-External-Tape-5S-Angle.png"
      ],
      "features": [
        "Designed for outdoor applications; weather and UV resistant",
        "Clearly defines pallet bays and storage locations",
        "Faster to install than complete outlines, using less material",
        "Highly visible and easy to replace as layouts change"
      ],
      "limitations": [
        "Surface preparation is essential for adhesion and lifespan",
        "Heavy vehicle turning and dragged loads may reduce lifespan",
        "Combine with external tape, T-shapes, arrows and footprints",
        "50mm and 75mm widths; yellow, blue, green, red and white"
      ],
      "applications": "External pallet bays · Outdoor storage · Equipment parking · Industrial yards",
      "sourceGallery": [
        "2026/07/Yellow-External-Tape-5S-Angle-e1788241377701.png",
        "2026/07/Blue-External-Tape-5S-Angle.png",
        "2026/07/Red-External-Tape-5S-Angle.png",
        "2026/07/White-External-Tape-5S-Angle.png",
        "2026/07/Green-External-Tape-5S-Angle.png"
      ]
    },
    {
      "slug": "external-t",
      "group": "external",
      "name": "Cotewell External 5S T Shape Floor Tape",
      "image": "Yellow-External-Tape-T-Shape.png",
      "price": "8.50",
      "colours": [
        "Yellow",
        "Green",
        "Red",
        "White",
        "Blue"
      ],
      "widths": [
        "50mm",
        "75mm"
      ],
      "description": "Weather-resistant T-shapes separate adjoining pallet bays, storage locations and equipment zones outdoors. Create clear boundaries and improve storage efficiency.",
      "gallery": [
        "Yellow-External-Tape-T-Shape.png",
        "Red-External-Tape-T-Shape.png",
        "White-External-Tape-T-Shape.png",
        "Green-External-Tape-T-Shape.png",
        "Blue-External-Tape-T-Shape.png"
      ],
      "features": [
        "Designed for outdoor applications; weather and UV resistant",
        "Clearly separates pallet bays and storage locations",
        "Faster to install than complete floor outlines",
        "Highly visible and easy to replace"
      ],
      "limitations": [
        "Surface preparation is essential for adhesion and lifespan",
        "Heavy vehicle turning and dragged loads may reduce lifespan",
        "Combine with external tape, angle shapes, arrows and footprints",
        "50mm and 75mm widths; yellow, blue, green, red and white"
      ],
      "applications": "External pallet bays · Outdoor storage · Equipment parking · Industrial yards",
      "sourceGallery": [
        "2026/07/Yellow-External-Tape-T-Shape.png",
        "2026/07/Red-External-Tape-T-Shape.png",
        "2026/07/White-External-Tape-T-Shape.png",
        "2026/07/Green-External-Tape-T-Shape.png",
        "2026/07/Blue-External-Tape-T-Shape.png"
      ]
    },
    {
      "slug": "external-footprints",
      "group": "external",
      "name": "Cotewell External Tape Footprints (Pair)",
      "image": "Yellow-External-Tape-Footprints.png",
      "price": "15.00",
      "colours": [
        "Yellow",
        "Green",
        "Red",
        "White",
        "Blue"
      ],
      "widths": [
        "100mm wide (pair)"
      ],
      "description": "Weather- and UV-resistant footprints guide pedestrians along safe outdoor routes, helping separate people from vehicle traffic.",
      "gallery": [
        "Yellow-External-Tape-Footprints.png",
        "Green-External-Tape-Footprints.png",
        "Blue-External-Tape-Footprints.png",
        "Red-External-Tape-Footprints.png",
        "White-External-Tape-Footprints.png"
      ],
      "features": [
        "Designed for outdoor applications; weather and UV resistant",
        "Clearly identifies pedestrian walkways and safe routes",
        "Quick peel-and-stick installation",
        "Highly visible, easy to replace and improves site organisation"
      ],
      "limitations": [
        "Surface preparation is essential for adhesion and lifespan",
        "Continuous heavy vehicle traffic over footprints may reduce lifespan",
        "Suitable for industrial sites, warehouses and car parks",
        "Combine with external lines, arrows and symbols",
        "100mm wide; yellow, blue, green, red and white"
      ],
      "applications": "Pedestrian walkways · Loading dock access · Warehouse entrances · External industrial facilities · Visitor pathways",
      "sourceGallery": [
        "2026/07/Yellow-External-Tape-Footprints.png",
        "2026/07/Green-External-Tape-Footprints.png",
        "2026/07/Blue-External-Tape-Footprints.png",
        "2026/07/Red-External-Tape-Footprints.png",
        "2026/07/White-External-Tape-Footprints.png"
      ]
    },
    {
      "slug": "external-arrow",
      "group": "external",
      "name": "Cotewell External 5S Arrow Floor Tape",
      "image": "Yellow-External-Tape-Arrow.png",
      "price": "12.50",
      "colours": [
        "Yellow",
        "Green",
        "Red",
        "White",
        "Blue"
      ],
      "widths": [
        "240 × 90mm"
      ],
      "description": "Weather-resistant arrows direct pedestrians and vehicles outdoors. Create clear one-way systems and designated routes without the downtime of painted markings.",
      "gallery": [
        "Yellow-External-Tape-Arrow.png",
        "Blue-External-Tape-Arrow-scaled.png",
        "Green-External-Tape-Arrow-scaled.png",
        "Red-External-Tape-Arrow-scaled.png",
        "White-External-Tape-Arrow-scaled.png"
      ],
      "features": [
        "Designed for outdoor applications; weather and UV resistant",
        "Clearly directs pedestrians and vehicles",
        "Quick peel-and-stick installation",
        "Highly reflective for night works",
        "P5 slip rating and 3-year warranty",
        "Easy to replace as layouts change"
      ],
      "limitations": [
        "For external applications only",
        "Surface preparation is essential for adhesion and lifespan",
        "Continuous heavy vehicle turning may reduce lifespan",
        "Combine with external tape and symbols for complete traffic layouts",
        "240 × 90mm"
      ],
      "applications": "Pedestrian walkways · Vehicle routes · One-way systems · Distribution centres · External warehouse areas",
      "sourceGallery": [
        "2026/07/Yellow-External-Tape-Arrow.png",
        "2026/07/Blue-External-Tape-Arrow-scaled.png",
        "2026/07/Green-External-Tape-Arrow-scaled.png",
        "2026/07/Red-External-Tape-Arrow-scaled.png",
        "2026/07/White-External-Tape-Arrow-scaled.png"
      ]
    }
  ];

  var homeProducts = document.querySelector('[data-home-products]');
  if (homeProducts) {
    homeProducts.innerHTML = products.map(productCard).join('');
    document.querySelector('[data-range-prev]').addEventListener('click', function () {
      homeProducts.scrollBy({left: -homeProducts.clientWidth, behavior: 'smooth'});
    });
    document.querySelector('[data-range-next]').addEventListener('click', function () {
      homeProducts.scrollBy({left: homeProducts.clientWidth, behavior: 'smooth'});
    });
  }
  var productGrid = document.querySelector('[data-product-grid]');
  if (productGrid) {
    productGrid.innerHTML = products.map(productCard).join('');
    var filters = document.querySelectorAll('[data-filter]');
    filters.forEach(function (filter) {
      filter.addEventListener('click', function () {
        filters.forEach(function (button) { button.classList.remove('is-active'); });
        filter.classList.add('is-active');
        var selected = filter.dataset.filter;
        document.querySelectorAll('.product-card').forEach(function (card) {
          card.hidden = selected !== 'all' && card.dataset.group !== selected;
        });
      });
    });
  }

  function productCard(product) {
    return [
      '<article class="product-card" data-group="' + product.group + '">',
        '<a class="product-card__image" href="product.html#' + product.slug + '"><img src="assets/img/' + product.image + '" alt="' + product.name.replace(/“|”/g, '') + '" loading="lazy"></a>',
        '<div class="product-card__copy"><p class="mono">' + groupLabel(product.group) + '</p><h3>' + product.name + '</h3><p>' + product.description + '</p><strong class="catalogue-price">From $' + product.price + ' + GST</strong><a class="btn" href="product.html#' + product.slug + '">View Product</a></div>',
      '</article>'
    ].join('');
  }

  function groupLabel(group) {
    return { tape: 'Line marking tape', shapes: '5S shapes', signs: 'Floor signs', external: 'External range' }[group];
  }

  var productMount = document.querySelector('[data-product]');
  if (productMount) {
    renderProduct();
    window.addEventListener('hashchange', renderProduct);
  }

  function renderProduct() {
    var slug = location.hash.slice(1) || 'angle-shape';
    var selectedProduct = products.find(function (item) { return item.slug === slug; }) || products[0];
    document.title = selectedProduct.name + ' | Cotewell';
    productMount.innerHTML = productTemplate(selectedProduct);
    productMount.dataset.activeProduct = selectedProduct.name;
    productMount.dataset.activePrice = '$' + selectedProduct.price;
    productMount.querySelectorAll('.reveal').forEach(function (element) { element.classList.add('is-visible'); });
    initCarousels(productMount);
    initProductGallery(productMount, selectedProduct);
    refreshStickyCta();
  }

  function productTemplate(product) {
    var features = product.features;
    var limitations = product.limitations;
    var applications = product.applications;
    return [
      '<section class="product-hero"><div class="shell">',
        '<div class="breadcrumbs"><a href="index.html">Home</a><span>/</span><a href="line-marking-tape.html">Line Marking Tape</a><span>/</span><span>' + product.name + '</span></div>',
        '<div class="product-layout">',
          productGallery(product),
          '<div class="product-summary reveal">',
            '<p class="eyebrow">' + groupLabel(product.group) + '</p>',
            '<h1>' + product.name + '</h1>',
            '<p class="lede">' + product.description + '</p>',
            '<div class="price"><strong>$' + product.price + '</strong><span>+ GST</span></div>',
            '<p class="price-note">From the catalogue price shown. Pricing for other sizes is confirmed when ordering.</p>',
            '<div class="select-row">' + optionSelect('colour', 'Select Colour', product.colours) + optionSelect('size', 'Select Size / Width', product.widths) + '</div>',
            '<div class="purchase-row"><div class="field quantity-field"><label for="quantity">Quantity</label><input id="quantity" type="number" value="1" min="1" inputmode="numeric"></div><button class="btn btn--red btn--large" type="button" data-add-cart>Add to cart</button><a class="btn btn--large" href="samples.html">Request Free Samples</a></div>',
            '<p class="form-status" data-cart-status aria-live="polite"></p>',
          '</div>',
        '</div>',
      '</div></section>',
      '<section class="section" id="features"><div class="shell"><div class="section-head"><div><p class="eyebrow">Product details</p><h2>Built for the floor.</h2></div><p>Features, applications and installation limits.</p></div>',
        '<div class="product-layout"><div><h3>Product features</h3><ul class="tick-list">' + features.map(function (item) { return '<li>' + item + '</li>'; }).join('') + '</ul></div>',
        '<div><h3>Limitations &amp; notes</h3><table class="spec-table"><tbody>' + limitations.map(function (item, index) { return '<tr><th>0' + (index + 1) + '</th><td>' + item + '</td></tr>'; }).join('') + '</tbody></table></div></div>',
      '</div></section>',
      '<section class="section section--black" id="specs"><div class="shell"><div class="section-head"><div><p class="eyebrow">Applications</p><h2>Where it works.</h2></div><p>' + applications + '</p></div></div></section>',
      projectCarousel(product),
      tapeRelatedSection(product),
      '<section class="sample-band"><div class="shell sample-band__inner"><div><p class="eyebrow">Free samples</p><h2>Test it on your floor first.</h2><p>Check adhesion and wear before ordering a full pack.</p></div><div class="actions"><a class="btn btn--red btn--large" href="samples.html">Request Free Samples</a><a class="btn btn--dark btn--large" href="line-marking-tape.html">Back to Line Marking Tape</a></div></div></section>'
    ].join('');
  }

  function productGallery(product) {
    var photos = product.gallery || [product.image];
    return '<div class="product-gallery product-gallery--variants reveal">' +
      '<div class="product-gallery__stage"><img data-product-photo src="assets/img/' + photos[0] + '" alt="' + product.name.replace(/“|”/g, '') + '"></div>' +
      '<p class="product-gallery__caption" data-photo-caption aria-live="polite">' + photoLabel(photos[0]) + '</p>' +
      '<div class="product-gallery__thumbs" aria-label="Product photos">' + photos.map(function (photo, index) {
        return '<button type="button" data-product-thumbnail="' + index + '" aria-label="View ' + photoLabel(photo) + '" aria-pressed="' + (index === 0) + '"><img src="assets/img/' + photo + '" alt="' + photoLabel(photo) + '" loading="lazy"></button>';
      }).join('') + '</div></div>';
  }

  function photoLabel(photo) {
    var name = photo.toLowerCase();
    if (/striped|yellow-black/.test(name)) return 'Diagonal Black/Yellow';
    if (/red-white/.test(name)) return 'Diagonal Red/White';
    if (/black-white/.test(name)) return 'Diagonal Black/White';
    if (/black-orange/.test(name)) return 'Diagonal Orange/Black';
    if (/green-white/.test(name)) return 'Diagonal Green/White';
    if (/sticker/.test(name)) return 'Floor sign';
    if (/external-green-red/.test(name)) return 'Outdoor tape installation';
    var colour = name.match(/(?:^|-)(yellow|white|black|blue|green|red|orange|grey|gray|purple|brown)(?:-|\.)/);
    return colour ? colour[1].charAt(0).toUpperCase() + colour[1].slice(1) : 'Project photo';
  }

  function initProductGallery(scope, product) {
    var photos = product.gallery || [product.image];
    var buttons = scope.querySelectorAll('[data-product-thumbnail]');
    function show(index) {
      var main = scope.querySelector('[data-product-photo]');
      main.src = 'assets/img/' + photos[index];
      main.alt = product.name.replace(/“|”/g, '') + ' - ' + photoLabel(photos[index]);
      scope.querySelector('[data-photo-caption]').textContent = photoLabel(photos[index]);
      buttons.forEach(function (button, i) { button.setAttribute('aria-pressed', String(i === index)); });
    }
    buttons.forEach(function (button, index) { button.addEventListener('click', function () { show(index); }); });
    scope.querySelector('#colour').addEventListener('change', function (event) {
      var index = photos.findIndex(function (photo) { return photoLabel(photo).toLowerCase() === event.target.value.toLowerCase(); });
      if (index >= 0) show(index);
      else scope.querySelector('[data-photo-caption]').textContent = 'No separate photo supplied for ' + event.target.value + '. Browse the available product photos below.';
    });
  }

  function optionSelect(id, label, options) {
    return '<div class="field"><label for="' + id + '">' + label + '</label><select id="' + id + '">' + options.map(function (option) { return '<option>' + option + '</option>'; }).join('') + '</select></div>';
  }

  function tapeRelatedSection(product) {
    var related = products.filter(function (item) { return item.slug !== product.slug; }).slice(0, 3);
    return '<section class="section section--black" id="related-products"><div class="shell"><div class="section-head"><div><p class="eyebrow">Related products</p><h2>Complete the marking system.</h2></div><p>Tape, shapes and signs from the same range.</p></div><div class="product-grid projector-product-grid">' + related.map(productCard).join('') + '</div></div></section>';
  }

  function projectCarousel(product) {
    var galleries = {
      internal: [
        ['assets/media/applied-medical-brisbane-mighty-line-tape-april-2026-completed-2.jpg', 'Applied Medical, Brisbane'],
        ['assets/media/applied-medical-brisbane-mighty-line-tape-april-2026-completed-3.jpg', 'Applied Medical, Brisbane'],
        ['assets/media/applied-medical-brisbane-mighty-line-tape-april-2026-completed-6.jpg', 'Applied Medical, Brisbane'],
        ['assets/media/ive-melbourne-mighty-line-tape-april-2026-completed-1.jpg', 'IVE, Melbourne'],
        ['assets/media/ive-melbourne-mighty-line-tape-april-2026-completed-9.jpg', 'IVE, Melbourne'],
        ['assets/media/ive-melbourne-mighty-line-tape-april-2026-completed-14.jpeg', 'IVE, Melbourne']
      ],
      external: [
        ['assets/media/bcf-external-line-marking-completed.jpeg', 'BCF external marking'],
        ['assets/media/bcf-external-line-marking-completed-1.jpeg', 'BCF external marking'],
        ['assets/media/bcf-external-line-marking-completed-2.jpeg', 'BCF external marking'],
        ['assets/media/daimler-burpengary-workshop-internal-external-line-marking-paint-july-2026-completed.jpeg', 'Daimler, Burpengary'],
        ['assets/media/daimler-burpengary-workshop-internal-external-line-marking-paint-july-2026-completed-4.jpeg', 'Daimler, Burpengary']
      ]
    };
    var gallery = product.group === 'external' ? galleries.external : galleries.internal;
    return [
      '<section class="section project-gallery-section"><div class="shell">',
        '<div class="section-head"><div><p class="eyebrow">Related projects</p><h2>See it on site.</h2></div><p>Recent Cotewell installations using related floor marking systems.</p></div>',
        '<div class="carousel" data-carousel>',
          '<div class="carousel__viewport"><div class="carousel__track">',
            gallery.map(function (item, index) { return '<figure class="carousel__slide"><img src="' + item[0] + '" alt="' + item[1] + ' project photo" loading="lazy"><figcaption><span>' + item[1] + '</span><span>' + String(index + 1).padStart(2, '0') + ' / ' + String(gallery.length).padStart(2, '0') + '</span></figcaption></figure>'; }).join(''),
          '</div></div>',
          '<div class="carousel__controls"><button class="btn" type="button" data-carousel-prev aria-label="Previous project photo">← Previous</button><p class="mono" data-carousel-count>01 / ' + String(gallery.length).padStart(2, '0') + '</p><button class="btn" type="button" data-carousel-next aria-label="Next project photo">Next →</button></div>',
        '</div>',
      '</div></section>'
    ].join('');
  }

  function initCarousels(scope) {
    (scope || document).querySelectorAll('[data-carousel]').forEach(function (carousel) {
      var track = carousel.querySelector('.carousel__track');
      var slides = carousel.querySelectorAll('.carousel__slide');
      var count = carousel.querySelector('[data-carousel-count]');
      var index = 0;
      function update() {
        track.style.transform = 'translateX(-' + (index * 100) + '%)';
        count.textContent = String(index + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
      }
      carousel.querySelector('[data-carousel-prev]').addEventListener('click', function () {
        index = (index - 1 + slides.length) % slides.length;
        update();
      });
      carousel.querySelector('[data-carousel-next]').addEventListener('click', function () {
        index = (index + 1) % slides.length;
        update();
      });
    });
  }

  if (!productMount && !projectorMount) initCarousels(document);

  document.querySelectorAll('[data-case-studies]').forEach(function (deck) {
    var tabs = deck.querySelectorAll('[data-case-tab]');
    var panels = deck.querySelectorAll('[data-case-panel]');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var key = tab.dataset.caseTab;
        tabs.forEach(function (item) {
          var active = item === tab;
          item.classList.toggle('is-active', active);
          item.setAttribute('aria-selected', String(active));
        });
        panels.forEach(function (panel) {
          var active = panel.dataset.casePanel === key;
          panel.hidden = !active;
          panel.classList.toggle('is-active', active);
          if (!active) panel.querySelectorAll('video').forEach(function (video) { video.pause(); });
        });
      });
    });
  });

  var projectorMount = document.querySelector('[data-projector-product]');
  var projectorProducts = {
    'delta-fieldlas': {
      name: 'Delta FieldLAS', eyebrow: 'Industrial line marking projector', title: 'Delta FieldLAS<br><span class="red">Laser Line Marking</span><br>Projector', price: '$2,400.00',
      image: 'assets/media/delta-fieldlas-laser-line-marking-projector.png', alt: 'Delta FieldLAS laser line marking projector', brochure: 'assets/docs/brochures-delta-fieldlas-projector-brochure-2026.pdf',
      description: 'A high-performance industrial laser system that creates bright, adjustable floor lines without paint or tape.',
      specs: [['Protection', 'IP67'], ['Mounting', '360° adjustable'], ['Use', 'Laser line marking']],
      features: [['Latest diode technology', 'Bright, consistent line projection.'], ['Adjustable projection', 'Set line length and thickness for the site.'], ['IP67 enclosure', 'Built for dusty, dirty and wet areas.'], ['Quick installation', 'No floor curing time.'], ['Long-life source', 'Designed for industrial service.'], ['Repositionable', 'Update the line as layouts change.']],
      notes: ['Not suitable in full sunlight', 'Hard wiring by a qualified electrician', 'Technical data sheet available on request'],
      applications: 'Walkways · Forklift separation · Wet areas · Cold storage · High-risk work zones'
    },
    'signum-75w': {
      name: 'Signum 75W', eyebrow: 'Projected safety marking · 75W', title: 'Signum<br><span class="red">Projected Safety</span><br>Marking 75W', price: '$3,200.00',
      image: 'assets/media/signum-projected-safety-marking-75w.png', alt: 'Signum Projected Safety Marking 75W projector', brochure: 'assets/docs/brochures-signum-projected-safety-marking-brochure-2026.pdf',
      description: 'The brightest Signum model, projecting safety lines, warning signs and customised symbols that do not wear away.',
      specs: [['LED life', '50,000 hours'], ['Protection', 'IP65'], ['Warranty', '2 years']],
      features: [['Custom signs and symbols', 'Use a GOBO made for the site.'], ['High-output projection', 'Built for larger, brighter areas.'], ['Projects onto any surface', 'Nothing on the floor to wear away.'], ['50,000-hour LED', 'Long industrial service life.'], ['IP65 protection', 'Made for harsh environments.'], ['Easy to update', 'Change the projection as layouts move.']],
      notes: ['Not suitable in full sunlight', 'A GOBO is required', 'Hard wiring by a qualified electrician'],
      applications: 'Warehouses · Crossings · Loading areas · Warning zones · Dynamic hazards'
    },
    'signum-50w': {
      name: 'Signum 50W', eyebrow: 'Projected safety marking · 50W', title: 'Signum<br><span class="red">Projected Safety</span><br>Marking 50W', price: '$2,250.00',
      image: 'assets/media/signum-50w.png', alt: 'Signum Projected Safety Marking 50W projector', brochure: 'assets/docs/brochures-signum-projected-safety-marking-brochure-2026.pdf',
      description: 'Projected safety lines and warning signs for compact zones and lower mounting heights.',
      specs: [['LED life', '50,000 hours'], ['Protection', 'IP65'], ['Warranty', '2 years']],
      features: [['Custom signs and symbols', 'Use a GOBO made for the site.'], ['Compact 50W output', 'Suited to smaller projection areas.'], ['Projects onto any surface', 'No applied marking to chip or fade.'], ['50,000-hour LED', 'Long industrial service life.'], ['IP65 protection', 'Made for harsh environments.'], ['Easy to update', 'Move the projection with the layout.']],
      notes: ['Not suitable in full sunlight', 'A GOBO is required', 'Hard wiring by a qualified electrician'],
      applications: 'Work cells · Doorways · Crossings · Compact warning zones · Dynamic hazards'
    }
  };

  // Mirrored from the revised individual projector mockup.
  var reviewedProjectorCopy = {
  "delta-fieldlas": {
    "description": "The Delta FieldLAS is a high-performance industrial laser system that creates bright, highly visible floor lines without the ongoing maintenance of traditional paint or floor tape. Featuring the latest diode laser technology, it projects crisp, adjustable lines over long distances.",
    "descriptionSecondary": "Built for dusty, dirty or wet environments where typical floor markings quickly deteriorate. With an IP67-rated enclosure, 360° adjustable mounting and intelligent heating control, it is made to keep performing where the floor itself is the problem.",
    "features": [
      [
        "Latest diode laser technology",
        "Brighter, sharper and more consistent line projection."
      ],
      [
        "Adjustable projection",
        "Update the line length and thickness to suit changing site requirements."
      ],
      [
        "Long-lasting laser source",
        "A durable diode source designed for improved reliability."
      ],
      [
        "IP67-rated enclosure",
        "Built for dusty, dirty and wet industrial environments."
      ],
      [
        "Quick installation",
        "Minimal downtime during installation, with no curing time."
      ],
      [
        "360° adjustable mounting",
        "Reposition the projected line with precision as the layout evolves."
      ]
    ],
    "notes": [
      "Not suitable for applications in full sunlight",
      "Hard wiring must be completed by a qualified electrician",
      "Technical data sheet available on request"
    ],
    "applications": "Pedestrian walkways and forklift traffic separation · Dusty, dirty or wet environments · Cold storage and freezer facilities · High-risk industrial work areas",
    "featuresTitle": "A line that never<br>touches the floor.",
    "featuresIntro": "Nothing is applied to the concrete, so nothing wears, chips or fades. Every application is customised to suit the environment, so contact us before purchase to plan the projector, line position and installation."
  },
  "signum-75w": {
    "description": "The Italian-made Signum 75W is a smart alternative to traditional floor markings, projecting bright, highly visible safety lines and warning signs without the ongoing maintenance. It eliminates the need for constant remarking by displaying permanent visual guidance that will not wear away under forklift traffic, pallets or daily operations.",
    "descriptionSecondary": "It projects onto any surface and will not wear out, so rough, worn and dirty floors stop being the limiting factor. IP65 rated for harsh industrial environments, suitable for high and low temperature applications, and easy to reposition or update as layouts change.",
    "features": [
      [
        "Easy to reposition or update",
        "Move or update the projection when your site layout changes."
      ],
      [
        "Customised signs and symbols",
        "Choose safety content designed around your workplace requirements."
      ],
      [
        "Projects onto any surface",
        "Visible guidance that will not wear under daily operations."
      ],
      [
        "50,000-hour LED lifespan",
        "Long service life, with reduced output beyond the rated period."
      ],
      [
        "IP65 protection",
        "Designed for harsh industrial environments and temperature extremes."
      ],
      [
        "Two-year warranty",
        "Long-term support for the projector system."
      ]
    ],
    "notes": [
      "Not suitable for applications in full sunlight",
      "Hard wiring must be completed by a qualified electrician",
      "Every projection system is customised for the workplace",
      "Technical data sheet available on request"
    ],
    "applications": "Sites where layouts may change over time · Warehouses with heavy forklift traffic · Dusty, dirty or high-wear environments · High-risk areas with forklift and pedestrian traffic",
    "featuresTitle": "Bright on floors<br>that ruin markings.",
    "featuresIntro": "Projected markings stay visible regardless of floor cleanliness. We customise every projection system for the workplace layout and application, so contact us before purchase to plan the sign, mounting position and installation."
  },
  "signum-50w": {
    "description": "The Italian-made Signum 50W is a smart alternative to traditional floor markings, projecting bright, highly visible safety lines and warning signs without the ongoing maintenance. It eliminates the need for constant remarking by displaying permanent visual guidance that will not wear away under forklift traffic, pallets or daily operations.",
    "descriptionSecondary": "It projects onto any surface and will not wear out, so rough, worn and dirty floors stop being the limiting factor. IP65 rated for harsh industrial environments, suitable for high and low temperature applications, and easy to reposition or update as layouts change.",
    "features": [
      [
        "Easy to reposition or update",
        "Move or update the projection when your site layout changes."
      ],
      [
        "Customised signs and symbols",
        "Choose safety content designed around your workplace requirements."
      ],
      [
        "Projects onto any surface",
        "Visible guidance that will not wear under daily operations."
      ],
      [
        "50,000-hour LED lifespan",
        "Long service life, with reduced output beyond the rated period."
      ],
      [
        "IP65 protection",
        "Designed for harsh industrial environments and temperature extremes."
      ],
      [
        "Two-year warranty",
        "Long-term support for the projector system."
      ]
    ],
    "notes": [
      "Not suitable for applications in full sunlight",
      "Hard wiring must be completed by a qualified electrician",
      "Every projection system is customised for the workplace",
      "Technical data sheet available on request"
    ],
    "applications": "Sites where layouts may change over time · Warehouses with heavy forklift traffic · Dusty, dirty or high-wear environments · High-risk areas with forklift and pedestrian traffic",
    "featuresTitle": "Bright on floors<br>that ruin markings.",
    "featuresIntro": "Projected markings stay visible regardless of floor cleanliness. We customise every projection system for the workplace layout and application, so contact us before purchase to plan the sign, mounting position and installation."
  }
};
  Object.keys(reviewedProjectorCopy).forEach(function (key) {
    Object.assign(projectorProducts[key], reviewedProjectorCopy[key]);
  });

  var projectorPhotos = [
    ['assets/media/costco-signum-line-marking-projectors-installed-2.jpg', 'Costco projected warning'],
    ['assets/media/costco-signum-line-marking-projectors-installed-3.jpg', 'Costco projected marking'],
    ['assets/media/costco-signum-line-marking-projectors-installed.jpg', 'Costco projected marking'],
    ['assets/media/cleanaway-morningside-projectors-july-2026-whatsapp-image-2026-08-06-at-11-10-58-am.jpeg', 'Cleanaway, Morningside'],
    ['assets/media/cleanaway-morningside-projectors-july-2026-whatsapp-image-2026-08-06-at-11-10-59-am.jpeg', 'Cleanaway, Morningside']
  ];

  function projectorCarousel() {
    return [
      '<section class="section project-gallery-section" id="projects"><div class="shell"><div class="section-head"><div><p class="eyebrow">Related projects</p><h2>See it on<br>live sites.</h2></div><p>Recent projector installations in active facilities.</p></div>',
      '<div class="carousel" data-carousel><div class="carousel__viewport"><div class="carousel__track">',
      projectorPhotos.map(function (item, index) { return '<figure class="carousel__slide"><img src="' + item[0] + '" alt="' + item[1] + '" loading="lazy"><figcaption><span>' + item[1] + '</span><span>' + String(index + 1).padStart(2, '0') + ' / 05</span></figcaption></figure>'; }).join(''),
      '</div></div><div class="carousel__controls"><button class="btn" type="button" data-carousel-prev aria-label="Previous project photo">← Previous</button><p class="mono" data-carousel-count>01 / 05</p><button class="btn" type="button" data-carousel-next aria-label="Next project photo">Next →</button></div></div></div></section>'
    ].join('');
  }

  function projectorRelated(activeKey) {
    return Object.keys(projectorProducts).filter(function (key) { return key !== activeKey; }).map(function (key) {
      var item = projectorProducts[key];
      return '<article class="product-card"><a class="product-card__image" href="projector-product.html#' + key + '"><img src="' + item.image + '" alt="' + item.alt + '"></a><div class="product-card__copy"><p class="mono">Projector</p><h3>' + item.name + '</h3><p>' + item.description + '</p><a class="btn" href="projector-product.html#' + key + '">View Product</a></div></article>';
    }).join('');
  }

  function renderProjectorProduct() {
    if (!projectorMount) return;
    var key = location.hash.slice(1) || 'delta-fieldlas';
    var product = projectorProducts[key] || projectorProducts['delta-fieldlas'];
    document.title = product.name + ' | Cotewell';
    projectorMount.innerHTML = [
      '<section class="product-hero"><div class="shell"><div class="breadcrumbs"><a href="index.html">Home</a><span>/</span><a href="projectors.html">Projectors</a><span>/</span><span>' + product.name + '</span></div><div class="product-layout">',
      '<div class="product-gallery reveal"><img src="' + product.image + '" alt="' + product.alt + '"></div>',
      '<div class="product-summary reveal"><p class="eyebrow">' + product.eyebrow + '</p><h1>' + product.title + '</h1><p class="lede">' + product.description + '</p><p>' + product.descriptionSecondary + '</p><div class="spec-strip">' + product.specs.map(function (item) { return '<div><span>' + item[0] + '</span><strong>' + item[1] + '</strong></div>'; }).join('') + '</div><div class="price"><strong>' + product.price + '</strong><span>+ GST</span></div><div class="actions"><button class="btn btn--red btn--large" type="button" data-add-cart>Add to cart</button><a class="btn btn--large" href="quote.html">Book a Demonstration</a></div><p class="form-status" data-cart-status aria-live="polite"></p><a class="btn brochure-button" href="' + product.brochure + '" target="_blank" rel="noopener">Download Brochure</a></div>',
      '</div></div></section>',
      '<section class="section" id="features"><div class="shell"><div class="section-head"><div><p class="eyebrow">Features</p><h2>' + product.featuresTitle + '</h2></div><p>' + product.featuresIntro + '</p></div><div class="card-grid">' + product.features.map(function (item, index) { return '<article class="info-card"><p class="mono">0' + (index + 1) + '</p><h3>' + item[0] + '</h3><p>' + item[1] + '</p></article>'; }).join('') + '</div></div></section>',
      '<section class="section section--black" id="specs"><div class="shell"><div class="section-head"><div><p class="eyebrow">Installation</p><h2>The details<br>that matter.</h2></div><p>' + product.applications + '</p></div><table class="spec-table">' + product.notes.map(function (item, index) { return '<tr><th>0' + (index + 1) + '</th><td>' + item + '</td></tr>'; }).join('') + '</table></div></section>',
      '<section class="sample-band"><div class="shell sample-band__inner"><div><p class="eyebrow">Other line marking options</p><h2>Line marking tape and paint solutions.</h2><p>A projector is the right call where the floor itself is the problem. Where it is not, a laid or painted line is usually cheaper and faster. We supply and install both, so we will tell you which one your site actually needs.</p></div><a class="btn btn--red" href="line-marking.html">See our line marking solutions</a></div></section>',
      projectorCarousel(),
      '<section class="section section--black" id="related-products"><div class="shell"><div class="section-head"><div><p class="eyebrow">Related products</p><h2>Compare the range.</h2></div><p>See the other Cotewell projector options.</p></div><div class="product-grid projector-related-grid">' + projectorRelated(key) + '</div></div></section>',
      '<section class="sample-band"><div class="shell sample-band__inner"><div><p class="eyebrow">Free on-site demonstration</p><h2>See it on your floor first.</h2><p>We confirm the projector, mounting position and light conditions before you order.</p></div><div class="actions"><a class="btn btn--red btn--large" href="quote.html">Book a Demonstration</a><a class="btn btn--dark btn--large" href="tel:1300590505">Call 1300 590 505</a></div></div></section>'
    ].join('');
    projectorMount.dataset.activeProduct = product.name;
    projectorMount.dataset.activePrice = product.price;
    projectorMount.querySelectorAll('.reveal').forEach(function (element) { element.classList.add('is-visible'); });
    initCarousels(projectorMount);
    refreshStickyCta();
  }

  if (projectorMount) {
    renderProjectorProduct();
    window.addEventListener('hashchange', renderProjectorProduct);
  }

  function refreshStickyCta() {
    if (document.body.dataset.imported) return;
    var existing = document.querySelector('.sticky-cta');
    if (existing) existing.remove();
    var labels = {
      home: ['Free on-site assessment across QLD, NSW and VIC', 'Get a Quote', 'quote.html'],
      floor: ['Plan your floor coating', 'Request a Quote', 'quote.html'],
      line: ['Plan your line marking', 'Request a Quote', 'quote.html'],
      projectors: ['See projection on your floor', 'Book a Demonstration', 'quote.html'],
      tape: ['Test the tape on your floor', 'Request Free Samples', 'samples.html'],
      repair: ['Plan the repair', 'Request an Assessment', 'quote.html']
    };
    var productSource = productMount || projectorMount;
    var content;
    if (productSource && productSource.dataset.activeProduct) {
      content = '<div><span>' + productSource.dataset.activeProduct + '</span><strong>' + productSource.dataset.activePrice + ' + GST</strong></div><div class="sticky-cta__actions"><button class="btn btn--red" type="button" data-add-cart>Add to cart</button><a class="btn btn--dark" href="' + (productMount ? 'samples.html' : 'quote.html') + '">' + (productMount ? 'Request Free Samples' : 'Book a Demonstration') + '</a></div>';
    } else if (labels[page]) {
      content = '<div><span>' + labels[page][0] + '</span><strong>Talk to Cotewell</strong></div><a class="btn btn--red" href="' + labels[page][2] + '">' + labels[page][1] + '</a>';
    }
    if (!content) return;
    document.body.insertAdjacentHTML('beforeend', '<aside class="sticky-cta" aria-label="Quick action"><div class="shell sticky-cta__inner">' + content + '</div></aside>');
    updateStickyCta();
  }

  function updateStickyCta() {
    var bar = document.querySelector('.sticky-cta');
    if (bar) bar.classList.toggle('is-visible', window.scrollY > Math.min(560, window.innerHeight * .62));
  }

  if (!productMount && !projectorMount) refreshStickyCta();
  window.addEventListener('scroll', updateStickyCta, { passive: true });

  var cartCount = 0;
  document.addEventListener('click', function (event) {
    var addButton = event.target.closest('[data-add-cart]');
    if (!addButton) return;
    cartCount += 1;
    document.querySelectorAll('[data-cart-count]').forEach(function (count) { count.textContent = cartCount; });
    document.querySelectorAll('[data-cart-status]').forEach(function (status) { status.textContent = cartCount + (cartCount === 1 ? ' item' : ' items') + ' added. This is a prototype basket.'; });
    addButton.textContent = 'Added to cart';
    window.setTimeout(function () { addButton.textContent = 'Add to cart'; }, 1400);
  });

  var calculator = document.querySelector('[data-cost-calculator]');
  if (calculator) {
    var calculateCoating = function () {
      var area = Number(calculator.elements.area.value);
      var condition = Number(calculator.elements.condition.value || 0);
      var product = Number(calculator.elements.product.value || 0);
      var money = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
      calculator.querySelector('[data-calculator-area]').textContent = area.toLocaleString('en-AU');
      calculator.querySelector('[data-cost-output]').textContent = money.format(area * (20 + condition + product));
    };
    calculator.addEventListener('input', calculateCoating);
    calculator.addEventListener('change', calculateCoating);
    calculator.addEventListener('submit', function (event) { event.preventDefault(); });
    calculateCoating();
  }

  document.querySelectorAll('[data-sample-products]').forEach(function (picker) {
    var checkboxes = picker.querySelectorAll('input[type="checkbox"]');
    var count = picker.querySelector('[data-sample-count]');
    function updateSampleCount() {
      var selected = picker.querySelectorAll('input[type="checkbox"]:checked').length;
      count.textContent = selected ? selected + (selected === 1 ? ' product selected' : ' products selected') : 'None selected';
    }
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
        if (checkbox.checked && checkbox.value === 'Not sure, help me choose') {
          checkboxes.forEach(function (item) { if (item !== checkbox) item.checked = false; });
        } else if (checkbox.checked) {
          checkboxes.forEach(function (item) { if (item.value === 'Not sure, help me choose') item.checked = false; });
        }
        updateSampleCount();
      });
    });
    updateSampleCount();
  });

  document.querySelectorAll('[data-prototype-form]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var status = form.querySelector('[data-form-status]');
      var samplePicker = form.querySelector('[data-sample-products]');
      if (samplePicker && !samplePicker.querySelector('input[type="checkbox"]:checked')) {
        status.textContent = 'Select at least one tape product.';
        samplePicker.querySelector('input[type="checkbox"]').focus();
        return;
      }
      status.textContent = 'Thanks. This prototype has captured the form state without sending data.';
      form.querySelector('button[type="submit"]').textContent = 'Request received';
    });
  });

  document.querySelectorAll('[data-checklist-download]').forEach(function (button) {
    button.addEventListener('click', function () {
      var status = document.querySelector('[data-checklist-status]');
      if (status) status.textContent = 'Checklist download shown here in the production build.';
    });
  });

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character];
    });
  }

  function archiveCard(item, type) {
    if (type === 'article') {
      return '<article class="resource-card"><div class="resource-card__number" aria-hidden="true">' + String(item.index).padStart(2, '0') + '</div><div class="resource-card__copy"><p class="mono">' + escapeHtml(item.topic) + '</p><h3>' + escapeHtml(item.title) + '</h3><a class="btn" href="' + escapeHtml(item.url) + '" target="_blank" rel="noopener">Read Article</a></div></article>';
    }
    if (type === 'case') {
      return '<article class="resource-card resource-card--case"><div class="resource-card__media"><img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.client) + ' project" loading="lazy"></div><div class="resource-card__copy"><p class="mono">' + escapeHtml(item.client) + ' · ' + escapeHtml(item.topic) + '</p><h3>' + escapeHtml(item.title.replace(/^(CASE STUDY|Customer Story)\s*\|\s*/i, '')) + '</h3><p>' + escapeHtml(item.summary) + '</p><a class="btn btn--red" href="' + escapeHtml(item.url) + '" target="_blank" rel="noopener">Read Case Study</a></div></article>';
    }
    var posters = {
      'Floor coating': 'assets/figma/epoxy-flooring.jpg',
      'Line marking': 'assets/figma/line-marking.jpg',
      'Line marking tape': 'assets/media/applied-medical-brisbane-mighty-line-tape-april-2026-completed-2.jpg',
      'Projectors': 'assets/media/costco-signum-line-marking-projectors-installed-2.jpg',
      'Workplace': 'assets/figma/contact-floor.jpg'
    };
    return '<article class="resource-card resource-card--video"><video controls playsinline preload="metadata" poster="' + escapeHtml(posters[item.topic] || posters.Workplace) + '"><source src="' + escapeHtml(item.file) + '" type="video/mp4"></video><div class="resource-card__copy"><p class="mono">' + escapeHtml(item.topic) + ' · ' + escapeHtml(item.format) + '</p><h3>' + escapeHtml(item.title.replace(/\.mp4$/i, '')) + '</h3></div></article>';
  }

  function initResourceArchive(config) {
    var grid = document.querySelector(config.grid);
    var content = window.COTEWELL_CONTENT;
    if (!grid || !content) return;
    var items = content[config.collection].map(function (item, index) {
      var copy = Object.assign({}, item);
      copy.index = index + 1;
      return copy;
    });
    var section = grid.closest('.archive-section');
    var search = section.querySelector('[data-resource-search]');
    var count = section.querySelector('[data-resource-count]');
    var pagination = section.querySelector('[data-resource-pagination]');
    var topic = 'All';
    var format = 'All';
    var currentPage = 1;
    var pageSize = config.pageSize || 12;

    function filteredItems() {
      var query = search ? search.value.trim().toLowerCase() : '';
      return items.filter(function (item) {
        var matchesTopic = topic === 'All' || item.topic === topic;
        var matchesFormat = format === 'All' || item.format === format;
        var haystack = [item.title, item.topic, item.client, item.summary, item.format].filter(Boolean).join(' ').toLowerCase();
        return matchesTopic && matchesFormat && (!query || haystack.indexOf(query) !== -1);
      });
    }

    function renderPagination(totalPages) {
      if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
      }
      var buttons = '<button type="button" data-page="' + (currentPage - 1) + '"' + (currentPage === 1 ? ' disabled' : '') + ' aria-label="Previous page">←</button>';
      for (var pageNumber = 1; pageNumber <= totalPages; pageNumber += 1) {
        buttons += '<button type="button" data-page="' + pageNumber + '"' + (pageNumber === currentPage ? ' class="is-active" aria-current="page"' : '') + '>' + pageNumber + '</button>';
      }
      buttons += '<button type="button" data-page="' + (currentPage + 1) + '"' + (currentPage === totalPages ? ' disabled' : '') + ' aria-label="Next page">→</button>';
      pagination.innerHTML = buttons;
    }

    function render() {
      var filtered = filteredItems();
      var totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
      currentPage = Math.min(currentPage, totalPages);
      var visible = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);
      count.textContent = filtered.length + ' ' + (filtered.length === 1 ? config.singular : config.plural) + (filtered.length ? ' · Page ' + currentPage + ' of ' + totalPages : '');
      grid.innerHTML = visible.length ? visible.map(function (item) { return archiveCard(item, config.type); }).join('') : '<div class="archive-empty"><h3>No matches.</h3><p>Try a broader search or another filter.</p></div>';
      renderPagination(totalPages);
    }

    section.querySelectorAll('[data-resource-filter]').forEach(function (button) {
      button.addEventListener('click', function () {
        topic = button.dataset.resourceFilter;
        currentPage = 1;
        section.querySelectorAll('[data-resource-filter]').forEach(function (item) { item.classList.toggle('is-active', item === button); });
        render();
      });
    });
    section.querySelectorAll('[data-resource-format]').forEach(function (button) {
      button.addEventListener('click', function () {
        var active = button.classList.contains('is-active');
        format = active ? 'All' : button.dataset.resourceFormat;
        currentPage = 1;
        section.querySelectorAll('[data-resource-format]').forEach(function (item) { item.classList.toggle('is-active', !active && item === button); });
        render();
      });
    });
    if (search) search.addEventListener('input', function () { currentPage = 1; render(); });
    pagination.addEventListener('click', function (event) {
      var button = event.target.closest('[data-page]');
      if (!button || button.disabled) return;
      currentPage = Number(button.dataset.page);
      render();
      section.querySelector('.archive-count').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    render();
  }

  initResourceArchive({ grid: '[data-article-grid]', collection: 'articles', type: 'article', singular: 'article', plural: 'articles', pageSize: 12 });
  initResourceArchive({ grid: '[data-case-grid]', collection: 'cases', type: 'case', singular: 'case study', plural: 'case studies', pageSize: 8 });
  initResourceArchive({ grid: '[data-video-grid]', collection: 'videos', type: 'video', singular: 'video', plural: 'videos', pageSize: 9 });

  var observer = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08 }) : null;

  document.querySelectorAll('.reveal').forEach(function (element) {
    if (observer) observer.observe(element);
    else element.classList.add('is-visible');
  });
}());

