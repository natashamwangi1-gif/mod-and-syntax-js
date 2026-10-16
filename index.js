require(`datejs`);

function combineUsers(...args){
 const combineObject={
users: []
 };
 for(const individualArray of args){
  combineObject.users=[...combineObject.users,...individualArray];
 }
 combineObject.merge_date=Date.today().toString('M/d/yyyy');
 return combineObject;
}



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};