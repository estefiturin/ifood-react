import routerAdmin from "./routes.admin";
import routerClient from "./routes.client";
import { Error404 } from "../pages/Error404";
import { BasicLayout } from "../layouts";

//concatenamos el valor de cada uno en una constante ya que devuelven una array con objetos
//const routes = [routerAdmin, routerClient];
//con lo anterior conseguimos: [[{}][{}]]
//pero nosotros queremos: [{},{}]   , entonces:

//esto devuelvo una array de objetos, es decir una concatenacion
const routes = [...routerAdmin,...routerClient, 
    {
            layout: BasicLayout,
            component: Error404,
    },
];

export default routes; 