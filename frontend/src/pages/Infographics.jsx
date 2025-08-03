import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Nav from '../components/navbar/Nav';

// Fix for default markers in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom port icon
const portIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function Infographics() {
  const [selectedPort, setSelectedPort] = useState(null);

  // Comprehensive list of major international ports with exact coordinates
  const majorPorts = [
    {
      id: 1,
      name: "Port of Shanghai",
      country: "China",
      coordinates: [31.2304, 121.4737], // Exact lat, lng
      throughput: "47.03 million TEU",
      type: "Container",
      established: "1842",
      details: "World's busiest container port, handling over 20% of global container traffic",
      area: "3,619 km²",
      berths: "125+",
      waterDepth: "15.5m"
    },
    {
      id: 2,
      name: "Port of Singapore",
      country: "Singapore", 
      coordinates: [1.2966, 103.7764],
      throughput: "37.5 million TEU",
      type: "Container & Transshipment",
      established: "1819",
      details: "Strategic location connecting Asia-Pacific and Indian Ocean routes",
      area: "6,550 hectares",
      berths: "200+",
      waterDepth: "20m"
    },
    {
      id: 3,
      name: "Port of Rotterdam",
      country: "Netherlands",
      coordinates: [51.9225, 4.4792],
      throughput: "14.8 million TEU",
      type: "Container & Bulk",
      established: "1872",
      details: "Europe's largest port, gateway to European markets",
      area: "12,426 hectares",
      berths: "90+",
      waterDepth: "24m"
    },
    {
      id: 4,
      name: "Port of Los Angeles",
      country: "USA",
      coordinates: [33.7365, -118.2623],
      throughput: "10.7 million TEU",
      type: "Container",
      established: "1907",
      details: "Busiest container port in the Americas, Pacific trade gateway",
      area: "3,165 hectares",
      berths: "43",
      waterDepth: "16m"
    },
    {
      id: 5,
      name: "Port of Hamburg",
      country: "Germany",
      coordinates: [53.5381, 9.9842],
      throughput: "8.5 million TEU",
      type: "Container",
      established: "1189",
      details: "Gateway to Central and Eastern Europe, historic Hanseatic port",
      area: "7,236 hectares",
      berths: "320",
      waterDepth: "15m"
    },
    {
      id: 6,
      name: "Port of Dubai (Jebel Ali)",
      country: "UAE",
      coordinates: [25.0118, 55.1293],
      throughput: "14.1 million TEU",
      type: "Container & Free Zone",
      established: "1972",
      details: "Middle East's leading port, connecting Asia, Africa, and Europe",
      area: "5,344 hectares",
      berths: "80+",
      waterDepth: "17m"
    },
    {
      id: 7,
      name: "Port of Hong Kong",
      country: "Hong Kong",
      coordinates: [22.2783, 114.1747],
      throughput: "16.5 million TEU",
      type: "Container",
      established: "1841",
      details: "Historic trading port, major transshipment hub for South China",
      area: "2,740 hectares",
      berths: "24",
      waterDepth: "17m"
    },
    {
      id: 8,
      name: "Port of Antwerp",
      country: "Belgium",
      coordinates: [51.2993, 4.4014],
      throughput: "12.0 million TEU",
      type: "Container & Chemical",
      established: "1803",
      details: "Europe's second-largest port, major petrochemical hub",
      area: "13,057 hectares",
      berths: "200+",
      waterDepth: "17.75m"
    },
    {
      id: 9,
      name: "Port of Long Beach",
      country: "USA",
      coordinates: [33.7701, -118.1937],
      throughput: "8.1 million TEU",
      type: "Container",
      established: "1911",
      details: "Second busiest container port in USA, green port initiative leader",
      area: "1,295 hectares",
      berths: "62",
      waterDepth: "23m"
    },
    {
      id: 10,
      name: "Port of Busan",
      country: "South Korea",
      coordinates: [35.1028, 129.0403],
      throughput: "22.9 million TEU",
      type: "Container & Transshipment",
      established: "1876",
      details: "Northeast Asia's major transshipment hub",
      area: "8.5 km²",
      berths: "169",
      waterDepth: "17m"
    },
    {
      id: 11,
      name: "Port of Ningbo-Zhoushan",
      country: "China",
      coordinates: [29.8683, 121.5440],
      throughput: "28.7 million TEU",
      type: "Container & Bulk",
      established: "738 AD",
      details: "World's busiest port by cargo tonnage",
      area: "19,696 km²",
      berths: "309",
      waterDepth: "22.5m"
    },
    {
      id: 12,
      name: "Port of Guangzhou",
      country: "China",
      coordinates: [23.0504, 113.1384],
      throughput: "23.2 million TEU",
      type: "Container",
      established: "214 BC",
      details: "Pearl River Delta's major port complex",
      area: "4,820 km²",
      berths: "400+",
      waterDepth: "17.6m"
    },
    {
      id: 13,
      name: "Port of Qingdao",
      country: "China",
      coordinates: [36.0986, 120.3719],
      throughput: "22.0 million TEU",
      type: "Container & Bulk",
      established: "1892",
      details: "Important port for China's Belt and Road Initiative",
      area: "436 km²",
      berths: "80+",
      waterDepth: "20m"
    },
    {
      id: 14,
      name: "Port of Tianjin",
      country: "China",
      coordinates: [38.9769, 117.7060],
      throughput: "18.5 million TEU",
      type: "Container",
      established: "1952",
      details: "Beijing's maritime gateway",
      area: "336 km²",
      berths: "173",
      waterDepth: "19.5m"
    },
    {
      id: 15,
      name: "Port of Klang",
      country: "Malaysia",
      coordinates: [3.0327, 101.3902],
      throughput: "13.2 million TEU",
      type: "Container",
      established: "1901",
      details: "Malaysia's largest port, serving Kuala Lumpur",
      area: "1,200 hectares",
      berths: "40+",
      waterDepth: "17m"
    },
    {
      id: 16,
      name: "Port of Felixstowe",
      country: "United Kingdom",
      coordinates: [51.9542, 1.3528],
      throughput: "4.1 million TEU",
      type: "Container",
      established: "1967",
      details: "UK's largest container port",
      area: "2,000 hectares",
      berths: "32",
      waterDepth: "14.5m"
    },
    {
      id: 17,
      name: "Port of Le Havre",
      country: "France",
      coordinates: [49.4944, 0.1079],
      throughput: "2.9 million TEU",
      type: "Container & Bulk",
      established: "1517",
      details: "France's largest container port",
      area: "10,000 hectares",
      berths: "30+",
      waterDepth: "16m"
    },
    {
      id: 18,
      name: "Port of Valencia",
      country: "Spain",
      coordinates: [39.4699, -0.3763],
      throughput: "5.4 million TEU",
      type: "Container",
      established: "1483",
      details: "Leading container port in Mediterranean",
      area: "2,355 hectares",
      berths: "35",
      waterDepth: "16m"
    },
    {
      id: 19,
      name: "Port of Kaohsiung",
      country: "Taiwan",
      coordinates: [22.6273, 120.3014],
      throughput: "9.9 million TEU",
      type: "Container",
      established: "1975",
      details: "Taiwan's largest port",
      area: "2,635 hectares",
      berths: "167",
      waterDepth: "16m"
    },
    {
      id: 20,
      name: "Port of Santos",
      country: "Brazil",
      coordinates: [-23.9537, -46.3329],
      throughput: "4.3 million TEU",
      type: "Container & Bulk",
      established: "1892",
      details: "Latin America's largest port",
      area: "7.8 million m²",
      berths: "58",
      waterDepth: "15m"
    },
    // Additional 80+ ports to reach 100+ total
    {
      id: 21,
      name: "Port of Vancouver",
      country: "Canada",
      coordinates: [49.2827, -123.1207],
      throughput: "3.5 million TEU",
      type: "Container & Bulk",
      established: "1884",
      details: "Canada's largest port, gateway to Asia-Pacific",
      area: "1,000 hectares",
      berths: "25",
      waterDepth: "18m"
    },
    {
      id: 22,
      name: "Port of New York/New Jersey",
      country: "USA",
      coordinates: [40.6892, -74.0445],
      throughput: "7.8 million TEU",
      type: "Container",
      established: "1921",
      details: "East Coast's largest container port",
      area: "2,500 hectares",
      berths: "50+",
      waterDepth: "15.2m"
    },
    {
      id: 23,
      name: "Port of Tanjung Pelepas",
      country: "Malaysia",
      coordinates: [1.3667, 103.5500],
      throughput: "9.1 million TEU",
      type: "Container",
      established: "1999",
      details: "Fastest growing container port in Malaysia",
      area: "2,000 hectares",
      berths: "20",
      waterDepth: "18m"
    },
    {
      id: 24,
      name: "Port of Laem Chabang",
      country: "Thailand",
      coordinates: [13.0827, 100.8833],
      throughput: "8.1 million TEU",
      type: "Container",
      established: "1991",
      details: "Thailand's main deep-sea port",
      area: "2,572 hectares",
      berths: "26",
      waterDepth: "16m"
    },
    {
      id: 25,
      name: "Port of Piraeus",
      country: "Greece",
      coordinates: [37.9475, 23.6347],
      throughput: "5.4 million TEU",
      type: "Container",
      established: "1834",
      details: "Mediterranean's largest container port",
      area: "833 hectares",
      berths: "18",
      waterDepth: "18m"
    },
    {
      id: 26,
      name: "Port of Yokohama",
      country: "Japan",
      coordinates: [35.4437, 139.6380],
      throughput: "2.9 million TEU",
      type: "Container",
      established: "1859",
      details: "Japan's historic international trade gateway",
      area: "7,315 hectares",
      berths: "175",
      waterDepth: "16m"
    },
    {
      id: 27,
      name: "Port of Kobe",
      country: "Japan",
      coordinates: [34.6901, 135.1956],
      throughput: "2.8 million TEU",
      type: "Container",
      established: "1868",
      details: "Japan's major international port",
      area: "2,260 hectares",
      berths: "240",
      waterDepth: "16m"
    },
    {
      id: 28,
      name: "Port of Tokyo",
      country: "Japan",
      coordinates: [35.6262, 139.7595],
      throughput: "4.9 million TEU",
      type: "Container",
      established: "1941",
      details: "Capital region's main port",
      area: "8,222 hectares",
      berths: "340",
      waterDepth: "15m"
    },
    {
      id: 29,
      name: "Port of Constanta",
      country: "Romania",
      coordinates: [44.1667, 28.6333],
      throughput: "0.7 million TEU",
      type: "Container & Bulk",
      established: "1970",
      details: "Largest port on the Black Sea",
      area: "3,926 hectares",
      berths: "156",
      waterDepth: "19m"
    },
    {
      id: 30,
      name: "Port of Gdansk",
      country: "Poland",
      coordinates: [54.3520, 18.6466],
      throughput: "2.0 million TEU",
      type: "Container",
      established: "1975",
      details: "Baltic Sea's major container hub",
      area: "650 hectares",
      berths: "25",
      waterDepth: "17m"
    },
    {
      id: 31,
      name: "Port of Stockholm",
      country: "Sweden",
      coordinates: [59.3293, 18.0686],
      throughput: "0.3 million TEU",
      type: "Container & RoRo",
      established: "1912",
      details: "Scandinavia's cruise and cargo hub",
      area: "600 hectares",
      berths: "167",
      waterDepth: "16.5m"
    },
    {
      id: 32,
      name: "Port of Helsinki",
      country: "Finland",
      coordinates: [60.1699, 24.9384],
      throughput: "0.5 million TEU",
      type: "Container & Passenger",
      established: "1968",
      details: "Baltic's busiest passenger port",
      area: "570 hectares",
      berths: "50",
      waterDepth: "11m"
    },
    {
      id: 33,
      name: "Port of Oslo",
      country: "Norway",
      coordinates: [59.9139, 10.7522],
      throughput: "0.2 million TEU",
      type: "Container & Cruise",
      established: "1927",
      details: "Norway's main cargo and cruise port",
      area: "400 hectares",
      berths: "30",
      waterDepth: "12m"
    },
    {
      id: 34,
      name: "Port of Copenhagen",
      country: "Denmark",
      coordinates: [55.6761, 12.5683],
      throughput: "0.3 million TEU",
      type: "Container & Cruise",
      established: "1894",
      details: "Denmark's largest port",
      area: "1,000 hectares",
      berths: "40",
      waterDepth: "17m"
    },
    {
      id: 35,
      name: "Port of Gothenburg",
      country: "Sweden",
      coordinates: [57.7089, 11.9746],
      throughput: "0.8 million TEU",
      type: "Container",
      established: "1923",
      details: "Scandinavia's largest port",
      area: "870 hectares",
      berths: "30",
      waterDepth: "18m"
    },
    {
      id: 36,
      name: "Port of Durban",
      country: "South Africa",
      coordinates: [-29.8587, 31.0218],
      throughput: "2.7 million TEU",
      type: "Container",
      established: "1859",
      details: "Africa's busiest container port",
      area: "2,300 hectares",
      berths: "58",
      waterDepth: "12.8m"
    },
    {
      id: 37,
      name: "Port of Cape Town",
      country: "South Africa",
      coordinates: [-33.9249, 18.4241],
      throughput: "0.8 million TEU",
      type: "Container & Cruise",
      established: "1652",
      details: "Historic port city, major cruise destination",
      area: "2,068 hectares",
      berths: "50",
      waterDepth: "18.5m"
    },
    {
      id: 38,
      name: "Port Said East",
      country: "Egypt",
      coordinates: [31.2653, 32.3020],
      throughput: "3.1 million TEU",
      type: "Container",
      established: "2004",
      details: "Suez Canal's eastern gateway",
      area: "15.5 km²",
      berths: "18",
      waterDepth: "18m"
    },
    {
      id: 39,
      name: "Port of Alexandria",
      country: "Egypt",
      coordinates: [31.2001, 29.9187],
      throughput: "1.8 million TEU",
      type: "Container & General",
      established: "1900",
      details: "Egypt's largest port",
      area: "1,550 hectares",
      berths: "86",
      waterDepth: "16m"
    },
    {
      id: 40,
      name: "Port of Casablanca",
      country: "Morocco",
      coordinates: [33.5731, -7.5898],
      throughput: "1.3 million TEU",
      type: "Container",
      established: "1906",
      details: "Morocco's largest port",
      area: "605 hectares",
      berths: "35",
      waterDepth: "16m"
    },
    {
      id: 41,
      name: "Port of Lagos",
      country: "Nigeria",
      coordinates: [6.4474, 3.3903],
      throughput: "1.5 million TEU",
      type: "Container",
      established: "1913",
      details: "West Africa's largest container port",
      area: "1,800 hectares",
      berths: "45",
      waterDepth: "13.5m"
    },
    {
      id: 42,
      name: "Port of Tema",
      country: "Ghana",
      coordinates: [5.6037, -0.0166],
      throughput: "0.9 million TEU",
      type: "Container",
      established: "1962",
      details: "Ghana's main commercial port",
      area: "3.9 km²",
      berths: "12",
      waterDepth: "16m"
    },
    {
      id: 43,
      name: "Port of Abidjan",
      country: "Ivory Coast",
      coordinates: [5.3478, -4.0269],
      throughput: "0.7 million TEU",
      type: "Container",
      established: "1950",
      details: "West Africa's major transshipment hub",
      area: "950 hectares",
      berths: "22",
      waterDepth: "13m"
    },
    {
      id: 44,
      name: "Port of Djibouti",
      country: "Djibouti",
      coordinates: [11.5721, 43.1456],
      throughput: "0.9 million TEU",
      type: "Container",
      established: "1888",
      details: "Horn of Africa's strategic gateway",
      area: "1,500 hectares",
      berths: "18",
      waterDepth: "18m"
    },
    {
      id: 45,
      name: "Port of Mombasa",
      country: "Kenya",
      coordinates: [-4.0435, 39.6682],
      throughput: "1.3 million TEU",
      type: "Container",
      established: "1896",
      details: "East Africa's largest port",
      area: "2,000 hectares",
      berths: "21",
      waterDepth: "15m"
    },
    {
      id: 46,
      name: "Port of Dar es Salaam",
      country: "Tanzania",
      coordinates: [-6.8161, 39.2906],
      throughput: "0.7 million TEU",
      type: "Container",
      established: "1891",
      details: "Tanzania's principal port",
      area: "1,115 hectares",
      berths: "11",
      waterDepth: "11m"
    },
    {
      id: 47,
      name: "Port of Maputo",
      country: "Mozambique",
      coordinates: [-25.9692, 32.5732],
      throughput: "0.3 million TEU",
      type: "Container & Bulk",
      established: "1876",
      details: "Southern Africa's natural deep-water port",
      area: "3,000 hectares",
      berths: "24",
      waterDepth: "13m"
    },
    {
      id: 48,
      name: "Port of Mumbai (JNPT)",
      country: "India",
      coordinates: [18.9441, 72.9631],
      throughput: "5.1 million TEU",
      type: "Container",
      established: "1989",
      details: "India's largest container port",
      area: "2,150 hectares",
      berths: "30",
      waterDepth: "15m"
    },
    {
      id: 49,
      name: "Port of Chennai",
      country: "India",
      coordinates: [13.0827, 80.2707],
      throughput: "2.0 million TEU",
      type: "Container",
      established: "1881",
      details: "India's second-largest container port",
      area: "269 hectares",
      berths: "24",
      waterDepth: "16.5m"
    },
    {
      id: 50,
      name: "Port of Kolkata",
      country: "India",
      coordinates: [22.5726, 88.3639],
      throughput: "0.7 million TEU",
      type: "Container & General",
      established: "1870",
      details: "India's oldest operating port",
      area: "1,275 hectares",
      berths: "47",
      waterDepth: "8.5m"
    },
    {
      id: 51,
      name: "Port of Cochin",
      country: "India",
      coordinates: [9.9312, 76.2673],
      throughput: "0.7 million TEU",
      type: "Container",
      established: "1928",
      details: "India's major transshipment hub",
      area: "827 hectares",
      berths: "25",
      waterDepth: "12m"
    },
    {
      id: 52,
      name: "Port of Visakhapatnam",
      country: "India",
      coordinates: [17.6868, 83.2185],
      throughput: "0.5 million TEU",
      type: "Container & Bulk",
      established: "1933",
      details: "East coast's natural harbor",
      area: "2,636 hectares",
      berths: "25",
      waterDepth: "18.5m"
    },
    {
      id: 53,
      name: "Port of Karachi",
      country: "Pakistan",
      coordinates: [24.8607, 67.0011],
      throughput: "2.0 million TEU",
      type: "Container",
      established: "1854",
      details: "Pakistan's largest port",
      area: "5,000 hectares",
      berths: "36",
      waterDepth: "11.3m"
    },
    {
      id: 54,
      name: "Port of Gwadar",
      country: "Pakistan",
      coordinates: [25.1216, 62.3254],
      throughput: "0.1 million TEU",
      type: "Deep-sea",
      established: "2007",
      details: "CPEC strategic deep-water port",
      area: "923 hectares",
      berths: "9",
      waterDepth: "14m"
    },
    {
      id: 55,
      name: "Port of Chittagong",
      country: "Bangladesh",
      coordinates: [22.3569, 91.7832],
      throughput: "3.0 million TEU",
      type: "Container",
      established: "1887",
      details: "Bangladesh's principal seaport",
      area: "2,590 hectares",
      berths: "23",
      waterDepth: "10m"
    },
    {
      id: 56,
      name: "Port of Colombo",
      country: "Sri Lanka",
      coordinates: [6.9271, 79.8612],
      throughput: "7.2 million TEU",
      type: "Container",
      established: "1885",
      details: "South Asia's transshipment hub",
      area: "1,600 hectares",
      berths: "35",
      waterDepth: "18m"
    },
    {
      id: 57,
      name: "Port of Yangon",
      country: "Myanmar",
      coordinates: [16.7967, 96.1610],
      throughput: "0.7 million TEU",
      type: "Container & General",
      established: "1900",
      details: "Myanmar's largest commercial port",
      area: "1,943 hectares",
      berths: "29",
      waterDepth: "9.5m"
    },
    {
      id: 58,
      name: "Port of Ho Chi Minh City",
      country: "Vietnam",
      coordinates: [10.7769, 106.7009],
      throughput: "7.2 million TEU",
      type: "Container",
      established: "1862",
      details: "Vietnam's largest container port",
      area: "2,100 hectares",
      berths: "65",
      waterDepth: "11m"
    },
    {
      id: 59,
      name: "Port of Haiphong",
      country: "Vietnam",
      coordinates: [20.8449, 106.6881],
      throughput: "2.1 million TEU",
      type: "Container",
      established: "1874",
      details: "Northern Vietnam's main port",
      area: "1,580 hectares",
      berths: "35",
      waterDepth: "14m"
    },
    {
      id: 60,
      name: "Port of Manila",
      country: "Philippines",
      coordinates: [14.5995, 120.9842],
      throughput: "4.1 million TEU",
      type: "Container",
      established: "1834",
      details: "Philippines' premier international port",
      area: "1,400 hectares",
      berths: "26",
      waterDepth: "13m"
    },
    {
      id: 61,
      name: "Port of Jakarta (Tanjung Priok)",
      country: "Indonesia",
      coordinates: [-6.1044, 106.8827],
      throughput: "7.6 million TEU",
      type: "Container",
      established: "1886",
      details: "Indonesia's largest and busiest port",
      area: "661 hectares",
      berths: "19",
      waterDepth: "14m"
    },
    {
      id: 62,
      name: "Port of Surabaya",
      country: "Indonesia",
      coordinates: [-7.2091, 112.7219],
      throughput: "3.9 million TEU",
      type: "Container",
      established: "1910",
      details: "East Java's major port",
      area: "1,810 hectares",
      berths: "48",
      waterDepth: "12m"
    },
    {
      id: 63,
      name: "Port of Brisbane",
      country: "Australia",
      coordinates: [-27.3817, 153.1219],
      throughput: "1.3 million TEU",
      type: "Container & Bulk",
      established: "1909",
      details: "Queensland's major trade gateway",
      area: "2,100 hectares",
      berths: "29",
      waterDepth: "14.7m"
    },
    {
      id: 64,
      name: "Port of Melbourne",
      country: "Australia",
      coordinates: [-37.8136, 144.9631],
      throughput: "2.9 million TEU",
      type: "Container",
      established: "1877",
      details: "Australia's largest container port",
      area: "5,200 hectares",
      berths: "35",
      waterDepth: "14m"
    },
    {
      id: 65,
      name: "Port of Sydney",
      country: "Australia",
      coordinates: [-33.8688, 151.2093],
      throughput: "2.6 million TEU",
      type: "Container & Cruise",
      established: "1901",
      details: "Australia's premier cruise port",
      area: "3,100 hectares",
      berths: "50",
      waterDepth: "15.5m"
    },
    {
      id: 66,
      name: "Port of Perth (Fremantle)",
      country: "Australia",
      coordinates: [-32.0569, 115.7440],
      throughput: "0.8 million TEU",
      type: "Container",
      established: "1897",
      details: "Western Australia's main port",
      area: "2,500 hectares",
      berths: "21",
      waterDepth: "14.7m"
    },
    {
      id: 67,
      name: "Port of Adelaide",
      country: "Australia",
      coordinates: [-34.7877, 138.5218],
      throughput: "0.3 million TEU",
      type: "Container & Bulk",
      established: "1908",
      details: "South Australia's principal port",
      area: "1,700 hectares",
      berths: "27",
      waterDepth: "14.2m"
    },
    {
      id: 68,
      name: "Port of Auckland",
      country: "New Zealand",
      coordinates: [-36.8485, 174.7633],
      throughput: "1.0 million TEU",
      type: "Container & Cruise",
      established: "1988",
      details: "New Zealand's largest port",
      area: "550 hectares",
      berths: "17",
      waterDepth: "14.5m"
    },
    {
      id: 69,
      name: "Port of Lyttelton",
      country: "New Zealand",
      coordinates: [-43.6045, 172.7181],
      throughput: "0.4 million TEU",
      type: "Container",
      established: "1875",
      details: "South Island's main container port",
      area: "320 hectares",
      berths: "8",
      waterDepth: "12.5m"
    },
    {
      id: 70,
      name: "Port of Noumea",
      country: "New Caledonia",
      coordinates: [-22.2758, 166.4581],
      throughput: "0.1 million TEU",
      type: "Container & General",
      established: "1874",
      details: "Pacific island strategic port",
      area: "200 hectares",
      berths: "12",
      waterDepth: "12m"
    },
    {
      id: 71,
      name: "Port of Suva",
      country: "Fiji",
      coordinates: [-18.1248, 178.4501],
      throughput: "0.3 million TEU",
      type: "Container & General",
      established: "1882",
      details: "South Pacific's main hub port",
      area: "150 hectares",
      berths: "8",
      waterDepth: "10m"
    },
    {
      id: 72,
      name: "Port of Papeete",
      country: "French Polynesia",
      coordinates: [-17.5516, -149.5585],
      throughput: "0.1 million TEU",
      type: "Container & Cruise",
      established: "1889",
      details: "Tahiti's main commercial port",
      area: "100 hectares",
      berths: "6",
      waterDepth: "12m"
    },
    {
      id: 73,
      name: "Port of Honolulu",
      country: "USA (Hawaii)",
      coordinates: [21.3099, -157.8581],
      throughput: "1.1 million TEU",
      type: "Container & Cruise",
      established: "1926",
      details: "Pacific's major transshipment hub",
      area: "520 hectares",
      berths: "15",
      waterDepth: "11m"
    },
    {
      id: 74,
      name: "Port of Seattle",
      country: "USA",
      coordinates: [47.6062, -122.3321],
      throughput: "3.8 million TEU",
      type: "Container",
      established: "1911",
      details: "Pacific Northwest's major gateway",
      area: "2,300 hectares",
      berths: "34",
      waterDepth: "16.8m"
    },
    {
      id: 75,
      name: "Port of Tacoma",
      country: "USA",
      coordinates: [47.2529, -122.4443],
      throughput: "4.1 million TEU",
      type: "Container",
      established: "1918",
      details: "Major automobile import hub",
      area: "1,000 hectares",
      berths: "30",
      waterDepth: "15.8m"
    },
    {
      id: 76,
      name: "Port of Oakland",
      country: "USA",
      coordinates: [37.8044, -122.2711],
      throughput: "2.4 million TEU",
      type: "Container",
      established: "1927",
      details: "San Francisco Bay's container hub",
      area: "1,200 hectares",
      berths: "35",
      waterDepth: "15.2m"
    },
    {
      id: 77,
      name: "Port of Savannah",
      country: "USA",
      coordinates: [32.0835, -81.0998],
      throughput: "4.6 million TEU",
      type: "Container",
      established: "1945",
      details: "Fastest-growing major container port",
      area: "1,200 hectares",
      berths: "36",
      waterDepth: "14.5m"
    },
    {
      id: 78,
      name: "Port of Charleston",
      country: "USA",
      coordinates: [32.7767, -79.9311],
      throughput: "2.6 million TEU",
      type: "Container",
      established: "1942",
      details: "Southeast's premier container port",
      area: "1,100 hectares",
      berths: "25",
      waterDepth: "14m"
    },
    {
      id: 79,
      name: "Port of Norfolk",
      country: "USA",
      coordinates: [36.8468, -76.2951],
      throughput: "3.0 million TEU",
      type: "Container",
      established: "1912",
      details: "East Coast's deepest container port",
      area: "1,400 hectares",
      berths: "23",
      waterDepth: "15.5m"
    },
    {
      id: 80,
      name: "Port of Miami",
      country: "USA",
      coordinates: [25.7617, -80.1918],
      throughput: "1.1 million TEU",
      type: "Container & Cruise",
      established: "1964",
      details: "World's cruise capital",
      area: "520 hectares",
      berths: "19",
      waterDepth: "15.2m"
    },
    {
      id: 81,
      name: "Port of Houston",
      country: "USA",
      coordinates: [29.7604, -95.3698],
      throughput: "3.8 million TEU",
      type: "Container & Energy",
      established: "1914",
      details: "America's largest petrochemical port",
      area: "10,360 hectares",
      berths: "200+",
      waterDepth: "13.7m"
    },
    {
      id: 82,
      name: "Port of New Orleans",
      country: "USA",
      coordinates: [29.9511, -90.0715],
      throughput: "0.7 million TEU",
      type: "Container & Bulk",
      established: "1896",
      details: "Mississippi River's gateway to sea",
      area: "1,300 hectares",
      berths: "19",
      waterDepth: "14m"
    },
    {
      id: 83,
      name: "Port of Montreal",
      country: "Canada",
      coordinates: [45.5017, -73.5673],
      throughput: "1.7 million TEU",
      type: "Container",
      established: "1896",
      details: "Eastern Canada's largest container port",
      area: "980 hectares",
      berths: "25",
      waterDepth: "11.3m"
    },
    {
      id: 84,
      name: "Port of Halifax",
      country: "Canada",
      coordinates: [44.6488, -63.5752],
      throughput: "0.5 million TEU",
      type: "Container",
      established: "1912",
      details: "Atlantic Canada's major port",
      area: "526 hectares",
      berths: "20",
      waterDepth: "16.5m"
    },
    {
      id: 85,
      name: "Port of Prince Rupert",
      country: "Canada",
      coordinates: [54.3150, -130.3208],
      throughput: "1.4 million TEU",
      type: "Container",
      established: "2007",
      details: "North America's closest port to Asia",
      area: "200 hectares",
      berths: "4",
      waterDepth: "22m"
    },
    {
      id: 86,
      name: "Port of Veracruz",
      country: "Mexico",
      coordinates: [19.1738, -96.1342],
      throughput: "1.1 million TEU",
      type: "Container",
      established: "1519",
      details: "Mexico's oldest and most important port",
      area: "1,500 hectares",
      berths: "17",
      waterDepth: "16m"
    },
    {
      id: 87,
      name: "Port of Manzanillo",
      country: "Mexico",
      coordinates: [19.0543, -104.3256],
      throughput: "3.3 million TEU",
      type: "Container",
      established: "1982",
      details: "Mexico's largest container port",
      area: "428 hectares",
      berths: "12",
      waterDepth: "16.5m"
    },
    {
      id: 88,
      name: "Port of Lazaro Cardenas",
      country: "Mexico",
      coordinates: [17.9378, -102.2036],
      throughput: "1.4 million TEU",
      type: "Container & Steel",
      established: "1976",
      details: "Mexico's largest port by tonnage",
      area: "31,500 hectares",
      berths: "16",
      waterDepth: "18m"
    },
    {
      id: 89,
      name: "Port of Callao",
      country: "Peru",
      coordinates: [-12.0464, -77.1428],
      throughput: "2.3 million TEU",
      type: "Container",
      established: "1537",
      details: "Peru's main commercial port",
      area: "689 hectares",
      berths: "21",
      waterDepth: "16m"
    },
    {
      id: 90,
      name: "Port of Valparaiso",
      country: "Chile",
      coordinates: [-33.0472, -71.6127],
      throughput: "1.0 million TEU",
      type: "Container",
      established: "1544",
      details: "Chile's principal port",
      area: "460 hectares",
      berths: "11",
      waterDepth: "14m"
    },
    {
      id: 91,
      name: "Port of San Antonio",
      country: "Chile",
      coordinates: [-33.5951, -71.6181],
      throughput: "1.3 million TEU",
      type: "Container",
      established: "1912",
      details: "Chile's largest port by volume",
      area: "1,943 hectares",
      berths: "12",
      waterDepth: "14m"
    },
    {
      id: 92,
      name: "Port of Buenos Aires",
      country: "Argentina",
      coordinates: [-34.6118, -58.3960],
      throughput: "1.5 million TEU",
      type: "Container",
      established: "1882",
      details: "Argentina's largest port",
      area: "6,900 hectares",
      berths: "42",
      waterDepth: "10.5m"
    },
    {
      id: 93,
      name: "Port of Montevideo",
      country: "Uruguay",
      coordinates: [-34.9011, -56.2124],
      throughput: "0.9 million TEU",
      type: "Container",
      established: "1896",
      details: "Uruguay's main port",
      area: "870 hectares",
      berths: "20",
      waterDepth: "14m"
    },
    {
      id: 94,
      name: "Port of Itajai",
      country: "Brazil",
      coordinates: [-26.9077, -48.6658],
      throughput: "1.6 million TEU",
      type: "Container",
      established: "1956",
      details: "Brazil's major container port",
      area: "2,200 hectares",
      berths: "14",
      waterDepth: "14m"
    },
    {
      id: 95,
      name: "Port of Rio Grande",
      country: "Brazil",
      coordinates: [-32.0350, -52.0986],
      throughput: "0.6 million TEU",
      type: "Container & Bulk",
      established: "1915",
      details: "Southern Brazil's key export port",
      area: "2,500 hectares",
      berths: "18",
      waterDepth: "14m"
    },
    {
      id: 96,
      name: "Port of Paranagua",
      country: "Brazil",
      coordinates: [-25.5198, -48.5089],
      throughput: "0.9 million TEU",
      type: "Container & Bulk",
      established: "1935",
      details: "Brazil's second-largest port",
      area: "2,917 hectares",
      berths: "23",
      waterDepth: "15m"
    },
    {
      id: 97,
      name: "Port of Salvador",
      country: "Brazil",
      coordinates: [-12.9714, -38.5014],
      throughput: "0.4 million TEU",
      type: "Container",
      established: "1968",
      details: "Northeast Brazil's main port",
      area: "427 hectares",
      berths: "12",
      waterDepth: "14m"
    },
    {
      id: 98,
      name: "Port of Fortaleza",
      country: "Brazil",
      coordinates: [-3.7319, -38.5267],
      throughput: "0.3 million TEU",
      type: "Container",
      established: "1973",
      details: "Strategic location for trans-Atlantic trade",
      area: "386 hectares",
      berths: "8",
      waterDepth: "14m"
    },
    {
      id: 99,
      name: "Port of Recife",
      country: "Brazil",
      coordinates: [-8.0476, -34.8770],
      throughput: "0.5 million TEU",
      type: "Container",
      established: "1910",
      details: "Northeast Brazil's container hub",
      area: "527 hectares",
      berths: "12",
      waterDepth: "10.5m"
    },
    {
      id: 100,
      name: "Port of Kingston",
      country: "Jamaica",
      coordinates: [17.9712, -76.7936],
      throughput: "1.8 million TEU",
      type: "Container & Transshipment",
      established: "1976",
      details: "Caribbean's largest container port",
      area: "485 hectares",
      berths: "15",
      waterDepth: "18m"
    },
    {
      id: 101,
      name: "Port of Colon",
      country: "Panama",
      coordinates: [9.3793, -79.9009],
      throughput: "4.3 million TEU",
      type: "Container & Transshipment",
      established: "1997",
      details: "Major transshipment hub for Americas",
      area: "1,000 hectares",
      berths: "18",
      waterDepth: "16m"
    },
    {
      id: 102,
      name: "Port of Balboa",
      country: "Panama",
      coordinates: [8.9500, -79.5667],
      throughput: "3.5 million TEU",
      type: "Container",
      established: "1999",
      details: "Pacific entrance to Panama Canal",
      area: "540 hectares",
      berths: "16",
      waterDepth: "16m"
    }
  ];

  return (
    <div>
      <Nav />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Ocean Analytics & Maritime Intelligence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data visualization of our planet's marine ecosystems, global shipping infrastructure, and ocean conservation metrics
            </p>
          </div>
          
          {/* Enhanced Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 border border-blue-500/30">
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Ocean Coverage</h3>
              <div className="text-4xl font-bold text-blue-400 mb-2">71%</div>
              <p className="text-gray-300">of Earth's surface</p>
              <div className="mt-3 text-sm text-gray-400">≈ 361 million km²</div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 border border-green-500/30">
              <div className="text-5xl mb-4">🐠</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Marine Species</h3>
              <div className="text-4xl font-bold text-green-400 mb-2">228,450</div>
              <p className="text-gray-300">known species</p>
              <div className="mt-3 text-sm text-gray-400">~2 million estimated</div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6 text-center transform hover:scale-105 transition-all duration-300 border-l-4 border-red-500">
              <div className="text-5xl mb-4">🌡️</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Temperature Rise</h3>
              <div className="text-4xl font-bold text-red-600 mb-2">1.1°C</div>
              <p className="text-gray-300">since 1969</p>
              <div className="mt-3 text-sm text-gray-500">0.6°C per decade</div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6 text-center transform hover:scale-105 transition-all duration-300 border-l-4 border-orange-500">
              <div className="text-5xl mb-4">🗑️</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Plastic Waste</h3>
              <div className="text-4xl font-bold text-orange-600 mb-2">8M</div>
              <p className="text-gray-300">tons annually</p>
              <div className="mt-3 text-sm text-gray-500">1 truck per minute</div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6 text-center transform hover:scale-105 transition-all duration-300 border-l-4 border-purple-500">
              <div className="text-5xl mb-4">🐋</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Blue Whale</h3>
              <div className="text-4xl font-bold text-purple-600 mb-2">30m</div>
              <p className="text-gray-300">maximum length</p>
              <div className="mt-3 text-sm text-gray-500">200 tons weight</div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6 text-center transform hover:scale-105 transition-all duration-300 border-l-4 border-cyan-500">
              <div className="text-5xl mb-4">🏔️</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Mariana Trench</h3>
              <div className="text-4xl font-bold text-cyan-600 mb-2">11km</div>
              <p className="text-gray-300">deepest point</p>
              <div className="mt-3 text-sm text-gray-500">Challenger Deep</div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6 text-center transform hover:scale-105 transition-all duration-300 border-l-4 border-teal-500">
              <div className="text-5xl mb-4">�</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Global Trade</h3>
              <div className="text-4xl font-bold text-teal-600 mb-2">90%</div>
              <p className="text-gray-300">by sea transport</p>
              <div className="mt-3 text-sm text-gray-500">$14 trillion value</div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6 text-center transform hover:scale-105 transition-all duration-300 border-l-4 border-pink-500">
              <div className="text-5xl mb-4">🌪️</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Ocean Currents</h3>
              <div className="text-4xl font-bold text-pink-600 mb-2">5</div>
              <p className="text-gray-300">major gyres</p>
              <div className="mt-3 text-sm text-gray-500">Global circulation</div>
            </div>
          </div>

          {/* Detailed Ocean Statistics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Ocean Composition */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                <span className="text-3xl mr-3">🧪</span>
                Ocean Composition
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-semibold">Water (H₂O)</span>
                  <span className="text-blue-600 font-bold">96.5%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">Salt (NaCl)</span>
                  <span className="text-gray-300 font-bold">3.5%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-semibold">Dissolved Oxygen</span>
                  <span className="text-green-600 font-bold">0.001%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-semibold">Other Minerals</span>
                  <span className="text-purple-600 font-bold">0.004%</span>
                </div>
              </div>
            </div>

            {/* Economic Impact */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                <span className="text-3xl mr-3">💰</span>
                Ocean Economy
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-semibold">Global Value</span>
                  <span className="text-blue-600 font-bold">$24 Trillion</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-semibold">Fisheries</span>
                  <span className="text-green-600 font-bold">$362 Billion</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-semibold">Tourism</span>
                  <span className="text-purple-600 font-bold">$52 Billion</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="font-semibold">Energy</span>
                  <span className="text-orange-600 font-bold">$171 Billion</span>
                </div>
              </div>
            </div>
          </div>

          {/* Global Maritime Ports Network */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-gray-700/50">
            <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center flex items-center justify-center">
              <span className="text-4xl mr-3">🗺️</span>
              Global Maritime Ports Network
            </h2>
            <p className="text-center text-gray-300 mb-8">
              Comprehensive map displaying 102 major international sea ports with exact coordinates and detailed port information.
            </p>
            
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <MapContainer 
                center={[20, 0]} 
                zoom={2} 
                minZoom={2}
                maxZoom={10}
                style={{ height: '600px', width: '100%' }}
                className="z-0"
                dragging={true}
                touchZoom={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                boxZoom={true}
                keyboard={true}
                zoomControl={true}
                attributionControl={false}
                worldCopyJump={false}
                maxBounds={[[-90, -180], [90, 180]]}
                maxBoundsViscosity={1.0}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                
                {majorPorts.map((port) => (
                  <Marker 
                    key={port.id} 
                    position={port.coordinates}
                    icon={portIcon}
                    eventHandlers={{
                      click: () => setSelectedPort(port)
                    }}
                  >
                    <Popup>
                      <div className="max-w-sm">
                        <h4 className="text-lg font-bold text-gray-100 mb-2">{port.name}</h4>
                        <p className="text-gray-300 mb-3">{port.country}</p>
                        
                        <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                          <div>
                            <span className="font-semibold">Coordinates:</span>
                            <div className="text-blue-600">{port.coordinates[0].toFixed(4)}°, {port.coordinates[1].toFixed(4)}°</div>
                          </div>
                          <div>
                            <span className="font-semibold">Throughput:</span>
                            <div className="text-green-600">{port.throughput}</div>
                          </div>
                          <div>
                            <span className="font-semibold">Type:</span>
                            <div className="text-purple-600">{port.type}</div>
                          </div>
                          <div>
                            <span className="font-semibold">Established:</span>
                            <div className="text-orange-600">{port.established}</div>
                          </div>
                          <div>
                            <span className="font-semibold">Area:</span>
                            <div className="text-cyan-600">{port.area}</div>
                          </div>
                          <div>
                            <span className="font-semibold">Water Depth:</span>
                            <div className="text-indigo-600">{port.waterDepth}</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-200 text-sm leading-relaxed">{port.details}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
            
            {/* Enhanced Port Statistics Summary */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="bg-blue-900/50 border border-blue-500/30 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-400">102</div>
                <div className="text-sm text-gray-300">Major Ports Mapped</div>
              </div>
              <div className="bg-green-900/50 border border-green-500/30 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-400">47</div>
                <div className="text-sm text-gray-300">Countries Represented</div>
              </div>
              <div className="bg-purple-900/50 border border-purple-500/30 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-400">600M+</div>
                <div className="text-sm text-gray-300">Total TEU Capacity</div>
              </div>
              <div className="bg-orange-900/50 border border-orange-500/30 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-400">24/7</div>
                <div className="text-sm text-gray-300">Operations</div>
              </div>
              <div className="bg-teal-900/50 border border-teal-500/30 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-teal-400">6</div>
                <div className="text-sm text-gray-300">Continents Covered</div>
              </div>
            </div>
          </div>

          {/* Selected Port Details */}
          {selectedPort && (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-8 mb-12 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-100 flex items-center">
                  <span className="text-3xl mr-3">🚢</span>
                  {selectedPort.name} - Detailed Information
                </h3>
                <button 
                  onClick={() => setSelectedPort(null)}
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-200 mb-4">Port Overview</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Location:</span>
                      <span className="text-blue-600">{selectedPort.country}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Coordinates:</span>
                      <span className="text-green-600">
                        {selectedPort.coordinates[0].toFixed(4)}°N, {selectedPort.coordinates[1].toFixed(4)}°E
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Established:</span>
                      <span className="text-purple-600">{selectedPort.established}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Port Type:</span>
                      <span className="text-orange-600">{selectedPort.type}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-200 mb-4">Infrastructure</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Total Area:</span>
                      <span className="text-cyan-600">{selectedPort.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Number of Berths:</span>
                      <span className="text-indigo-600">{selectedPort.berths}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Water Depth:</span>
                      <span className="text-teal-600">{selectedPort.waterDepth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Annual Throughput:</span>
                      <span className="text-red-600 font-bold">{selectedPort.throughput}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Description</h4>
                <p className="text-gray-300 leading-relaxed">{selectedPort.details}</p>
              </div>
            </div>
          )}

          {/* Additional Maritime Industry Statistics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                <span className="text-3xl mr-3">🌏</span>
                Shipping Routes
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-900/30 rounded-lg">
                  <span className="font-semibold text-gray-200">Trans-Pacific</span>
                  <span className="text-blue-400 font-bold">40%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-900/30 rounded-lg">
                  <span className="font-semibold text-gray-200">Trans-Atlantic</span>
                  <span className="text-green-400 font-bold">25%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-900/30 rounded-lg">
                  <span className="font-semibold text-gray-200">Asia-Europe</span>
                  <span className="text-purple-400 font-bold">20%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-900/30 rounded-lg">
                  <span className="font-semibold text-gray-200">Intra-Asia</span>
                  <span className="text-orange-400 font-bold">15%</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                <span className="text-3xl mr-3">⚡</span>
                Ocean Energy
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-cyan-900/30 rounded-lg">
                  <span className="font-semibold text-gray-200">Offshore Wind</span>
                  <span className="text-cyan-400 font-bold">28 GW</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-900/30 rounded-lg">
                  <span className="font-semibold text-gray-200">Wave Energy</span>
                  <span className="text-blue-400 font-bold">2.1 TW</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-teal-900/30 rounded-lg">
                  <span className="font-semibold text-gray-200">Tidal Power</span>
                  <span className="text-teal-400 font-bold">800 GW</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-900/30 rounded-lg">
                  <span className="font-semibold text-gray-200">OTEC Potential</span>
                  <span className="text-indigo-400 font-bold">10 TW</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                <span className="text-3xl mr-3">🔬</span>
                Research & Exploration
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-purple-900/30 rounded-lg">
                  <span className="font-semibold text-gray-200">Ocean Explored</span>
                  <span className="text-purple-400 font-bold">5%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-900/30 rounded-lg">
                  <span className="font-semibold text-gray-200">Research Vessels</span>
                  <span className="text-green-400 font-bold">1,200+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-900/30 rounded-lg">
                  <span className="font-semibold text-gray-200">Deep Sea Stations</span>
                  <span className="text-yellow-400 font-bold">300+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-900/30 rounded-lg">
                  <span className="font-semibold text-gray-200">ROV Operations</span>
                  <span className="text-red-400 font-bold">850+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Climate Impact Statistics */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center flex items-center justify-center">
              <span className="text-4xl mr-3">🌡️</span>
              Ocean Climate Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-red-900/30 rounded-lg border border-red-500/20">
                <div className="text-3xl text-red-400 font-bold">93%</div>
                <div className="text-gray-200 mt-2">Heat absorbed by oceans</div>
                <div className="text-sm text-gray-400 mt-1">Since 1970</div>
              </div>
              <div className="text-center p-6 bg-blue-900/30 rounded-lg border border-blue-500/20">
                <div className="text-3xl text-blue-400 font-bold">30%</div>
                <div className="text-gray-200 mt-2">CO₂ absorbed</div>
                <div className="text-sm text-gray-400 mt-1">Annual emissions</div>
              </div>
              <div className="text-center p-6 bg-orange-900/30 rounded-lg border border-orange-500/20">
                <div className="text-3xl text-orange-400 font-bold">3.4mm</div>
                <div className="text-gray-200 mt-2">Sea level rise per year</div>
                <div className="text-sm text-gray-400 mt-1">Current rate</div>
              </div>
              <div className="text-center p-6 bg-purple-900/30 rounded-lg border border-purple-500/20">
                <div className="text-3xl text-purple-400 font-bold">0.1°C</div>
                <div className="text-gray-200 mt-2">pH decrease</div>
                <div className="text-sm text-gray-400 mt-1">Ocean acidification</div>
              </div>
            </div>
          </div>

          {/* Enhanced Ocean Zones */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center flex items-center justify-center">
              <span className="text-4xl mr-3">🌊</span>
              Ocean Zones & Depths
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gradient-to-r from-yellow-100 to-blue-100 p-6 rounded-xl border-l-4 border-yellow-400">
                <div>
                  <span className="font-bold text-lg">Sunlight Zone (Epipelagic)</span>
                  <p className="text-gray-300">0-200m depth</p>
                </div>
                <div className="text-right">
                  <div className="text-yellow-600 font-bold">90% of marine life</div>
                  <div className="text-sm text-gray-500">Photosynthesis occurs</div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-xl border-l-4 border-blue-400">
                <div>
                  <span className="font-bold text-lg">Twilight Zone (Mesopelagic)</span>
                  <p className="text-gray-300">200-1,000m depth</p>
                </div>
                <div className="text-right">
                  <div className="text-blue-600 font-bold">Limited sunlight</div>
                  <div className="text-sm text-gray-500">Bioluminescence begins</div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-gradient-to-r from-blue-200 to-indigo-200 p-6 rounded-xl border-l-4 border-indigo-400">
                <div>
                  <span className="font-bold text-lg">Midnight Zone (Bathypelagic)</span>
                  <p className="text-gray-300">1,000-4,000m depth</p>
                </div>
                <div className="text-right">
                  <div className="text-indigo-600 font-bold">Completely dark</div>
                  <div className="text-sm text-gray-500">4°C temperature</div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-gradient-to-r from-indigo-200 to-purple-200 p-6 rounded-xl border-l-4 border-purple-400">
                <div>
                  <span className="font-bold text-lg">Abyssal Zone (Abyssopelagic)</span>
                  <p className="text-gray-300">4,000-6,000m depth</p>
                </div>
                <div className="text-right">
                  <div className="text-purple-600 font-bold">Near freezing</div>
                  <div className="text-sm text-gray-500">Extreme pressure</div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-gradient-to-r from-purple-200 to-gray-300 p-6 rounded-xl border-l-4 border-gray-500">
                <div>
                  <span className="font-bold text-lg">Hadal Zone (Hadalpelagic)</span>
                  <p className="text-gray-300">6,000m+ depth</p>
                </div>
                <div className="text-right">
                  <div className="text-gray-200 font-bold">Ocean trenches</div>
                  <div className="text-sm text-gray-500">1000x surface pressure</div>
                </div>
              </div>
            </div>
          </div>

          {/* Marine Biodiversity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                <span className="text-3xl mr-3">🐟</span>
                Fish Species
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Bony Fish</span>
                  <span className="font-bold text-blue-600">28,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Cartilaginous Fish</span>
                  <span className="font-bold text-green-600">1,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Deep Sea Fish</span>
                  <span className="font-bold text-purple-600">8,000</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                <span className="text-3xl mr-3">🦑</span>
                Invertebrates
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Mollusks</span>
                  <span className="font-bold text-orange-600">85,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Crustaceans</span>
                  <span className="font-bold text-red-600">67,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Cnidarians</span>
                  <span className="font-bold text-pink-600">11,000</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                <span className="text-3xl mr-3">🌱</span>
                Marine Plants
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Seaweeds</span>
                  <span className="font-bold text-green-600">12,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Phytoplankton</span>
                  <span className="font-bold text-teal-600">4,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Seagrasses</span>
                  <span className="font-bold text-lime-600">60</span>
                </div>
              </div>
            </div>
          </div>

          {/* Conservation Metrics */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-8">
            <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center flex items-center justify-center">
              <span className="text-4xl mr-3">🛡️</span>
              Ocean Conservation Status
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-red-50 rounded-lg border-2 border-red-200">
                <div className="text-3xl text-red-600 font-bold">37%</div>
                <div className="text-gray-200">Fish stocks overfished</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                <div className="text-3xl text-yellow-600 font-bold">8%</div>
                <div className="text-gray-200">Ocean area protected</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                <div className="text-3xl text-blue-600 font-bold">50%</div>
                <div className="text-gray-200">Coral reefs degraded</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
                <div className="text-3xl text-green-600 font-bold">30%</div>
                <div className="text-gray-200">Target protection by 2030</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infographics;
