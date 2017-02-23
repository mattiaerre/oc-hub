import moment from 'moment';

export const data = (context, callback) => { // eslint-disable-line import/prefer-default-export
  // https://momentjs.com/docs/#/displaying/fromnow/
  // https://momentjs.com/docs/#/displaying/from/
  const start = context.params.start;
  const end = context.params.end;

  const timeago = end ? moment(start).from(moment(end)) : moment(start).fromNow();

  return callback(null, { timeago });
};
