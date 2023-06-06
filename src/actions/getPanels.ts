import prisma from "src/libs/prismadb";

export default async function getPanels() {
  try {
    const panels = await prisma.panel.findMany();
    return panels;
  } catch (e) {
    console.log(e);
  }
}
