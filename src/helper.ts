export interface IProyect {
  id: number
  src: string
  title: string
  description: string
  tecnologies: Array<string>
}

const proyects: Array<IProyect> = [
  {
    id: 1,
    src: "/proyects/up-task.png",
    description: "A application Full-stack where you can fix task that you wanto to do, in here I applicated mern concepts joins front and backend intersection.",
    tecnologies: ["node.js", "nextjs", "merm-stack", "docker", "mongoose", "authentication", "jwt", "express"],
    title: "Up Task"
  },
  {
    id: 2,
    src: "/proyects/coffe.png",
    description: "A complete application full stack in where i can render several imagenes, Similar a e-commer site, you can buy something and add to a card to pay later",
    tecnologies: ["node.js", "nextjs", "merm-stack", "docker", "mongoose", "authentication", "jwt", "express"],
    title: "Coffe e-commerse"
  }
]

export default proyects