const Like = require("../../model/like");
const { checkAuth } = require("../../utils/check-auth");

module.exports = {
  Mutation: {
    async like(_, { like: { postId, commentId } }, context) {
      const { req, res } = context;
      const { userId } = await checkAuth(req);

      //   if(!postId, )
    },
  },
};
//erp
//trello
//slack
//lighthouse
//google docs
//git flow
//cms
//trix editor
//base camp
