import { data } from './server';

test('viewModel to match snapshot', () => {
  const context = { params: { id: '2017-03-19' }, staticPath: '/' };
  data(context, (error, viewModel) => {
    expect(viewModel).toMatchSnapshot();
  });
});
