import moment from 'moment';
import { data } from './server';

const now = 1487830758201; // 2017-02-22
Date.now = jest.fn(() => now);

const scenarios = [
  {
    start: '2016-02-22',
    end: '2017-02-22',
    timeago: 'a year ago'
  },
  {
    start: '2017-02-21',
    end: '2017-02-22',
    timeago: 'a day ago'
  },
  {
    start: '2017-02-20',
    end: '2017-02-22',
    timeago: '2 days ago'
  },
  {
    start: '2016-11-22',
    end: '2017-02-22',
    timeago: '3 months ago'
  },
  {
    start: '2015-08-17',
    timeago: '2 years ago'
  }
];

scenarios.forEach((scenario) => {
  test(`when? "${scenario.timeago}"`, () => {
    const context = { params: { start: scenario.start, end: scenario.end } };

    data(context, (error, model) => {
      expect(model.timeago).toBe(scenario.timeago);
    });
  });
});

test('w/ "end"', () => {
  const context = { params: { start: '2017-01-22' } };

  data(context, (error, model) => {
    expect(model).toMatchSnapshot();
  });
});

test('w/o "end"', () => {
  const context = { params: { start: '2017-01-22', end: moment() } };

  data(context, (error, model) => {
    expect(model).toMatchSnapshot();
  });
});
