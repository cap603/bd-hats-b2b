export interface Product {
  id: string;
  name: string;
  desc: string;
  fullDesc: string;
  price: string;
  moq: number;
  img: string;
  images?: string[];
  badge?: "bestseller" | "trending" | "new";
  category?: string;
  specs: {
    material: string;
    style: string;
    logo: string;
    closure: string;
    panels: string;
    [key: string]: string;
  };
  customization?: {
    title: string;
    options: string[];
  };
  faqs?: {
    q: string;
    a: string;
  }[];
}

export const HATS: Product[] = [
  { 
    id: "two-tone-3d-embroidery-a-frame-cap", 
    name: "Two-Tone 3D Embroidery A-Frame Cap", 
    desc: "Structured 5-panel design with high-density 3D embroidery. Contrast visor and crown for a striking street aesthetic.",
    fullDesc: "This premium A-Frame cap represents the pinnacle of street fashion manufacturing. Utilizing high-density foam for the front panel, it provides a perfectly structured profile that never collapses. The contrast visor adds a bold visual pop, making it a favorite for streetwear brands globally.",
    price: "$3.50 - $7.00",
    moq: 200,
    img: "/images/products/two-tone-3d-embroidery-a-frame-cap.webp",
    category: "Baseball Caps",
    specs: {
      material: "Premium Cotton Twill",
      style: "A-Frame Structured",
      logo: "3D Puff Embroidery (Front)",
      closure: "Plastic Snapback / Brass Buckle",
      panels: "5-Panel"
    },
    customization: {
      title: "Our Customization Capabilities",
      options: [
        "Professional embroidery digitizing included",
        "Multiple Embroidery Types (3D, Flat, Chenille)",
        "Custom Internal Seam Tape & Sweatband Labels",
        "Wide Range of Fabric Colors in Stock"
      ]
    },
    faqs: [
      { q: "What's the lead time for custom samples?", a: "Sample production typically takes 7 business days." },
      { q: "Can I customize the inner labels?", a: "Yes, we offer woven labels, printed care labels, and custom hang tags for all bulk orders." }
    ]
  },
  { 
    id: "custom-3d-embroidered-5-panel-gorras", 
    name: "Custom 3D Embroidered 5 Panel Gorras", 
    desc: "Top performing factory-direct 5-panel cap featuring high-definition 3D embroidered logos. Professional sports quality.",
    fullDesc: "Our most viewed product on Alibaba.com. This 5-panel cap is built with premium 108*56 heavy cotton twill, designed specifically for brands requiring intricate 3D puff embroidery. The front panel provides a large canvas for bold branding without seam interference.",
    price: "$3.50 - $7.00",
    moq: 200,
    img: "/images/products/custom-3d-embroidered-5-panel-gorras.webp",
    badge: "bestseller",
    category: "Baseball Caps",
    specs: {
      material: "100% Cotton Twill (108*56)",
      style: "Structured 5-Panel",
      logo: "Custom 3D / Flat Embroidery",
      closure: "Adjustable Snapback / Buckle",
      panels: "5-Panel"
    },
    customization: {
      title: "Full OEM/ODM Support",
      options: [
        "Any Color from Pantone TPX Chart",
        "High-Height 3D Embroidery Technology",
        "Custom Logo Printing on Internal Sweatband",
        "Bespoke Packaging & Hangtags"
      ]
    },
    faqs: [
      { q: "Do you have stock colors?", a: "Yes, we maintain over 50 colors of cotton twill in stock for fast turnaround." },
      { q: "Is the price negotiable for large volumes?", a: "Absolutely. For orders over 1,000 units, we offer significant volume discounts." }
    ]
  },
  { 
    id: "vintage-acid-wash-6-panel-dad-hat", 
    name: "Vintage Acid Wash 6 Panel Dad Hat", 
    desc: "Premium vintage aesthetic with heavy acid washing and antique metal hardware. Timeless style for lifestyle brands.",
    fullDesc: "The #2 best-seller in our Alibaba store. This cap undergoes a rigorous washing and treatment process to achieve its unique distressed look. Ideal for brands looking for a high-end vintage or streetwear vibe. Features a soft, unstructured crown for the ultimate 'Dad Hat' fit.",
    price: "$3.50 - $7.00",
    moq: 200,
    img: "/images/products/vintage-acid-wash-6-panel-dad-hat.webp",
    badge: "trending",
    category: "Vintage Series",
    specs: {
      material: "Heavy Acid-Washed Cotton",
      style: "Unstructured Low-Profile",
      logo: "Vintage Flat Embroidery / Patch",
      closure: "Antique Brass Slide Buckle",
      panels: "6-Panel"
    },
    customization: {
      title: "Vintage Specialization",
      options: [
        "Custom Distressing & Fraying Levels",
        "Antique Metal Finishes (Brass, Nickel, Silver)",
        "Leather Patch Integration",
        "Washed-look Embroidery Thread"
      ]
    },
    faqs: [
      { q: "Does the washing affect the logo?", a: "We typically embroider after the wash for crisp detail, or before for a more weathered look depending on your brand preference." }
    ]
  },
  { 
    id: "outdoor-performance-5-panel-cap", 
    name: "Outdoor Performance 5 Panel Cap", 
    desc: "Lightweight, breathable, and adjustable. Designed for active outdoor lifestyles and professional sportswear brands.",
    fullDesc: "Engineered for high performance. This cap uses lightweight cotton-nylon blends for superior moisture management. The 5-panel construction ensures a sleek, streamlined look while providing maximum comfort during physical activity.",
    price: "$3.50 - $7.00",
    moq: 200,
    img: "/images/products/outdoor-performance-5-panel-cap.webp",
    category: "Sports & Active",
    specs: {
      material: "Breathable Tech Cotton",
      style: "Active Curve Brim",
      logo: "Reflective / Flat Embroidery",
      closure: "Elastic / Toggle System",
      panels: "5-Panel"
    },
    customization: {
      title: "Performance Features",
      options: [
        "Moisture-wicking Sweatband Technology",
        "UPF 50+ Sun Protection Fabric",
        "Reflective Printing for Visibility",
        "Laser-cut Ventilation Eyelets"
      ]
    }
  },
  { 
    id: "structured-multi-color-baseball-cap", 
    name: "Structured Multi-Color Baseball Cap", 
    desc: "Classic high-profile structured cap available in over 30 vibrant colors. The workhorse of promotional and retail hat programs.",
    fullDesc: "A high-stability cap that maintains its shape. Built with heavy-duty buckram front panels, this cap is the industry standard for durability and classic fit. Perfect for corporate programs or brands requiring a consistent, high-impact retail presence.",
    price: "$3.50 - $7.00",
    moq: 200,
    img: "/images/products/structured-multi-color-baseball-cap.webp",
    category: "Baseball Caps",
    specs: {
      material: "Heavy Duty Cotton Twill",
      style: "Structured High-Profile",
      logo: "3D Puff / Flat / Patch",
      closure: "Plastic Snapback",
      panels: "6-Panel"
    }
  },
  { 
    id: "ladies-plain-blank-cotton-sports-cap", 
    name: "Ladies Plain Blank Cotton Sports Cap", 
    desc: "Specifically tailored profile for a feminine fit. Soft, breathable cotton for comfort and style.",
    fullDesc: "Designed with a smaller circumference and slightly shorter brim to provide a perfect fit for women's head shapes. This cap is a top choice for athleisure and boutique female fashion brands.",
    price: "$3.50 - $7.00",
    moq: 200,
    img: "/images/products/ladies-plain-blank-cotton-sports-cap.webp",
    category: "Baseball Caps",
    specs: {
      material: "Fine Cotton Twill",
      style: "Feminine Profile Curve Brim",
      logo: "Small-detail Embroidery",
      closure: "Fabric Strap with Metal Slide",
      panels: "6-Panel"
    }
  },
  { 
    id: "personalised-two-tone-a-frame-cap", 
    name: "Personalised Two-Tone A-Frame Cap", 
    desc: "High-impact two-tone contrast styling. A-frame construction for a bold, stand-out brand presence.",
    fullDesc: "Contrast visor and panels for maximum visual appeal. The A-frame crown provides a unique profile that's highly popular in the Australian and US streetwear markets. 100% customizable from colors to stitching thread.",
    price: "$3.50 - $7.00",
    moq: 200,
    img: "/images/products/personalised-two-tone-a-frame-cap.webp",
    category: "Baseball Caps",
    specs: {
      material: "Premium Cotton Canvas",
      style: "Two-Tone A-Frame",
      logo: "Custom 3D / Flat / Applique",
      closure: "Snapback",
      panels: "5-Panel"
    }
  },
  { 
    id: "breathable-custom-embroidered-6-panel", 
    name: "Breathable Custom Embroidered 6 Panel", 
    desc: "Engineered for ventilation. A professional sports-grade 6-panel cap with high stitch-count embroidery.",
    fullDesc: "This cap features reinforced ventilation eyelets and a lightweight mesh-lined crown. Designed for heavy use in sports and outdoor events, it maintains a crisp, professional look while keeping the wearer cool.",
    price: "$3.50 - $7.00",
    moq: 200,
    img: "/images/products/breathable-custom-embroidered-6-panel.webp",
    category: "Baseball Caps",
    specs: {
      material: "Breathable Cotton Mix",
      style: "Structured Sports Profile",
      logo: "High-Density Embroidery",
      closure: "Metal Buckle",
      panels: "6-Panel"
    }
  },
  {
    id: "custom-embroidery-knitted-beanie",
    name: "Custom Embroidery Knitted Beanie",
    desc: "Warm winter beanie knitted from 100% acrylic, finished with your embroidered or 3D puff logo. Unisex 56-58cm fit, 61 stock colours for bulk programs.",
    fullDesc: "A wholesale winter beanie built for logo programs. The acrylic rib knit holds its structure through repeated wear, and the front accepts flat embroidery, 3D puff or a woven patch. Unisex 56-58cm fit, 61 stock colours with custom yarn dyeing available on request. Samples dispatch from our Baoding factory in 3-5 working days.",
    price: "Contact for factory pricing",
    moq: 200,
    img: "/images/products/custom-embroidery-knitted-beanie.webp",
    badge: "new",
    category: "Beanies",
    specs: {
      material: "100% Acrylic",
      style: "Cuffed Knitted Beanie",
      logo: "Flat Embroidery / 3D Puff / Woven Patch",
      closure: "Stretch fit (no closure)",
      panels: "Knitted (seamless)"
    },
    customization: {
      title: "Our Customization Capabilities",
      options: [
        "Flat embroidery, 3D puff or chenille on the front panel",
        "Woven patch and leather label options",
        "Custom woven or printed inner labels",
        "61 stock colours, custom yarn dyeing on request"
      ]
    },
    faqs: [
      { q: "What is the MOQ for custom beanies?", a: "Our standard MOQ is 200 pieces per style and colour, in line with our other headwear lines." },
      { q: "How long do beanie samples take?", a: "Sample production runs 3-5 working days. Bulk lead time is confirmed with your quotation." }
    ]
  },
  {
    id: "retro-washed-knitted-beanie",
    name: "Retro Washed Knitted Beanie",
    desc: "Vintage washed-finish beanie knitted from core yarn. Soft handfeel with a faded retro tone, made for lifestyle and streetwear ranges.",
    fullDesc: "A retro-toned knitted beanie produced from core yarn and finished with a wash treatment that softens the handfeel and gives each unit a faded colour. Built for lifestyle, streetwear and winter accessory ranges where a vintage look matters. Unisex 56-58cm fit. Decoration is applied at the factory, so graphics and labels arrive ready for retail.",
    price: "Contact for factory pricing",
    moq: 200,
    img: "/images/products/retro-washed-knitted-beanie.webp",
    badge: "new",
    category: "Beanies",
    specs: {
      material: "Core Yarn (washed finish)",
      style: "Retro Washed Knitted Beanie",
      logo: "Digital Print / Woven Patch",
      closure: "Stretch fit (no closure)",
      panels: "Knitted (seamless)"
    },
    customization: {
      title: "Our Customization Capabilities",
      options: [
        "Retro wash treatment for a faded vintage tone",
        "Digital print and woven patch decoration",
        "Custom woven or printed inner labels",
        "Colour matching to your seasonal palette"
      ]
    },
    faqs: [
      { q: "What is the MOQ for the retro washed beanie?", a: "Our standard MOQ is 200 pieces per style and colour, consistent with our other headwear lines." },
      { q: "Can the wash intensity be controlled?", a: "Yes — tell us the vintage level you want and we will produce a sample for approval before bulk." }
    ]
  },
  {
    id: "custom-foam-front-trucker-hat",
    name: "Custom Foam Front 5 Panel Trucker Hat",
    desc: "Foam-front 5-panel trucker with a breathable mesh back and rope trim. Front, brim and side panels all accept your logo.",
    fullDesc: "A foam-front 5-panel trucker built for summer and outdoor programmes. The foam front holds its shape and takes 3D puff or flat embroidery, silk screen and heat-transfer printing without collapsing, while the mesh back keeps the cap light and breathable. Logo positions include the front panel, brim, side panels and back. Unisex 56-58cm head circumference. Custom design files are prepared in 3 days and a physical sample in 7 days.",
    price: "Contact for factory pricing",
    moq: 200,
    img: "/images/products/custom-foam-front-trucker-hat.webp",
    images: [
      "/images/products/custom-foam-front-trucker-hat.webp",
      "/images/products/custom-foam-front-trucker-hat-2.webp",
      "/images/products/custom-foam-front-trucker-hat-3.webp",
      "/images/products/custom-foam-front-trucker-hat-4.webp"
    ],
    badge: "new",
    category: "Trucker Hats",
    specs: {
      material: "Polyester Mesh Back & Foam Front",
      style: "Structured 5-Panel Trucker",
      logo: "3D Puff / Flat Embroidery, Heat Transfer",
      closure: "Adjustable — confirmed on your quotation",
      panels: "5-Panel",
      size: "56-58cm · Unisex"
    },
    customization: {
      title: "Our Customization Capabilities",
      options: [
        "3D puff embroidery, flat embroidery, silk screen and heat-transfer printing",
        "Logo placement on brim, front panel, side panels or back",
        "Care labels available from 500 pcs",
        "Custom design files in 3 days, physical sample in 7 days"
      ]
    },
    faqs: [
      { q: "What decoration works best on a foam front?", a: "The foam front panel carries heavy 3D puff embroidery without collapsing, and also accepts flat embroidery, silk screen and heat-transfer printing. Send your artwork and we will recommend the finishing that suits it." },
      { q: "How long do trucker hat samples take?", a: "Custom design files are prepared in 3 days and a physical sample takes 7 days. Bulk lead time is confirmed with your quotation." }
    ]
  },
  {
    id: "vintage-flat-brim-snapback-cap",
    name: "Vintage Flat Brim Snapback Cap",
    desc: "6-panel flat-brim snapback in polyester with an adjustable buckle closure. Heat-transfer print or embroidery across 14 stock colours.",
    fullDesc: "A 6-panel flat-brim snapback for streetwear, hip-hop and casual ranges. The polyester shell keeps the flat brim crisp, and the adjustable buckle closure fits a 56-60cm head. Heat-transfer printing suits full-colour graphics, while flat embroidery gives a raised logo; artwork can be placed on the front panel, brim, side panels and back. 14 stock colours are available for sampling and bulk. Custom design files are prepared in 3 days and a physical sample in 7 days.",
    price: "Contact for factory pricing",
    moq: 200,
    img: "/images/products/vintage-flat-brim-snapback-cap.webp",
    images: [
      "/images/products/vintage-flat-brim-snapback-cap.webp",
      "/images/products/vintage-flat-brim-snapback-cap-2.webp",
      "/images/products/vintage-flat-brim-snapback-cap-3.webp",
      "/images/products/vintage-flat-brim-snapback-cap-4.webp"
    ],
    badge: "new",
    category: "Snapback Caps",
    specs: {
      material: "Polyester",
      style: "6-Panel Flat Brim Snapback",
      logo: "Heat Transfer Print / Flat Embroidery",
      closure: "Adjustable snapback buckle",
      panels: "6-Panel",
      size: "56-60cm · Unisex",
      colour: "14 stock colours"
    },
    customization: {
      title: "Our Customization Capabilities",
      options: [
        "Heat-transfer printing for full-colour graphics",
        "Flat embroidery for raised logos",
        "Logo placement on brim, front panel, side panels or back",
        "14 stock colours for sampling and bulk"
      ]
    },
    faqs: [
      { q: "Is the closure adjustable?", a: "Yes. This snapback uses an adjustable snapback buckle and fits a 56-60cm head circumference." },
      { q: "How many stock colours can I choose from?", a: "14 stock colours are available for both sampling and bulk orders. Tell us your target colours and we will confirm availability with your quotation." }
    ]
  },
  {
    id: "nylon-large-brim-bucket-hat",
    name: "Nylon Large Brim Bucket Hat",
    desc: "Waterproof nylon bucket hat with an extra-large brim for sun and rain. Adjustable 56-60cm fit, print or embroidery for brand graphics.",
    fullDesc: "A nylon bucket hat designed for hiking, travel and outdoor programmes. The large brim shades the face and neck, and the nylon shell is waterproof and sun-protective. Head circumference options cover 56-58cm and 58-60cm plus an adjustable fit. Brand graphics can be applied by heat-transfer, digital or silk screen printing, with embroidery available on request. 7 stock colours are available for sampling and bulk. Custom design files are prepared in 3 days and a physical sample in 7 days.",
    price: "Contact for factory pricing",
    moq: 200,
    img: "/images/products/nylon-large-brim-bucket-hat.webp",
    images: [
      "/images/products/nylon-large-brim-bucket-hat.webp",
      "/images/products/nylon-large-brim-bucket-hat-2.webp",
      "/images/products/nylon-large-brim-bucket-hat-3.webp",
      "/images/products/nylon-large-brim-bucket-hat-4.webp"
    ],
    badge: "new",
    category: "Bucket Hats",
    specs: {
      material: "Nylon (waterproof)",
      style: "Large Brim Bucket / Fisherman",
      logo: "Heat Transfer / Digital / Silk Screen Print",
      closure: "No closure — pull-on fit",
      panels: "Brimmed crown",
      size: "56-60cm · Adjustable",
      feature: "Sun protection · Waterproof",
      colour: "7 stock colours"
    },
    customization: {
      title: "Our Customization Capabilities",
      options: [
        "Heat-transfer, digital and silk screen printing",
        "Embroidery available on request",
        "Logo placement on brim, front panel, side panels or back",
        "7 stock colours for sampling and bulk"
      ]
    },
    faqs: [
      { q: "Is the nylon bucket hat waterproof?", a: "Yes. The nylon shell is waterproof and sun-protective, and the large brim shades the face and neck for hiking and travel use." },
      { q: "What head sizes are available?", a: "Head circumference options cover 56-58cm and 58-60cm plus an adjustable fit. Confirm your target market sizes with your quotation." }
    ]
  },
  {
    id: "two-tone-structured-5-panel-streetwear-cap",
    name: "Two-Tone Structured 5 Panel Streetwear Cap",
    desc: "Structured high-profile 5-panel in 100% cotton, with two-tone panelling and a 3D embroidered logo.",
    fullDesc: "A structured high-profile 5-panel in 100% cotton, built for streetwear drops that need a raised crown and a bold front graphic. The two-tone panelling separates the crown from the visor, and the seamless front panel takes 3D embroidery, silk screen or heat-transfer artwork without distortion. Adjustable buckle closure, 56-58cm head circumference. Logo positions include the front panel, brim, side panels and back.",
    price: "Contact for factory pricing",
    moq: 200,
    img: "/images/products/two-tone-structured-5-panel-streetwear-cap.webp",
    images: [
      "/images/products/two-tone-structured-5-panel-streetwear-cap.webp",
      "/images/products/two-tone-structured-5-panel-streetwear-cap-2.webp",
      "/images/products/two-tone-structured-5-panel-streetwear-cap-3.webp",
      "/images/products/two-tone-structured-5-panel-streetwear-cap-4.webp"
    ],
    badge: "new",
    category: "Baseball Caps",
    specs: {
      material: "100% Cotton",
      style: "Structured High-Profile 5-Panel",
      logo: "3D Embroidery / Heat Transfer",
      closure: "Adjustable buckle",
      panels: "5-Panel",
      size: "56-58cm · Adjustable"
    },
    customization: {
      title: "Our Customization Capabilities",
      options: [
        "3D embroidery, silk screen printing and heat-transfer printing",
        "Two-tone panelling to your colour combination",
        "Logo placement on front panel, brim, side panels or back",
        "Care labels available from 500 pcs"
      ]
    },
    faqs: [
      { q: "Can the two-tone colours be changed?", a: "Yes. The crown and visor are specified separately, so tell us your colour pairing and we will match it to your Pantone reference on the sample." },
      { q: "How tall is the crown?", a: "This is a high-profile structured build with a stiffened front panel, so the crown sits higher than a low-profile dad hat. We confirm the exact height on the sample." }
    ]
  },
  {
    id: "cotton-front-5-panel-mesh-trucker-cap",
    name: "Cotton Front 5 Panel Mesh Trucker Cap",
    desc: "Combed cotton front with a breathable mesh back — a seamless panel for 3D embroidery.",
    fullDesc: "A 5-panel trucker with a 100% high-density combed cotton front and visor, paired with a reinforced mesh back for ventilation. The seamless front panel gives a flat, wide canvas that takes 3D embroidery, silk screen or heat-transfer logos without distortion, and a stiffening process keeps the crown from collapsing after shipping. Adjustable plastic snapback closure for a one-size-fits-most fit.",
    price: "Contact for factory pricing",
    moq: 200,
    img: "/images/products/cotton-front-5-panel-mesh-trucker-cap.webp",
    images: [
      "/images/products/cotton-front-5-panel-mesh-trucker-cap.webp",
      "/images/products/cotton-front-5-panel-mesh-trucker-cap-2.webp",
      "/images/products/cotton-front-5-panel-mesh-trucker-cap-3.webp",
      "/images/products/cotton-front-5-panel-mesh-trucker-cap-4.webp"
    ],
    badge: "new",
    category: "Trucker Hats",
    specs: {
      material: "100% Combed Cotton (Mesh Back)",
      style: "Structured 5-Panel Trucker",
      logo: "3D Embroidery / Silk Screen / Heat Transfer",
      closure: "Adjustable plastic snapback",
      panels: "5-Panel",
      size: "56-58cm · One size"
    },
    customization: {
      title: "Our Customization Capabilities",
      options: [
        "3D embroidery, silk screen printing and heat-transfer printing",
        "Fabric colours matched to your Pantone reference",
        "Care label, hang tag and main label options from 500 pcs",
        "Full OEM/ODM service from fabric to packaging"
      ]
    },
    faqs: [
      { q: "Is the front panel cotton or polyester?", a: "The front panels and visor are 100% high-density combed cotton; only the back is mesh. That keeps a cotton handfeel where the logo sits while the back stays breathable." },
      { q: "Will the crown lose its shape in shipping?", a: "The front panels are stiffened during production so the cap holds its profile through long-distance shipping and repeated wear." }
    ]
  },
  {
    id: "silk-lined-pompom-knitted-beanie",
    name: "Silk Lined Pompom Knitted Beanie",
    desc: "Cuffed acrylic beanie with a satin lining and pompom, finished with your embroidered logo.",
    fullDesc: "A cuffed knitted beanie in 100% acrylic with a satin lining that reduces friction and itch against the forehead, plus a pompom topper. The front takes flat embroidery, 3D puff or a printed patch, and colours can be dyed to your seasonal palette. Unisex 56-58cm fit. Samples run 3-5 working days; ODM and OEM service available.",
    price: "Contact for factory pricing",
    moq: 200,
    img: "/images/products/silk-lined-pompom-knitted-beanie.webp",
    images: [
      "/images/products/silk-lined-pompom-knitted-beanie.webp",
      "/images/products/silk-lined-pompom-knitted-beanie-2.webp",
      "/images/products/silk-lined-pompom-knitted-beanie-3.webp",
      "/images/products/silk-lined-pompom-knitted-beanie-4.webp"
    ],
    badge: "new",
    category: "Beanies",
    specs: {
      material: "100% Acrylic · Satin Lining",
      style: "Cuffed Knit Beanie with Pompom",
      logo: "Embroidery / Digital Print",
      closure: "Stretch fit (no closure)",
      panels: "Knitted (seamless)",
      size: "56-58cm · Unisex",
      colour: "Custom colours"
    },
    customization: {
      title: "Our Customization Capabilities",
      options: [
        "Flat embroidery, 3D puff or printed patch on the front",
        "Satin lining in a matching or contrast colour",
        "Custom yarn dyeing to your seasonal palette",
        "ODM and OEM service"
      ]
    },
    faqs: [
      { q: "Why line a knitted beanie?", a: "The satin lining sits against the forehead and reduces the friction and itch that plain acrylic can cause, so the beanie stays comfortable on longer winter wear." },
      { q: "How long do beanie samples take?", a: "Sample production runs 3-5 working days. Bulk lead time is confirmed with your quotation." }
    ]
  },
  {
    id: "heavyweight-cotton-a-frame-5-panel-cap",
    name: "Heavyweight Cotton A-Frame 5 Panel Cap",
    desc: "A-frame 5-panel in heavyweight 100% cotton, with a clean front panel for custom 3D logo work.",
    fullDesc: "A heavyweight 100% cotton A-frame 5-panel with a clean, uninterrupted front panel. A-frame construction gives a distinctive crown profile that stays crisp because the fabric weight holds it, and the front takes 3D embroidery, heat-transfer or silk screen artwork. Adjustable buckle closure, 56-58cm head circumference, unisex.",
    price: "Contact for factory pricing",
    moq: 200,
    img: "/images/products/heavyweight-cotton-a-frame-5-panel-cap.webp",
    images: [
      "/images/products/heavyweight-cotton-a-frame-5-panel-cap.webp",
      "/images/products/heavyweight-cotton-a-frame-5-panel-cap-2.webp",
      "/images/products/heavyweight-cotton-a-frame-5-panel-cap-3.webp",
      "/images/products/heavyweight-cotton-a-frame-5-panel-cap-4.webp"
    ],
    badge: "new",
    category: "Baseball Caps",
    specs: {
      material: "Heavyweight 100% Cotton",
      style: "A-Frame 5-Panel Structured",
      logo: "3D Embroidery / Heat Transfer",
      closure: "Adjustable buckle",
      panels: "5-Panel",
      size: "56-58cm · Adjustable"
    },
    customization: {
      title: "Our Customization Capabilities",
      options: [
        "3D embroidery, silk screen printing and heat-transfer printing",
        "Fabric colour matching to your Pantone reference",
        "Custom logo placement on front panel, brim, side panels or back",
        "Care labels available from 500 pcs"
      ]
    },
    faqs: [
      { q: "What is an A-frame cap?", a: "The A-frame is a 5-panel construction where the two front panels meet in a shallow peak, giving a taller, more angular crown than a standard curve-brim cap." },
      { q: "Is heavyweight cotton harder to embroider?", a: "No — the heavier fabric actually supports dense 3D puff embroidery better because the front panel resists distortion. We confirm stitch density on the sample." }
    ]
  },
  {
    id: "womens-3d-letter-embroidered-cap",
    name: "Women's 3D Letter Embroidered Cap",
    desc: "White 6-panel curved-brim cap in 100% cotton with raised 3D lettering and a metal buckle.",
    fullDesc: "A clean white 6-panel cap cut for women's fashion and athleisure ranges. The 100% cotton crown takes raised 3D lettering or logo embroidery, and the metal buckle closure adjusts to fit a 56-58cm head. A curved visor gives a softer profile than a flat brim. Embroidery and heat-transfer decoration are both available, with additional colourways on request.",
    price: "Contact for factory pricing",
    moq: 200,
    img: "/images/products/womens-3d-letter-embroidered-cap.webp",
    images: [
      "/images/products/womens-3d-letter-embroidered-cap.webp",
      "/images/products/womens-3d-letter-embroidered-cap-2.webp",
      "/images/products/womens-3d-letter-embroidered-cap-3.webp",
      "/images/products/womens-3d-letter-embroidered-cap-4.webp"
    ],
    badge: "new",
    category: "Baseball Caps",
    specs: {
      material: "100% Cotton",
      style: "6-Panel Curved Brim",
      logo: "3D Letter Embroidery",
      closure: "Metal buckle",
      panels: "6-Panel",
      size: "56-58cm"
    },
    customization: {
      title: "Our Customization Capabilities",
      options: [
        "Raised 3D lettering or logo embroidery on the front panel",
        "Heat-transfer printing for full-colour graphics",
        "Brass, plastic or metal buckle closures",
        "Additional colourways to your palette"
      ]
    },
    faqs: [
      { q: "Can you embroider my own lettering?", a: "Yes. Send the lettering or logo artwork and we digitise it for raised 3D embroidery, then confirm stitch height on the sample." },
      { q: "Which closures are available?", a: "This style uses a metal buckle by default. Brass and plastic buckle options are also available — tell us which you want and we will confirm on the quotation." }
    ]
  },
  {
    id: "curved-brim-6-panel-mesh-trucker-cap",
    name: "Curved Brim 6 Panel Mesh Trucker Cap",
    desc: "Breathable 6-panel trucker in a cotton-polyester blend with a curved brim and mesh back.",
    fullDesc: "A 6-panel mesh trucker in a breathable cotton-polyester blend, with a curved visor for sport and casual wear. The mesh back vents heat in summer, and the front panel takes 3D embroidery, silk screen or heat-transfer logos. Logo positions include the front panel, brim, side panels and back. Adjustable fit for a 56-58cm head.",
    price: "Contact for factory pricing",
    moq: 200,
    img: "/images/products/curved-brim-6-panel-mesh-trucker-cap.webp",
    images: [
      "/images/products/curved-brim-6-panel-mesh-trucker-cap.webp",
      "/images/products/curved-brim-6-panel-mesh-trucker-cap-2.webp",
      "/images/products/curved-brim-6-panel-mesh-trucker-cap-3.webp",
      "/images/products/curved-brim-6-panel-mesh-trucker-cap-4.webp"
    ],
    badge: "new",
    category: "Trucker Hats",
    specs: {
      material: "Cotton / Polyester Blend (Mesh Back)",
      style: "6-Panel Curved Brim Trucker",
      logo: "3D Embroidery / Silk Screen / Heat Transfer",
      closure: "Adjustable — confirmed on your quotation",
      panels: "6-Panel",
      size: "56-58cm · Adjustable"
    },
    customization: {
      title: "Our Customization Capabilities",
      options: [
        "3D embroidery, silk screen printing and heat-transfer printing",
        "Six-panel front for wide, centred logos",
        "Logo placement on front panel, brim, side panels or back",
        "Full OEM/ODM service from fabric to packaging"
      ]
    },
    faqs: [
      { q: "What is the difference between a 5-panel and 6-panel trucker?", a: "A 5-panel trucker has an unbroken front panel, which suits very wide logos and 3D puff. A 6-panel has a centre seam and gives a taller, rounder crown — better for centred, medium-size embroidery." },
      { q: "Is the whole cap mesh?", a: "No. Only the back panels are mesh for ventilation; the front and visor are solid fabric so the logo sits on a stable surface." }
    ]
  },
  {
    id: "streetwear-high-profile-5-panel-cap",
    name: "Streetwear High Profile 5 Panel Cap",
    desc: "Structured high-profile 5-panel in 100% cotton, with 3D embroidery across the front and brim.",
    fullDesc: "A structured high-profile 5-panel in 100% cotton, made for streetwear and skate programmes. The stiffened front holds a tall crown, and both the front panel and brim take 3D embroidery, so a raised logo can run across the visor as well. Adjustable closure with a one-size-fits-most fit for adults. Silk screen and heat-transfer decoration are also available.",
    price: "Contact for factory pricing",
    moq: 200,
    img: "/images/products/streetwear-high-profile-5-panel-cap.webp",
    images: [
      "/images/products/streetwear-high-profile-5-panel-cap.webp",
      "/images/products/streetwear-high-profile-5-panel-cap-2.webp",
      "/images/products/streetwear-high-profile-5-panel-cap-3.webp",
      "/images/products/streetwear-high-profile-5-panel-cap-4.webp"
    ],
    badge: "new",
    category: "Baseball Caps",
    specs: {
      material: "100% Cotton",
      style: "Structured High-Profile 5-Panel",
      logo: "3D Embroidery (Front & Brim)",
      closure: "Adjustable buckle",
      panels: "5-Panel",
      size: "56-58cm · One size"
    },
    customization: {
      title: "Our Customization Capabilities",
      options: [
        "3D embroidery across the front panel and brim",
        "Silk screen printing and heat-transfer printing",
        "Multiple colourways to your palette",
        "Care labels available from 500 pcs"
      ]
    },
    faqs: [
      { q: "Can the logo run onto the brim?", a: "Yes. This style accepts embroidery on both the front panel and the visor, which is what most streetwear programmes want for a full-width graphic." },
      { q: "Is it a tall crown?", a: "It is a high-profile structured build with a stiffened front panel, so the crown sits taller than a low-profile cap. We send photos of the sample before bulk." }
    ]
  },
  {
    id: "nylon-waterproof-performance-golf-cap",
    name: "Nylon Waterproof Performance Golf Cap",
    desc: "Water-repellent nylon 5-panel with laser-cut ventilation and rope trim, built for outdoor sport.",
    fullDesc: "A performance 5-panel in water-repellent nylon, designed for golf and outdoor sport. Laser-cut holes across the panels add ventilation without letting the shell lose its water-repellent finish, and a rope trim runs along the front seam. The cap takes silk screen, heat-transfer and sublimation printing, with logo positions on the front panel, brim, sides and back. Adjustable fit, 56-58cm.",
    price: "Contact for factory pricing",
    moq: 200,
    img: "/images/products/nylon-waterproof-performance-golf-cap.webp",
    images: [
      "/images/products/nylon-waterproof-performance-golf-cap.webp",
      "/images/products/nylon-waterproof-performance-golf-cap-2.webp",
      "/images/products/nylon-waterproof-performance-golf-cap-3.webp",
      "/images/products/nylon-waterproof-performance-golf-cap-4.webp"
    ],
    badge: "new",
    category: "Sports & Active",
    specs: {
      material: "Nylon (water-repellent)",
      style: "5-Panel Performance / Golf",
      logo: "Silk Screen / Heat Transfer / Sublimation",
      closure: "Adjustable buckle",
      panels: "5-Panel",
      size: "56-58cm · Adjustable",
      feature: "Water-repellent · Laser-cut venting"
    },
    customization: {
      title: "Our Customization Capabilities",
      options: [
        "Silk screen, heat-transfer and sublimation printing",
        "Laser-cut ventilation pattern to your design",
        "Logo placement on front panel, brim, side panels or back",
        "Colour matching to your Pantone reference"
      ]
    },
    faqs: [
      { q: "Is the cap fully waterproof?", a: "The nylon shell is water-repellent, so it sheds rain and keeps you dry in normal outdoor use. It is not intended for prolonged immersion." },
      { q: "Do the laser-cut holes let water in?", a: "They are cut for ventilation, so the shell is not sealed at those points. Buyers who need maximum rain protection usually choose fewer vent holes — tell us your priority and we will adjust the pattern." }
    ]
  },
  {
    id: "pompom-fur-ball-knitted-beanie",
    name: "Pompom Fur Ball Knitted Beanie",
    desc: "Thick cuffed acrylic beanie with a fur-ball pompom, knit for winter warmth and windproofing.",
    fullDesc: "A thick cuffed knitted beanie in 100% acrylic with a fur-ball pompom, built for winter and outdoor programmes. The dense rib knit holds warmth and the cuff keeps the fit snug; the front takes embroidery, printing or a woven patch. Available in kids and adult sizes with custom colours on request. Samples run 5-7 working days and bulk production 15-21 days after sample approval.",
    price: "Contact for factory pricing",
    moq: 200,
    img: "/images/products/pompom-fur-ball-knitted-beanie.webp",
    images: [
      "/images/products/pompom-fur-ball-knitted-beanie.webp",
      "/images/products/pompom-fur-ball-knitted-beanie-2.webp",
      "/images/products/pompom-fur-ball-knitted-beanie-3.webp",
      "/images/products/pompom-fur-ball-knitted-beanie-4.webp"
    ],
    badge: "new",
    category: "Beanies",
    specs: {
      material: "100% Acrylic",
      style: "Thick Cuffed Knit with Fur-Ball Pompom",
      logo: "Embroidery / Print / Woven Patch",
      closure: "Stretch fit (no closure)",
      panels: "Knitted (seamless)",
      size: "56-58cm · Unisex",
      colour: "Custom colours"
    },
    customization: {
      title: "Our Customization Capabilities",
      options: [
        "Embroidery, heat-transfer printing or woven patch on the front",
        "Woven patch, leather patch and metal patch options",
        "Kids and adult sizing to your market",
        "Custom colours matched to a Pantone card"
      ]
    },
    faqs: [
      { q: "Can the pompom be removed?", a: "Yes — tell us whether you want the fur-ball topper or a plain crown and we will produce the sample to match before bulk." },
      { q: "What are the sample and bulk lead times?", a: "Samples run 5-7 working days in general, and bulk production 15-21 days after the sample is confirmed." }
    ]
  },
  {
    id: "multi-colour-satin-lined-winter-beanie",
    name: "Multi-Colour Satin Lined Winter Beanie",
    desc: "Unisex winter beanie with a satin lining and multi-colour yarns for autumn and winter ranges.",
    fullDesc: "A unisex knitted winter beanie with a satin lining that sits against the forehead and reduces the itch and friction of plain acrylic. The rib knit keeps warmth through autumn and winter, and the multi-colour yarn palette gives each colourway a different look. The front accepts embroidery or a woven patch. Available in a range of multi-colour combinations to your palette.",
    price: "Contact for factory pricing",
    moq: 200,
    img: "/images/products/multi-colour-satin-lined-winter-beanie.webp",
    images: [
      "/images/products/multi-colour-satin-lined-winter-beanie.webp",
      "/images/products/multi-colour-satin-lined-winter-beanie-2.webp",
      "/images/products/multi-colour-satin-lined-winter-beanie-3.webp",
      "/images/products/multi-colour-satin-lined-winter-beanie-4.webp"
    ],
    badge: "new",
    category: "Beanies",
    specs: {
      material: "Acrylic · Satin Lining",
      style: "Knitted Cuffed Winter Beanie",
      logo: "Embroidery / Woven Patch",
      closure: "Stretch fit (no closure)",
      panels: "Knitted (seamless)",
      size: "56-58cm · Unisex",
      colour: "Multi-colour"
    },
    customization: {
      title: "Our Customization Capabilities",
      options: [
        "Multi-colour yarn combinations to your palette",
        "Embroidery or woven patch on the front",
        "Satin lining in a matching or contrast colour",
        "OEM/ODM service — custom size, material and logo"
      ]
    },
    faqs: [
      { q: "Can I combine several colours in one beanie?", a: "Yes. This is a multi-colour knit, so send us the colour combination you want and we will produce a sample for approval before bulk." },
      { q: "What is the delivery time?", a: "Delivery runs 7-15 working days after payment is confirmed, depending on quantity. We confirm the exact window with your quotation." }
    ]
  }
];
