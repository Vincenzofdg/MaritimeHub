const oktbMain = () => {
  const SHIP = "MAERSK LEON";

  return {
      header: [
      "PROCEDURE FOR CREW MEMBER",
      "ON ARRIVAL TO BRAZIL (IMIMIGRATION) ONLY SUBMIT SID. OTHERWISE, YOUR MAY NOT ENTER",
      "THE COUNTRY AND / OR SHIP ON YOUR GOOD SHIP.",
      "REQUEST THE MARITIME COD 130/11."
    ],
    title: [
      "OK TO BOARD/INVITATION LETTER",
      "OK TO BOARD / CARTA DE CONVITE"
    ],
    textBlock: [
      {
        title: "TO WHOM IT MAY CONCERN",
        content: `This Is To Certify That Our Office At Port Of Santos / Brazil Agent For ${SHIP} will 
          provide assistance and clearance with Brazilian Immigration and Customs as well and Transportation 
          to the Following person:`
      },
      {
        title: "A QUEM POSSA INTERESSAR",
        content: `Isto é para certificar que nosso escritório no Porto de Santos / Agentes do Brasil para o navio
          ${SHIP} Providenciaremos assistência e liberação junto à Imigração brasileira e
          Alfândega assim como transporte para a(s) seguinte(s) pessoa(s):`
      }
    ]
  }
}


export default oktbMain;

