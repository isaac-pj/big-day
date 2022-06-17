export default Object.freeze([
  {
    key: 0,
    title: 'Padrinhos',
    content: [
      {
        title: 'Camisa Branca',
        description: 'Manga 3/4, manga dobrada, ou curta',
        alert: '',
        colors: {
          name: 'white',
          hex: '#ffffff',
          rgb: '255, 255, 255',
          cmyk: '0, 0, 0, 0',
        },
        image: 'src/assets/images/clothes/white-shirt.png',
        reverse: false,
        key: 0,
      },
      {
        title: 'Calça Cinza',
        description: 'Calça social ou esporte fino',
        alert: '',
        colors: {
          name: 'gray-dark',
          hex: '#c2ccca',
          rgb: '194, 204, 202',
          cmyk: '5, 0, 1, 20',
        },
        image: 'src/assets/images/clothes/gray-pants.png',
        reverse: true,
        key: 1,
      },
      {
        title: 'Sapato Marrom',
        description: 'Sapato social ou sapatenis',
        alert: 'qualquer tonalidade de marrom',
        colors: {
          name: 'brown-mid',
          hex: '#936037',
          rgb: '147, 96, 55',
          cmyk: '0, 35, 63, 42',
        },
        image: 'src/assets/images/clothes/brown-shoe.png',
        reverse: false,
        key: 2,
      },
    ],
  },
  {
    key: 1,
    title: 'Madrinhas',
    content: [
      {
        title: 'Vestido \nverde escuro',
        description: 'Vestido longo com ou sem manga',
        alert: 'Evitar decotes e fendas muito grandes',
        colors: {
          name: 'green-dark',
          hex: '#799973',
          rgb: '121, 153, 115',
          cmyk: '21, 0, 25, 40',
        },
        image: 'src/assets/images/clothes/dark-green-dress.png',
        reverse: true,
        key: 0,
      },
    ],
  },
  {
    key: 2,
    title: 'Damas',
    content: [
      {
        title: 'Vestido \nverde claro',
        description: 'Vestido médio com ou sem manga',
        alert: 'Evitar decotes e fendas muito grandes',
        colors: {
          name: 'green-light',
          hex: '#a2cc99',
          rgb: '162, 204, 153',
          cmyk: '21, 0, 25, 20',
        },
        image: 'src/assets/images/clothes/light-green-dress.png',
        reverse: false,
        key: 0,
      },
    ],
  },
])
