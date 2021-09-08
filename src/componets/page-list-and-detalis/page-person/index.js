import carcassPage from "../hoc-carcass-page";
import SwapiServer from "../../../services";
import './index.css';


const { getPerson, getAllPeople } = new SwapiServer();

const arrSeting = [
    {
        field: 'gender',
        label: 'Gender'
    },
    {
        field: 'eyeColor',
        label: 'Eye-Color'
    }
];

const objSeting = {
    getItem: getPerson,
    getListItem: getAllPeople
}


const PagePerson = carcassPage(arrSeting, objSeting);

export default PagePerson;


