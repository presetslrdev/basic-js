module.exports = function createDreamTeam( members ) {
  return !Array.isArray(members) || typeof(members) !== 'object' ? false : members.filter(el => typeof el === 'string').map(el => el.replace(/\s+/g,'').toUpperCase().substring(0,1)).sort().join('');
};
