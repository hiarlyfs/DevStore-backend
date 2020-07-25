import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('products').insert([
    {
      name: 'Intellij',
      category: 'tools',
      price: 150,
      image: 'ferramentas/intellij.jpg'
    },
    {
      name: 'PyCharm',
      category: 'tools',
      price: 100,
      image: 'ferramentas/pycharm.png'
    },
    {
      name: 'VsCode',
      category: 'tools',
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
      image: 'frameworks/vue.png'
    },

    {
      name: 'Java',
      category: 'languages',
      price: 200,
      image: 'linguagens/logoJava.jpg'
    },
    {
      name: 'Javascript',
      category: 'languages',
      price: 40,
      image: 'linguagens/logoJavascript.png'
    },
    {
      name: 'PHP',
      category: 'languages',
      price: 200,
      image: 'linguagens/logoPhp.png'
    },
    {
      name: 'Python',
      category: 'languages',
      price: 10,
      image: 'linguagens/logoPython.png'
    }
  ])
}
