const kudos = require('./kudos');

test('test getKudosForUser', () => {
  expect(kudos.getKudosForUser(30)).toEqual(['GOOD', 'NICE']);
  expect(kudos.getKudosForUser(40)).toEqual(['GOOD', 'GOOD']);
  expect(kudos.getKudosForUser(100)).toEqual(['SUPER']);
});

test('test getKudosValueMessageForUser', () => {
  expect(kudos.getKudosValueMessageForUser(['GOOD', 'NICE'])).toEqual(
    'Você recebeu treze reais em retorno aos kudos GOOD, NICE!'
  );
  expect(kudos.getKudosValueMessageForUser(['GOOD', 'GOOD'])).toEqual(
    'Você recebeu dezesseis reais em retorno aos kudos GOOD, GOOD!'
  );
  expect(
    kudos.getKudosValueMessageForUser(['SUPER', 'GOOD', 'NICE', 'OK'])
  ).toEqual(
    'Você recebeu quarenta reais em retorno aos kudos SUPER, GOOD, NICE, OK!'
  );
});
