export interface Product {
  id: string;
  name: string;
  desc: string;
  fullDesc: string;
  price: string;
  moq: number;
  img: string;
  images?: string[];
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
    price: "$2.90 - $3.90", 
    moq: 200,
    img: "https://sc01.alicdn.com/kf/H4faf483cc337458cbb9d161826e041f2u.png",
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
        "Free 3D Mockup within 12 hours",
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
    price: "$0.98 - $2.48", 
    moq: 200,
    img: "https://sc04.alicdn.com/kf/H685718919639459397686861298c92a5D.jpg",
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
    price: "$2.00 - $3.80", 
    moq: 200,
    img: "https://sc04.alicdn.com/kf/H668617812983428383861298c92a5F.jpg",
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
    price: "$0.98 - $2.48", 
    moq: 200,
    img: "https://s.alicdn.com/@sc04/kf/H491f2ecb113c48148e0b4e7fd119c9ceQ.jpg",
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
    price: "$1.00 - $3.00", 
    moq: 200,
    img: "https://s.alicdn.com/@sc04/kf/H4909f9b79df84a87af9eb8a21f91e5bci.png",
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
    price: "$0.50 - $1.50", 
    moq: 200,
    img: "https://s.alicdn.com/@sc04/kf/Hd4865fa5783c4a5da8fd17a2fd64f703G.png",
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
    price: "$2.20 - $4.00", 
    moq: 200,
    img: "https://s.alicdn.com/@sc04/kf/H5a0171373c2b42a6a0083b82f6e7c57da.jpg",
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
    price: "$1.50 - $3.20", 
    moq: 200,
    img: "https://s.alicdn.com/@sc04/kf/Hefa4838aa05548fc9893878e057a8bees.png",
    category: "Baseball Caps",
    specs: {
      material: "Breathable Cotton Mix",
      style: "Structured Sports Profile",
      logo: "High-Density Embroidery",
      closure: "Metal Buckle",
      panels: "6-Panel"
    }
  }
];
