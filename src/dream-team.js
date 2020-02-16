module.exports = function createDreamTeam( members ) {
  throw 'Not implemented';
  return !Array.isArray(members) ? members.filter(el => typeof el === 'string').sort.map(el => el.slice(1)).join('') : false;
};
