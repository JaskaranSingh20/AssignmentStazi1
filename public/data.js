const CarData = [
  {
    id: 1,
    name: "Toyota RAV4",
    fuel: "Hybrid",
    average: "6.1km/1-litre",
    passengers: 4,
    gearType: "automatic",
    rentPrice: 440,
    date: "2022",
    image: "https://example.com/car1.jpg"
  },
  {
    id: 2,
    name: "BMW 3 Series",
    fuel: "Gasoline",
    average: "8.1km/1-litre",
    passengers: 4,
    gearType: "automatic",
    rentPrice: 350,
    date: "2021",
    image: "https://example.com/car2.jpg"
  },
  {
    id: 3,
    name: "Ford Focus",
    fuel: "Gasoline",
    average: "7.8km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 330,
    date: "2023",
    image: "https://example.com/car3.jpg"
  },
  {
    id: 4,
    name: "Honda Civic",
    fuel: "Gasoline",
    average: "7.6km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 340,
    date: "2022",
    image: "https://example.com/car4.jpg"
  },
  {
    id: 5,
    name: "Tesla Model 3",
    fuel: "Electric",
    average: "0.0km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 600,
    date: "2023",
    image: "https://example.com/car5.jpg"
  },
  {
    id: 6,
    name: "Audi A4",
    fuel: "Gasoline",
    average: "7.9km/1-litre",
    passengers: 4,
    gearType: "automatic",
    rentPrice: 370,
    date: "2021",
    image: "https://example.com/car6.jpg"
  },
  {
    id: 7,
    name: "Nissan Altima",
    fuel: "Gasoline",
    average: "7.4km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 350,
    date: "2022",
    image: "https://example.com/car7.jpg"
  },
  {
    id: 8,
    name: "Kia Optima",
    fuel: "Gasoline",
    average: "7.6km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 340,
    date: "2023",
    image: "https://example.com/car8.jpg"
  },
  {
    id: 9,
    name: "Subaru Outback",
    fuel: "Gasoline",
    average: "7.2km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 360,
    date: "2021",
    image: "https://example.com/car9.jpg"
  },
  {
    id: 10,
    name: "Mazda CX-5",
    fuel: "Gasoline",
    average: "7.7km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 330,
    date: "2022",
    image: "https://example.com/car10.jpg"
  },
  {
    id: 11,
    name: "Jeep Grand Cherokee",
    fuel: "Gasoline",
    average: "8.3km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 380,
    date: "2021",
    image: "https://example.com/car11.jpg"
  },
  {
    id: 12,
    name: "Lexus RX",
    fuel: "Gasoline",
    average: "7.8km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 370,
    date: "2023",
    image: "https://example.com/car12.jpg"
  },
  {
    id: 13,
    name: "Mercedes E-Class",
    fuel: "Gasoline",
    average: "8.0km/1-litre",
    passengers: 4,
    gearType: "automatic",
    rentPrice: 400,
    date: "2022",
    image: "https://example.com/car13.jpg"
  },
  {
    id: 14,
    name: "Volvo XC60",
    fuel: "Gasoline",
    average: "7.9km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 390,
    date: "2021",
    image: "https://example.com/car14.jpg"
  },
  {
    id: 15,
    name: "Toyota Corolla",
    fuel: "Gasoline",
    average: "7.6km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 360,
    date: "2022",
    image: "https://example.com/car15.jpg"
  },
  {
    id: 16,
    name: "Ford Fusion",
    fuel: "Gasoline",
    average: "7.5km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 350,
    date: "2023",
    image: "https://example.com/car16.jpg"
  },
  {
    id: 17,
    name: "Chevrolet Spark",
    fuel: "Gasoline",
    average: "7.4km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 340,
    date: "2022",
    image: "https://example.com/car17.jpg"
  },
  {
    id: 18,
    name: "Volkswagen Passat",
    fuel: "Gasoline",
    average: "7.7km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 330,
    date: "2021",
    image: "https://example.com/car18.jpg"
  },
  {
    id: 19,
    name: "Hyundai Elantra",
    fuel: "Gasoline",
    average: "7.8km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 370,
    date: "2023",
    image: "https://example.com/car19.jpg"
  },
  {
    id: 20,
    name: "Nissan Sentra",
    fuel: "Gasoline",
    average: "7.6km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 360,
    date: "2022",
    image: "https://example.com/car20.jpg"
  },
  {
    id: 21,
    name: "Kia Forte",
    fuel: "Gasoline",
    average: "7.2km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 340,
    date: "2021",
    image: "https://example.com/car21.jpg"
  },
  {
    id: 22,
    name: "Subaru Legacy",
    fuel: "Gasoline",
    average: "7.7km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 330,
    date: "2023",
    image: "https://example.com/car22.jpg"
  },
  {
    id: 23,
    name: "Mitsubishi Outlander",
    fuel: "Gasoline",
    average: "8.3km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 380,
    date: "2022",
    image: "https://example.com/car23.jpg"
  },
  {
    id: 24,
    name: "Jeep Wrangler",
    fuel: "Gasoline",
    average: "7.8km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 370,
    date: "2021",
    image: "https://example.com/car24.jpg"
  },
  {
    id: 25,
    name: "Mercedes C-Class",
    fuel: "Gasoline",
    average: "8.0km/1-litre",
    passengers: 4,
    gearType: "automatic",
    rentPrice: 400,
    date: "2023",
    image: "https://example.com/car25.jpg"
  },
  {
    id: 26,
    name: "Volvo S60",
    fuel: "Gasoline",
    average: "7.9km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 390,
    date: "2022",
    image: "https://example.com/car26.jpg"
  },
  {
    id: 27,
    name: "Toyota Camry",
    fuel: "Gasoline",
    average: "7.6km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 360,
    date: "2021",
    image: "https://example.com/car27.jpg"
  },
  {
    id: 28,
    name: "Ford Mustang",
    fuel: "Gasoline",
    average: "7.5km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 350,
    date: "2023",
    image: "https://example.com/car28.jpg"
  },
  {
    id: 29,
    name: "Chevrolet Malibu",
    fuel: "Gasoline",
    average: "7.4km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 340,
    date: "2022",
    image: "https://example.com/car29.jpg"
  },
  {
    id: 30,
    name: "Volkswagen Golf",
    fuel: "Gasoline",
    average: "7.7km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 330,
    date: "2021",
    image: "https://example.com/car30.jpg"
  },
  {
    id: 31,
    name: "Hyundai Sonata",
    fuel: "Gasoline",
    average: "7.8km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 370,
    date: "2023",
    image: "https://example.com/car31.jpg"
  },
  {
    id: 32,
    name: "Nissan Maxima",
    fuel: "Gasoline",
    average: "7.6km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 360,
    date: "2022",
    image: "https://example.com/car32.jpg"
  },
  {
    id: 33,
    name: "Kia Sorento",
    fuel: "Gasoline",
    average: "7.2km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 340,
    date: "2021",
    image: "https://example.com/car33.jpg"
  },
  {
    id: 34,
    name: "Subaru Forester",
    fuel: "Gasoline",
    average: "7.7km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 330,
    date: "2023",
    image: "https://example.com/car34.jpg"
  },
  {
    id: 35,
    name: "Mitsubishi Eclipse",
    fuel: "Gasoline",
    average: "8.3km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 380,
    date: "2022",
    image: "https://example.com/car35.jpg"
  },
  {
    id: 36,
    name: "Jeep Renegade",
    fuel: "Gasoline",
    average: "7.8km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 370,
    date: "2021",
    image: "https://example.com/car36.jpg"
  },
  {
    id: 37,
    name: "Mercedes-Benz",
    fuel: "Gasoline",
    average: "8.0km/1-litre",
    passengers: 4,
    gearType: "automatic",
    rentPrice: 400,
    date: "2023",
    image: "https://example.com/car37.jpg"
  },
  {
    id: 38,
    name: "Volvo XC90",
    fuel: "Gasoline",
    average: "7.9km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 390,
    date: "2022",
    image: "https://example.com/car38.jpg"
  },
  {
    id: 39,
    name: "Toyota Highlander",
    fuel: "Gasoline",
    average: "7.6km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 360,
    date: "2021",
    image: "https://example.com/car39.jpg"
  },
  {
    id: 40,
    name: "Ford Escape",
    fuel: "Gasoline",
    average: "7.5km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 350,
    date: "2023",
    image: "https://example.com/car40.jpg"
  },
  {
    id: 41,
    name: "Chevrolet Cruze",
    fuel: "Gasoline",
    average: "7.4km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 340,
    date: "2022",
    image: "https://example.com/car41.jpg"
  },
  {
    id: 42,
    name: "Volkswagen Jetta",
    fuel: "Gasoline",
    average: "7.7km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 330,
    date: "2021",
    image: "https://example.com/car42.jpg"
  },
  {
    id: 43,
    name: "Hyundai Tucson",
    fuel: "Gasoline",
    average: "7.8km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 370,
    date: "2023",
    image: "https://example.com/car43.jpg"
  },
  {
    id: 44,
    name: "Nissan Rogue",
    fuel: "Gasoline",
    average: "7.6km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 360,
    date: "2022",
    image: "https://example.com/car44.jpg"
  },
  {
    id: 45,
    name: "Kia Sportage",
    fuel: "Gasoline",
    average: "7.2km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 340,
    date: "2021",
    image: "https://example.com/car45.jpg"
  },
  {
    id: 46,
    name: "Subaru Crosstrek",
    fuel: "Gasoline",
    average: "7.7km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 330,
    date: "2023",
    image: "https://example.com/car46.jpg"
  },
  {
    id: 47,
    name: "Mitsubishi Mirage",
    fuel: "Gasoline",
    average: "8.3km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 380,
    date: "2022",
    image: "https://example.com/car47.jpg"
  },
  {
    id: 48,
    name: "Jeep Compass",
    fuel: "Gasoline",
    average: "7.8km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 370,
    date: "2021",
    image: "https://example.com/car48.jpg"
  },
  {
    id: 49,
    name: "Mercedes-Benz GLE",
    fuel: "Gasoline",
    average: "8.0km/1-litre",
    passengers: 4,
    gearType: "automatic",
    rentPrice: 400,
    date: "2023",
    image: "https://example.com/car49.jpg"
  },
  {
    id: 50,
    name: "Volvo XC40",
    fuel: "Gasoline",
    average: "7.9km/1-litre",
    passengers: 5,
    gearType: "automatic",
    rentPrice: 390,
    date: "2022",
    image: "https://example.com/car50.jpg"
  },
  {
    id: 51,
    name: "Toyota Corolla",
    fuel: "Gasoline",
    average: "7.2km/1-litre",
    passengers: 5,
    gearType: "automatic",
    date: "2023",
    rentPrice: 340
  },
  {
    id: 52,
    name: "Honda Civic",
    fuel: "Gasoline",
    average: "7.1km/1-litre",
    passengers: 5,
    gearType: "automatic",
    date: "2023",
    rentPrice: 335
  },
  {
    id: 53,
    name: "Ford Escape",
    fuel: "Gasoline",
    average: "8.0km/1-litre",
    passengers: 5,
    gearType: "automatic",
    date: "2023",
    rentPrice: 375
  },
  {
    id: 54,
    name: "Chevrolet Silverado",
    fuel: "Gasoline",
    average: "6.9km/1-litre",
    passengers: 5,
    gearType: "automatic",
    date: "2023",
    rentPrice: 410
  },
  {
    id: 55,
    name: "Hyundai Sonata",
    fuel: "Gasoline",
    average: "7.3km/1-litre",
    passengers: 5,
    gearType: "automatic",
    date: "2023",
    rentPrice: 350
  },
  {
    id: 56,
    name: "Volkswagen Golf",
    fuel: "Gasoline",
    average: "7.8km/1-litre",
    passengers: 5,
    gearType: "automatic",
    date: "2023",
    rentPrice: 360
  },
  {
    id: 57,
    name: "Kia Sorento",
    fuel: "Gasoline",
    average: "8.2km/1-litre",
    passengers: 7,
    gearType: "automatic",
    date: "2023",
    rentPrice: 410
  },
  {
    id: 58,
    name: "Subaru Legacy",
    fuel: "Gasoline",
    average: "7.4km/1-litre",
    passengers: 5,
    gearType: "automatic",
    date: "2023",
    rentPrice: 355
  },
  {
    id: 59,
    name: "Lexus ES",
    fuel: "Hybrid",
    average: "6.6km/1-litre",
    passengers: 5,
    gearType: "automatic",
    date: "2023",
    rentPrice: 520
  },
  {
    id: 60,
    name: "Audi Q8",
    fuel: "Hybrid",
    average: "4.6km/1-litre",
    passengers: 4,
    gearType: "automatic",
    date: "2023",
    rentPrice: 420
  }
  
]

export default CarData;