import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Mis su nimi on?',
    },
    {
      type: 'number',
      name: 'age',
      message: 'Kui vana sa oled?',
    },
    {
      type: 'confirm',
      name: 'canProceed',
      message: 'Oled valmis jätkama?',
      default: true,
    },
    {
      type: 'list',
      name: 'theme',
      message: 'Vali üks teema.',
      choices: ['dark', 'light', 'colorful'],
    },
    {
      type: 'rawlist',
      name: 'beverage',
      message: 'Vali üks jook.',
      choices: ['Coffee', 'Tea', 'Water'],
    },
    {
      type: 'expand',
      name: 'fruit',
      message: 'Vali üks puuvili.',
      choices: [
        {
          key: 'a',
          name: 'Apple',
          value: 'apple',
        },
        {
          key: 'o',
          name: 'Orange',
          value: 'orange',
        },
        {
          key: 'p',
          name: 'Pear',
          value: 'pear',
        },
      ],
    },
    {
      type: 'checkbox',
      message: 'Vali või ära vali ühtegi (mul poh) toppingut enda pitsale.',
      name: 'toppings',
      choices: [
        new inquirer.Separator(' -----The Meats---- '),
        {
          name: 'Pepperoni',
          value: 'pepperoni',
        },
        {
          name: 'Ham',
          value: 'ham',
        },
        {
          name: 'Ground Meat',
          value: 'groundMeat',
        },
        {
          name: 'Bacon',
          value: 'bacon',
        },
        new inquirer.Separator(' ----The Cheeses---- '),
        {
          name: 'Mozzarella',
          value: 'mozzarella',
        },
        {
          name: 'Cheddar',
          value: 'cheddar',
        },
        {
          name: 'Parmesan',
          value: 'parmesan',
        },
      ],
    },
    {
      type: 'password',
      message: 'Sisesta oma parool.',
      name: 'password',
    },
    {
      type: 'editor',
      name: 'bio',
      value: 'bio',
      message: 'Kirjuta midagi enda kohta.',
    },
  ])
  .then((answers) => {
    console.log(answers);
  });