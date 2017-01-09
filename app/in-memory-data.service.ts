export class InMemoryDataService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    let movies = [
      { id: 11, name: 'Godfather' },
      { id: 12, name: 'The Green Mile' },
      { id: 13, name: 'Forest Gump' },
      { id: 14, name: 'Inception' },
      { id: 15, name: 'The Matrix' },
      { id: 16, name: 'Up' },
      { id: 17, name: 'City of God' },
      { id: 18, name: 'Terminal' },
      { id: 19, name: 'Se7en' },
      { id: 20, name: 'La La Land' }
    ];
    let books = [
      { id: 11, name: 'Mentored By A Millionare' },
      { id: 12, name: 'Lean Startup' },
      { id: 13, name: 'Business Of The 21st Century' },
      { id: 14, name: 'Rich Dad Poor Dad' },
      { id: 15, name: 'The Interen' },
      { id: 16, name: 'Google' },
      { id: 17, name: 'Simple' },
      { id: 18, name: 'JavaScript The Good Parts' },
      { id: 19, name: 'Four Hour Work Week' },
      { id: 20, name: 'How To Win Friends and Influence People' }
    ]
    return { heroes, movies, books };
  }
}
