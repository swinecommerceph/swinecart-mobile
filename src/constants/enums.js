import kebabCase from 'lodash/kebabCase';

export const types = [
  { key: 'boar', title: 'Boar' },
  { key: 'sow', title: 'Sow' },
  { key: 'gilt', title: 'Gilt' },
  { key: 'semen', title: 'Semen' },
];

export const houseTypes = [
  { key: 'tunnelventilated', text: 'Tunnel Ventilated' },
  { key: 'opensided', text: 'Open Sided' },
];

export const apiErrors = {
  'TIMEOUT_ERROR': true,
  'CLIENT_ERROR': true,
  'NETWORK_ERROR': true,
};

export const provinces = [
  'Abra',
  'Agusan del Norte',
  'Agusan del Sur',
  'Aklan',
  'Albay',
  'Antique',
  'Apayao',
  'Aurora',
  'Basilan',
  'Bataan',
  'Batanes',
  'Batangas',
  'Benguet',
  'Biliran',
  'Bohol',
  'Bukidnon',
  'Bulacan',
  'Cagayan',
  'Camarines Norte',
  'Camarines Sur',
  'Camiguin',
  'Capiz',
  'Catanduanes',
  'Cavite',
  'Cebu',
  'Compostela Valley',
  'Davao Occidental',
  'Davao Oriental',
  'Davao del Norte',
  'Davao del Sur',
  'Dinagat Islands',
  'Eastern Samar',
  'Guimaras',
  'Ifugao',
  'Ilocos Norte',
  'Ilocos Sur',
  'Iloilo',
  'Isabela',
  'Kalinga',
  'La Union',
  'Laguna',
  'Lanao del Norte',
  'Lanao del Sur',
  'Leyte',
  'Maguindanao',
  'Marinduque',
  'Masbate',
  'Misamis Occidental',
  'Misamis Oriental',
  'Mountain Province',
  'Negros Occidental',
  'Negros Oriental',
  'North Cotabato',
  'Northern Samar',
  'Nueva Ecija',
  'Nueva Vizcaya',
  'Occidental Mindoro',
  'Oriental Mindoro',
  'Palawan',
  'Pampanga',
  'Pangasinan',
  'Quezon',
  'Quirino',
  'Rizal',
  'Romblon',
  'Sarangani',
  'Siquijor',
  'Sorsogon',
  'South Cotabato',
  'Southern Leyte',
  'Sultan Kudarat',
  'Sulu',
  'Surigao del Norte',
  'Surigao del Sur',
  'Tarlac',
  'Tawi-tawi',
  'Western Samar',
  'Zambales',
  'Zamboanga Sibugay',
  'Zamboanga del Norte',
  'Zamboanga del Sur'
].map(province => ({ text: province, key: kebabCase(province) }));