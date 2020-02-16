module.exports = function createDreamTeam( members ) {
  throw 'Not implemented';
  return !Array.isArray(members) || typeof(members) !== 'object' ? false : members.filter(el => typeof el === 'string').map(el => el.replace(/\s+/g,'')).sort().map(el => el.substring(0,1)).join('').toUpperCase();
};
