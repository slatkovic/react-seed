function handleIndexRequest(req, res) {
  res.render('index');
}

module.exports = {
  handleIndexRequest: handleIndexRequest
};
