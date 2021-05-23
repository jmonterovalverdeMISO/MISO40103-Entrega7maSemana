/// <reference types='cypress' />

const faker = require("faker");
class CreatePageAleatoryBoundariesData {
  //static generator = faker();

  static getBoundariesTestData() {
    let pagesList = [];
    faker.seed(0);
    console.log(faker);

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
      title: "",
      content: faker.random.alphaNumeric(100),
    };
    pagesList.push(titleMinValuePage);

    //Title
    const titlemaxValuePage = {
      scenarioName: "Title at maximum allowed",
      title: faker.random.alphaNumeric(2000),
      content: faker.random.alphaNumeric(100),
    };
    pagesList.push(titlemaxValuePage);

    //Title
    const titleAboveMaxValuePage = {
      scenarioName: "Title above maximum allowed (max + 1)",
      title: faker.random.alphaNumeric(2001),
      content: faker.random.alphaNumeric(100),
    };
    pagesList.push(titleAboveMaxValuePage);

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
      content: "",
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

  static getURLContentData() {
    let pagesList = [];
    faker.seed(0);
    console.log(faker);

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
export default CreatePageAleatoryBoundariesData;