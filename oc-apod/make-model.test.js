import makeModel from './make-model';
import video from './sample.video.json';

const scenarios = [video]; // todo: add image sample

scenarios.forEach((scenario) => {
  test(`${scenario.media_type} to match snapshot`, () => {
    expect(makeModel(scenario)).toMatchSnapshot();
  });
});
