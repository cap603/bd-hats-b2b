export interface Product {
  id: number;
  name: string;
  desc: string;
  fullDesc: string;
  price: string;
  moq: number;
  img: string;
  specs: {
    material: string;
    style: string;
    logo: string;
    closure: string;
    panels: string;
  };
}

export const HATS: Product[] = [
  { 
    id: 1, 
    name: "Two-Tone 3D Embroidery A-Frame Cap", 
    desc: "Structured 5-panel design with high-density 3D embroidery. Contrast visor and crown for a striking street aesthetic.",
    fullDesc: "This premium A-Frame cap represents the pinnacle of street fashion manufacturing. Utilizing high-density foam for the front panel, it provides a perfectly structured profile that never collapses. The contrast visor adds a bold visual pop, making it a favorite for streetwear brands globally.",
    price: "$2.90 - $3.90", 
    moq: 50,
    img: "https://sc01.alicdn.com/kf/H4faf483cc337458cbb9d161826e041f2u.png",
    specs: {
      material: "Premium Cotton Twill",
      style: "A-Frame Structured",
      logo: "3D Puff Embroidery (Front)",
      closure: "Plastic Snapback / Brass Buckle",
      panels: "5-Panel"
    }
  },
  { 
    id: 2, 
    name: "Gold Edition 3D Script 5-Panel", 
    desc: "Luxury gold script embroidery on premium cream cotton. Part of our exclusive high-profile designer series.",
    fullDesc: "Crafted for high-end fashion labels, this Gold Edition cap features metallic-thread gold script embroidery. The cream cotton base is treated for a soft touch yet maintains its rigid structure. It's the ideal choice for brands targeting a luxury or designer market segment.",
    price: "$2.80 - $3.90", 
    moq: 50,
    img: "https://sc01.alicdn.com/kf/Hfcc96f3c12f44b44b219dd0f120e1a6dy.png",
    specs: {
      material: "High-Density Brushed Cotton",
      style: "High-Profile Designer",
      logo: "Metallic Gold Script Embroidery",
      closure: "Premium Metal Buckle",
      panels: "5-Panel"
    }
  },
  { 
    id: 3, 
    name: "Vintage Washed Cotton Dad Hat Series", 
    desc: "100% garment-washed cotton with customized 3D embroidery logos. Antique brass buckle closure.",
    fullDesc: "Our vintage series uses a specialized heavy washing process to achieve an authentic 'lived-in' look. Despite the soft feel, the construction is rugged with reinforced seams. The low-profile crown and curved brim offer the classic 'Dad Hat' fit that remains a top-seller in US and European markets.",
    price: "$3.20 - $4.50", 
    moq: 50,
    img: "https://sc01.alicdn.com/kf/H47594c6deca245f0829415dd9ab0201cb.jpg",
    specs: {
      material: "100% Washed Cotton",
      style: "Unstructured Dad Hat",
      logo: "Custom 3D / Flat Embroidery",
      closure: "Antique Brass Slide Buckle",
      panels: "6-Panel"
    }
  },
  { 
    id: 4, 
    name: "Custom Fashion Mesh Trucker Hat", 
    desc: "Premium foam front with high-breathability mesh back. Features custom script embroidery and racing stripes.",
    fullDesc: "Designed for performance and style, our Trucker series combines a structured foam front with high-quality nylon mesh. The multi-tone racing stripes on the side are customizable, and the wide front panel is perfect for large, detailed embroidery or screen-printed designs.",
    price: "$1.90 - $2.90", 
    moq: 50,
    img: "https://sc01.alicdn.com/kf/H90c2155da629468fa925eb0464b06457e.jpg",
    specs: {
      material: "Polyester Foam + Nylon Mesh",
      style: "Curved Brim Trucker",
      logo: "Flat Embroidery / Screen Print",
      closure: "7-Hole Plastic Snapback",
      panels: "5-Panel"
    }
  },
  { 
    id: 5, 
    name: "Outdoor Tech Wing Series Cap", 
    desc: "Vibrant royal blue cotton with 3D puff embroidery and iconic wing side patch. For activewear brands.",
    fullDesc: "This tech-inspired cap features a moisture-wicking internal sweatband and heavy-duty cotton twill exterior. The side wing patch is a unique branding element that we can customize with your own symbols. Highly durable construction for outdoor and active lifestyles.",
    price: "$2.80 - $3.90", 
    moq: 50,
    img: "https://sc01.alicdn.com/kf/He08acde3cf354ef99014af1a5b4f5c2bf.png",
    specs: {
      material: "Heavy Duty Cotton Twill",
      style: "Active Performance Cap",
      logo: "3D Puff (Front) + Applique (Side)",
      closure: "Elastic Flex-fit / Snapback",
      panels: "5-Panel"
    }
  },
  { 
    id: 6, 
    name: "Premium Multi-Tone 5-Panel (BQM1546)", 
    desc: "A-frame high-profile crown with premium cotton twill. Featuring outline embroidery and multi-tone visors.",
    fullDesc: "The BQM1546 is our flagship model, trusted by hundreds of global brands. It features a perfect 5-panel symmetry, a high-profile crown for a modern look, and a rigid brim. The multi-tone color options are virtually endless, allowing for precise brand matching.",
    price: "$2.80 - $3.90", 
    moq: 50,
    img: "https://sc01.alicdn.com/kf/H1edd649a1887488f91f1ed75174dce806.png",
    specs: {
      material: "Premium Cotton Twill",
      style: "A-Frame High-Profile",
      logo: "Outline / 3D Embroidery",
      closure: "Premium Snapback",
      panels: "5-Panel"
    }
  },
];
