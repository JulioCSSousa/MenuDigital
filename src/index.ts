import { AppDataSource } from "./data-source"
import { Product } from "./entity/Product"
import { Category } from "./entity/Category"
import { v4 as uuidv4 } from 'uuid';
import { SizeInfo } from "./entity/SizeInfo";
import { Additional } from "./entity/Additional";

AppDataSource.initialize().then(async () => {

    const myuuid = uuidv4();
    const uuidGenerate = (() => myuuid);

    console.log("Inserting a new user into the database...");
    
    
    const product = new Product();
    const category = new Category();
    category.name = 'pizzas';

    product.id = uuidGenerate();
    product.name = "Pizza de mussarela";
    product.flavor = 'mussarela'
    product.description = "";
    product.isSale = true
    product.image = 'sdklnasldkalskdaskdjalksjal';
    product.category = category;


    const size = new SizeInfo();
    size.observation = 'sei não num sei que la';
    size.previewsAmount = 50.0;
    size.realAmount = 45.50;
    size.product = product;

    
    const additional = new Additional();
    additional.productId = product.id;
    additional.combineAmount = true;
    additional.product = product;
    additional.combineWith = [{
        type: 'sabor',
        options: 'pizza',
        mainMenu: true,
        sizeRestriction: [{
            size: 'média',
            min: 1,
            max: 2
        }]    
    }
]
await AppDataSource.manager.save(product);
await AppDataSource.manager.save(size);
await AppDataSource.manager.save(additional);
await AppDataSource.manager.save(category);



    console.log("Saved a new user with id: " + product.id);
    console.log("Saved a new user with id: " + size.itemSizeId);
    console.log("Saved a new user with id: " + additional.id);
    console.log("Saved a new user with id: " + category.id);

    console.log("Loading users from the database...");
    const users1 = await AppDataSource.manager.find(Product);
    const users2 = await AppDataSource.manager.find(SizeInfo);
    const users3 = await AppDataSource.manager.find(Additional);
    const users4 = await AppDataSource.manager.find(Category);
    console.log("Loaded users: ", users1,users2,users3,users4);

    console.log("Here you can setup and run express / fastify / any other framework.");

}).catch(error => console.log(error));
