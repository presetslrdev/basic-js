module.exports = function createDreamTeam( members ) {
  throw 'Not implemented';
  return !Array.isArray(members) || typeof(members) !== 'object' ? false : members.filter(el => typeof el === 'string').sort.map(el => el.slice(1)).join('');
};
