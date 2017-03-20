import makeModel from './make-model';
import image from './sample.image.json';
import video from './sample.video.json';

const scenarios = [image, video];

scenarios.forEach((scenario) => {
  test(`${scenario.media_type} to match snapshot`, () => {
    expect(makeModel(scenario)).toMatchSnapshot();
  });
});
