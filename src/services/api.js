export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: 'https://res.cloudinary.com/victorleandroof/image/upload/v1550933685/victor-leandro.png'
        },
        {
          id: 2,
          content: 'Criar post no blog',
          labels: ['#7159c1'],
          user: 'https://res.cloudinary.com/victorleandroof/image/upload/v1550933685/victor-leandro.png'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: 'https://res.cloudinary.com/victorleandroof/image/upload/v1550933685/victor-leandro.png'
        },
        {
          id: 4,
          content: 'Criar post no blog sobre react vs angular',
          labels: ['#54e1f7'],
          user: 'https://res.cloudinary.com/victorleandroof/image/upload/v1550933685/victor-leandro.png'
        },
        {
          id: 5,
          content: 'testes e deploy do blog',
          labels: ['#54e1f7'],
          user: 'https://res.cloudinary.com/victorleandroof/image/upload/v1550933685/victor-leandro.png'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Estudar react ',
          labels: [],
          user: 'https://res.cloudinary.com/victorleandroof/image/upload/v1550933685/victor-leandro.png'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 9,
          content: 'Ajustes no blog',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Estudar deploy e CI com React Native',
          labels: [],
        },
        {
          id: 12,
          content: 'Estudar testes e deploy ReactJS',
          labels: ['#54e1f7'],
        }
      ]
    },
  ];
}