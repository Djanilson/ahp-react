export const fetchCriteria = () =>
    Promise.resolve([
      {
        id: 1,
        name: '[1] Comida',
        type: 'select'
      },
      {
        id: 2,
        name: '[2] Bebida',
        type: 'number'
      },
      {
        id: 3,
        name: '[3] Pagamento',
        type: 'number'
      },
      {
        id: 4,
        name: '[4] Atendimento',
        type: 'number'
      },
      {
        id: 5,
        name: '[5] Ambiente',
        type: 'number'
      },
      /*{
        id: 6,
        name: 'Participação em eventos, congressos, exposições e feiras',
        type: 'number'
      },
      {
        id: 7,
        name: 'Organização de eventos, congressos, exposições e feiras',
        type: 'number'
      },*/
    ])
