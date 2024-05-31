const responseForError = (
  res,
  { status = 500, message = "something went wrong" }
) => {
  return res.status(status).json({ pass: false, message: message });
};

const responseForSuccess = (
  res,
  { status = 200, message = "all ok", payload = {} }
) => {
  return res.status(status).json({ pass: true, message: message, payload });
};

module.exporsts = { responseForError, responseForSuccess };
