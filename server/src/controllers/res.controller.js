const responseForError = (
  res,
  { statusCode = 500, message = "something went wrong" }
) => {
  return res.status(statusCode).json({ pass: false, message: message });
};

const responseForSuccess = (
  res,
  { statusCode = 200, message = "all ok", payload = {} }
) => {
  return res.status(statusCode).json({ pass: true, message: message, payload });
};

module.exports = { responseForError, responseForSuccess };