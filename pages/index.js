function status(request, response) {
  response.status(200).json({ chave: "hey" });
}

export default status;
