import faker from 'faker';

class RandomPool {
  constructor() {
    faker.seed(Date.now());
  }

  getBoundariesTestData() {
    let pagesList = [];

    //Title
    const titleMinValuePage = {
      scenarioName: "Title at minimum allowed (1 character)",
      title: faker.random.alphaNumeric(1),
      content: faker.random.alphaNumeric(100),
    };
    pagesList.push(titleMinValuePage);

    //Title
    const titlebelowMinValuePage = {
      scenarioName: "Title below minimum (empty)",
      title: " ",
      content: faker.random.alphaNumeric(100),
    };
    pagesList.push(titlebelowMinValuePage);

    //Title
    const titlemaxValuePage = {
      scenarioName: "Title at maximum allowed in DB (2000)",
      title: faker.random.alphaNumeric(2000),
      content: faker.random.alphaNumeric(100),
    };
    pagesList.push(titlemaxValuePage);

    //Title
    const titleAboveMaxValuePage = {
      scenarioName: "Title above maximum allowed in DB (2000 + 1)",
      title: faker.random.alphaNumeric(2001),
      content: faker.random.alphaNumeric(100),
    };
    pagesList.push(titleAboveMaxValuePage);

    //Title
    const titlemaxValuePage2 = {
      scenarioName: "Title at maximum allowed in UI (255)",
      title: faker.random.alphaNumeric(255),
      content: faker.random.alphaNumeric(100),
    };
    pagesList.push(titlemaxValuePage2);

    //Title
    const titleAboveMaxValuePage2 = {
      scenarioName: "Title above maximum allowed in UI (255 + 1)",
      title: faker.random.alphaNumeric(256),
      content: faker.random.alphaNumeric(100),
    };
    pagesList.push(titleAboveMaxValuePage2);

    //Content
    const contentMinValuePage = {
      scenarioName: "Content at minimum allowed (1 character)",
      title: faker.random.alphaNumeric(100),
      content: faker.random.alphaNumeric(1),
    };
    pagesList.push(contentMinValuePage);

    //Content
    const contentBelowMinValuePage = {
      scenarioName: "Content below minimum (empty)",
      title: faker.random.alphaNumeric(100),
      content: " ",
    };
    pagesList.push(contentMinValuePage);

    //Content
    const contentmaxValuePage = {
      scenarioName:
        "Content average page number of characters as it doesn´t have a limit",
      title: faker.random.alphaNumeric(100),
      content: faker.random.alphaNumeric(10000),
    };
    pagesList.push(contentmaxValuePage);

    return pagesList;
  }

  getURLContentData() {
    let pagesList = [];

    //Content
    const contentURLTest = {
      scenarioName: "Agregando URL a contenido",
      title: faker.random.alphaNumeric(10),
      content: faker.internet.url()
    };
    pagesList.push(contentURLTest);

    //Title
    const contentWithImage = {
      scenarioName: "Agregando URL de Imagen a Contenido",
      title: faker.random.alphaNumeric(10),
      content: faker.image.imageUrl(),
    };
    pagesList.push(contentWithImage);

    //Title
    const contentWithImage2 = {
        scenarioName: "Agregando URL de Imagen a Contenido",
        title: faker.random.alphaNumeric(10),
        content: faker.image.imageUrl(),
    };
    pagesList.push(contentWithImage2);

    return pagesList;
  }

}
export default RandomPool;
