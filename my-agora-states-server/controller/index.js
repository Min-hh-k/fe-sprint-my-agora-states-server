const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const list = discussionsData.filter((data) => {
      //req.params.id가 string 형태로 들어온다. Number로 변환
      return data.id === Number(id);
    });
    return list.length !== 0
      ? res.status(200).json(list[0])
      : res.status(404).json("??");
  },
};

module.exports = {
  discussionsController,
};
