import firestore from '@react-native-firebase/firestore'

interface Planet {
  name: string
  type: string
  resume: string
  introduction: string
  icon: string
  image: string
  features: {
    orbitalPeriod: string
    orbitalSpeed: string
    rotationDuration: string
    radius: string
    diameter: string
    sunDistance: string
    oneWayLightToTheSun: string
    temperature: string
    gravity: string
  }
  composition: string
  curiosities: string[]
}

const stars = [
  {
    name: 'Sol',
    type: 'stars',
    image:
      'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Fimages%2Fsun.png?alt=media&token=09bb3c7f-7392-4902-81de-4801e1aa01bd',
    resume:
      'O Sol é a estrela central do Sistema Solar e fonte primária de energia.',
    introduction:
      'O Sol é uma estrela de sequência principal do tipo espectral G2V.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Ficons%2Fplanets%2Fsun.svg?alt=media&token=46f74f7d-d255-4717-a4a7-14475f641c94',
    features: {
      orbitalPeriod: 'Milhões de anos (orbita o centro da Via Láctea)',
      orbitalSpeed: '220 km/s',
      rotationDuration: '25,4 dias',
      radius: '695.700 km',
      diameter: '1.392.700 km',
      sunDistance: '27.000 anos-luz do centro da Via Láctea',
      oneWayLightToTheSun: '8 minutos e 20 segundos',
      temperature: '5.500 °C (superfície)',
      gravity: '274 m/s² (na superfície)',
    },
    composition: 'Hidrogênio (73,5%) e hélio (24,9%)',
    curiosities: [
      'O Sol é responsável por mais de 99% da massa do Sistema Solar.',
      'Sua energia é gerada através de reações nucleares de fusão no núcleo.',
      'Possui uma camada externa chamada de coroa, que é visível durante um eclipse solar total.',
    ],
  },
]

const galaxies = [
  {
    name: 'Andrômeda',
    type: 'galaxies',
    resume:
      'A Galáxia de Andrômeda é a galáxia espiral mais próxima da Via Láctea.',
    introduction:
      'Andrômeda, também conhecida como Messier 31, é uma galáxia espiral localizada a cerca de 2,537 milhões de anos-luz da Terra.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Ficons%2Fgalaxies%2Fgalaxy-svgrepo-com.svg?alt=media&token=9dae5534-bf12-49ea-b80e-bc4608ba952a',
    features: {
      orbitalPeriod: 'N/A',
      orbitalSpeed: 'N/A',
      rotationDuration: 'N/A',
      radius: '110.000 anos-luz',
      diameter: '220.000 anos-luz',
      sunDistance: '2,537 milhões de anos-luz',
      oneWayLightToTheSun: '2,537 milhões de anos',
      temperature: 'N/A',
      gravity: 'N/A',
    },
    composition:
      'Andrômeda é composta por bilhões de estrelas, nuvens de gás e poeira cósmica.',
    curiosities: [
      'Andrômeda é a galáxia espiral mais próxima da Via Láctea.',
      'É possível observar a galáxia a olho nu em locais com baixa poluição luminosa.',
      'Andrômeda está em rota de colisão com a Via Láctea e estima-se que as duas galáxias se fundirão em bilhões de anos.',
    ],
  },
  {
    name: 'Via Láctea',
    type: 'galaxies',
    resume:
      'A Via Láctea é a galáxia onde nosso Sistema Solar está localizado.',
    introduction:
      'A Via Láctea é uma galáxia espiral barrada que abriga bilhões de estrelas, incluindo o nosso sol.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Ficons%2Fgalaxies%2FGalaxy-595b40b65ba036ed117d2d51.svg?alt=media&token=b34d67e7-2fcf-42a6-86a2-9e1ea82863a6',
    features: {
      orbitalPeriod: '225-250 milhões de anos',
      orbitalSpeed: '220 km/s',
      rotationDuration: '250 milhões de anos',
      radius: '52.850 anos-luz',
      diameter: '100.000 anos-luz',
      sunDistance: '26.000 anos-luz',
      oneWayLightToTheSun: '26.000 anos',
      temperature: '10.000 °C',
      gravity: '9,81 m/s²',
    },
    composition: 'Estrelas, planetas, gás interestelar, poeira cósmica',
    curiosities: [
      'A Via Láctea contém bilhões de estrelas e é o lar do nosso Sistema Solar.',
      'A galáxia possui uma barra central de estrelas que se estende por milhares de anos-luz.',
    ],
  },
]

const planetas: Planet[] = [
  {
    name: 'Mercúrio',
    type: 'planets',
    image:
      'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Fimages%2Fmercury.png?alt=media&token=5dcce92f-6c89-4e5f-b948-1afd6c275a9a&_gl=1*1uiaze2*_ga*MTIxMzU3MjkwLjE2ODUzMTI2MDI.*_ga_CW55HF8NVT*MTY4NjE5Mzc5MS4xMS4xLjE2ODYyMDA4OTguMC4wLjA.',
    resume:
      'Mercúrio é o menor e mais próximo planeta do Sol no Sistema Solar.',
    introduction:
      'Mercúrio é um planeta rochoso e desprovido de atmosfera significativa.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Ficons%2Fplanets%2Fmercury.svg?alt=media&token=9958ca74-61dc-4140-a152-200ba1eb2a84&_gl=1*b81jbp*_ga*MTIxMzU3MjkwLjE2ODUzMTI2MDI.*_ga_CW55HF8NVT*MTY4NjE5Mzc5MS4xMS4xLjE2ODYxOTU1MDkuMC4wLjA.',
    features: {
      orbitalPeriod: '87.97 dias',
      orbitalSpeed: '47.87 km/s',
      rotationDuration: '58.65 dias',
      radius: '2.439,7 km',
      diameter: '4.879,4 km',
      sunDistance: '57.91 milhões de km',
      oneWayLightToTheSun: '3.2 minutos',
      temperature: 'mínima de -173°C e máxima de 427°C',
      gravity: '3.7 m/s²',
    },
    composition: 'Mercúrio é composto principalmente de silicatos e metais.',
    curiosities: [
      'Mercúrio é o planeta mais próximo do Sol.',
      'É o segundo menor planeta do Sistema Solar.',
      'A sua superfície é coberta por crateras de impacto.',
    ],
  },
  {
    name: 'Vênus',
    type: 'planets',
    resume: 'Vênus é o segundo planeta do Sistema Solar, mais próximo à Terra.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Fimages%2Fvenus.png?alt=media&token=ad9ec0af-76a9-423b-820d-174254dc729a&_gl=1*e3vprm*_ga*MTIxMzU3MjkwLjE2ODUzMTI2MDI.*_ga_CW55HF8NVT*MTY4NjE5Mzc5MS4xMS4xLjE2ODYyMDA5NDIuMC4wLjA.',
    introduction:
      'Vênus é conhecido por sua atmosfera densa e por ser o objeto mais brilhante no céu noturno, depois da Lua.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Ficons%2Fplanets%2Fvenus.svg?alt=media&token=328df8dd-ecd0-4ab2-9a45-b839fcba0145&_gl=1*hbehai*_ga*MTIxMzU3MjkwLjE2ODUzMTI2MDI.*_ga_CW55HF8NVT*MTY4NjE5Mzc5MS4xMS4xLjE2ODYxOTU1MzYuMC4wLjA.',
    features: {
      orbitalPeriod: '224.70 dias',
      orbitalSpeed: '35.02 km/s',
      rotationDuration: '243.02 dias',
      radius: '6.051,8 km',
      diameter: '12.104 km',
      sunDistance: '108.2 milhões de km',
      oneWayLightToTheSun: '6 minutos',
      temperature: 'média de 462°C',
      gravity: '8.87 m/s²',
    },
    composition:
      'Vênus é composto principalmente de dióxido de carbono e uma densa atmosfera de dióxido de enxofre.',
    curiosities: [
      'Vênus é o planeta mais quente do Sistema Solar.',
      'Possui uma atmosfera densa que gera um efeito estufa descontrolado.',
      'A sua superfície é coberta por crateras, vulcões e planícies lavadas.',
    ],
  },
  {
    name: 'Terra',
    type: 'planets',
    resume:
      'A Terra é o terceiro planeta do Sistema Solar e o único conhecido a abrigar vida.',
    introduction:
      'A Terra possui uma atmosfera que suporta uma grande variedade de formas de vida.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Fimages%2Fearth.png?alt=media&token=808b06b5-0b7d-474d-9ec5-9439b334e3a3&_gl=1*1rvdyoz*_ga*MTIxMzU3MjkwLjE2ODUzMTI2MDI.*_ga_CW55HF8NVT*MTY4NjE5Mzc5MS4xMS4xLjE2ODYyMDA5NjIuMC4wLjA.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Ficons%2Fplanets%2Fearth.svg?alt=media&token=09c3d12c-4c22-4c76-a8d2-fb041c55d2f7&_gl=1*1nremar*_ga*MTIxMzU3MjkwLjE2ODUzMTI2MDI.*_ga_CW55HF8NVT*MTY4NjE5Mzc5MS4xMS4xLjE2ODYxOTU1NTMuMC4wLjA.',
    features: {
      orbitalPeriod: '365.26 dias',
      orbitalSpeed: '29.78 km/s',
      rotationDuration: '24 horas',
      radius: '6.371 km',
      diameter: '12.742 km',
      sunDistance: '149.6 milhões de km',
      oneWayLightToTheSun: '8.3 minutos',
      temperature: 'média de 15°C',
      gravity: '9.8 m/s²',
    },
    composition: 'A Terra é composta principalmente de rochas e minerais.',
    curiosities: [
      'A Terra é o único planeta conhecido a abrigar vida.',
      'Possui uma atmosfera rica em oxigênio.',
      'A sua superfície é coberta por oceanos, continentes e diversas formas de relevo.',
    ],
  },
  {
    name: 'Marte',
    type: 'planets',
    image:
      'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Fimages%2Fmars.png?alt=media&token=77358c7b-43fa-4c6f-bf5d-5adcd1e60969&_gl=1*15bnzgb*_ga*MTIxMzU3MjkwLjE2ODUzMTI2MDI.*_ga_CW55HF8NVT*MTY4NjE5Mzc5MS4xMS4xLjE2ODYyMDA5ODUuMC4wLjA.',
    resume:
      "Marte é o quarto planeta do Sistema Solar e é frequentemente chamado de 'Planeta Vermelho'.",
    introduction:
      'Marte é um planeta rochoso com uma fina atmosfera composta principalmente de dióxido de carbono.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Ficons%2Fplanets%2Fmars.svg?alt=media&token=cbf7fb14-fb78-4d6b-81c2-1b146645b35b&_gl=1*10euajv*_ga*MTIxMzU3MjkwLjE2ODUzMTI2MDI.*_ga_CW55HF8NVT*MTY4NjE5Mzc5MS4xMS4xLjE2ODYxOTU1NjYuMC4wLjA.',
    features: {
      orbitalPeriod: '686.98 dias',
      orbitalSpeed: '24.07 km/s',
      rotationDuration: '24.62 horas',
      radius: '3.389,5 km',
      diameter: '6.779 km',
      sunDistance: '227.9 milhões de km',
      oneWayLightToTheSun: '12.5 minutos',
      temperature: 'média de -63°C',
      gravity: '3.7 m/s²',
    },
    composition:
      'Marte é composto principalmente de silicatos e óxido de ferro.',
    curiosities: [
      'Marte possui montanhas, vales e uma gigantesca formação vulcânica chamada Olympus Mons.',
      'Acredita-se que Marte já teve água líquida em sua superfície.',
      'O planeta tem duas luas, Fobos e Deimos.',
    ],
  },
  {
    name: 'Júpiter',
    type: 'planets',
    image:
      'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Fimages%2Fjupiter.png?alt=media&token=98b8d85d-12ed-4f15-a33e-079d4b440d5b&_gl=1*qmpfjk*_ga*MTIxMzU3MjkwLjE2ODUzMTI2MDI.*_ga_CW55HF8NVT*MTY4NjE5Mzc5MS4xMS4xLjE2ODYyMDEwMDkuMC4wLjA.',
    resume:
      'Júpiter é o quinto planeta do Sistema Solar e é o maior planeta do nosso sistema planetário.',
    introduction:
      'Júpiter é um gigante gasoso e não possui uma superfície sólida.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Ficons%2Fplanets%2Fjupiter.svg?alt=media&token=b9c982e3-4f66-402e-a8ef-81ee451bdfd8&_gl=1*1q1vi5d*_ga*MTIxMzU3MjkwLjE2ODUzMTI2MDI.*_ga_CW55HF8NVT*MTY4NjE5Mzc5MS4xMS4xLjE2ODYxOTU1ODQuMC4wLjA.',
    features: {
      orbitalPeriod: '11.86 anos',
      orbitalSpeed: '13.07 km/s',
      rotationDuration: '9.93 horas',
      radius: '69.911 km',
      diameter: '139.820 km',
      sunDistance: '778.3 milhões de km',
      oneWayLightToTheSun: '43.3 minutos',
      temperature: 'média de -108°C',
      gravity: '24.79 m/s²',
    },
    composition: 'Júpiter é composto principalmente de hidrogênio e hélio.',
    curiosities: [
      'Júpiter possui uma atmosfera turbulenta com tempestades, como a Grande Mancha Vermelha.',
      'É o planeta com mais satélites naturais, sendo os quatro maiores conhecidos como as luas galileanas: Io, Europa, Ganimedes e Calisto.',
      'Júpiter tem um campo magnético extremamente forte.',
    ],
  },
  {
    name: 'Saturno',
    type: 'planets',
    image:
      'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Fimages%2Fsaturn.png?alt=media&token=aaf3e2cb-3e95-48ba-81de-55fd672207fd&_gl=1*1juzet2*_ga*MTIxMzU3MjkwLjE2ODUzMTI2MDI.*_ga_CW55HF8NVT*MTY4NjE5Mzc5MS4xMS4xLjE2ODYyMDEwMjMuMC4wLjA.',
    resume:
      'Saturno é o sexto planeta do Sistema Solar e é famoso por seus belos anéis.',
    introduction:
      'Saturno é um gigante gasoso, similar a Júpiter, e também não possui uma superfície sólida.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Ficons%2Fplanets%2Fsaturn.svg?alt=media&token=d1e7851f-88d8-4edd-960b-971fa0d9d19f&_gl=1*o6mp5z*_ga*MTIxMzU3MjkwLjE2ODUzMTI2MDI.*_ga_CW55HF8NVT*MTY4NjE5Mzc5MS4xMS4xLjE2ODYxOTU1OTkuMC4wLjA.',
    features: {
      orbitalPeriod: '29.46 anos',
      orbitalSpeed: '9.68 km/s',
      rotationDuration: '10.67 horas',
      radius: '58.232 km',
      diameter: '116.464 km',
      sunDistance: '1.4 bilhão de km',
      oneWayLightToTheSun: '1.3 horas',
      temperature: 'média de -139°C',
      gravity: '10.44 m/s²',
    },
    composition:
      'Saturno é composto principalmente de hidrogênio e hélio, assim como Júpiter.',
    curiosities: [
      'Saturno é conhecido por seus belos e proeminentes anéis, compostos principalmente de gelo e partículas de poeira.',
      'O planeta tem mais de 80 luas conhecidas, incluindo Titã, a maior delas.',
      'Saturno tem uma densidade tão baixa que flutuaria em água se houvesse um oceano grande o suficiente.',
    ],
  },
  {
    name: 'Urano',
    type: 'planets',
    image:
      'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Fimages%2Furanus.png?alt=media&token=42a3ef45-17bb-44ff-b552-050954363b98&_gl=1*1ilzdr0*_ga*MTIxMzU3MjkwLjE2ODUzMTI2MDI.*_ga_CW55HF8NVT*MTY4NjE5Mzc5MS4xMS4xLjE2ODYyMDEwNTMuMC4wLjA.',
    resume:
      'Urano é o sétimo planeta do Sistema Solar e é conhecido por seu eixo de rotação inclinado.',
    introduction:
      'Urano é um gigante gasoso e possui uma coloração azul-esverdeada distintiva.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Ficons%2Fplanets%2Furanus.svg?alt=media&token=c7574921-22b3-42e2-9d6c-5c2609e4eaa9&_gl=1*o807v9*_ga*MTIxMzU3MjkwLjE2ODUzMTI2MDI.*_ga_CW55HF8NVT*MTY4NjE5Mzc5MS4xMS4xLjE2ODYxOTU2MTEuMC4wLjA.',
    features: {
      orbitalPeriod: '84.02 anos',
      orbitalSpeed: '6.80 km/s',
      rotationDuration: '17.24 horas',
      radius: '25.362 km',
      diameter: '50.724 km',
      sunDistance: '2.9 bilhões de km',
      oneWayLightToTheSun: '2.8 horas',
      temperature: 'média de -197°C',
      gravity: '8.87 m/s²',
    },
    composition:
      'Urano é composto principalmente de hidrogênio e hélio, com traços de metano que dão a sua cor azul.',
    curiosities: [
      'Urano é conhecido por seu eixo de rotação incomum, que é quase paralelo ao plano de sua órbita ao redor do Sol.',
      'O planeta possui anéis e luas, sendo Miranda uma das mais interessantes com suas falhas geológicas.',
      'Urano é um dos planetas menos explorados do Sistema Solar.',
    ],
  },
  {
    name: 'Netuno',
    type: 'planets',
    image:
      'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Fimages%2Fneptune.png?alt=media&token=a9c22f92-37f4-4632-9931-b83ca3152fa8&_gl=1*1vw85ji*_ga*MTIxMzU3MjkwLjE2ODUzMTI2MDI.*_ga_CW55HF8NVT*MTY4NjE5Mzc5MS4xMS4xLjE2ODYyMDEwNjYuMC4wLjA.',
    resume: 'Netuno é o oitavo e último planeta do Sistema Solar.',
    introduction:
      'Netuno é um gigante gasoso, similar a Urano, e é conhecido por sua cor azul intensa.',
    icon: 'https://firebasestorage.googleapis.com/v0/b/sun-system-99d9f.appspot.com/o/space-entities%2Ficons%2Fplanets%2Fneptune.svg?alt=media&token=6edd3824-c7b4-46f7-9496-3c57c508b5d2&_gl=1*skj9r6*_ga*MTIxMzU3MjkwLjE2ODUzMTI2MDI.*_ga_CW55HF8NVT*MTY4NjE5Mzc5MS4xMS4xLjE2ODYxOTU2MjguMC4wLjA.',
    features: {
      orbitalPeriod: '164.79 anos',
      orbitalSpeed: '5.43 km/s',
      rotationDuration: '16.11 horas',
      radius: '24.622 km',
      diameter: '49.244 km',
      sunDistance: '4.5 bilhões de km',
      oneWayLightToTheSun: '4.1 horas',
      temperature: 'média de -201°C',
      gravity: '11.15 m/s²',
    },
    composition:
      'Netuno é composto principalmente de hidrogênio, hélio e metano.',
    curiosities: [
      'Netuno é o planeta mais distante do Sol.',
      'Possui ventos extremamente fortes, com velocidades que podem atingir mais de 2.000 km/h.',
      'Netuno tem 14 luas conhecidas, incluindo Tritão, que é um dos poucos satélites do Sistema Solar que tem movimento retrógrado.',
    ],
  },
]

export async function createPlanets() {
  const db = firestore()
  stars.forEach((planet) => {
    db.collection('space-entities').add(planet)
  })

  galaxies.forEach((planet) => {
    db.collection('space-entities').add(planet)
  })

  planetas.forEach((planet) => {
    db.collection('space-entities').add(planet)
  })
}
