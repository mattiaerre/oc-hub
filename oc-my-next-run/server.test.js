import { data } from './server';

const scenarios = [{ id: '2017-03-19' }, { id: '2017-04-09' }];

scenarios.forEach((scenario) => {
  describe(scenario.id, () => {
    test('viewModel to match snapshot', () => {
      const context = { params: scenario, staticPath: '/' };
      data(context, (error, viewModel) => {
        expect(viewModel).toMatchSnapshot();
      });
    });
  });
});
