const wrapper = require('./oc-require');

describe('oc-require', () => {
  const head = { load: jest.fn((url, callback) => { callback(); }) };
  const $window = { we: { love: 'oc' } };
  const url = 'https://mock.url/dep.min.js';
  const callback = jest.fn();

  beforeEach(() => {
    callback.mockReset();
  });

  test('when dep doesn\'t need to be loaded, callback receives dep', async () => {
    const method = wrapper(undefined, $window);

    const nameSpace = 'we';
    await method(nameSpace, undefined, callback);

    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls).toMatchSnapshot();
  });

  test('when nameSpace undefined, callback receives undefined', async () => {
    const method = wrapper(head, undefined);

    await method(url, callback);

    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls).toMatchSnapshot();
  });

  test('when nameSpace not undefined and matches, callback receives dep', async () => {
    const method = wrapper(head, $window);

    await method('we', url, callback);

    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls).toMatchSnapshot();
  });

  test('when nameSpace not undefined but doesn\'t match, callback receives undefined', async () => {
    const method = wrapper(head, $window);

    await method('you', url, callback);

    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls).toMatchSnapshot();
  });
});
