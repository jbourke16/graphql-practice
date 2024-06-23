let games = [
    {id: '1', title: 'Final Fantasy 7 Remake', platform: ['PS5']},
    {id: '2', title: 'Final Fantasy 7 Rebirth', platform: ['PS5']},
    {id: '3', title: 'Baldurs Gate 3', platform: ['PC', 'PS5', 'XBox']},
    {id: '4', title: 'Zelda, Breath of the Wild', platform: ['Nintendo Switch']},
    {id: '5', title: 'Zelda, Tears of the Kingdom', platform: ['Nintendo Switch']},
    {id: '6', title: 'Smash Bros', platform: ['Nintendo Switch']},
    {id: '7', title: 'Horizon Zero Dawn', platform: ['PC', 'PS5']},
    {id: '8', title: 'Horizon: Forbidden West', platform: ['PC', 'PS5']},
    {id: '9', title: 'Hades', platform: ['PC', 'PS5', 'Nintendo Switch', 'XBox']}
]

let authors = [
    {id: '1', name: 'jeynnova', verified: true},
    {id: '2', name: 'ayeeelina', verified: true},
    {id: '3', name: 'raffytaffy', verified: true},
    {id: '4', name: 'eggman', verified: false}
]

let reviews = [
    {id: '1', rating: 9, content: 'The remake no one asked for but everyone deserved.', author_id: '1', game_id: '1'},
    {id: '2', rating: 6, content: 'Mid game.', author_id: '3', game_id: '1'},
    {id: '3', rating: 10, content: 'I did not think the franchise or remakes could get any better. I was proved wrong.', author_id: '1', game_id: '2'},
    {id: '4', rating: 10, content: 'This game rewired my brain chemistry. I want to forget it and replay it.', author_id: '1', game_id: '3'},
    {id: '5', rating: 9, content: '500 plus hours is not enough. I need it injected directly into my bloodstream.', author_id: '2', game_id: '3'},
    {id: '6', rating: 9, content: 'If you see a video online of a Korok being ejected into space, that was definitely me.', author_id: '3', game_id: '5'},
    {id: '7', rating: 8, content: 'This game is strangely addicting. The art and characters rock.', author_id: '4', game_id: '9'},
    {id: '8', rating: 7, content: 'Graphics and storyline are out of this world. Game mechanics seem to mimic other games though.', author_id: '1', game_id: '7'},
    {id: '9', rating: 9, content: 'The sequel was just what we needed to kick this story into high gear. Amazing actors as well.', author_id: '3', game_id: '8'},
    {id: '10', rating: 7, content: 'My friends and I always have a great time beating the poop out of each other. The items are also ridiculous yet awesome.', author_id: '2', game_id: '6'}

]

export default { games, authors, reviews }