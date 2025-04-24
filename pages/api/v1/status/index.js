import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 AS result;");
  console.log(result.rows);
  response.status(200).json({
    chave:
      "Quem é minha Harpista mais linda desse mundo em em, quem é minha malevolazinhameudeus",
  });
}

export default status;
