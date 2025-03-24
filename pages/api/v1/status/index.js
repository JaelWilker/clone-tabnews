function status(request, response) {
  response
    .status(200)
    .json({
      chave:
        "Quem é minha Harpista mais linda desse mundo em em, quem é minha malevolazinhameudeus",
    });
}

export default status;
