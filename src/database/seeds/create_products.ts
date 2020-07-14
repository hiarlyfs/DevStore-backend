import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('products').insert([
    {
      name: 'Intellij',
      category: 'Ferramentas',
      price: 150,
      image: 'ferramentas/intellij.jpg'
    },
    {
      name: 'PyCharm',
      category: 'Ferramentas',
      price: 100,
      image: 'ferramentas/pycharm.png'
    },
    {
      name: 'VsCode',
      category: 'Ferramentas',
      price: 90,
      image: 'ferramentas/vscode.png'
    },

    {
      name: 'React',
      category: 'frameworks',
      price: 80,
      image: 'frameworks/react.png'
    },
    {
      name: 'Springboot',
      category: 'frameworks',
      price: 60,
      image: 'frameworks/springboot.png'
    },
    {
      name: 'Vue',
      category: 'frameworks',
      price: 80,
      image: 'frameworks/vuw.png'
    },

    {
      name: 'Java',
      category: 'linguagens',
      price: 200,
      image: 'linguagens/logoJava.jpg'
    },
    {
      name: 'Javascript',
      category: 'linguagens',
      price: 40,
      image: 'linguagens/logoJavascript.png'
    },
    {
      name: 'PHP',
      category: 'linguagens',
      price: 200,
      image: 'linguagens/logoPhp.png'
    },
    {
      name: 'Python',
      category: 'linguagens',
      price: 10,
      image: 'linguagens/logoPython.png'
    }
  ])
}
